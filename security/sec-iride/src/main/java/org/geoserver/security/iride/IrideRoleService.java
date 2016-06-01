/*
 *    GeoTools - The Open Source Java GIS Toolkit
 *    http://geotools.org
 *
 *    (C) 2002-2011, Open Source Geospatial Foundation (OSGeo)
 *
 *    This library is free software; you can redistribute it and/or
 *    modify it under the terms of the GNU Lesser General Public
 *    License as published by the Free Software Foundation;
 *    version 2.1 of the License.
 *
 *    This library is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *    Lesser General Public License for more details.
 */
package org.geoserver.security.iride;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.Properties;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.StringRequestEntity;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.geoserver.platform.GeoServerExtensions;
import org.geoserver.security.GeoServerRoleService;
import org.geoserver.security.GeoServerRoleStore;
import org.geoserver.security.config.SecurityNamedServiceConfig;
import org.geoserver.security.event.RoleLoadedListener;
import org.geoserver.security.impl.AbstractGeoServerSecurityService;
import org.geoserver.security.impl.GeoServerRole;
import org.geotools.util.logging.Logging;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.ImmutableSortedSet;

/**
 * <code>GeoServer</code> user group and roles security service, backed by  <code>CSI</code> <code>IRIDE</code> service.
 *
 * @author "Mauro Bartolomeoli - mauro.bartolomeoli@geo-solutions.it"
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideRoleService extends AbstractGeoServerSecurityService implements GeoServerRoleService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideRoleService.class.getPackage().getName());

    /**
     * Params sent along with <code>IRIDE</code> <code>findRuoliForPersonaInApplication</code> <code>SOAP</code> request.
     */
    private static final String[] REQUEST_PARAMS = new String[] {
        "CODICEFISCALE",
        "NOME",
        "COGNOME",
        "PROVIDER",
        "TIMESTAMP",
        "LIVELLOAUTH",
        "MAC"
    };

    /**
     * Regular Expression to extract role's relevant informations from the
     * <code>IRIDE</code> <code>findRuoliForPersonaInApplication</code> <code>SOAP</code> response.
     */
    private static final Pattern ROLE_REGEX = Pattern.compile("<codiceRuolo[^>]*?>\\s*(.*?)\\s*<\\/codiceRuolo>", Pattern.CASE_INSENSITIVE);

    /**
     * Parse an <code>IRIDE</code> server <code>URL</code>,
     * looking for a property name placeholder (<code>${...}</code>).<p>
     * If found, the property value will be retrieved from looking for the property name
     * in the internallly cached <code>Spring</code> application context.
     *
     * @param url <code>IRIDE</code> server <code>URL</code>
     * @return parsed <code>IRIDE</code> server <code>URL</code>
     */
    private static String parseServerURL(String url) {
        if (url != null && url.startsWith("${") && url.endsWith("}")) {
            url = GeoServerExtensions.getProperty(url.substring(2, url.length() - 1));
        }

        return url;
    }

    /**
     * <code>IRIDE</code> server <code>URL</code>.
     */
    private String serverURL;

    /**
     * Application name requesting <code>IRIDE</code> service.
     *
     * @todo should be set dynamically at runtime
     */
    private String applicationName;

    /**
     * Admin role.
     * Used for both <code>admin role name</code> and <code>group admin role name</code>.
     */
    private String adminRole;

    private HttpClient httpClient = new HttpClient();
    private HttpConnectionManagerParams params = new HttpConnectionManagerParams();

    /**
     * Logging level: if not already defined (<code>{@link Logger#getLevel()} == null</code>) it defaults to {@link Level#INFO}.
     */
    private final Level logLevel = LOGGER.getLevel() == null ? Level.INFO : LOGGER.getLevel();

    /**
     * @param httpClient the httpClient to set
     */
    public void setHttpClient(HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    /**
     * @return the httpClient
     */
    public HttpClient getHttpClient() {
        return this.httpClient;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#initializeFromConfig(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public void initializeFromConfig(SecurityNamedServiceConfig config) throws IOException {
        LOGGER.log(this.logLevel, "Initializing {0}, with configuration object: {1}", new Object[] { this.getClass().getSimpleName(), config });

        this.name = config.getName();

        if (config instanceof IrideSecurityServiceConfig) {
            final IrideSecurityServiceConfig irideCfg = (IrideSecurityServiceConfig) config;

            this.serverURL       = parseServerURL(irideCfg.getServerURL());
            this.applicationName = irideCfg.getApplicationName();
            this.adminRole       = irideCfg.getAdminRole();

            this.params.setSoTimeout(30000);
            this.params.setConnectionTimeout(30000);

            final MultiThreadedHttpConnectionManager manager = new MultiThreadedHttpConnectionManager();
            manager.setParams(this.params);

            this.httpClient.setHttpConnectionManager(manager);
        }
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.AbstractGeoServerSecurityService#canCreateStore()
     */
    @Override
    public boolean canCreateStore() {
        return false;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getGroupNamesForRole(org.geoserver.security.impl.GeoServerRole)
     */
    /**
     * Returns an immutable empty {@link ImmutableSortedSet} instance.
     */
    @Override
    public SortedSet<String> getGroupNamesForRole(GeoServerRole role) throws IOException {
        return ImmutableSortedSet.of();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getUserNamesForRole(org.geoserver.security.impl.GeoServerRole)
     */
    /**
     * Returns an immutable empty {@link ImmutableSortedSet} instance.
     */
    @Override
    public SortedSet<String> getUserNamesForRole(GeoServerRole role) throws IOException {
        return ImmutableSortedSet.of();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getRolesForUser(java.lang.String)
     */
    @Override
    public SortedSet<GeoServerRole> getRolesForUser(String username) throws IOException {
        TreeSet<GeoServerRole> roles = new TreeSet<GeoServerRole>();
        String requestXml = getServiceRequestXml(username);
        String responseXml = callWebService(requestXml).replace("\\r", "").replace("\\n", "");

        Matcher m = ROLE_REGEX.matcher(responseXml);
        while(m.find()) {
            String roleName = m.group(1);
            roles.add(createRoleObject(roleName));
            LOGGER.info("Added role " + roleName + " from Iride to " + username);
        }
        return roles;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getUserNamesForRole(org.geoserver.security.impl.GeoServerRole)
     */
    /**
     * Returns an immutable empty {@link ImmutableSortedSet} instance.
     */
    @Override
    public SortedSet<GeoServerRole> getRolesForGroup(String groupname) throws IOException {
        return ImmutableSortedSet.of();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getUserNamesForRole(org.geoserver.security.impl.GeoServerRole)
     */
    /**
     * Returns an immutable empty {@link ImmutableSortedSet} instance.
     */
    @Override
    public SortedSet<GeoServerRole> getRoles() throws IOException {
        return ImmutableSortedSet.of();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getUserNamesForRole(org.geoserver.security.impl.GeoServerRole)
     */
    /**
     * Returns an immutable empty {@link ImmutableMap} instance.
     */
    @Override
    public Map<String, String> getParentMappings() throws IOException {
        return ImmutableMap.of();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#createRoleObject(java.lang.String)
     */
    @Override
    public GeoServerRole createRoleObject(String role) throws IOException {
        return new GeoServerRole(role);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getParentRole(org.geoserver.security.impl.GeoServerRole)
     */
    @Override
    public GeoServerRole getParentRole(GeoServerRole role) throws IOException {
        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getRoleByName(java.lang.String)
     */
    @Override
    public GeoServerRole getRoleByName(String role) throws IOException {
        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#load()
     */
    @Override
    public void load() throws IOException {
        /* NOP */
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#personalizeRoleParams(java.lang.String, java.util.Properties, java.lang.String, java.util.Properties)
     */
    @Override
    public Properties personalizeRoleParams(String roleName, Properties roleParams, String userName, Properties userProps) throws IOException {
        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getAdminRole()
     */
    @Override
    public GeoServerRole getAdminRole() {
        try {
            return this.createRoleObject(this.adminRole);
        } catch (IOException e) {
            LOGGER.log(Level.WARNING, e.getMessage(), e);

            return null;
        }
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getGroupAdminRole()
     */
    /**
     * @see {@link #getAdminRole()}
     */
    @Override
    public GeoServerRole getGroupAdminRole() {
        return this.getAdminRole();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#getRoleCount()
     */
    @Override
    public int getRoleCount() throws IOException {
        return 0;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#createStore()
     */
    @Override
    public GeoServerRoleStore createStore() throws IOException {
        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#registerRoleLoadedListener(org.geoserver.security.event.RoleLoadedListener)
     */
    @Override
    public void registerRoleLoadedListener(RoleLoadedListener listener) {
        /* NOP */
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerRoleService#unregisterRoleLoadedListener(org.geoserver.security.event.RoleLoadedListener)
     */
    @Override
    public void unregisterRoleLoadedListener(RoleLoadedListener listener) {
        /* NOP */
    }

    /**
     * @param requestXml
     * @return
     * @throws IOException
     * @throws HttpException
     */
    private String callWebService(final String requestXml) throws HttpException, IOException {
        final HttpMethod post = this.createHttpMethod(requestXml);
        final Header header = new Header();
        header.setName("Content-type");
        header.setValue("text/xml; charset=UTF-8");
        post.setRequestHeader(header);
        header.setName("SOAPAction");
        header.setValue("dummy");
        post.setRequestHeader(header);

        LOGGER.info("Request sent to Iride: " + requestXml);

        try {
            final int status = this.httpClient.executeMethod(post);
            if (status == 200) {
                final String responseXml = post.getResponseBodyAsString();

                LOGGER.info("Response received from Iride: " + responseXml);

                return responseXml;
            } else {
                LOGGER.info("Got error from Iride: " + status);

                return "";
                /*throw new IOException("Error getting remote resources from " + serverURL
                        + ", http error " + status + ": " + post.getStatusText());*/
            }
        } finally {
            post.releaseConnection();
        }
    }

    /**
     * @param requestXml
     * @return
     * @throws UnsupportedEncodingException
     */
    protected HttpMethod createHttpMethod(String requestXml) throws UnsupportedEncodingException {
        final PostMethod post = new PostMethod(this.serverURL);
        post.setRequestEntity(new StringRequestEntity(requestXml, "text/xml", "UTF-8"));

        return post;
    }

    /**
     * @param username
     * @return
     * @throws IOException
     */
    private String getServiceRequestXml(String username) throws IOException {
        try (final BufferedReader reader = new BufferedReader(new InputStreamReader(
        	this.getClass().getResourceAsStream("/findRuoliForPersonaInApplication.xml"))
        )) {
        	final StringBuilder result = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(this.replaceParamsInRequest(line, username));
            }

            return result.toString();
        }
    }

    /**
     * @param line
     * @param usernameParts
     * @return
     */
    private String replaceParamsInRequest(String line, String username) {
        String[] usernameParts = username.split("\\/");
        // the last part of the username can use the separator as a valid char
        // so we append to the last element the "extra" parts, if they exist
        if (REQUEST_PARAMS.length < usernameParts.length) {
            for (int count = REQUEST_PARAMS.length; count < usernameParts.length; count++) {
                usernameParts[REQUEST_PARAMS.length - 1] += "/" +  usernameParts[count];
            }
        }

        int index = 0;
        String fullUser = "";
        for (final String param : REQUEST_PARAMS) {
            line = line.replace("%" + param + "%", usernameParts[index]);
            // full user is made of all parts except the last one
            if (index < REQUEST_PARAMS.length -1) {
                fullUser += usernameParts[index] + "/";
            }
            index++;
        }

        line = line.replace("%APPLICATION%", applicationName);
        line = line.replace("%FULLUSER%", username.substring(0, fullUser.lastIndexOf("/")));

        return line;
    }

}

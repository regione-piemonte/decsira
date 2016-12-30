/*
 *  CSI SIRA - Access Manager Security Module ("Rules Engine"), a GeoServer Secure Catalog Resource Access Manager plugin with which specify advanced rules evaluated to decide what the specified user can access.
 *  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package it.geosolutions.geoserver.sira.security.config;

import it.geosolutions.geoserver.sira.security.SiraAccessManager;

import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.catalog.Catalog;
import org.geoserver.catalog.NamespaceInfo;
import org.geoserver.config.util.SecureXStream;
import org.geoserver.platform.GeoServerExtensions;
import org.geoserver.platform.GeoServerResourceLoader;
import org.geoserver.platform.resource.Resource;
import org.geoserver.platform.resource.Resource.Type;
import org.geoserver.platform.resource.ResourceListener;
import org.geoserver.platform.resource.ResourceNotification;
import org.geotools.util.logging.Logging;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;
import org.xml.sax.helpers.NamespaceSupport;

import com.thoughtworks.xstream.XStream;

/**
 * A configurator bean to notify the provided {@link SiraAccessManager} instance of any configuration changes.
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class SiraAccessManagerConfigurator implements ApplicationListener<ContextClosedEvent> {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(SiraAccessManagerConfigurator.class);

    /**
     * SiraAccessManagerConfiguration file path, relative to $GEOSERVER_DATA_DIR.
     */
    static final String CONFIG_FILE_PATH = "security/sira-access-manager.xml";

    /**
     * {@link XStream} instance.
     */
    XStream xstream;

    /**
     * The default configuration (lazily initialized).
     */
    SiraAccessManagerConfiguration defaultConfiguration;

    /**
     * The configuration file as a {@link Resource}.
     */
    Resource configFile;

    /**
     * Resource listener to trigger a configuration reload when the configuration file is updated.
     */
    ResourceListener listener = new ResourceListener() {

        /*
         * (non-Javadoc)
         * @see org.geoserver.platform.resource.ResourceListener#changed(org.geoserver.platform.resource.ResourceNotification)
         */
        @Override
        public void changed(ResourceNotification notify) {
            SiraAccessManagerConfigurator.this.loadConfiguration();
        }

    };

    /**
     * The namespace context to pass on to the configuration.
     */
    NamespaceSupport namespaceContext;

    /**
     * The access manager to manage.
     */
    SiraAccessManager accessManager;

    /**
     * The GeoServer catalog, used to build the namespace context
     * and providing access to meta information about the data served by GeoServer.
     */
    Catalog catalog;

    /**
     * Configures the given {@link SiraAccessManager} instance loading the configuration
     * and then starts a watcher to be notified of any changes to the configuration file.
     *
     * @param accessManager the pluggable access manager to manage
     * @param catalog the GeoServer catalog, used to build the namespace context
     *                and providing access to meta information about the data served by GeoServer
     */
    public SiraAccessManagerConfigurator(SiraAccessManager accessManager, Catalog catalog) {
        this.accessManager = accessManager;
        this.catalog       = catalog;

        this.xstream = buildXStream();

        final GeoServerResourceLoader loader = GeoServerExtensions.bean(GeoServerResourceLoader.class);
        this.configFile = loader.get(CONFIG_FILE_PATH);
        this.loadConfiguration();
        this.configFile.addListener(this.listener);
    }

    /**
     * Builds and configures the {@link XStream} used for de-serializing the configuration.
     *
     * @return a properly configured {@link XStream} instance
     */
    public static XStream buildXStream() {
        final XStream xstream = new SecureXStream();
        xstream.alias("Config", SiraAccessManagerConfiguration.class);
        xstream.alias("Rule", Rule.class);
        xstream.omitField(Rule.class, "index");
        xstream.alias("attribute", String.class);
        xstream.addImplicitCollection(Attributes.class, "defaultAttributes");
        xstream.addImplicitCollection(Attributes.Choose.class, "whenConditions");
        xstream.omitField(Attributes.Choose.class, "orderedWhenConditions");
        xstream.aliasField("otherwise", Attributes.Choose.class, "otherwiseCondition");
        xstream.alias("when", Attributes.Choose.When.class);
        xstream.omitField(Attributes.Choose.When.class, "index");
        xstream.addImplicitCollection(Attributes.Choose.When.class, "attributes");
        xstream.addImplicitCollection(Attributes.Choose.Otherwise.class, "attributes");
        xstream.allowTypes(new Class[] {
            SiraAccessManagerConfiguration.class,
            Rule.class,
            Attributes.class,
            Attributes.Choose.class,
            Attributes.Choose.When.class,
            Attributes.Choose.Otherwise.class,
        });

        return xstream;
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.context.ApplicationListener#onApplicationEvent(org.springframework.context.ApplicationEvent)
     */
    @Override
    public void onApplicationEvent(ContextClosedEvent event) {
        if (this.configFile != null) {
            this.configFile.removeListener(this.listener);
        }
    }

    /**
     * Loads the configuration from the default location.
     *
     * <p>
     * If no configuration file can be found, uses internal defaults (i.e. allow all access).
     * </p>
     */
    void loadConfiguration() {
        SiraAccessManagerConfiguration configuration = null;
        if (this.isConfigFileResource()) {
            LOGGER.log(Level.FINE, "Loading access manager configuration from file {}", this.configFile.name());
            try (final InputStream in = this.configFile.in()) {
                configuration = (SiraAccessManagerConfiguration) this.xstream.fromXML(in);
                if (! configuration.isValid()) {
                    LOGGER.log(Level.FINE, "SiraAccessManagerConfiguration loaded from file {} is invalid: using internal defaults", this.configFile.name());

                    configuration = null;
                }
            } catch (IOException e) {
                LOGGER.log(Level.SEVERE, "Error closing the input stream from the configuration file " + this.configFile.name(), e);
            }
        }

        if (configuration == null) {
            LOGGER.log(Level.INFO, "Could not find/load the configuration file, using internal defaults");

            this.buildDefaultConfiguration();
            configuration = this.defaultConfiguration;
        }

        // build namespace context from catalog and pass it to the configuration object
        this.buildNamespaceContext();
        configuration.setNamespaceContext(this.namespaceContext);

        // finally, assign the configuration object to the access manager
        this.accessManager.setConfiguration(configuration);
    }

    /**
     * Constructs a default configuration.
     */
    void buildDefaultConfiguration() {
        if (this.defaultConfiguration == null) {
            this.defaultConfiguration = new SiraAccessManagerConfiguration();
        }
    }

    /**
     * Constructs a {@link NamespaceSupport} instance declaring all the namespaces found in the catalog.
     */
    void buildNamespaceContext() {
        if (this.catalog == null) {
            if (LOGGER.isLoggable(Level.FINE)) {
                LOGGER.fine("Catalog bean is not available, namespace context cannot be built.");
            }

            return;
        }

        this.namespaceContext = new NamespaceSupport();
        for (final NamespaceInfo nsInfo: this.catalog.getNamespaces()) {
            this.namespaceContext.declarePrefix(nsInfo.getPrefix(), nsInfo.getURI());
        }
    }

    /**
     * Return {@code true} if {@link #configFile} type is {@link Type#RESOURCE},
     * {@code false} otherwise or if any error occurs reading the configuration file.
     *
     * @return {@code true} if {@link #configFile} type is {@link Type#RESOURCE},
     *         {@code false} otherwise or if any error occurs reading the configuration file
     */
    private boolean isConfigFileResource() {
        try {
            return this.configFile.getType() == Type.RESOURCE;
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error reading the configuration file " + this.configFile.name(), e);

            return false;
        }
    }

}

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
 * A configurator bean to notify the provided {@link SiraAccessManager} instance of configuration changes.
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
     * Configuration file path, relative to $GEOSERVER_DATA_DIR.
     */
    static final String CONFIG_FILE_PATH = "security/sira-access-manager.xml";

    XStream xstream;

    /** The default configuration (lazily initialized). */
    SiraAccessManagerConfiguration defaultConfiguration;

    /** The configuration file as a {@link Resource}. */
    Resource configFile;

    /** Resource listener to trigger a configuration reload when the configuration file is updated. */
    ResourceListener listener = new ResourceListener() {
        public void changed(ResourceNotification notify) {
            loadConfiguration();
        }
    };

    /** The namespace context to pass on to the configuration. */
    NamespaceSupport namespaceContext;

    /** The access manager to manage. */
    SiraAccessManager accessManager;

    /** The GeoServer catalog, used to build the namespace context. */
    Catalog catalog;

    /**
     * Creates a {@link SiraAcc} instance to manage the provided {@link PluggableAccessManager}, loads the configuration
     * and starts a watcher to be notified of changes to the configuration file.
     *
     * @param accessManager the pluggable access manager to manage
     */
    public SiraAccessManagerConfigurator(SiraAccessManager accessManager, Catalog catalog) {
        this.accessManager = accessManager;
        this.catalog = catalog;
        xstream = buildXStream();

        GeoServerResourceLoader loader = GeoServerExtensions.bean(GeoServerResourceLoader.class);
        configFile = loader.get(CONFIG_FILE_PATH);
        loadConfiguration();
        configFile.addListener(listener);
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
        try {
            if (configFile.getType() == Type.RESOURCE) {
                if (LOGGER.isLoggable(Level.FINE)) {
                    LOGGER.fine("Loading access manager configuration from file "
                            + configFile.name());
                }
                try (InputStream in = configFile.in()) {
                    configuration = (SiraAccessManagerConfiguration) xstream.fromXML(in);
                    if (!configuration.isValid()) {
                        if (LOGGER.isLoggable(Level.FINE)) {
                            LOGGER.fine("Configuration loaded from file " + configFile.name()
                                    + " is invalid: using internal defaults");
                        }
                        configuration = null;
                    }
                }
            }
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error reading the configuration file " + configFile.name(), e);
            configuration = null;
        }
        if (configuration == null) {
            LOGGER.log(Level.INFO,
                    "Could not find/load the configuration file, using internal defaults");
            buildDefaultConfiguration();
            configuration = defaultConfiguration;
        }
        // build namespace context from catalog and pass it to the configuration object
        buildNamespaceContext();
        configuration.setNamespaceContext(namespaceContext);
        accessManager.setConfiguration(configuration);
    }

    void buildDefaultConfiguration() {
        if (defaultConfiguration == null) {
            this.defaultConfiguration = new SiraAccessManagerConfiguration();
        }
    }

    /**
     * Constructs a {@link NamespaceSupport} instance declaring all the namespaces found in the catalog.
     */
    void buildNamespaceContext() {
        if (catalog == null) {
            if (LOGGER.isLoggable(Level.FINE)) {
                LOGGER.fine("Catalog bean is not available, namespace context cannot be built.");
            }
            return;
        }

        namespaceContext = new NamespaceSupport();
        for (NamespaceInfo nsInfo: catalog.getNamespaces()) {
            namespaceContext.declarePrefix(nsInfo.getPrefix(), nsInfo.getURI());
        }
    }

    /**
     * Builds and configures the {@link XStream} used for de-serializing the configuration.
     *
     * @return a properly configured {@link XStream} instance
     */
    public static XStream buildXStream() {
        XStream xstream = new SecureXStream();
        xstream.alias("Config", SiraAccessManagerConfiguration.class);
        xstream.alias("Rule", Rule.class);
        xstream.alias("attribute", String.class);
        xstream.allowTypes(new Class[] { SiraAccessManagerConfiguration.class, Rule.class });

        return xstream;
    }

    @Override
    public void onApplicationEvent(ContextClosedEvent event) {
        if (configFile != null) {
            configFile.removeListener(listener);
        }
    }

}

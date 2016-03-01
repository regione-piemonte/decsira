package it.geosolutions.geoserver.sira.security;

import it.geosolutions.geoserver.sira.security.config.Rule;
import it.geosolutions.geoserver.sira.security.config.SiraAccessManagerConfiguration;

import java.util.List;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.catalog.CatalogInfo;
import org.geoserver.catalog.CoverageInfo;
import org.geoserver.catalog.FeatureTypeInfo;
import org.geoserver.catalog.LayerGroupInfo;
import org.geoserver.catalog.LayerInfo;
import org.geoserver.catalog.Predicates;
import org.geoserver.catalog.ResourceInfo;
import org.geoserver.catalog.StyleInfo;
import org.geoserver.catalog.WorkspaceInfo;
import org.geoserver.platform.GeoServerExtensions;
import org.geoserver.security.CatalogMode;
import org.geoserver.security.CoverageAccessLimits;
import org.geoserver.security.DataAccessLimits;
import org.geoserver.security.GeoServerSecurityManager;
import org.geoserver.security.LayerGroupAccessLimits;
import org.geoserver.security.ResourceAccessManager;
import org.geoserver.security.StyleAccessLimits;
import org.geoserver.security.WorkspaceAccessLimits;
import org.geotools.filter.text.cql2.CQLException;
import org.geotools.util.logging.Logging;
import org.opengis.filter.Filter;
import org.opengis.filter.expression.PropertyName;
import org.springframework.security.core.Authentication;

public class SiraAccessManager implements ResourceAccessManager {

    private static final Logger LOGGER = Logging.getLogger(SiraAccessManager.class);

    /** Default catalog mode. */
    private static final CatalogMode DEFAULT_CATALOG_MODE = CatalogMode.HIDE;

    private ReentrantReadWriteLock configurationLock;

    /** Access manager configuration instance. */
    SiraAccessManagerConfiguration configuration;

    public SiraAccessManager() {
        this.configurationLock = new ReentrantReadWriteLock();
    }

    @Override
    public WorkspaceAccessLimits getAccessLimits(Authentication user, WorkspaceInfo workspace) {
        if (LOGGER.isLoggable(Level.FINE)) {
            LOGGER.log(Level.FINE, "Getting access limits for workspace {0}", workspace.getName());
        }
        if (isAdmin(user)) {
            LOGGER.log(Level.FINE, "Admin level access, returning "
                    + "full rights for workspace {0}", workspace.getName());
            return new WorkspaceAccessLimits(DEFAULT_CATALOG_MODE, true, true, true);
        }
        // TODO: workspace access rights are fixed (read-only access)
        return new WorkspaceAccessLimits(DEFAULT_CATALOG_MODE, true, false);
    }

    @Override
    public DataAccessLimits getAccessLimits(Authentication user, LayerInfo layer) {
        return getAccessLimits(user, layer.getResource());
    }

    @Override
    public DataAccessLimits getAccessLimits(Authentication user, ResourceInfo resource) {
        if (LOGGER.isLoggable(Level.FINE)) {
            LOGGER.log(Level.FINE, "Getting access limits for resource {0}", resource.getName());
        }

        if (isAdmin(user)) {
            // admin can do anything
            LOGGER.log(Level.FINE, "Admin level access, returning "
                    + "full rights for resource {0}", resource.getName());
            return null;
        }

        SiraAccessManagerConfiguration conf = getConfiguration();
        Rule bestMatchingRule = conf.findFirstMatchingRuleForResource(user, resource);

        return buildResourceAccessLimits(resource, bestMatchingRule);
    }

    /**
     * Instantiates the proper data access limits implementation, based on the resource type, and sets access limits according to the provided rule.
     * 
     * @param resource the resource being accessed
     * @param rule the access rule
     * @return data access limits for the specified resource
     */
    public DataAccessLimits buildResourceAccessLimits(ResourceInfo resource, Rule rule) {
        Filter accessFilter = null;
        try {
            accessFilter = rule.getFilter();
        } catch (CQLException e) {
            throw new IllegalArgumentException("Failed to parse access filter as ECQL", e);
        }
        if (LOGGER.isLoggable(Level.FINE)) {
            LOGGER.log(Level.FINE, "Filter {0} will be applied to resource {1}", new Object[] { accessFilter, resource.getName() });
        }

        // set read / write filters based on access mode
        Filter readFilter = null;
        Filter writeFilter = null;
        switch (rule.getAccessMode()) {
            case READ:
                readFilter = accessFilter;
                writeFilter = Filter.EXCLUDE;
                break;
            case WRITE:
            case ADMIN:
                readFilter = accessFilter;
                // use access filter also for write filter
                writeFilter = accessFilter;
                break;
        }

        // build concrete access limits object
        if (resource instanceof CoverageInfo) {
            return new CoverageAccessLimits(rule.getCatalogMode(), readFilter, null, null);
        } else if (resource instanceof FeatureTypeInfo) {
            // TODO: use readAttributes and writeAttributes where possible, which is likely to be more performant
            HidingAccessLimits limits = new HidingAccessLimits(rule.getCatalogMode(), null, readFilter, null, writeFilter);
            List<PropertyName> hiddenProperties = rule.getHiddenProperties();
            if (hiddenProperties.size() > 0) {
                if (LOGGER.isLoggable(Level.FINE)) {
                    LOGGER.log(Level.FINE, "Properties {0} will be removed from resource {1}", new Object[] { hiddenProperties, resource.getName() });
                }
                limits.getHiddenProperties().addAll(hiddenProperties);
            }
            return limits;
        } else {
            throw new IllegalArgumentException("Unexpected resource type: "
                    + resource.getClass().getName());
        }
    }

    @Override
    public StyleAccessLimits getAccessLimits(Authentication user, StyleInfo style) {
        LOGGER.fine("No limits on styles");
        return null;
    }

    @Override
    public LayerGroupAccessLimits getAccessLimits(Authentication user, LayerGroupInfo layerGroup) {
        LOGGER.fine("No limits on layer groups");
        return null;
    }

    @Override
    public Filter getSecurityFilter(Authentication user, Class<? extends CatalogInfo> clazz) {
        // TODO: verify this is correct
        return Predicates.acceptAll();
    }

    boolean isAdmin(Authentication user) {
        return GeoServerExtensions.bean(GeoServerSecurityManager.class)
                .checkAuthenticationForAdminRole(user);
    }

    /**
     * @return the access manager configuration
     */
    public SiraAccessManagerConfiguration getConfiguration() {
        configurationLock.readLock().lock();
        try {
            return configuration;
        } finally {
            configurationLock.readLock().unlock();
        }
    }

    /**
     * @param configuration the access manager configuration to set
     */
    public void setConfiguration(SiraAccessManagerConfiguration configuration) {
        configurationLock.writeLock().lock();
        try {
            this.configuration = configuration;
        } finally {
            configurationLock.writeLock().unlock();
        }
    }

}

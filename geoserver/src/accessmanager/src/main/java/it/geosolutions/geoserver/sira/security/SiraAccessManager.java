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
package it.geosolutions.geoserver.sira.security;

import it.geosolutions.geoserver.sira.security.config.Attributes.Choose;
import it.geosolutions.geoserver.sira.security.config.Rule;
import it.geosolutions.geoserver.sira.security.config.SiraAccessManagerConfiguration;
import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleEngine;
import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleHelper;

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
import org.geoserver.security.AccessMode;
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
import org.springframework.security.core.Authentication;

/**
 * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>: a <code>GeoServer</code> <a href="http://docs.geoserver.org/stable/en/user/security/layer.html">Secure Catalog</a> implementation.
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class SiraAccessManager implements ResourceAccessManager {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(SiraAccessManager.class);

    /**
     * Default catalog mode.
     */
    private static final CatalogMode DEFAULT_CATALOG_MODE = CatalogMode.HIDE;

    /**
     * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration
     * <a href="http://tutorials.jenkov.com/java-util-concurrent/readwritelock.html"><code>r/w</code> lock</a>.
     */
    private final ReentrantReadWriteLock configurationLock;

    /**
     * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration instance.
     */
    SiraAccessManagerConfiguration configuration;

    /**
     * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
     * <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine.
     */
    ExpressionRuleEngine expressionRuleEngine;

    /**
     * Constructor.
     */
    public SiraAccessManager() {
        this.configurationLock = new ReentrantReadWriteLock();
    }

    /**
     * Get the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration instance.
     *
     * @return the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration instance
     */
    public SiraAccessManagerConfiguration getConfiguration() {
        this.configurationLock.readLock().lock();
        try {
            return this.configuration;
        } finally {
            this.configurationLock.readLock().unlock();
        }
    }

    /**
     * Set the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration instance.
     *
     * @param configuration the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> configuration instance
     */
    public void setConfiguration(SiraAccessManagerConfiguration configuration) {
        this.configurationLock.writeLock().lock();
        try {
            this.configuration = configuration;
        } finally {
            this.configurationLock.writeLock().unlock();
        }
    }

    /**
     * Get the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
     * <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine.
     *
     * @return the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
     *         <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine
     */
    public ExpressionRuleEngine getExpressionRuleEngine() {
        if (this.expressionRuleEngine == null) {
            /*
             * NPE-safe: initialize a "default" expression engine, with no root object set and no function(s) registered.
             * Should never occur.
             */
            this.expressionRuleEngine = new ExpressionRuleEngine();
        }

        return expressionRuleEngine;
    }

    /**
     * Set the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
     * <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine.
     *
     * @param expressionRuleEngine the <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
     *        <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine
     */
    public void setExpressionRuleEngine(ExpressionRuleEngine expressionRuleEngine) {
        this.expressionRuleEngine = expressionRuleEngine;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getAccessLimits(org.springframework.security.core.Authentication, org.geoserver.catalog.WorkspaceInfo)
     */
    @Override
    public WorkspaceAccessLimits getAccessLimits(Authentication user, WorkspaceInfo workspace) {
        LOGGER.log(Level.FINE, "Getting access limits for workspace {0}", workspace.getName());
        if (this.isAdmin(user)) {
            LOGGER.log(Level.FINE, "Admin level access, returning full rights for workspace {0}", workspace.getName());

            return new WorkspaceAccessLimits(DEFAULT_CATALOG_MODE, true, true, true);
        }

        return new WorkspaceAccessLimits(DEFAULT_CATALOG_MODE, true, false);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getAccessLimits(org.springframework.security.core.Authentication, org.geoserver.catalog.LayerInfo)
     */
    @Override
    public DataAccessLimits getAccessLimits(Authentication user, LayerInfo layer) {
        return this.getAccessLimits(user, layer.getResource());
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getAccessLimits(org.springframework.security.core.Authentication, org.geoserver.catalog.ResourceInfo)
     */
    @Override
    public DataAccessLimits getAccessLimits(Authentication user, ResourceInfo resource) {
        LOGGER.log(Level.FINE, "Getting access limits for resource {0}", resource.getName());

        if (this.isAdmin(user)) {
            // admin can do anything
            LOGGER.log(Level.FINE, "Admin level access, returning full rights for resource {0}", resource.getName());

            return null;
        }

        final Rule firstMatchingRule = ExpressionRuleHelper.findFirstMatchingRule(
            user, resource,
            this.getConfiguration(),
            this.getExpressionRuleEngine()
        );

        return this.buildResourceAccessLimits(user, resource, firstMatchingRule);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getAccessLimits(org.springframework.security.core.Authentication, org.geoserver.catalog.StyleInfo)
     */
    @Override
    public StyleAccessLimits getAccessLimits(Authentication user, StyleInfo style) {
        LOGGER.fine("No limits on styles");

        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getAccessLimits(org.springframework.security.core.Authentication, org.geoserver.catalog.LayerGroupInfo)
     */
    @Override
    public LayerGroupAccessLimits getAccessLimits(Authentication user, LayerGroupInfo layerGroup) {
        LOGGER.fine("No limits on layer groups");

        return null;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.ResourceAccessManager#getSecurityFilter(org.springframework.security.core.Authentication, java.lang.Class)
     */
    @Override
    public Filter getSecurityFilter(Authentication user, Class<? extends CatalogInfo> clazz) {
        // TODO: verify this is correct
        return Predicates.acceptAll();
    }

    /**
     * Utility method returning {@code true} if the currently authenticated user has the administrator role,
     * {@code false} otherwise.
     *
     * @param user the currently authenticated user
     * @return {@code true} if the currently authenticated user has the administrator role,
     *         {@code false} otherwise
     */
    private boolean isAdmin(Authentication user) {
        return GeoServerExtensions.bean(GeoServerSecurityManager.class).checkAuthenticationForAdminRole(user);
    }

    /**
     * Instantiates the proper data access limits implementation, based on the resource type, and sets access limits according to the provided rule.
     *
     * @param auth the authentication token provided, giving access to the user requesting the resource
     * @param resource the resource being accessed
     * @param rule the access rule
     * @return data access limits for the specified resource
     * @throws IllegalArgumentException if any error occurs during ECQL Filter parsing, or if the given resource is not of a known type
     */
    private DataAccessLimits buildResourceAccessLimits(Authentication auth, ResourceInfo resource, Rule rule) {
        final Filter accessFilter = this.buildAccessFilter(rule);

        LOGGER.log(Level.FINE, "Filter {0} will be applied to resource {1}", new Object[] { accessFilter, resource.getName() });

        // set read / write filters based on access mode
        final Filter[] readWriteFilters = this.buildReadWriteFilter(rule, accessFilter);
        final Filter readFilter  = readWriteFilters[0];
        final Filter writeFilter = readWriteFilters[1];

        // build concrete access limits object
        if (resource instanceof CoverageInfo) {
            return new CoverageAccessLimits(rule.getCatalogMode(), readFilter, null, null);
        } else if (resource instanceof FeatureTypeInfo) {
            final Choose chooseHiddenProperties = rule.getHiddenAttributes().getChoose();
            // TODO: use readAttributes and writeAttributes where possible, which is likely to be more performant
            final HidingAccessLimits limits = new HidingAccessLimits(rule.getCatalogMode(), null, readFilter, null, writeFilter, auth, chooseHiddenProperties);
            limits.getHiddenProperties().addAll(this.getExpressionRuleEngine().evaluateHiddenProperties(rule));

            return limits;
        } else {
            throw new IllegalArgumentException("Unexpected resource type: " + resource.getClass().getName());
        }
    }

    /**
     * Returns the parsed access rule filter as a {@link Filter} instance.
     *
     * @param rule the access rule to parse
     * @return the parsed access rule filter as a {@link Filter} instance
     * @throws IllegalArgumentException if any error occurs during ECQL Filter parsing
     */
    private Filter buildAccessFilter(Rule rule) {
        try {
            return this.getExpressionRuleEngine().evaluateFilter(rule);
        } catch (CQLException e) {
            throw new IllegalArgumentException("Failed to parse access filter as ECQL", e);
        }
    }

    /**
     * Returns the read / write filters based on given access rule mode and access rule filter, as {@link Filter} array.
     * <p> For convenience, read filter is set as the first element of returned {@link Filter} array, while write filter as second, and last, element.
     *
     * @param rule the given access rule mode
     * @param accessFilter the given access rule filter
     * @return the read / write filters based on given access rule mode, as {@link Filter} array
     */
    private Filter[] buildReadWriteFilter(Rule rule, Filter accessFilter) {
        final AccessMode accessMode = this.getExpressionRuleEngine().evaluateAccessMode(rule);

        final Filter[] readWriteFilters = new Filter[2];
        if (AccessMode.READ == accessMode) {
            readWriteFilters[0] = accessFilter;
            readWriteFilters[1] = Filter.EXCLUDE;
        } else if (
            AccessMode.WRITE == accessMode ||
            AccessMode.ADMIN == accessMode
        ) {
            readWriteFilters[0] = accessFilter;
            // use access filter also for write filter
            readWriteFilters[1] = accessFilter;
        }

        return readWriteFilters;
    }

}

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

import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geotools.filter.FilterFactoryImpl;
import org.geotools.util.logging.Logging;
import org.opengis.filter.FilterFactory2;
import org.opengis.filter.expression.PropertyName;
import org.xml.sax.helpers.NamespaceSupport;

import com.google.common.collect.ImmutableSortedSet;
import com.thoughtworks.xstream.XStream;

/**
 * Plain Old Java Object (POJO) representing an access manager configuration.
 *
 * <p>
 * Should be serialized / deserialized using {@link XStream}.
 * </p>
 *
 * <p>
 * The configuration internally keeps a list of rules sorted by priority. Rules with equal priority are sorted according to the order in which they
 * appear in the original configuration file.
 * </p>
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class SiraAccessManagerConfiguration implements ValidatableConfiguration {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(SiraAccessManagerConfiguration.class);

    /**
     * Default rule, applied if no other rule matches. See {@link Rule#DENY_ALL}.
     */
    public static final Rule DEFAULT_RULE = Rule.DENY_ALL;

    /**
     * The filter factory to pass on to rules.
     */
    public static final NamespaceContextAwareFilterFactory2 FF = new NamespaceContextAwareFilterFactory2();

    /**
     * Collection used to sort rules according to their natural ordering (see {@link Rule}).
     */
    SortedSet<Rule> orderedRules = new TreeSet<>();

    /**
     * The rules in this configuration.
     */
    List<Rule> rules = new ArrayList<>();

    /**
     * Constructor.
     */
    SiraAccessManagerConfiguration() {
        /* NOP */
    }

    /**
     * Get the collection used to sort rules according to their natural ordering (see {@link Rule}).
     * <p>The returned collection is <em>immutable</em>.
     *
     * @return the collection used to sort rules according to their natural ordering (see {@link Rule})
     */
    public SortedSet<Rule> getOrderedRules() {
        return this.orderedRules == null
            // should never be null, but you never know...
            ? ImmutableSortedSet.<Rule>of()
            : ImmutableSortedSet.copyOf(this.orderedRules);
    }

    /**
     * A configuration is valid if all rules are valid.
     *
     * @return {@code true} if the configuration is valid, {@code false} otherwise
     */
    public boolean isValid() {
        for (final Rule rule: this.rules) {
            if (! rule.isValid()) {
                LOGGER.log(Level.FINE, "Invalid rule found: {0}", rule);

                return false;
            }
        }

        return true;
    }

    /**
     * Updates the namespace context used by the internal filter factory.
     *
     * @param namespaceContext the namespace context to set
     */
    synchronized void setNamespaceContext(NamespaceSupport namespaceContext) {
        FF.setNamepaceContext(namespaceContext);
    }

    /**
     * Invoked by {@link XStream} after deserialization.
     *
     * <p>
     * Takes care of initializing rules with the proper filter factory and position in the configuration.
     * </p>
     *
     * @return a fully initialized configuration object
     */
    private Object readResolve() {
        for (int i = 0; i < this.rules.size(); i++) {
            final Rule rule = this.rules.get(i);
            rule.index = i;
        }
        this.orderedRules = new TreeSet<>(this.rules);

        return this;
    }

    /**
     * Custom {@link FilterFactory2} implementation that supports injection of a namespace context,
     * in the form of a {@link NamespaceSupport} instance.
     *
     * <p>
     * The namespace context is automatically set in {@link PropertyName} expressions built with this factory.
     * </p>
     *
     * @author Stefano Costa, GeoSolutions
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    public static final class NamespaceContextAwareFilterFactory2 extends FilterFactoryImpl {

        /**
         * The injected namespace context.
         */
        private NamespaceSupport namespaceContext;

        /**
         * Constructor.
         */
        private NamespaceContextAwareFilterFactory2() {
            super();
        }

        /*
         * (non-Javadoc)
         * @see org.geotools.filter.FilterFactoryImpl#property(java.lang.String)
         */
        @Override
        public PropertyName property(String name) {
            // this check avoids infinite recursion when namespaceContext == null
            if (this.namespaceContext != null) {
                return this.property(name, this.namespaceContext);
            } else {
                return super.property(name);
            }
        }

        /**
         * Set the namespace context.
         *
         * @param the namespace context to set
         */
        private void setNamepaceContext(NamespaceSupport namespaceContext) {
            this.namespaceContext = namespaceContext;
        }

    }

}

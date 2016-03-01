package it.geosolutions.geoserver.sira.security.config;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.catalog.ResourceInfo;
import org.geotools.filter.FilterFactoryImpl;
import org.geotools.util.logging.Logging;
import org.opengis.filter.FilterFactory2;
import org.opengis.filter.expression.PropertyName;
import org.springframework.security.core.Authentication;
import org.xml.sax.helpers.NamespaceSupport;

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
 *
 */
public class SiraAccessManagerConfiguration {

    private static final Logger LOGGER = Logging.getLogger(SiraAccessManagerConfiguration.class);

    /** Default rule, applied if no other rule matches. See {@link Rule#DENY_ALL}. */
    static final Rule DEFAULT_RULE = Rule.DENY_ALL;

    /** The filter factory to pass on to rules. */
    static final NamespaceContextAwareFilterFactory2 FF = new NamespaceContextAwareFilterFactory2();

    /** Collection used to sort rules according to their natural ordering (see {@link Rule}). */ 
    TreeSet<Rule> orderedRules = new TreeSet<>();

    /** The rules in this configuration. */
    List<Rule> rules = new ArrayList<>();

    SiraAccessManagerConfiguration() {
    }

    /**
     * A configuration is valid if all rules are valid.
     * 
     * @return {@code true} if the configuration is valid, {@code false} otherwise
     */
    public boolean isValid() {
        for (Rule rule: rules) {
            if (!rule.isValid()) {
                if (LOGGER.isLoggable(Level.FINE)) {
                    LOGGER.fine("Invalid rule found: " + rule);
                }
                return false;
            }
        }
        return true;
    }

    /**
     * Scans the ordered set of available rules and returns the first matching rule.
     * 
     * <p>If none matches, {@link #DEFAULT_RULE} is returned, which denies all access.</p>
     * 
     * @param user the user accessing the resource
     * @param resourceInfo the resource being accessed
     * @return the best matching security rule
     */
    public Rule findFirstMatchingRuleForResource(Authentication user, ResourceInfo resourceInfo) {
        if (user == null) {
            // may happen sometimes, especially in test cases
            return DEFAULT_RULE;
        }
        if (resourceInfo == null) {
            throw new IllegalArgumentException("resourceInfo must not be null");
        }

        Rule firstMatchingRule = DEFAULT_RULE;

        boolean found = false;
        Iterator<Rule> ruleIter = orderedRules.iterator();
        while (ruleIter.hasNext() && !found) {
            Rule testRule = ruleIter.next();
            boolean roleMatch = testRule.matchRole(user);
            boolean workspaceMatch = testRule.matchWorkspace(resourceInfo);
            boolean layerMatch = testRule.matchLayer(resourceInfo);
            found = roleMatch && workspaceMatch && layerMatch;
            if (found) {
                firstMatchingRule = testRule;
            }
        }

        return firstMatchingRule;
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
     * Invoked by XStream after deserialization.
     * 
     * <p>
     * Takes care of initializing rules with the proper filter factory and position in the configuration.
     * </p>
     * 
     * @return a fully initialized configuration object
     */
    private Object readResolve() {
        for (int i=0; i<rules.size(); i++) {
            Rule rule = rules.get(i);
            rule.filterFactory = FF;
            rule.index = i;
        }
        orderedRules = new TreeSet<Rule>(rules);

        return this;
    }

    /**
     * Custom {@link FilterFactory2} implementation that supports injection of a namespace context, in the form of a {@link NamespaceSupport} instance.
     * 
     * <p>
     * The namespace context is automatically set in {@link PropertyName} expressions built with this factory. 
     * </p>
     */
    private static class NamespaceContextAwareFilterFactory2 extends FilterFactoryImpl {

        private NamespaceSupport namespaceContext;

        private NamespaceContextAwareFilterFactory2() {
            super();
        }

        @Override
        public PropertyName property(String name) {
            // this check avoids infinite recursion when namespaceContext == null
            if (namespaceContext != null) {
                return property(name, namespaceContext);
            } else {
                return super.property(name);
            }
        }

        private void setNamepaceContext(NamespaceSupport namespaceContext) {
            this.namespaceContext = namespaceContext;
        }
    }

}

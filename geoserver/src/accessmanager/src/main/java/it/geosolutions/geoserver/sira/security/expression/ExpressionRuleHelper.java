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
package it.geosolutions.geoserver.sira.security.expression;

import it.geosolutions.geoserver.sira.security.config.SiraAccessManagerConfiguration;
import it.geosolutions.geoserver.sira.security.config.Rule;

import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.catalog.ResourceInfo;
import org.geotools.util.logging.Logging;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.security.core.Authentication;

import com.google.common.base.Preconditions;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class ExpressionRuleHelper {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(ExpressionRuleHelper.class);

    /**
     * Constructor.
     */
    private ExpressionRuleHelper() {
        /* NOP */
    }

    /**
     * Scans the ordered set of available rules and returns the first matching rule.
     * <p>If a rule matches, <em>the provided authentication token's user is set as the root object for an internally initialized default expression rule engine,
     * for one-shot evaluations operate against a valid context</em>.
     *
     * <p>If none matches, or no authentication token is provided, {@link SiraAccessManagerConfiguration#DEFAULT_RULE} is returned, which denies all access.</p>
     *
     * @param auth the authentication token provided, giving access to the user requesting the resource
     * @param resourceInfo the resource being accessed
     * @param configuration
     * @return the first matching security rule
     */
    public static Rule findFirstMatchingRule(Authentication auth, ResourceInfo resourceInfo, SiraAccessManagerConfiguration configuration) {
        return findFirstMatchingRule(auth, resourceInfo, configuration, new ExpressionRuleEngine());
    }

    /**
     * Scans the ordered set of available rules and returns the first matching rule.
     * <p>If a rule matches, <em>the provided authentication token's user is set as the root object for the given expression rule engine,
     * letting subsequent evaluations operate against a valid context</em>.
     *
     * <p>If none matches, or no authentication token is provided, {@link SiraAccessManagerConfiguration#DEFAULT_RULE} is returned, which denies all access.</p>
     *
     * @param auth the authentication token provided, giving access to the user requesting the resource
     * @param resourceInfo the resource being accessed
     * @param configuration
     * @param expressionRuleEngine
     * @return the first matching security rule
     */
    public static Rule findFirstMatchingRule(Authentication auth, ResourceInfo resourceInfo, SiraAccessManagerConfiguration configuration, ExpressionRuleEngine expressionRuleEngine) {
        Preconditions.checkArgument(resourceInfo != null, "resourceInfo must not be null");
        if (auth == null) {
            // may happen sometimes, especially in test cases
            return SiraAccessManagerConfiguration.DEFAULT_RULE;
        }

        LOGGER.log(Level.FINE, "Authentication {0}", auth);

        expressionRuleEngine.setRootObject(RootObject.Builder.buildRootObject(auth));

        Rule matchingRule = SiraAccessManagerConfiguration.DEFAULT_RULE;

        boolean found = false;
        final Iterator<Rule> ruleIter = configuration.getOrderedRules().iterator();
        while (ruleIter.hasNext() && ! found) {
            final Rule testRule = ruleIter.next();

            // best matching rule is found when:
            found =
                // rule should not be ignored, as per access mode evaluation result...
                expressionRuleEngine.evaluateAccessMode(testRule) != null &&
                // ...and use match role...
                testRule.matchRole(auth) &&
                // ...and resourceInfo match workspace...
                testRule.matchWorkspace(resourceInfo) &&
                // ...and resourceInfo match layer
                testRule.matchLayer(resourceInfo);
            if (found) {
                matchingRule = testRule;
            }
        }

        return matchingRule;
    }

    /**
     * Describes the <code>API</code> of the "root object" (as per {@link StandardEvaluationContext#setRootObject(Object)}),
     * used by the expression engine as the default context against which expressions got evaluated.
     * <p>Basically, if gives access to the authenticated "principal", as per Spring Security jargon, under the well-kownn "user" name.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    public static interface RootObject {

        /**
         * Build a {@link RootObject} instance.
         *
         * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
         */
        public static final class Builder {

            /**
             * Constructor.
             */
            private Builder() {
                /* NOP */
            }

            /**
             * Build a {@link RootObject} instance, from the given authentication token.
             *
             * @param auth the authentication token
             * @return the built {@link RootObject} instance
             */
            public static RootObject buildRootObject(final Authentication auth) {
                return new RootObject() {

                    /**
                     * Object representing the authenticated user.
                     */
                    private final Object user = auth.getPrincipal();

                    /*
                     * (non-Javadoc)
                     * @see it.geosolutions.geoserver.sira.security.util.ExpressionRule.RootObject#getUser()
                     */
                    @Override
                    public Object getUser() { return this.user; }

                };
            }

        }

        /**
         * Get the object representing the authenticated user.
         *
         * @return the object representing the authenticated user
         */
        Object getUser();

    }

}

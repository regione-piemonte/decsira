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
package it.geosolutions.geoserver.sira.security.util;

import it.geosolutions.geoserver.sira.security.HidingAccessLimits;
import it.geosolutions.geoserver.sira.security.config.Attributes.Choose;
import it.geosolutions.geoserver.sira.security.config.Attributes.Choose.When;
import it.geosolutions.geoserver.sira.security.config.SiraAccessManagerConfiguration;
import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleEngine;
import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleHelper.RootObject;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.security.WrapperPolicy;
import org.geotools.factory.Hints;
import org.geotools.filter.expression.FeaturePropertyAccessorFactory;
import org.geotools.filter.expression.PropertyAccessor;
import org.geotools.filter.expression.PropertyAccessorFactory;
import org.geotools.filter.text.cql2.CQLException;
import org.geotools.util.logging.Logging;
import org.opengis.feature.Feature;
import org.opengis.feature.Property;
import org.opengis.filter.Filter;
import org.opengis.filter.expression.PropertyName;
import org.xml.sax.helpers.NamespaceSupport;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;

/**
 * {@link Feature}-related utility class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class FeatureUtils {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(FeatureUtils.class);

    /**
     * Constructor.
     */
    private FeatureUtils() {
        /* NOP */
    }

    /**
     *
     * @param obj
     * @param expression
     * @return
     */
    public static Object getFeatureProperty(Object obj, PropertyName expression) {
        return getFeatureProperty(obj, expression.getPropertyName(), expression.getNamespaceContext());
    }

    /**
     *
     * @param obj
     * @param attPath
     * @param target
     * @param namespaceSupport
     * @return
     */
    public static Object getFeatureProperty(Object obj, String attPath, NamespaceSupport namespaceSupport) {
        Hints hints = null;
        if (namespaceSupport != null) {
            hints = new Hints(PropertyAccessorFactory.NAMESPACE_CONTEXT, namespaceSupport);
        }

        final PropertyAccessor accessor = new FeaturePropertyAccessorFactory().createPropertyAccessor(obj.getClass(), attPath, Property.class, hints);
        try {
            return accessor.get(obj, attPath, Property.class);
        } catch (Exception e) {
            LOGGER.log(Level.FINER, "Could not find working property accessor for attribute (" + attPath + ") in object (" + obj + ")", e);

            return null;
        }
    }

    /**
     * Set to {@code null} given {@link Feature} attributes that should be hidden,
     * if the given limits are of {@link HidingAccessLimits} type, as per policy evaluation with the given expression rule engine.
     *
     * @param feature the given {@link Feature}
     * @param policy hiding access policy limits
     * @param expressionRuleEngine expression rule engine to use for policy evaluation
     */
    public static void hideFeatureAttributes(Feature feature, WrapperPolicy policy, ExpressionRuleEngine expressionRuleEngine) {
        if (policy.limits instanceof HidingAccessLimits) {
            final HidingAccessLimits policyLimits = (HidingAccessLimits) policy.limits;

            // build list of attributes to hide: start with the ones to always hide...
            final Set<PropertyName> hiddenAttributes = Sets.newHashSet(policyLimits.getHiddenProperties());

            //... then continue evaluating choose-when-otherwise conditions, if any
            expressionRuleEngine.setRootObject(RootObject.Builder.buildRootObject(policyLimits.getAuth()));

            final Choose chooseHiddenProperties = policyLimits.getChooseHiddenProperties();
            if (chooseHiddenProperties != null) {
                boolean whenTrue = false;
                for (final When when : chooseHiddenProperties.getOrderedWhenConditions()) {
                    try {
                        final Filter filter = expressionRuleEngine.evaluateFilter(when);
                        if (filter.evaluate(feature)) {
                            whenTrue = true;
                            hiddenAttributes.addAll(toHiddenAttributes(when.getAttributes()));

                            break;
                        }
                    } catch (CQLException e) {
                        // a CQL exception occurs, skip the when condition
                        LOGGER.log(Level.WARNING, "An error has occured while evaluating When filter {0}: {1}", new Object[] { when.getFilter(), e.getMessage(), e});
                    }
                }
                if (! whenTrue) {
                    hiddenAttributes.addAll(toHiddenAttributes(chooseHiddenProperties.getOtherwiseCondition().getAttributes()));
                }
            }

            long startTime = System.currentTimeMillis();

            for (final PropertyName hiddenAttribute : hiddenAttributes) {
                hideFeatureAttribute(feature, hiddenAttribute);
            }

            long endTime = System.currentTimeMillis();

            LOGGER.log(Level.FINER, "{0} properties were hidden in {1} ms", new Object[] { hiddenAttributes.size(), endTime - startTime });
        }
    }

    /**
     *
     * @param rule
     * @return
     */
    private static List<PropertyName> toHiddenAttributes(Collection<String> attributes) {
        final List<PropertyName> hiddenProperties = Lists.newArrayList();
        for (final String defaultHiddenAttribute : attributes) {
            hiddenProperties.add(SiraAccessManagerConfiguration.FF.property(defaultHiddenAttribute));
        }

        return hiddenProperties;
    }

    /**
     * Set to {@code null} given {@link Feature} attribute that should be hidden.
     *
     * @param feature the given {@link Feature}
     * @param hiddenAttribute attribute that should be hidden
     */
    private static void hideFeatureAttribute(Feature feature, PropertyName hiddenAttribute) {
        final Object hiddenProperty = getFeatureProperty(feature, hiddenAttribute);
        
        if (hiddenProperty != null) {
        	if(hiddenProperty instanceof List) {
            	for(Object prop : (List)hiddenProperty) {
            		hideProperty(prop);
            	}
            }
        	hideProperty(hiddenProperty);
        }
    }

	private static void hideProperty(Object prop) {
		if(prop instanceof Property) {
			((Property)prop).setValue(null);
		}
	}

}

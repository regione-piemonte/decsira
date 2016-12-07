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

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.security.AccessLimits;
import org.geotools.factory.Hints;
import org.geotools.filter.expression.FeaturePropertyAccessorFactory;
import org.geotools.filter.expression.PropertyAccessor;
import org.geotools.filter.expression.PropertyAccessorFactory;
import org.geotools.util.logging.Logging;
import org.opengis.feature.Feature;
import org.opengis.feature.Property;
import org.opengis.filter.expression.PropertyName;
import org.xml.sax.helpers.NamespaceSupport;

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
    public static <T> T getFeatureProperty(Object obj, PropertyName expression) {
        return getFeatureProperty(obj, expression.getPropertyName(), null, expression.getNamespaceContext());
    }

    /**
     *
     * @param obj
     * @param attPath
     * @param target
     * @param namespaceSupport
     * @return
     */
    public static <T> T getFeatureProperty(Object obj, String attPath, Class<T> target, NamespaceSupport namespaceSupport) {
        Hints hints = null;
        if (namespaceSupport != null) {
            hints = new Hints(PropertyAccessorFactory.NAMESPACE_CONTEXT, namespaceSupport);
        }

        final PropertyAccessor accessor = new FeaturePropertyAccessorFactory().createPropertyAccessor(obj.getClass(), attPath, target, hints);
        try {
            return accessor.get(obj, attPath, target);
        } catch (Exception e) {
            LOGGER.log(Level.FINER, "Could not find working property accessor for attribute (" + attPath + ") in object (" + obj + ")", e);

            return null;
        }
    }

    /**
     * Set to {@code null} given {@link Feature} attributes that should be hidden,
     * if the given limits are of {@link HidingAccessLimits} type.
     *
     * @param feature the given {@link Feature}
     * @param limits hiding access limits
     */
    public static void hideFeatureAttributes(Feature feature, AccessLimits limits) {
        if (limits instanceof HidingAccessLimits) {
            hideFeatureAttributes(feature, (HidingAccessLimits) limits);
        }
    }

    /**
     * Set to {@code null} given {@link Feature} attributes that should be hidden.
     *
     * @param feature the given {@link Feature}
     * @param limits hiding access limits
     */
    public static void hideFeatureAttributes(Feature feature, HidingAccessLimits limits) {
        final List<PropertyName> hiddenAttributes = limits.getHiddenProperties();

        long startTime = System.currentTimeMillis();

        for (final PropertyName hiddenAttribute : hiddenAttributes) {
            hideFeatureAttribute(feature, hiddenAttribute);
        }

        long endTime = System.currentTimeMillis();
        if (LOGGER.isLoggable(Level.FINER)) {
            LOGGER.log(Level.FINER, "{0} properties were hidden in {1} ms", new Object[] { hiddenAttributes.size(), endTime - startTime });
        }
    }

    /**
     * Set to {@code null} given {@link Feature} attribute that should be hidden.
     *
     * @param feature the given {@link Feature}
     * @param hiddenAttribute attribute that should be hidden
     */
    private static void hideFeatureAttribute(Feature feature, PropertyName hiddenAttribute) {
        final Property hiddenProperty = getFeatureProperty(feature, hiddenAttribute);
        if (hiddenProperty != null) {
            hiddenProperty.setValue(null);
        }
    }

}

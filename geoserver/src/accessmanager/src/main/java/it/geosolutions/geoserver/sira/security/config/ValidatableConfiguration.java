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

import it.geosolutions.geoserver.sira.security.config.Attributes.Choose;
import it.geosolutions.geoserver.sira.security.config.Attributes.Choose.Otherwise;
import it.geosolutions.geoserver.sira.security.config.Attributes.Choose.When;

import java.util.Collection;
import java.util.SortedSet;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.lang.StringUtils;
import org.geotools.util.logging.Logging;

/**
 * Interface representing any configuration object that can be validated.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public interface ValidatableConfiguration {

    /**
     * Queries the current state of this {@link ValidatableConfiguration} instance,
     * returning {@code true} if this {@link ValidatableConfiguration} is in a valid state, {@code false} otherwise.
     *
     * @return {@code true} if this {@link ValidatableConfiguration} is in a valid state, {@code false} otherwise
     */
    boolean isValid();

    /**
     * Utility class for validation operations.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    static final class ValidationUtils {

        /**
         * Logger.
         */
        private static final Logger LOGGER = Logging.getLogger(ValidatableConfiguration.class);

        /**
         * Constructor.
         */
        private ValidationUtils() {
            /* NOP */
        }

        /**
         * Utility method to validate a given filter,
         * returning {@code true} if the filter is valid, {@code false} otherwise.
         * <p>A filter, being just a simple string, is considered <em>not</em> valid if <code>blank</code>,
         * as per {@link StringUtils#isBlank(String)}.
         *
         * @param filter the given filter to validate
         * @return {@code true} if the filter is valid, {@code false} otherwise
         */
        static boolean validateFilter(String filter) {
            if (StringUtils.isBlank(filter)) {
                LOGGER.log(Level.FINE, "A filter must not be blank");

                return false;
            }

            return true;
        }

        /**
         *
         * @param hiddenAttributes
         * @return
         */
        static boolean validateAttributes(Attributes hiddenAttributes) {
            return hiddenAttributes != null && hiddenAttributes.isValid();
        }

        /**
         * Utility method to validate a given collection of attributes,
         * returning {@code true} if <em>all</em> attributes are valid, {@code false} otherwise.
         * <p>An attribute, being just a simple string, is considered <em>not</em> valid if <code>blank</code>,
         * as per {@link StringUtils#isBlank(String)}.
         *
         * @param attributes the given collection of attributes to validate
         * @return {@code true} if <em>all</em> attributes are valid, {@code false} otherwise
         */
        static boolean validateAttributes(SortedSet<String> attributes) {
            if (attributes != null) {
                for (final String attr : attributes) {
                    if (StringUtils.isBlank(attr)) {
                        LOGGER.log(Level.FINE, "All attributes must not be blank");

                        return false;
                    }
                }
            }

            return true;
        }

        /**
         *
         * @param choose
         * @return
         */
        static boolean validateChoose(Choose choose) {
            return choose == null || choose.isValid();
        }

        /**
         *
         * @param whenConditions
         * @param otherwiseCondition
         * @return
         */
        static boolean validateWhenAndOtherwise(Collection<When> whenConditions, Otherwise otherwiseCondition) {
            if (whenConditions == null || ! (
                validateWhenConditions(whenConditions) &&
                validateOtherwiseCondition(whenConditions, otherwiseCondition))) {
                return false;
            }

            return true;
        }

        /**
         *
         * @param whenConditions
         * @return
         */
        private static boolean validateWhenConditions(Collection<When> whenConditions) {
            for (final When when : whenConditions) {
                if (! when.isValid()) {
                    LOGGER.log(Level.FINE, "All when conditions must be valid");

                    return false;
                }
            }

            return true;
        }

        /**
         *
         * @param whenConditions
         * @param otherwiseCondition
         * @return
         */
        private static boolean validateOtherwiseCondition(Collection<When> whenConditions, Otherwise otherwiseCondition) {
            if (whenConditions.isEmpty() && otherwiseCondition != null) {
                LOGGER.log(Level.FINE, "An otherwise condition must not be defined if no when conditions are defined");

                return false;
            } else if (otherwiseCondition == null || ! otherwiseCondition.isValid()) {
                LOGGER.log(Level.FINE, "An otherwise condition must be defined and be valid if one or more when conditions are defined");

                return false;
            }

            return true;
        }

    }

}

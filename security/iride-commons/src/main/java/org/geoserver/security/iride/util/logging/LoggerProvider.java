/*
 *  Classes common to the modules offering authentication and authorization functionalities using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.util.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Provider for various application "layers" {@link Logger}s.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public enum LoggerProvider {

    /**
     * {@link Logger} used by all <code>IRIDE</code> entities (and related) objects.
     */
    ENTITY(
    	LoggerFactory.getLogger(Constants.LOGGER_BASE_NAME + ".entity")
    ),
    /**
     * {@link Logger} used by all <a href="http://docs.geoserver.org/latest/en/developer/programming-guide/security/index.html#security-services">Security Services</a>.
     */
    SECURITY(
    	LoggerFactory.getLogger(Constants.LOGGER_BASE_NAME + ".security")
    ),
    /**
     * {@link Logger} used by <code>IRIDE</code> "policies" enforcer interfaces instances.
     */
    POLICY(
    	LoggerFactory.getLogger(Constants.LOGGER_BASE_NAME + ".policy")
    ),
    /**
     * {@link Logger} used by utility and/or helper classes.
     */
    UTIL(
    	LoggerFactory.getLogger(Constants.LOGGER_BASE_NAME + ".util")
    ),
    ;

    /**
     * {@link Logger} for a specific application "layer".
     */
    private Logger logger;

    /**
     * Constructor.
     *
     * @param logger {@link Logger} for a specific application "layer"
     */
    private LoggerProvider(Logger logger) {
        this.logger = logger;
    }

    /**
     * Returns a {@link Logger} for the specified class.
     * This convenience method invokes {@link #getLogger(String)} with the package name as the logger name.
     * <p>(from <a href="http://www.geotools.org/">GeoTools</a>)
     *
     * @param  clazz class for which to obtain a {@link Logger}
     * @return {@link Logger} for the specified class
     */
    public static final Logger getLogger(final Class<?> clazz) {
        String name = clazz.getName();
        final int separator = name.lastIndexOf('.');
        name = (separator >= 1) ? name.substring(0, separator) : "";

        return LoggerFactory.getLogger(name);
    }

    /**
     * Return the {@link Logger} for a specific application "layer".
     *
     * @return {@link Logger} for a specific application "layer"
     */
    public Logger getLogger() {
        return this.logger;
    }

    /**
     * Constants used by {@link LoggerProvider}.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    public static final class Constants {

        /**
         * {@link Logger} base name.
         */
        public static final String LOGGER_BASE_NAME = "org.geoserver.security.iride";

        /**
         * Constructor.
         */
        private Constants() {
            /* NOP */
        }

    }

}

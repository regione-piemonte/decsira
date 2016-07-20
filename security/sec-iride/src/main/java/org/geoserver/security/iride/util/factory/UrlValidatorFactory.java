/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations against CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.util.factory;

import org.apache.commons.validator.routines.UrlValidator;

/**
 * {@link UrlValidator} factory
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class UrlValidatorFactory {

    /**
     * Default {@link UrlValidator}, configured as follows to:
     * <ul>
     *   <li>allow only the following <code>HTTP</code> schemas:</li>
     *   <ul>
     *     <li>http</li>
     *     <li>https</li>
     *   </ul>
     *   <li>not allow <code>HTTP</code> fragments</li>
     * </ul>
     *
     */
    private static final UrlValidator DEFAULT_URL_VALIDATOR = new UrlValidator(
        new String[] {"http", "https"},
        UrlValidator.NO_FRAGMENTS + UrlValidator.ALLOW_LOCAL_URLS
    );

    /**
     * Returns the default {@link UrlValidator}.
     *
     * @return the default {@link UrlValidator}
     */
    public static UrlValidator getDefaultUrlValidator() {
        return DEFAULT_URL_VALIDATOR;
    }

    /**
     * Constructor.
     */
    private UrlValidatorFactory() {
        /* NOP */
    }

}

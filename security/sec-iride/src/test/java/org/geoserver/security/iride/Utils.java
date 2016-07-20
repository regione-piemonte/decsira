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
package org.geoserver.security.iride;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Utils {

    /**
     * A single space character string.
     */
    private static final String A_SPACE = " ";

    /**
     * Returns a random blank or empty string, with a length comprised between 0 and 9 characters.
     *
     * @return a random blank or empty string, with a length comprised between 0 and 9 characters
     */
    public static String randomBlankOrEmptyString() {
        return StringUtils.repeat(A_SPACE, RandomUtils.nextInt(10));
    }

    /**
     * Constructor.
     */
    private Utils() {
        /* NOP */
    }

}

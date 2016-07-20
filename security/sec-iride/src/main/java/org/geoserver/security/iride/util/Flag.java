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
package org.geoserver.security.iride.util;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Flag {

    /**
     * Tests whether the given flag is on.
     * If the flag is not a power of 2 (ie. 3) this tests whether the combination of flags is on.
     *
     * @param options
     * @param flag Flag value to check.
     *
     * @return whether the specified flag value is on.
     */
    public static boolean isOn(long options, long flag) {
        return (options & flag) > 0;
    }

    /**
     * Tests whether the given flag is off.
     * If the flag is not a power of 2 (ie. 3) this tests whether the combination of flags is off.
     *
     * @param options
     * @param flag Flag value to check.
     *
     * @return whether the specified flag value is off.
     */
    public static boolean isOff(long options, long flag) {
        return (options & flag) == 0;
    }

    /**
     * Constructor.
     */
    private Flag() {
        /* NOP */
    }

}

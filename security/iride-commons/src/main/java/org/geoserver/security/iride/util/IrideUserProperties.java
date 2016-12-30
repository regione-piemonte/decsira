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
package org.geoserver.security.iride.util;

import com.google.common.collect.ImmutableSet;

/**
 * <code>IRIDE</code> user mnemonic properties.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideUserProperties {

    /**
     * <code>GeoServer</code> user property for associated {@link IrideIdentity} instance.
     */
    public static final String IRIDE_IDENTITY = "irideIdentity";

    /**
     * <code>GeoServer</code> user property for associated {@link IrideInfoPersona} instances, if any, expressed as a set.
     * <p>An empty set property in the case there are no associated {@link IrideInfoPersona} instances.
     * <p>Whichever the case, the set is <em>immutable</em>.
     *
     * @see ImmutableSet
     */
    public static final String INFO_PERSONAE = "irideInfoPersonae";

    /**
     * Constructor.
     */
    private IrideUserProperties() {
        /* NOP */
    }

}

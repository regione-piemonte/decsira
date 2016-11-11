/*
 *  Entity classes involved during authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.entity.identity.token.value;

import org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> placeholder object for any missing token.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityMissingTokenValue extends IrideIdentityTokenValue {

	private static final long serialVersionUID = 1173484239470646184L;

	/**
     * Constructor.
     *
     * @param token the <code>IRIDE</code> <code>Digital Identity</code> missing token
     * @param value the candidate <code>IRIDE</code> <code>Digital Identity</code> string representation being tokenized by {@link IrideIdentityTokenizer}
     */
    public IrideIdentityMissingTokenValue(IrideIdentityToken token, String value) {
        super(token, value);
    }

}

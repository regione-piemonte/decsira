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

import java.io.Serializable;

import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> object holding an {@link IrideIdentityToken} instance and an associated value.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideIdentityTokenValue implements Serializable {

	private static final long serialVersionUID = -1469487295824004514L;

	/**
     * The <code>IRIDE</code> <code>Digital Identity</code> token.
     */
    private final IrideIdentityToken token;

    /**
     * The <code>IRIDE</code> <code>Digital Identity</code> token associated value.
     */
    private final String value;

    /**
     * Constructor.
     *
     * @param token the <code>IRIDE</code> <code>Digital Identity</code> token
     * @param value the <code>IRIDE</code> <code>Digital Identity</code> token value
     */
    public IrideIdentityTokenValue(IrideIdentityToken token, String value) {
        this.token = token;
        this.value = value;
    }

    /**
     * Returns the <code>IRIDE</code> <code>Digital Identity</code> token.
     *
     * @return the token
     */
    public final IrideIdentityToken getToken() {
        return this.token;
    }

    /**
     * Returns the <code>IRIDE</code> <code>Digital Identity</code> token value.
     *
     * @return the <code>IRIDE</code> <code>Digital Identity</code> token value
     */
    public final String getValue() {
        return this.value;
    }

}
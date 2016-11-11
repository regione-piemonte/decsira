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
package org.geoserver.security.iride.entity.identity.exception;

import org.geoserver.security.iride.entity.identity.token.value.IrideIdentityMissingTokenValue;
import org.geoserver.security.iride.entity.util.Constants;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> exception thrown for any <em>missing</em> tokens.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityMissingTokenException extends IrideIdentityTokenizationException {

    private static final long serialVersionUID = 2810994807986926520L;

    /**
     * The missing token.
     */
    private IrideIdentityMissingTokenValue missingTokenValue;

    /**
     * Constructor.
     */
    public IrideIdentityMissingTokenException() {
        this(null);
    }

    /**
     * Constructor.
     *
     * @param missingToken the missing token
     */
    public IrideIdentityMissingTokenException(IrideIdentityMissingTokenValue missingToken) {
        super(missingToken == null
            ? Constants.MISSING_UNSPECIFIED_TOKEN_EXCEPTION_MESSAGE
            : String.format(Constants.MISSING_TOKEN_EXCEPTION_MESSAGE, missingToken.getToken())
        );

        this.missingTokenValue = missingToken;
    }

    /**
     * Returns the missing token.
     *
     * @return the missing token
     */
    public IrideIdentityMissingTokenValue getMissingTokenValue() {
        return this.missingTokenValue;
    }

}

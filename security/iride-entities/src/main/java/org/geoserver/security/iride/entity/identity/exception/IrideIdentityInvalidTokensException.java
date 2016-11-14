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

import org.geoserver.security.iride.entity.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geoserver.security.iride.entity.util.Constants;
import org.geoserver.security.iride.entity.util.Utils;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> exception thrown for one or more <em>invalid</em> tokens.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityInvalidTokensException extends IrideIdentityTokenizationException {

    private static final long serialVersionUID = -5732259205731098733L;

    /**
     * No invalid tokens specified.
     */
    private static final IrideIdentityInvalidTokenValue[] NO_INVALID_TOKENS_SPECIFIED = new IrideIdentityInvalidTokenValue[0];

    /**
     * The invalid tokens.
     */
    private final IrideIdentityInvalidTokenValue[] invalidTokens;

    /**
     * Constructor.
     */
    public IrideIdentityInvalidTokensException() {
        this(
            Constants.INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION,
            NO_INVALID_TOKENS_SPECIFIED
        );
    }

    /**
     * Constructor.
     *
     * @param message
     */
    public IrideIdentityInvalidTokensException(String message) {
        this(
            String.format(Constants.INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE, message),
            NO_INVALID_TOKENS_SPECIFIED
        );
    }

    /**
     * Constructor.
     *
     * @param invalidTokens the invalid tokens
     */
    public IrideIdentityInvalidTokensException(IrideIdentityInvalidTokenValue[] invalidTokens) {
        this(
            Utils.toString(Constants.INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE, invalidTokens),
            invalidTokens
        );
    }

    /**
     * Constructor.
     *
     * @param message
     * @param invalidTokens2
     */
    private IrideIdentityInvalidTokensException(String message, IrideIdentityInvalidTokenValue[] invalidTokens) {
        super(message);

        this.invalidTokens = Utils.defaultToEmpty(invalidTokens);
    }

    /**
     * Returns the invalid tokens, if any.
     *
     * @return the invalid tokens, if any
     */
    public IrideIdentityInvalidTokenValue[] getInvalidTokens() {
        return this.invalidTokens;
    }

}

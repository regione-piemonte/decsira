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

import org.geoserver.security.iride.entity.util.Constants;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> base tokenization and validation processes exception class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideIdentityTokenizationException extends Exception {

    private static final long serialVersionUID = -2870022721604366580L;

    /**
     * Constructor.
     *
     * @param cause
     */
    public IrideIdentityTokenizationException(Throwable cause) {
        super(String.format(Constants.INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE, "an error occured during tokenization"), cause);
    }

    /**
     * Constructor.
     *
     * @param message
     */
    protected IrideIdentityTokenizationException(String message) {
        super(message);
    }

}

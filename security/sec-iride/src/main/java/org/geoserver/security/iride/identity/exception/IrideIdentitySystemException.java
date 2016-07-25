/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.identity.exception;

import org.geoserver.security.iride.exception.IrideSecuritySystemException;

/**
 * <code>IRIDE</code> Digital Identity base system exception class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public abstract class IrideIdentitySystemException extends IrideSecuritySystemException {

    private static final long serialVersionUID = 776450290310401079L;

    /**
     * Constructor.
     *
     * @param message exception message
     */
    protected IrideIdentitySystemException(String message) {
        super(message);
    }

    /**
     * Constructor.
     *
     * @param message exception message
     * @param cause exception cause
     */
    protected IrideIdentitySystemException(String message, Throwable cause) {
        super(message, cause);
    }

}

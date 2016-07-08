/**
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
package org.geoserver.security.iride.util.parser.exception;

import org.geoserver.security.iride.util.parser.IdentitaIrideToken;

/**
 * Identit&agrave; Digitale <code>IRIDE</code> thrown for any missing token.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class MissingIdentitaIrideTokenException extends IdentitaIrideTokenizerException {

    private static final long serialVersionUID = 2810994807986926520L;

    /**
     * Exception message for missing token.
     */
    private static final String MISSING_TOKEN_EXCEPTION_MESSAGE = "Invalid Identita IRIDE tokens: missing %s";

    /**
     * The missing token.
     */
    private final IdentitaIrideToken missingToken;

    /**
     * Constructor.
     *
     * @param missingToken the missing token
     */
    public MissingIdentitaIrideTokenException(IdentitaIrideToken missingToken) {
        super(String.format(MISSING_TOKEN_EXCEPTION_MESSAGE, missingToken));

        this.missingToken = missingToken;
    }

    /**
     * Returns the missing token.
     *
     * @return the missing token
     */
    public IdentitaIrideToken getMissingToken() {
        return this.missingToken;
    }

}

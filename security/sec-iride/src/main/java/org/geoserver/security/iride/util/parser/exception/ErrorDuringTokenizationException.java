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

/**
 * Identit&agrave; Digitale <code>IRIDE</code> thrown for any error occured during tokenization, specifying the cause.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class ErrorDuringTokenizationException extends IdentitaIrideTokenizerException {

    private static final long serialVersionUID = -5002245164342486819L;

    /**
     * Exception message for any error occured during tokenization.
     */
    private static final String ERROR_DURING_TOKENIZATION_EXCEPTION_MESSAGE = "Invalid Identita IRIDE tokens: an error occured during tokenization";

    /**
     * Constructor.
     *
     * @param cause
     */
    public ErrorDuringTokenizationException(Throwable cause) {
        super(ERROR_DURING_TOKENIZATION_EXCEPTION_MESSAGE, cause);
    }

}

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
package org.geoserver.security.iride.entity.util;

/**
 * Utility class for application constants.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Constants {

    /**
     * Exception message caption for invalid tokens.
     */
    public static final String INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION = "Invalid IRIDE Identity tokens";

    /**
     * Exception message for invalid tokens.
     */
    public static final String INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": %s";

    /**
     * Exception message for an invalid token.
     */
    public static final String INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": invalid %s, with value '%s'";

    /**
     * Exception message for missing token.
     */
    public static final String MISSING_TOKEN_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": missing %s";

    /**
     * Exception message for an unspecified missing token.
     */
    public static final String MISSING_UNSPECIFIED_TOKEN_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": an unspecified token is missing";

    /**
     * Constructor.
     */
    private Constants() {
        /* NOP */
    }

}

/*
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
package org.geoserver.security.iride.identity;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Pattern;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.geoserver.security.iride.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geotools.util.logging.Logging;

/**
 * <code>IRIDE</code> Digital Identity validator.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityValidator {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideIdentityValidator.class);

    private static final Pattern FISCAL_CODE_WEAK_VALIDATION_PATTERN = Pattern.compile("^[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]$");

    private static final Pattern FISCAL_CODE_STRONG_VALIDATION_PATTERN = Pattern.compile("^(?:[B-DF-HJ-NP-TV-Z](?:[AEIOU]{2}|[AEIOU]X)|[AEIOU]{2}X|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}[\\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[1256LMRS][\\dLMNP-V])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM])(?:[A-MZ][1-9MNP-V][\\dLMNP-V]{2}|[A-M][0L](?:[\\dLMNP-V][1-9MNP-V]|[1-9MNP-V][0L]))[A-Z]$");

    private static final String TIMESTAMP_DATETIME_FORMAT = "yyyyMMddHHmmss";

    private static final int[] IRIDE_AUTHENTICATION_LEVELS = new int[] { 1, 2, 4, 8, 16 };

    private static final int MAC_LENGTH = 24;

    /**
     * {@link DateFormat} instance.
     */
    private final DateFormat dateFormat;

    /**
     * Constructor.
     */
    public IrideIdentityValidator() {
        this.dateFormat = new SimpleDateFormat(TIMESTAMP_DATETIME_FORMAT);
        this.dateFormat.setLenient(false);
    }

    /**
     *
     * @param value
     * @return
     */
    public IrideIdentityInvalidTokenValue[] validate(String[] tokens) {
        LOGGER.finer("IRIDE Identity tokens: " + Arrays.toString(tokens));

        this.checkValidExpectedTokensLength(tokens);

        final List<IrideIdentityInvalidTokenValue> invalidTokenValues = new ArrayList<IrideIdentityInvalidTokenValue>();

        // Check "codice fiscale" token
        if (this.isNotValidCodiceFiscale(tokens[0])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.CODICE_FISCALE, tokens[0]);
        }

        // Check "nome" token
        if (this.isNotValidNome(tokens[1])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.NOME, tokens[1]);
        }

        // Check "cognome" token
        if (this.isNotValidCognome(tokens[2])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.COGNOME, tokens[2]);
        }

        // Check "idProvider" token
        if (this.isNotValidIdProvider(tokens[3])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.ID_PROVIDER, tokens[3]);
        }

        // Check "timestamp" token
        if (this.isNotValidTimestamp(tokens[4])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.TIMESTAMP, tokens[4]);
        }

        // Check "livelloAutenticazione" token
        if (this.isNotValidLivelloAutenticazione(tokens[5])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.LIVELLO_AUTENTICAZIONE, tokens[5]);
        }

        // Check "mac" token
        if (this.isNotValidMac(tokens[6])) {
            addInvalidTokenValue(invalidTokenValues, IrideIdentityToken.MAC, tokens[6]);
        }

        return invalidTokenValues.toArray(new IrideIdentityInvalidTokenValue[invalidTokenValues.size()]);
    }

    /**
     *
     * @param invalidTokenValues
     * @param token
     * @param value
     */
    private static void addInvalidTokenValue(List<IrideIdentityInvalidTokenValue> invalidTokenValues, IrideIdentityToken token, String value) {
        invalidTokenValues.add(new IrideIdentityInvalidTokenValue(token, value, null));
    }

    /**
     * Check that the given tokens length equals the expected length, which should be {@link IrideIdentityToken#values()} length
     * (i.e.: the number of tokens defined in {@link IrideIdentityToken} enum).<p>
     * If not so, an {@link IllegalArgumentException} is thrown, detailing the given tokens length vs the expected one.
     *
     * @param tokens the given tokens array to check for valid length
     */
    private void checkValidExpectedTokensLength(String[] tokens) {
        final int expectedTokenLength = IrideIdentityToken.values().length;

        if (ArrayUtils.getLength(tokens) != expectedTokenLength) {
            throw new IllegalArgumentException(
                "Tokens array length is " + ArrayUtils.getLength(tokens) +
                " instead of the expected mandatory length of " + expectedTokenLength + " elements."
            );
        }
    }

    /**
     * Validates <code>Codice Fiscale</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidCodiceFiscale(String value) {
        return ! this.isValidCodiceFiscale(value);
    }

    /**
     * Validates <code>Codice Fiscale</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidCodiceFiscale(String value) {
        if (StringUtils.isBlank(value)) {
            return false;
        }

        if (! FISCAL_CODE_STRONG_VALIDATION_PATTERN.matcher(value).matches() &&
            ! FISCAL_CODE_WEAK_VALIDATION_PATTERN.matcher(value).matches()) {
            return false;
        }

        return true;
    }

    /**
     * Validates <code>Nome</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidNome(String value) {
        return ! this.isValidNome(value);
    }

    /**
     * Validates <code>Nome</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidNome(String value) {
        return StringUtils.isNotBlank(value);
    }

    /**
     * Validates <code>Cognome</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidCognome(String value) {
        return ! this.isValidCognome(value);
    }

    /**
     * Validates <code>Cognome</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidCognome(String value) {
        return StringUtils.isNotBlank(value);
    }

    /**
     * Validates <code>IdProvider</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidIdProvider(String value) {
        return ! this.isValidIdProvider(value);
    }

    /**
     * Validates <code>IdProvider</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidIdProvider(String value) {
        return StringUtils.isNotBlank(value);
    }

    /**
     * Validates <code>Timestamp</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidTimestamp(String value) {
        return ! this.isValidTimestamp(value);
    }

    /**
     * Validates <code>Timestamp</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidTimestamp(String value) {
        try {
            this.dateFormat.parse(value);

            return true;
        } catch (ParseException e) {
            LOGGER.severe("Invalid date format: " + e.getMessage());

            return false;
        }
    }

    /**
     * Validates <code>livelloAutenticazione</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidLivelloAutenticazione(String value) {
        return ! this.isValidLivelloAutenticazione(value);
    }

    /**
     * Validates <code>livelloAutenticazione</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidLivelloAutenticazione(String value) {
        try {
            final int livello = NumberUtils.createInteger(value);
            if (! ArrayUtils.contains(IRIDE_AUTHENTICATION_LEVELS, livello)) {
                return false;
            }

            return true;
        } catch (NumberFormatException e) {
            LOGGER.severe("Invalid number format: " + e.getMessage());

            return false;
        }
    }

    /**
     * Validates <code>mac</code> token.
     *
     * @param value
     * @return
     */
    private boolean isNotValidMac(String value) {
        return ! this.isValidMac(value);
    }

    /**
     * Validates <code>mac</code> token.
     *
     * @param value
     * @return
     */
    private boolean isValidMac(String value) {
        return StringUtils.isNotBlank(value) && value.length() == MAC_LENGTH;
    }

}

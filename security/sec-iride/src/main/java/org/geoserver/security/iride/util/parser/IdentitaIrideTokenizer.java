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
package org.geoserver.security.iride.util.parser;

import java.util.ArrayList;
import java.util.List;

import org.geoserver.security.iride.util.parser.exception.ErrorDuringTokenizationException;
import org.geoserver.security.iride.util.parser.exception.IdentitaIrideTokenizerException;
import org.geoserver.security.iride.util.parser.exception.MissingIdentitaIrideTokenException;

/**
 * Identit&agrave; Digitale <code>IRIDE</code> tokenizer.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IdentitaIrideTokenizer {

    /**
     * Identit&agrave; Digitale <code>IRIDE</code> tokens separator character.
     */
    private static final char IDENTITA_IRIDE_TOKEN_SEPARATOR = '/';

    /**
     * Tokenize a string value that should represents an Identit&agrave; Digitale <code>IRIDE</code>.<p>
     * A successful tokenization should return a string array composed of 7 elements
     *
     * @param value a string value that should represents an Identit&agrave; Digitale <code>IRIDE</code>
     * @return Identita IRIDE tokens. A successful tokenization should return a string array composed of 7 elements
     * @throws IdentitaIrideTokenizerException if any one of the seven expected tokens is not found in the tokenized string value
     */
    public String[] tokenize(String value) throws IdentitaIrideTokenizerException {
        final List<String> tokens = new ArrayList<>();

        try {
            // 1) 'Codice Fiscale' token
            int i1 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR);
            if (i1 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.CODICE_FISCALE);
            }
            tokens.add(value.substring(0, i1));

            // 2) 'Nome' token
            int i2 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR, i1 + 1);
            if (i2 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.NOME);
            }
            tokens.add(value.substring(i1 + 1, i2));

            // 3) 'Cognome' token
            int i3 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR, i2 + 1);
            if (i3 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.COGNOME);
            }
            tokens.add(value.substring(i2 + 1, i3));

            // 4) 'IdProvider' token
            int i4 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR, i3 + 1);
            if (i4 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.ID_PROVIDER);
            }
            tokens.add(value.substring(i3 + 1, i4));

            // 5) 'Timestamp' token
            int i5 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR, i4 + 1);
            if (i5 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.TIMESTAMP);
            }
            tokens.add(value.substring(i4 + 1, i5));

            // 6) 'Livello Autenticazione' token
            int i6 = value.indexOf(IDENTITA_IRIDE_TOKEN_SEPARATOR, i5 + 1);
            if (i6 == -1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.LIVELLO_AUTENTICAZIONE);
            }
            tokens.add(value.substring(i5 + 1, i6));

            // 7) 'MAC' token
            if (value.length() <= i6 + 1) {
                throw new MissingIdentitaIrideTokenException(IdentitaIrideToken.MAC);
            }
            tokens.add(value.substring(i6 + 1));

            return tokens.toArray(new String[tokens.size()]);
        } catch (IndexOutOfBoundsException e) {
            throw new ErrorDuringTokenizationException(e);
        }
    }

}

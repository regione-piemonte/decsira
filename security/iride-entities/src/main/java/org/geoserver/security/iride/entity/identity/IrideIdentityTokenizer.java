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
package org.geoserver.security.iride.entity.identity;

import java.util.ArrayList;
import java.util.List;

import org.geoserver.security.iride.entity.identity.exception.IrideIdentityMissingTokenException;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.entity.identity.token.value.IrideIdentityMissingTokenValue;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> tokenizer.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityTokenizer {

    /**
     * Tokenize the given string value that should represents an <code>IRIDE</code> <code>Digital Identity</code>.<p>
     * A successful tokenization should return a string array composed of <em>exactly</em> {@link IrideIdentityToken#values()} length elements.<p>
     * If the given string value is {@code null}, then a {@link NullPointerException} is thrown.
     *
     * @param value a string value that should represents an <code>IRIDE</code> <code>Digital Identity</code>
     * @return <code>IRIDE</code> <code>Digital Identity</code> tokens.
     *         A successful tokenization should return a string array composed of <em>exactly</em> {@link IrideIdentityToken#values()} elements
     * @throws NullPointerException if the given string value is {@code null}
     * @throws IrideIdentityMissingTokenException a specialized <code>IrideIdentityTokenizationException</code> thrown as soon as
     *         any one of the seven expected tokens is not found in the tokenized string value
     */
    public String[] tokenize(String value) throws IrideIdentityMissingTokenException {
        final List<String> tokens = new ArrayList<>();

        // 1) 'Codice Fiscale' token
        int i1 = value.indexOf(IrideIdentityToken.SEPARATOR);
        if (i1 == -1) {
            throw newMissingTokenException(IrideIdentityToken.CODICE_FISCALE, value);
        }
        tokens.add(value.substring(0, i1));

        // 2) 'Nome' token
        int i2 = value.indexOf(IrideIdentityToken.SEPARATOR, i1 + 1);
        if (i2 == -1) {
            throw newMissingTokenException(IrideIdentityToken.NOME, value);
        }
        tokens.add(value.substring(i1 + 1, i2));

        // 3) 'Cognome' token
        int i3 = value.indexOf(IrideIdentityToken.SEPARATOR, i2 + 1);
        if (i3 == -1) {
            throw newMissingTokenException(IrideIdentityToken.COGNOME, value);
        }
        tokens.add(value.substring(i2 + 1, i3));

        // 4) 'IdProvider' token
        int i4 = value.indexOf(IrideIdentityToken.SEPARATOR, i3 + 1);
        if (i4 == -1) {
            throw newMissingTokenException(IrideIdentityToken.ID_PROVIDER, value);
        }
        tokens.add(value.substring(i3 + 1, i4));

        // 5) 'Timestamp' token
        int i5 = value.indexOf(IrideIdentityToken.SEPARATOR, i4 + 1);
        if (i5 == -1) {
            throw newMissingTokenException(IrideIdentityToken.TIMESTAMP, value);
        }
        tokens.add(value.substring(i4 + 1, i5));

        // 6) 'Livello Autenticazione' token
        int i6 = value.indexOf(IrideIdentityToken.SEPARATOR, i5 + 1);
        if (i6 == -1) {
            throw newMissingTokenException(IrideIdentityToken.LIVELLO_AUTENTICAZIONE, value);
        }
        tokens.add(value.substring(i5 + 1, i6));

        // 7) 'MAC' token
        if (value.length() <= i6 + 1) {
            throw newMissingTokenException(IrideIdentityToken.MAC, value);
        }
        tokens.add(value.substring(i6 + 1));

        return tokens.toArray(new String[tokens.size()]);
    }

    /**
     *
     * @param token
     * @param value
     * @return
     */
    private static IrideIdentityMissingTokenException newMissingTokenException(IrideIdentityToken token, String value) {
        return new IrideIdentityMissingTokenException(new IrideIdentityMissingTokenValue(token, value));
    }

}

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
package org.geoserver.security.iride.entity.identity.token;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> tokens.<p>
 * For each token the following bits of information are given:
 * <ul>
 *   <li>its position in an <code>IRIDE</code> <code>Digital Identity</code> string representation</li>
 *   <li>the name of the corresponding property in an <code>IRIDE</code> <code>Digital Identity</code> object</li>
 *   <li>a simple description</li>
 * </ul>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public enum IrideIdentityToken {

    /**
     * 'Codice Fiscale' <code>IRIDE</code> <code>Digital Identity</code> 1st token.
     */
    CODICE_FISCALE(0, "codFiscale", "Codice Fiscale"),

    /**
     * 'Nome' <code>IRIDE</code> <code>Digital Identity</code> 2nd token.
     */
    NOME(1, "nome", "Nome"),

    /**
     * 'Cognome' <code>IRIDE</code> <code>Digital Identity</code> 3rd token.
     */
    COGNOME(2, "cognome", "Cognome"),

    /**
     * 'IdProvider' <code>IRIDE</code> <code>Digital Identity</code> 4th token.
     */
    ID_PROVIDER(3, "idProvider", "IdProvider"),

    /**
     * 'Timestamp' <code>IRIDE</code> <code>Digital Identity</code> 5th token.
     */
    TIMESTAMP(4, "timestamp", "Timestamp"),

    /**
     * 'Livello Autenticazione' <code>IRIDE</code> <code>Digital Identity</code> 6th token.
     */
    LIVELLO_AUTENTICAZIONE(5, "livelloAutenticazione", "Livello Autenticazione"),

    /**
     * 'MAC' <code>IRIDE</code> <code>Digital Identity</code> 7th token.
     */
    MAC(6, "mac", "MAC"),
    ;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> tokens separator character.
     */
    public static final char SEPARATOR = '/';

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> token position.
     */
    private int position;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> token property name.
     */
    private String property;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> token description.
     */
    private String description;

    /**
     * Constructor.
     *
     * @param position <code>IRIDE</code> <code>Digital Identity</code> token position
     * @param property <code>IRIDE</code> <code>Digital Identity</code> token property name
     * @param description <code>IRIDE</code> <code>Digital Identity</code> token description
     */
    private IrideIdentityToken(int position, String property, String description) {
        this.position    = position;
        this.property    = property;
        this.description = description;
    }

    /**
     * Returns the <code>IRIDE</code> <code>Digital Identity</code> token position.
     *
     * @return the <code>IRIDE</code> <code>Digital Identity</code> token position
     */
    public int getPosition() {
        return this.position;
    }

    /**
     * Returns the <code>IRIDE</code> <code>Digital Identity</code> token property name.
     *
     * @return the <code>IRIDE</code> <code>Digital Identity</code> token property name
     */
    public String getProperty() {
        return this.property;
    }

    /**
     * Returns <code>IRIDE</code> <code>Digital Identity</code> token description.
     *
     * @return the <code>IRIDE</code> <code>Digital Identity</code> token description
     */
    public String getDescription() {
        return this.description;
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Enum#toString()
     */
    @Override
    public String toString() {
        return String.format("'%s' token, at position %d, for property %s", this.description, this.position, this.property);
    }

}

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

/**
 * Identit&agrave; Digitale <code>IRIDE</code> tokens.<p>
 * For each token the following bits of information are given:
 * <ul>
 *   <li>its position in an Identit&agrave; Digitale <code>IRIDE</code> string representation</li>
 *   <li>the name of the corresponding property in an Identit&agrave; Digitale <code>IRIDE</code> object</li>
 *   <li>a simple description</li>
 * </ul>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public enum IdentitaIrideToken {

    /**
     * 'Codice Fiscale' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    CODICE_FISCALE(1, "codFiscale", "Codice Fiscale"),

    /**
     * 'Nome' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    NOME(2, "nome", "Nome"),

    /**
     * 'Cognome' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    COGNOME(3, "cognome", "Cognome"),

    /**
     * 'IdProvider' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    ID_PROVIDER(4, "idProvider", "IdProvider"),

    /**
     * 'Timestamp' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    TIMESTAMP(5, "timestamp", "Timestamp"),

    /**
     * 'Livello Autenticazione' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    LIVELLO_AUTENTICAZIONE(6, "livelloAutenticazione", "Livello Autenticazione"),

    /**
     * 'MAC' Identit&agrave; Digitale <code>IRIDE</code> token.
     */
    MAC(7, "mac", "MAC"),
    ;

    /**
     * Identit&agrave; Digitale <code>IRIDE</code> token position.
     */
    private int position;

    /**
     * Identit&agrave; Digitale <code>IRIDE</code> token name.
     */
    private String property;

    /**
     * Identit&agrave; Digitale <code>IRIDE</code> token description.
     */
    private String description;

    /**
     * Constructor.
     *
     * @param position Identit&agrave; Digitale <code>IRIDE</code> token position
     * @param property Identit&agrave; Digitale <code>IRIDE</code> token name
     * @param description Identit&agrave; Digitale <code>IRIDE</code> token description
     */
    private IdentitaIrideToken(int position, String property, String description) {
        this.position    = position;
        this.property    = property;
        this.description = description;
    }

    /**
     * Returns the Identit&agrave; Digitale <code>IRIDE</code> token position.
     *
     * @return the Identit&agrave; Digitale <code>IRIDE</code> token position
     */
    public int getPosition() {
        return this.position;
    }

    /**
     * Returns the Identit&agrave; Digitale <code>IRIDE</code> token name.
     *
     * @return the Identit&agrave; Digitale <code>IRIDE</code> token name
     */
    public String getName() {
        return this.property;
    }

    /**
     * Returns Identit&agrave; Digitale <code>IRIDE</code> token description.
     *
     * @return the Identit&agrave; Digitale <code>IRIDE</code> token description
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

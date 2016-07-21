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
package org.geoserver.security.iride.identity;

import static org.geoserver.security.iride.util.builder.ToStringReflectionBuilder.reflectToString;

import java.io.Serializable;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.builder.CompareToBuilder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.geoserver.security.iride.identity.exception.IrideIdentityException;
import org.geoserver.security.iride.identity.exception.IrideIdentityInvalidTokensException;
import org.geoserver.security.iride.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;

/**
 * <code>IRIDE</code> Digital Identity entity object.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentity implements Comparable<IrideIdentity>, Serializable {

    private static final long serialVersionUID = -5499674345064933580L;

    /**
     * <code>IRIDE</code> Digital Identity tokens separator character.
     */
    public static final char IRIDE_IDENTITY_TOKEN_SEPARATOR = '/';

    /**
     * <code>IRIDE</code> Digital Identity entity 'Codice Fiscale' property.
     */
    private final String codFiscale;

    /**
     * <code>IRIDE</code> Digital Identity entity 'Nome' property.
     */
    private final String nome;

    /**
     * <code>IRIDE</code> Digital Identity entity 'Cognome' property.
     */
    private final String cognome;

    /**
     * <code>IRIDE</code> Digital Identity entity 'IdProvider' property.
     */
    private final String idProvider;

    /**
     * <code>IRIDE</code> Digital Identity entity 'Timestamp' property.
     */
    private final String timestamp;

    /**
     * <code>IRIDE</code> Digital Identity entity 'Livello Autenticazione' property.
     */
    private final int livelloAutenticazione;

    /**
     * <code>IRIDE</code> Digital Identity entity 'MAC' property.
     */
    private final String mac;

    /**
     * <code>IRIDE</code> Digital Identity entity internal representation.
     */
    private transient String internalRepresentation;

    /**
     * Constructor.
     *
     * @param irideDigitalIdentity <code>IRIDE</code> Digital Identity string representation
     *
     * @throws IrideIdentityException
     */
    public IrideIdentity(String irideDigitalIdentity) throws IrideIdentityException {
        final IrideIdentityTokenizer tokenizer = new IrideIdentityTokenizer();
        final IrideIdentityValidator validator = new IrideIdentityValidator();

        final String[] tokens = tokenizer.tokenize(irideDigitalIdentity);
        final IrideIdentityInvalidTokenValue[] invalidTokens = validator.validate(tokens);
        if (ArrayUtils.isNotEmpty(invalidTokens)) {
            throw new IrideIdentityInvalidTokensException(invalidTokens);
        }

        this.codFiscale            = tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()];
        this.nome                  = tokens[IrideIdentityToken.NOME.getPosition()];
        this.cognome               = tokens[IrideIdentityToken.COGNOME.getPosition()];
        this.idProvider            = tokens[IrideIdentityToken.ID_PROVIDER.getPosition()];
        this.timestamp             = tokens[IrideIdentityToken.TIMESTAMP.getPosition()];
        this.livelloAutenticazione = Integer.valueOf(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]);
        this.mac                   = tokens[IrideIdentityToken.MAC.getPosition()];

        this.internalRepresentation = null;
    }

    /**
     * Constructor.
     *
     * @param codFiscale <code>IRIDE</code> Digital Identity 'Codice Fiscale'
     * @param nome <code>IRIDE</code> Digital Identity 'Nome'
     * @param cognome <code>IRIDE</code> Digital Identity 'Cognome'
     * @param idProvider <code>IRIDE</code> Digital Identity 'IdProvider'
     * @param timestamp <code>IRIDE</code> Digital Identity 'Timestamp'
     * @param livelloAutenticazione <code>IRIDE</code> Digital Identity 'Livello Autenticazione'
     * @param mac <code>IRIDE</code> Digital Identity 'MAC'
     *
     * @throws IrideIdentityException
     */
    public IrideIdentity(
        String codFiscale,
        String nome,
        String cognome,
        String idProvider,
        String timestamp,
        int livelloAutenticazione,
        String mac) throws IrideIdentityException {
        final IrideIdentityValidator validator = new IrideIdentityValidator();

        final IrideIdentityInvalidTokenValue[] invalidTokens = validator.validate(new String[] {
            codFiscale,
            nome,
            cognome,
            idProvider,
            timestamp,
            String.valueOf(livelloAutenticazione),
            mac
        });
        if (ArrayUtils.isNotEmpty(invalidTokens)) {
            throw new IrideIdentityInvalidTokensException(invalidTokens);
        }

        this.codFiscale            = codFiscale;
        this.nome                  = nome;
        this.cognome               = cognome;
        this.idProvider            = idProvider;
        this.timestamp             = timestamp;
        this.livelloAutenticazione = livelloAutenticazione;
        this.mac                   = mac;

        this.internalRepresentation = null;
    }

    /**
     * @return the codFiscale
     */
    public String getCodFiscale() {
        return this.codFiscale;
    }

    /**
     * @return the nome
     */
    public String getNome() {
        return this.nome;
    }

    /**
     * @return the cognome
     */
    public String getCognome() {
        return this.cognome;
    }

    /**
     * @return the idProvider
     */
    public String getIdProvider() {
        return this.idProvider;
    }

    /**
     * @return the timestamp
     */
    public String getTimestamp() {
        return this.timestamp;
    }

    /**
     * @return the livelloAutenticazione
     */
    public int getLivelloAutenticazione() {
        return this.livelloAutenticazione;
    }

    /**
     * @return the mac
     */
    public String getMac() {
        return this.mac;
    }

    /**
     * Build and return the internal representation, as a string, of this {@link IrideIdentity} instance.
     *
     * @return the internal representation, as a string, of this given {@link IrideIdentity} instance
     */
    public String toInternalRepresentation() {
        if (this.internalRepresentation == null) {
            final StringBuilder builder = new StringBuilder();
            builder.append(this.codFiscale).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.nome).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.cognome).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.idProvider).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.timestamp).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.livelloAutenticazione).append(IRIDE_IDENTITY_TOKEN_SEPARATOR)
                   .append(this.mac);

            this.internalRepresentation = builder.toString();
        }

        return this.internalRepresentation;
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(IrideIdentity other) {
        // quick test
        if (this == other) {
            return 0;
        }

        final CompareToBuilder builder = new CompareToBuilder();
        builder.append(this.codFiscale, other.codFiscale)
               .append(this.nome, other.nome)
               .append(this.cognome, other.cognome)
               .append(this.idProvider, other.idProvider)
               .append(this.timestamp, other.timestamp)
               .append(this.livelloAutenticazione, other.livelloAutenticazione)
               .append(this.mac, other.mac);

        return builder.toComparison();
    }

    /* (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(this.codFiscale)
               .append(this.nome)
               .append(this.cognome)
               .append(this.idProvider)
               .append(this.timestamp)
               .append(this.livelloAutenticazione)
               .append(this.mac);

        return builder.toHashCode();
    }

    /* (non-Javadoc)
     * @see java.lang.Object#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        final IrideIdentity other = (IrideIdentity) obj;

        final EqualsBuilder builder = new EqualsBuilder();
        builder.append(this.codFiscale, other.codFiscale)
               .append(this.nome, other.nome)
               .append(this.cognome, other.cognome)
               .append(this.idProvider, other.idProvider)
               .append(this.timestamp, other.timestamp)
               .append(this.livelloAutenticazione, other.livelloAutenticazione)
               .append(this.mac, other.mac);

        return builder.isEquals();
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return reflectToString(this);
    }

}

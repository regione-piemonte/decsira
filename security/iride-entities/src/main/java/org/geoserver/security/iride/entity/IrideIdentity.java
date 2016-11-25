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
package org.geoserver.security.iride.entity;

import java.io.ObjectInputStream;
import java.io.Serializable;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.builder.CompareToBuilder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.geoserver.security.iride.entity.exception.IrideEntitySerializationException;
import org.geoserver.security.iride.entity.identity.IrideIdentityFormatter;
import org.geoserver.security.iride.entity.identity.IrideIdentityFormatter.FormatStyle;
import org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer;
import org.geoserver.security.iride.entity.identity.IrideIdentityValidator;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityInvalidTokensException;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityTokenizationException;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.entity.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geoserver.security.iride.entity.util.Utils;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> entity.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentity implements Comparable<IrideIdentity>, Serializable {

    private static final long serialVersionUID = -5499674345064933580L;

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.ENTITY.getLogger();

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> formatter instance.
     */
    private static final IrideIdentityFormatter FORMATTER = new IrideIdentityFormatter();

    /**
     * IRIDE <code>Digital Identity</code> tokenizer instance.
     *
     * @see IrideIdentityTokenizer
     */
    private static final IrideIdentityTokenizer TOKENIZER = new IrideIdentityTokenizer();

    /**
     * IRIDE <code>Digital Identity</code> validator instance.
     *
     * @see IrideIdentityValidator
     */
    private static final IrideIdentityValidator VALIDATOR = new IrideIdentityValidator();

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Codice Fiscale' property.
     */
    private final String codFiscale;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Nome' property.
     */
    private final String nome;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Cognome' property.
     */
    private final String cognome;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'IdProvider' property.
     */
    private final String idProvider;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Timestamp' property.
     */
    private final String timestamp;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Livello Autenticazione' property.
     */
    private final int livelloAutenticazione;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'MAC' property.
     */
    private final String mac;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity internal representation.
     */
    private transient String internalRepresentation;

    /**
     * Constructor.<p>
     * Builds an <code>IRIDE</code> <code>Digital Identity</code> entity
     * out of an <code>IRIDE</code> <code>Digital Identity</code> string representation,
     * which is first tokenized, with {@link IrideIdentityTokenizer#tokenize(String)},
     * and then validated, with {@link IrideIdentityValidator#validate(String[])}.
     *
     * If the given <code>IRIDE</code> <code>Digital Identity</code> string representation value is {@code null}, then a {@link NullPointerException} is thrown.
     *
     * @see IrideIdentityTokenizer#tokenize(String)
     * @see IrideIdentityValidator#validate(String[])
     *
     * @param irideDigitalIdentity <code>IRIDE</code> <code>Digital Identity</code> string representation
     * @throws NullPointerException if the given <code>IRIDE</code> <code>Digital Identity</code> string representation value is {@code null}
     * @throws IrideIdentityTokenizationException if any error occurs during tokenization or validation processes
     */
    public IrideIdentity(String irideDigitalIdentity) throws IrideIdentityTokenizationException {
        this(TOKENIZER.tokenize(irideDigitalIdentity));
    }

    /**
     * Constructor.<p>
     * Builds an <code>IRIDE</code> <code>Digital Identity</code> entity
     * out of the given <code>IRIDE</code> <code>Digital Identity</code> parameters,
     * which are validated with {@link IrideIdentityValidator#validate(String[])}.
     *
     * @see IrideIdentityValidator#validate(String[])
     *
     * @param codFiscale <code>IRIDE</code> <code>Digital Identity</code> 'Codice Fiscale'
     * @param nome <code>IRIDE</code> <code>Digital Identity</code> 'Nome'
     * @param cognome <code>IRIDE</code> <code>Digital Identity</code> 'Cognome'
     * @param idProvider <code>IRIDE</code> <code>Digital Identity</code> 'IdProvider'
     * @param timestamp <code>IRIDE</code> <code>Digital Identity</code> 'Timestamp'
     * @param livelloAutenticazione <code>IRIDE</code> <code>Digital Identity</code> 'Livello Autenticazione'
     * @param mac <code>IRIDE</code> <code>Digital Identity</code> 'MAC'
     * @throws IrideIdentityTokenizationException if any error occurs during tokenization or validation processes
     */
    public IrideIdentity(String codFiscale, String nome, String cognome, String idProvider, String timestamp, int livelloAutenticazione, String mac) throws IrideIdentityTokenizationException {
        this(new String[] { codFiscale, nome, cognome, idProvider, timestamp, String.valueOf(livelloAutenticazione), mac });
    }

    /**
     * Constructor.<p>
     * Builds an <code>IRIDE</code> <code>Digital Identity</code> entity
     * out of the given <code>IRIDE</code> <code>Digital Identity</code> string representation tokens,
     * which are validated with {@link IrideIdentityValidator#validate(String[])}.
     *
     * @see IrideIdentityValidator#validate(String[])
     *
     * @param tokens <code>IRIDE</code> <code>Digital Identity</code> string representation tokens
     * @throws IllegalArgumentException if given tokens array length is not equal to the expected length,
     *         which should be {@link IrideIdentityToken#values()} length
     *         (i.e.: the number of tokens defined in {@link IrideIdentityToken} enum).<br />
     *         {@code null} tokens array is considered of length 0.
     * @throws IrideIdentityTokenizationException if any error occurs during tokenization or validation processes
     */
    public IrideIdentity(String... tokens) throws IrideIdentityTokenizationException {
        final IrideIdentityInvalidTokenValue[] invalidTokens = VALIDATOR.validate(tokens);
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
     * Utility method to parse an <code>IRIDE</code> <code>Digital Identity</code> string representation,
     * returning an <code>IRIDE</code> <code>Digital Identity</code> entity if the given string value
     * represents a valid <code>IRIDE</code> <code>Digital Identity</code>, {@code null} otherwise.
     *
     * @param irideDigitalIdentity an <code>IRIDE</code> <code>Digital Identity</code> string representation
     * @return an <code>IRIDE</code> <code>Digital Identity</code> entity if the given string value
     *         represents a valid <code>IRIDE</code> <code>Digital Identity</code>, {@code null} otherwise
     */
    public static IrideIdentity parseIrideIdentity(String irideDigitalIdentity) {
        IrideIdentity irideIdentity = null;
        try {
            irideIdentity = new IrideIdentity(StringUtils.defaultString(irideDigitalIdentity));
        } catch (IrideIdentityTokenizationException e) {
            LOGGER.trace("IRIDE Identity tokenization error: {}", e.getMessage());
        }

        return irideIdentity;
    }

    /**
     * Utility method to validate an <code>IRIDE</code> <code>Digital Identity</code> string representation,
     * returning {@code true} if the given string value represents a valid <code>IRIDE</code> <code>Digital Identity</code>,
     * {@code false} otherwise.
     *
     * @param irideDigitalIdentity an <code>IRIDE</code> <code>Digital Identity</code> string representation
     * @return {@code true} if the given string value represents a valid <code>IRIDE</code> <code>Digital Identity</code>,
     *         {@code false} otherwise
     */
    public static boolean isValidIrideIdentity(String irideDigitalIdentity) {
        if (StringUtils.isEmpty(irideDigitalIdentity)) {
            return false;
        }

        try {
            final IrideIdentityInvalidTokenValue[] invalidTokens = VALIDATOR.validate(
                TOKENIZER.tokenize(irideDigitalIdentity)
            );

            if (ArrayUtils.isEmpty(invalidTokens)) {
                return true;
            } else {
                LOGGER.trace(Utils.toString(invalidTokens));

                return false;
            }
        } catch (IrideIdentityTokenizationException e) {
            LOGGER.trace("IRIDE Identity tokenization error: {}", e.getMessage());

            return false;
        }
    }

    /**
     * Utility method to validate an <code>IRIDE</code> <code>Digital Identity</code> string representation,
     * returning {@code true} if the given string value <em>does not</em> represent a valid <code>IRIDE</code> <code>Digital Identity</code>,
     * {@code false} otherwise.
     *
     * @param irideDigitalIdentity an <code>IRIDE</code> <code>Digital Identity</code> string representation
     * @return {@code true} if the given string value <em>does not</em> represent a valid <code>IRIDE</code> <code>Digital Identity</code>,
     *         {@code false} otherwise
     */
    public static boolean isNotValidIrideIdentity(String irideDigitalIdentity) {
        return ! isValidIrideIdentity(irideDigitalIdentity);
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
            this.internalRepresentation = FORMATTER.format(this, FormatStyle.INTERNAL_REPRESENTATION);
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
        return FORMATTER.format(this, FormatStyle.TO_STRING_REPRESENTATION);
    }

    /**
     * Serializes this {@link IrideIdentity} instance.
     *
     * @return a new {@link SerializationProxy} for this {@link IrideIdentity} instance
     */
    private Object writeReplace() {
        return new SerializationProxy(this);
    }

    /**
     * Prevents deserialization attempts outside of the serialization proxy pattern.
     *
     * @param object
     */
    private void readObject(ObjectInputStream object) {
        throw new IrideEntitySerializationException("Serialization Proxy required!");
    }

    /**
     * Serialization proxy class for <code>IRIDE</code> <code>Digital Identity</code> entities.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     *
     * @see the <em>Serialization Proxy Pattern</em> as described in
     *      Joshua Bloch's "Effective Java, (2n Edition)", Item 78: Consider serialization proxies instead of serialized instances
     */
    private static final class SerializationProxy implements Serializable {

        private static final long serialVersionUID = -7526003150371224025L;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'Codice Fiscale' property.
         */
        private final String codFiscale;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'Nome' property.
         */
        private final String nome;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'Cognome' property.
         */
        private final String cognome;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'IdProvider' property.
         */
        private final String idProvider;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'Timestamp' property.
         */
        private final String timestamp;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'Livello Autenticazione' property.
         */
        private final int livelloAutenticazione;

        /**
         * <code>IRIDE</code> <code>Digital Identity</code> entity 'MAC' property.
         */
        private final String mac;

        /**
         * Constructor.
         *
         * @param irideIdentity {@link IrideIdentity} instance to serialize
         */
        public SerializationProxy(IrideIdentity irideIdentity) {
            this.codFiscale            = irideIdentity.codFiscale;
            this.nome                  = irideIdentity.nome;
            this.cognome               = irideIdentity.cognome;
            this.idProvider            = irideIdentity.idProvider;
            this.timestamp             = irideIdentity.timestamp;
            this.livelloAutenticazione = irideIdentity.livelloAutenticazione;
            this.mac                   = irideIdentity.mac;
        }

        /**
         * Deserializes a new {@link IrideIdentity} instance.
         *
         * @return a new {@link IrideIdentity} instance
         *
         * @throws IrideIdentityApplicationException
         */
        private Object readResolve() {
            try {
                return new IrideIdentity(this.codFiscale, this.nome, this.cognome, this.idProvider, this.timestamp, this.livelloAutenticazione, this.mac);
            } catch (IrideIdentityTokenizationException e) {
                throw new IrideEntitySerializationException("An error occured during deserialization", e);
            }
        }

    }

}

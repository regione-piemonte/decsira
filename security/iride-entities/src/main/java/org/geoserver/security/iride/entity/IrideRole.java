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

import com.google.common.base.Preconditions;

/**
 * <code>IRIDE</code> Role entity.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRole implements Comparable<IrideRole>, Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * <code>IRIDE</code> Role tokens separator: the "@" string.
     */
    private static final String SEPARATOR = "@";

    /**
     * <code>IRIDE</code> Role mnemonic string representation format.
     */
    private static final String TO_STRING_FORMAT = "%s" + SEPARATOR + "%s";

    /**
     * <code>IRIDE</code> Role code.
     */
    private final String code;

    /**
     * <code>IRIDE</code> Role domain code.
     */
    private final String domain;

    /**
     * Constructor.
     *
     * @param code <code>IRIDE</code> Role code
     * @param domain <code>IRIDE</code> Role domain code
     * @throws IllegalArgumentException if code or domain are either {@code null}
     *         or empty (as per {@link StringUtils#isEmpty(String)}) strings
     */
    public IrideRole(String code, String domain) {
        Preconditions.checkArgument(StringUtils.isNotBlank(code));
        Preconditions.checkArgument(StringUtils.isNotBlank(domain));

        this.code   = StringUtils.upperCase(code);
        this.domain = StringUtils.upperCase(domain);
    }

    /**
     * Utility method to parse an <code>IRIDE</code> Role mnemonic string representation.<br />
     * It accepts a mnemonic string representation, expressed with the following format: <code>"role code{@link #SEPARATOR}domain code"</code>.
     *
     * @param mnemonic <code>IRIDE</code> Role mnemonic string representation
     * @return an <code>IRIDE</code> Role entity object
     * @throws IllegalArgumentException if the given mnemonic string representation is not in the expected format
     */
    public static IrideRole parseRole(String mnemonic) {
        final String[] tokens = StringUtils.splitByWholeSeparator(mnemonic, SEPARATOR);
        if (ArrayUtils.getLength(tokens) != 2) {
            throw new IllegalArgumentException(mnemonic);
        }

        return new IrideRole(tokens[0], tokens[1]);
    }

    /**
     * Returns the <code>IRIDE</code> Role code.
     *
     * @return the <code>IRIDE</code> Role code
     */
    public String getCode() {
        return this.code;
    }

    /**
     * Returns the <code>IRIDE</code> Role domain code.
     *
     * @return the <code>IRIDE</code> Role domain code
     */
    public String getDomain() {
        return this.domain;
    }

    /**
     * Returns the <code>IRIDE</code> Role mnemonic string representation.
     *
     * @return <code>IRIDE</code> Role mnemonic string representation
     */
    public String toMnemonicRepresentation() {
        return String.format(TO_STRING_FORMAT, this.code, this.domain);
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(IrideRole other) {
        // quick test
        if (this == other) {
            return 0;
        }

        final CompareToBuilder builder = new CompareToBuilder();
        builder.append(this.code, this.domain);

        return builder.toComparison();
    }

    /* (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(this.code)
               .append(this.domain);

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

        final IrideRole other = (IrideRole) obj;

        final EqualsBuilder builder = new EqualsBuilder();
        builder.append(this.code, other.code)
               .append(this.domain, other.domain);

        return builder.isEquals();
    }

    /**
     * Returns the <code>IRIDE</code> Role mnemonic string representation.
     *
     * @see #toMnemonicRepresentation()
     * @return <code>IRIDE</code> Role mnemonic string representation
     */
    /*
     * (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return this.toMnemonicRepresentation();
    }

    /**
     * Serializes this {@link IrideRole} instance.
     *
     * @return a new {@link SerializationProxy} for this {@link IrideRole} instance
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
     * Serialization proxy class for <code>IrideRole</code> entities.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     *
     * @see the <em>Serialization Proxy Pattern</em> as described in
     *      Joshua Bloch's "Effective Java, (2n Edition)", Item 78: Consider serialization proxies instead of serialized instances
     */
    private static final class SerializationProxy implements Serializable {

        private static final long serialVersionUID = 8879255647718171571L;

        /**
         * <code>IRIDE</code> Role code.
         */
        private final String code;

        /**
         * <code>IRIDE</code> Role domain code.
         */
        private final String domain;

        /**
         * Constructor.
         *
         * @param role {@link IrideRole} instance to serialize
         */
        public SerializationProxy(IrideRole role) {
            this.code   = role.code;
            this.domain = role.domain;
        }

        /**
         * Deserializes a new {@link IrideRole} instance.
         *
         * @return a new {@link IrideRole} instance
         */
        private Object readResolve() {
            return new IrideRole(this.code, this.domain);
        }

    }

}

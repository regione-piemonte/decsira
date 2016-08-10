/*
 *  GeoServer Security Provider plugin with which doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package it.csi.iride2.iridefed.entity;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

/**
 * <code>IRIDE</code> Role entity object.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Role {

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
    private String code;

    /**
     * <code>IRIDE</code> Role domain code.
     */
    private String domain;

    /**
     * Constructor.
     */
    public Role() {
        /* NOP */
    }

    /**
     * Constructor.
     *
     * @param code <code>IRIDE</code> Role domain code
     * @param domain <code>IRIDE</code> Role role code
     */
    public Role(String code, String domain) {
        this.setCode(code);
        this.setDomain(domain);
    }

    /**
     * Utility method to parse an <code>IRIDE</code> Role mnemonic string representation.<br />
     * It accepts a mnemonic string representation, expressed with the following format: <code>"role code{@link #SEPARATOR}domain code"</code>.
     *
     * @param mnemonic <code>IRIDE</code> Role mnemonic string representation
     * @return an <code>IRIDE</code> Role entity object
     * @throws IllegalArgumentException if the given mnemonic string representation is not in the expected format
     */
    public static Role parseRole(String mnemonic) {
        final String[] tokens = StringUtils.splitByWholeSeparator(mnemonic, SEPARATOR);
        if (ArrayUtils.getLength(tokens) != 2) {
            throw new IllegalArgumentException(mnemonic);
        }

        return new Role(tokens[0], tokens[1]);
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
     * Set the <code>IRIDE</code> Role code.
     *
     * @param code the <code>IRIDE</code> Role code
     */
    public void setCode(String code) {
        this.code = StringUtils.upperCase(code);
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
     * Set the <code>IRIDE</code> Role domain code.
     *
     * @param domain the <code>IRIDE</code> Role domain code
     */
    public void setDomain(String domain) {
        this.domain = StringUtils.upperCase(domain);
    }

    /**
     * Returns the <code>IRIDE</code> Role mnemonic string representation.
     *
     * @return <code>IRIDE</code> Role mnemonic string representation
     */
    public String toMnemonicRepresentation() {
        return String.format(TO_STRING_FORMAT, this.code, this.domain);
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

        final Role other = (Role) obj;

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

}

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
import java.util.Collections;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.lang.builder.CompareToBuilder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.geoserver.security.iride.entity.exception.IrideEntitySerializationException;

import com.google.common.base.Function;
import com.google.common.base.Preconditions;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Maps;

/**
 * <code>IRIDE</code> <code>InfoPersona</code> entity.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideInfoPersona implements Comparable<IrideInfoPersona>, Serializable {

    private static final long serialVersionUID = 9084698382501836487L;

    /**
     * <code>IRIDE</code> <code>InfoPersona</code> string representation.
     */
    private static final String TO_STRING_FORMAT = "InfoPersona[%s,%s]";

    /**
     * <code>IRIDE</code> Role entity.
     */
    private final IrideRole role;

    /**
     * <code>InfoPersona</code> properties,
     * expressed as an <em><a href="http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMap.html">immutable</a></em> {@link Map} instance.
     */
    private final ImmutableMap<String, Object> properties;

    /**
     * Constructor.
     *
     * @param role <code>IRIDE</code> Role entity
     */
    public IrideInfoPersona(IrideRole role) {
        this(role, Collections.<String, Object>emptyMap());
    }

    /**
     * Constructor.
     *
     * @param role
     * @param properties
     */
    public IrideInfoPersona(IrideRole role, final Properties properties) {
        this(role, Maps.toMap(
            properties.stringPropertyNames(),
            new Function<String, Object>() {
                /*
                 * (non-Javadoc)
                 * @see com.google.common.base.Function#apply(java.lang.Object)
                 */
                @Override
                public Object apply(String key) {
                    return properties.getProperty(key);
                }
            })
        );
    }

    /**
     * Constructor.
     *
     * @param role <code>IRIDE</code> Role entity
     * @param properties <code>InfoPersona</code> properties
     */
    public IrideInfoPersona(IrideRole role, Map<String, Object> properties) {
        Preconditions.checkArgument(role != null);

        this.role       = role;
        this.properties = properties == null
            ? ImmutableMap.<String, Object>of()
            : ImmutableMap.copyOf(properties);
    }

    /**
     * Get the <code>IRIDE</code> Role entity object.
     *
     * @return the <code>IRIDE</code> Role entity object
     */
    public IrideRole getRole() {
        return this.role;
    }

    /**
     * Get the <code>InfoPersona</code> properties.
     * The returned {@link Map} instance is <em><a href="http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMap.html">immutable</a></em>.
     *
     * @return the <code>InfoPersona</code> properties
     */
    public Map<String, Object> getProperties() {
        return this.properties;
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(IrideInfoPersona other) {
        // quick test
        if (this == other) {
            return 0;
        }

        final CompareToBuilder builder = new CompareToBuilder();
        builder.append(this.role, other.role);

        return builder.toComparison();
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(this.role);

        return builder.toHashCode();
    }

    /*
     * (non-Javadoc)
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

        final IrideInfoPersona other = (IrideInfoPersona) obj;

        final EqualsBuilder builder = new EqualsBuilder();
        builder.append(this.role, other.role);

        return builder.isEquals();
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return String.format(TO_STRING_FORMAT, this.role, this.properties);
    }

    /**
     * Serializes this {@link IrideInfoPersona} instance.
     *
     * @return a new {@link SerializationProxy} for this {@link IrideInfoPersona} instance
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
     * Serialization proxy class for <code>InfoPersona</code> entities.
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     *
     * @see the <em>Serialization Proxy Pattern</em> as described in
     *      Joshua Bloch's "Effective Java, (2n Edition)", Item 78: Consider serialization proxies instead of serialized instances
     */
    private static final class SerializationProxy implements Serializable {

        private static final long serialVersionUID = 205794044832146769L;

        /**
         * <code>IRIDE</code> Role entity.
         */
        private final IrideRole role;

        /**
         * <code>InfoPersona</code> properties,
         * expressed as an <em><a href="http://google.github.io/guava/releases/snapshot/api/docs/com/google/common/collect/ImmutableMap.html">immutable</a></em> {@link Map} instance.
         */
        private final ImmutableMap<String, Object> properties;

        /**
         * Constructor.
         *
         * @param infoPersona {@link IrideInfoPersona} instance to serialize
         */
        public SerializationProxy(IrideInfoPersona infoPersona) {
            this.role       = infoPersona.role;
            this.properties = infoPersona.properties == null
                ? ImmutableMap.<String, Object>of()
                : ImmutableMap.copyOf(infoPersona.properties);
        }

        /**
         * Deserializes a new {@link IrideInfoPersona} instance.
         *
         * @return a new {@link IrideInfoPersona} instance
         */
        private Object readResolve() {
            return new IrideInfoPersona(this.role, this.properties);
        }

    }

}

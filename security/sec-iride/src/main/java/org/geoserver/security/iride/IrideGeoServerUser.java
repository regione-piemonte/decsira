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
package org.geoserver.security.iride;

import java.util.Collection;
import java.util.Set;

import org.apache.commons.lang.ArrayUtils;
import org.geoserver.security.impl.GeoServerUser;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.IrideInfoPersona;
import org.geoserver.security.iride.util.IrideUserProperties;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import com.google.common.collect.ImmutableSet;

/**
 * <code>IRIDE</code> specialized {@link GeoServerUser}: it adds the following functionalities to the base class,
 * easing the operations involving <code>IRIDE</code> <em>User Properties</em> (see {@link GeoServerUser#getProperties()}):
 * <ul>
 *   <li>defines constants for referencing <code>IRIDE</code> <em>User Properties</em>:
 *     <ul>
 *       <li>{@link IrideUserProperties#IRIDE_IDENTITY}</li>
 *       <li>{@link IrideUserProperties#INFO_PERSONAE}</li>
 *     </ul>
 *   </li>
 *   <li>specialized <a href="https://en.wikipedia.org/wiki/Mutator_method">accessor/mutator methods</a> to manipulate <code>IRIDE</code> <em>User Properties</em>.
 *     <ul>
 *       <li>{@link #hasIrideIdentity()}/{@link #getIrideIdentity()}/{@link #setIrideIdentity(IrideIdentity)}</li>
 *       <li>{@link #hasInfoPersonae()}/{@link #getInfoPersonae()}/{@link #setInfoPersonae(Set)}</li>
 *     </ul>
 *   </li>
 *   <li>specialized {@link #toString()} adding <code>IRIDE</code> <em>User Properties</em> detail.</li>
 * </ul>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideGeoServerUser extends GeoServerUser {

    private static final long serialVersionUID = 4174436058680260397L;

    /**
     * Constructor.
     *
     * @param username
     */
    public IrideGeoServerUser(String username) {
        super(username);
    }

    // TODO: check if the check against null is really needed, and keep or remove the method accordingly
    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.GeoServerUser#getPassword()
     */
    @Override
    public String getPassword() {
        if (super.getPassword() == null) {
            this.setPassword("");
        }

        return super.getPassword();
    }

    /**
     * Returns {@code true} if this <code>IRIDE</code> specialized {@link GeoServerUser}
     * instance has an associated {@link IrideIdentity} instance, {@code false} otherwise.
     *
     * @return {@code true} if this <code>IRIDE</code> specialized {@link GeoServerUser}
     *         instance has an associated {@link IrideIdentity} instance, {@code false} otherwise
     */
    public boolean hasIrideIdentity() {
        return
            this.getProperties().containsKey(IrideUserProperties.IRIDE_IDENTITY) &&
            this.getProperties().get(IrideUserProperties.IRIDE_IDENTITY) instanceof IrideIdentity;
    }

    /**
     * Get the {@link IrideIdentity} instance associated with this <code>IRIDE</code> specialized {@link GeoServerUser}.
     *
     * @return the {@link IrideIdentity} instance associated with this <code>IRIDE</code> specialized {@link GeoServerUser}
     */
    public IrideIdentity getIrideIdentity() {
        return (IrideIdentity) this.getProperties().get(IrideUserProperties.IRIDE_IDENTITY);
    }

    /**
     * Set the {@link IrideIdentity} instance associated with this <code>IRIDE</code> specialized {@link GeoServerUser}.
     */
    public void setIrideIdentity(IrideIdentity irideIdentity) {
        this.getProperties().put(IrideUserProperties.IRIDE_IDENTITY, irideIdentity);
    }

    /**
     * Returns {@code true} if this <code>IRIDE</code> specialized {@link GeoServerUser}
     * instance has one or more associated {@link IrideInfoPersona} instances expressed as a set, {@code false} otherwise.
     *
     * @return {@code true} if this <code>IRIDE</code> specialized {@link GeoServerUser}
     *         instance has one or more associated {@link IrideInfoPersona} instances expressed as a set, {@code false} otherwise
     */
    @SuppressWarnings("unchecked")
    public boolean hasInfoPersonae() {
        return
            this.getProperties().containsKey(IrideUserProperties.INFO_PERSONAE) &&
            ! CollectionUtils.isEmpty((Set<IrideInfoPersona>) this.getProperties().get(IrideUserProperties.INFO_PERSONAE));
    }

    /**
     * Get the {@link IrideInfoPersona} instances associated with this <code>IRIDE</code> specialized {@link GeoServerUser}.
     *
     * @return the {@link IrideInfoPersona} instances associated with this <code>IRIDE</code> specialized {@link GeoServerUser}
     */
    @SuppressWarnings("unchecked")
    public Set<IrideInfoPersona> getInfoPersonae() {
        return (Set<IrideInfoPersona>) this.getProperties().get(IrideUserProperties.INFO_PERSONAE);
    }

    /**
     * Set the {@link IrideInfoPersona} instances associated with this <code>IRIDE</code> specialized {@link GeoServerUser}
     * with an <em>immutable</em> {@link Set} derived from the given {@link IrideInfoPersona} {@link Collection}.
     */
    public void setInfoPersonae(Collection<IrideInfoPersona> infoPersonae) {
        this.getProperties().put(IrideUserProperties.INFO_PERSONAE, infoPersonae == null ? ImmutableSet.<IrideInfoPersona>of() : ImmutableSet.copyOf(infoPersonae));
    }

    /**
     * Set the {@link IrideInfoPersona} instances associated with this <code>IRIDE</code> specialized {@link GeoServerUser}
     * with an <em>immutable</em> {@link Set} derived from the given {@link IrideInfoPersona} array.
     */
    public void setInfoPersonae(IrideInfoPersona[] infoPersonae) {
        this.setInfoPersonae(ArrayUtils.isEmpty(infoPersonae) ? ImmutableSet.<IrideInfoPersona>of() : ImmutableSet.copyOf(infoPersonae));
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.impl.GeoServerUser#toString()
     */
    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder(StringUtils.trimTrailingWhitespace(super.toString()));
        sb.append("; ").append("User Properties: ").append(this.getProperties());

        return sb.toString();
    }

}

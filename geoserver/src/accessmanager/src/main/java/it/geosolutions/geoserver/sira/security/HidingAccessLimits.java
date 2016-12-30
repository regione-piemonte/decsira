/*
 *  CSI SIRA - Access Manager Security Module ("Rules Engine"), a GeoServer Secure Catalog Resource Access Manager plugin with which specify advanced rules evaluated to decide what the specified user can access.
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
package it.geosolutions.geoserver.sira.security;

import it.geosolutions.geoserver.sira.security.config.Attributes.Choose;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.geoserver.security.CatalogMode;
import org.geoserver.security.VectorAccessLimits;
import org.opengis.filter.Filter;
import org.opengis.filter.expression.PropertyName;
import org.springframework.security.core.Authentication;

/**
 * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code> specialized {@link VectorAccessLimits} subclass
 * giving client code the ability to specify a list of properties that should be removed
 * from the retrieved resources (typically feature types).
 *
 * <p>
 * Works in combination with {@link SecuredMappingFeatureIterator}.
 * </p>
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class HidingAccessLimits extends VectorAccessLimits {

    private static final long serialVersionUID = 8822794908734200548L;

    /**
     * The list of properties that should be removed from the retrieved resources (typically feature types).
     */
    private final transient List<PropertyName> hiddenProperties = new ArrayList<>();

    /**
     * The authentication token giving access to the user requesting the resource under limits.
     */
    private final transient Authentication auth;

    /**
     * Dinamically choosen properties to hide.
     */
    private final transient Choose chooseHiddenProperties;

    /**
     * Constructor.
     *
     * @param mode
     * @param readAttributes
     * @param readFilter
     * @param writeAttributes
     * @param writeFilter
     * @param auth the authentication token giving access to the user requesting the resource under limits
     * @param chooseHiddenProperties dinamically choosen properties to hide
     */
    public HidingAccessLimits(CatalogMode mode, List<PropertyName> readAttributes, Filter readFilter, List<PropertyName> writeAttributes, Filter writeFilter, Authentication auth, Choose chooseHiddenProperties) {
        super(mode, readAttributes, readFilter, writeAttributes, writeFilter);

        this.auth = auth;
        this.chooseHiddenProperties = chooseHiddenProperties == null ? new Choose() : chooseHiddenProperties;
    }

    /**
     *
     * @return the list of properties to hide
     */
    public List<PropertyName> getHiddenProperties() {
        return this.hiddenProperties;
    }

    /**
     * Get the authentication token giving access to the user requesting the resource under limits.
     *
     * @return the authentication token giving access to the user requesting the resource under limits
     */
    public Authentication getAuth() {
        return this.auth;
    }

    /**
     * @return the chooseHiddenProperties
     */
    public Choose getChooseHiddenProperties() {
        return this.chooseHiddenProperties;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.VectorAccessLimits#hashCode()
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        final HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(this.hiddenProperties)
               .append(this.chooseHiddenProperties)
               .append(this.auth);

        return prime * super.hashCode() + builder.toHashCode();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.VectorAccessLimits#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (! super.equals(obj)) {
            return false;
        }
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        final HidingAccessLimits other = (HidingAccessLimits) obj;

        final EqualsBuilder builder = new EqualsBuilder();
        builder.append(this.hiddenProperties, other.hiddenProperties)
               .append(this.chooseHiddenProperties, other.chooseHiddenProperties)
               .append(this.auth, other.auth);

        return builder.isEquals();
    }

}

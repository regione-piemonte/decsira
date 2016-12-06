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

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.geoserver.security.CatalogMode;
import org.geoserver.security.VectorAccessLimits;
import org.geotools.factory.CommonFactoryFinder;
import org.opengis.filter.Filter;
import org.opengis.filter.FilterFactory2;
import org.opengis.filter.expression.PropertyName;

/**
 * {@link VectorAccessLimits} subclass giving client code the ability to specify a list of properties
 * that should be removed from the retrieved resources (typically feature types).
 *
 * <p>
 * Works in combination with {@link SecuredMappingFeatureIterator}.
 * </p>
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class HidingAccessLimits extends VectorAccessLimits {

    private static final long serialVersionUID = 7485101131641588345L;

    /**
     * Filter
     */
    private static final FilterFactory2 FF = CommonFactoryFinder.getFilterFactory2(null);

    /**
     * The list of properties that should be removed from the retrieved resources (typically feature types).
     */
    private transient List<PropertyName> hiddenProperties = new ArrayList<>();

    /**
     * Constructor.
     *
     * @param mode
     * @param readAttributes
     * @param readFilter
     * @param writeAttributes
     * @param writeFilter
     */
    public HidingAccessLimits(CatalogMode mode, List<PropertyName> readAttributes, Filter readFilter, List<PropertyName> writeAttributes, Filter writeFilter) {
        super(mode, readAttributes, readFilter, writeAttributes, writeFilter);
    }

    /**
     *
     * @return the list of properties to hide
     */
    public List<PropertyName> getHiddenProperties() {
        return this.hiddenProperties;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.VectorAccessLimits#hashCode()
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((this.hiddenProperties == null) ? 0 : this.hiddenProperties.hashCode());
        return result;
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
        if (! super.equals(obj)) {
            return false;
        }
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        final HidingAccessLimits other = (HidingAccessLimits) obj;
        if (this.hiddenProperties == null) {
            if (other.hiddenProperties != null) {
                return false;
            }
        } else if (! this.hiddenProperties.equals(other.hiddenProperties)) {
            return false;
        }

        return true;
    }

    /**
     * Deserialization
     *
     * @param in
     * @throws IOException
     * @throws ClassNotFoundException
     */
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        in.defaultReadObject();

        this.hiddenProperties = this.readAttributes(in);
    }

    /**
     * Serialization
     *
     * @param out
     * @throws IOException
     */
    private void writeObject(ObjectOutputStream out) throws IOException {
        out.defaultWriteObject();

        this.writeAttributes(this.hiddenProperties, out);
    }

    /**
     *
     * @param attributes
     * @param oos
     * @throws IOException
     */
    private void writeAttributes(List<PropertyName> attributes, ObjectOutputStream oos) throws IOException {
        if (attributes == null) {
            oos.writeInt(-1);
        } else {
            oos.writeInt(attributes.size());
            for (final PropertyName property : attributes) {
                oos.writeObject(property.getPropertyName());
                // TODO: write out the namespace support as well
            }
        }
    }

    /**
     *
     * @param ois
     * @return
     * @throws IOException
     * @throws ClassNotFoundException
     */
    private List<PropertyName> readAttributes(ObjectInputStream ois) throws IOException, ClassNotFoundException {
        final List<PropertyName> properties = new ArrayList<>();

        int size = ois.readInt();
        if (size > -1) {
            for (int i = 0; i < size; i++) {
                String name = (String) ois.readObject();

                properties.add(FF.property(name));
                // TODO: read out the namespace support as well
            }
        }

        return properties;
    }

}

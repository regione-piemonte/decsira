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

import org.geoserver.platform.ExtensionPriority;
import org.geoserver.security.WrapperPolicy;
import org.geoserver.security.decorators.SecuredObjectFactory;
import org.geotools.data.complex.IMappingFeatureIterator;

/**
 * Specialized {@link SecuredObjectFactory} wrapping {@link IMappingFeatureIterator}
 * instances with a {@link SecuredMappingFeatureIterator}.
 *
 * <p>
 * Mainly useful to secure Application Schema DataStores.
 * </p>
 *
 * @author Stefano Costa, GeoSolutions.
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class MappingFeatureIteratorSecureFactory implements SecuredObjectFactory {

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.decorators.SecuredObjectFactory#canSecure(java.lang.Class)
     */
    @Override
    public boolean canSecure(@SuppressWarnings("rawtypes") Class clazz) {
        return IMappingFeatureIterator.class.isAssignableFrom(clazz);
    }

    /**
     * @throws IllegalArgumentException if object type cannot be handled in any way
     */
    /*
     * (non-Javadoc)
     * @see org.geoserver.security.decorators.SecuredObjectFactory#secure(java.lang.Object, org.geoserver.security.WrapperPolicy)
     */
    @Override
    public Object secure(Object object, WrapperPolicy policy) {
        // null check
        if (object == null) {
            return null;
        }

        // wrapping check
        final Class<?> clazz = object.getClass();
        if (! this.canSecure(clazz))
            throw new IllegalArgumentException("Don't know how to wrap objects of class " + object.getClass());

        if (IMappingFeatureIterator.class.isAssignableFrom(clazz)) {
            return new SecuredMappingFeatureIterator((IMappingFeatureIterator) object, policy);
        }

        // all attempts have been made, we don't know how to handle this object
        throw new IllegalArgumentException("Don't know how to wrap objects of class " + object.getClass());
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.platform.ExtensionPriority#getPriority()
     */
    @Override
    public int getPriority() {
        return ExtensionPriority.HIGHEST;
    }

}

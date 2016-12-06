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

import it.geosolutions.geoserver.sira.security.util.FeatureUtils;

import org.geoserver.security.WrapperPolicy;
import org.geotools.data.complex.IMappingFeatureIterator;
import org.opengis.feature.Feature;

/**
 * Wraps a {@link IMappingFeatureIterator} and adds additional security checks to it.
 *
 * <p>
 * More specifically, if the {@code limits} object inside the provided {@code policy} is an instance of {@link HidingAccessLimits}, sets to {@code null} all the
 * hidden properties specified there.
 * </p>
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class SecuredMappingFeatureIterator implements IMappingFeatureIterator {

    /**
     * {@link Feature}s iterator.
     */
    private IMappingFeatureIterator delegate;

    /**
     * {@link WrapperPolicy} instance.
     */
    private WrapperPolicy policy;

    /**
     * Constructor.
     *
     * @param delegate {@link Feature}s iterator
     * @param policy {@link WrapperPolicy} instance
     */
    public SecuredMappingFeatureIterator(IMappingFeatureIterator delegate, WrapperPolicy policy) {
        this.delegate = delegate;
        this.policy = policy;
    }

    /*
     * (non-Javadoc)
     * @see java.util.Iterator#hasNext()
     */
    @Override
    public boolean hasNext() {
        return delegate.hasNext();
    }

    /*
     * (non-Javadoc)
     * @see java.util.Iterator#next()
     */
    @Override
    public Feature next() {
        final Feature next = this.delegate.next();
        if (next != null) {
            // set to null attributes that should be hidden
            FeatureUtils.hideFeatureAttributes(next, this.policy.limits);
        }

        return next;
    }

    /*
     * (non-Javadoc)
     * @see org.geotools.feature.FeatureIterator#close()
     */
    @Override
    public void close() {
        this.delegate.close();
    }

    /**
     * @throws UnsupportedOperationException
     */
    /*
     * (non-Javadoc)
     * @see java.util.Iterator#remove()
     */
    @Override
    public void remove() {
        throw new UnsupportedOperationException();
    }

}

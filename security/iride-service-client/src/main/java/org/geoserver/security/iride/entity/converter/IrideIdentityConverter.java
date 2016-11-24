/*
 *  Simple SOAP service client for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.entity.converter;

import org.geoserver.security.iride.entity.IrideIdentity;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.basic.AbstractSingleValueConverter;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> entity {@link XStream} {@link Converter}.
 *
 * <p>Usage: <pre>
 * {@code
 * IrideIdentity obj = IrideIdentity.parseIrideIdentity("AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==");
 *
 * XStream xstream = new XStream(new XppDriver());
 * xstream.registerConverter(new IrideIdentityConverter());
 * xstream.alias("identity", IrideIdentity.class);
 * xstream.toXML(obj);
 * }
 * </pre>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityConverter extends AbstractSingleValueConverter {

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.ConverterMatcher#canConvert(java.lang.Class)
     */
    @Override
    public boolean canConvert(@SuppressWarnings("rawtypes") Class type) {
        return IrideIdentity.class.equals(type);
    }

    /*
     * (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.basic.AbstractSingleValueConverter#fromString(java.lang.String)
     */
    @Override
    public Object fromString(String str) {
        return IrideIdentity.parseIrideIdentity(str);
    }

}

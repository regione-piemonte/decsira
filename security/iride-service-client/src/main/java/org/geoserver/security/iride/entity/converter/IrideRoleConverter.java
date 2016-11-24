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

import org.geoserver.security.iride.entity.IrideRole;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.basic.AbstractSingleValueConverter;

/**
 * <code>IRIDE</code> <code>Role</code> entity {@link XStream} {@link Converter}.
 *
 * <p>Usage: <pre>
 * {@code
 * IrideRole obj = IrideRole.parseRole("PA_GEN_DECSIRA@REG_PMN");
 *
 * XStream xstream = new XStream(new XppDriver());
 * xstream.registerConverter(new IrideRoleConverter());
 * xstream.alias("role", IrideRole.class);
 * xstream.toXML(obj);
 * }
 * </pre>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRoleConverter extends AbstractSingleValueConverter {

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.ConverterMatcher#canConvert(java.lang.Class)
     */
    @Override
    public boolean canConvert(@SuppressWarnings("rawtypes") Class type) {
        return IrideRole.class.equals(type);
    }

    /*
     * (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.basic.AbstractSingleValueConverter#fromString(java.lang.String)
     */
    @Override
    public Object fromString(String str) {
        return IrideRole.parseRole(str);
    }

}

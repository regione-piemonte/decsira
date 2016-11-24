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

import static org.geoserver.security.iride.entity.converter.util.ExtendedWriterWrapper.wrapWriter;
import static org.geoserver.security.iride.entity.converter.util.ExtendedReaderWrapper.wrapReader;

import org.geoserver.security.iride.entity.IrideApplication;
import org.geoserver.security.iride.entity.converter.util.ExtendedReaderWrapper;
import org.geoserver.security.iride.entity.converter.util.ExtendedWriterWrapper;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;

/**
 * <code>IRIDE</code> <code>Application</code> entity {@link XStream} {@link Converter}.
 *
 * <p>Usage: <pre>
 * {@code
 * IrideApplication obj = new IrideApplication();
 *
 * // set obj properties as needed
 *
 * XStream xstream = new XStream(new XppDriver());
 * xstream.registerConverter(new IrideApplicationConverter());
 * xstream.alias("appId", IrideApplication.class);
 * xstream.toXML(obj);
 * }
 * </pre>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideApplicationConverter implements Converter {

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.ConverterMatcher#canConvert(java.lang.Class)
     */
    @Override
    public boolean canConvert(@SuppressWarnings("rawtypes") Class type) {
        return IrideApplication.class.equals(type);
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)
     */
    @Override
    public void marshal(Object source, HierarchicalStreamWriter writer, MarshallingContext context) {
        final IrideApplication in = (IrideApplication) source;

        final ExtendedWriterWrapper w = wrapWriter(writer);

        // IrideApplication attributes
        w.setNode("id", in.getId());
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)
     */
    @Override
    public Object unmarshal(HierarchicalStreamReader reader, UnmarshallingContext context) {
        final IrideApplication out = new IrideApplication();

        final ExtendedReaderWrapper r = wrapReader(reader);

        // IrideApplication attributes
        out.setId(r.moveAndGetValue());

        return out;
    }

}

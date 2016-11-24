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

import static org.geoserver.security.iride.entity.converter.util.ExtendedReaderWrapper.wrapReader;
import static org.geoserver.security.iride.entity.converter.util.ExtendedWriterWrapper.wrapWriter;

import java.util.Properties;

import org.geoserver.security.iride.entity.IrideInfoPersona;
import org.geoserver.security.iride.entity.IrideRole;
import org.geoserver.security.iride.entity.converter.util.ExtendedReaderWrapper;
import org.geoserver.security.iride.entity.converter.util.ExtendedWriterWrapper;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;

/**
 * <code>IRIDE</code> <code>InfoPersona</code> entity {@link XStream} {@link Converter}.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideInfoPersonaConverter implements Converter {

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.ConverterMatcher#canConvert(java.lang.Class)
     */
    @Override
    public boolean canConvert(@SuppressWarnings("rawtypes") Class type) {
        return IrideInfoPersona.class.isAssignableFrom(type);
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)
     */
    @Override
    public void marshal(Object source, HierarchicalStreamWriter writer, MarshallingContext context) {
        final IrideInfoPersona in = (IrideInfoPersona) source;

        final ExtendedWriterWrapper w = wrapWriter(writer);

        // IrideInfoPersona attributes
        w.setNode("role", in.getRole());
        this.marshalProperties(in, writer, context);
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)
     */
    @Override
    public Object unmarshal(HierarchicalStreamReader reader, UnmarshallingContext context) {
        final ExtendedReaderWrapper r = wrapReader(reader);

        // IrideInfoPersona attributes
        final IrideRole  role  = this.unmarshalRole(r, context);
        final Properties props = this.unmarshalProperties(r, context);

        return new IrideInfoPersona(role, props);
    }

    /**
     *
     * @param in
     * @param writer
     * @param context
     */
    private void marshalProperties(IrideInfoPersona in, HierarchicalStreamWriter writer, MarshallingContext context) {
        final Properties p = new Properties();
        p.putAll(in.getProperties());

        writer.startNode("properties");
        context.convertAnother(p);
        writer.endNode();
    }

    /**
     *
     * @param reader
     * @param context
     * @return
     */
    private IrideRole unmarshalRole(ExtendedReaderWrapper reader, UnmarshallingContext context) {
        reader.moveDown();
        final IrideRole role = (IrideRole) context.convertAnother(null, IrideRole.class);
        reader.moveUp();

        return role;
    }

    /**
     *
     * @param reader
     * @param context
     * @return
     */
    private Properties unmarshalProperties(ExtendedReaderWrapper reader, UnmarshallingContext context) {
        reader.moveDown();
        final Properties props = (Properties) context.convertAnother(null, Properties.class);
        reader.moveUp();

        return props;
    }

}

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
import org.geoserver.security.iride.entity.IrideUseCase;
import org.geoserver.security.iride.entity.converter.util.ExtendedReaderWrapper;
import org.geoserver.security.iride.entity.converter.util.ExtendedWriterWrapper;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;

/**
 * <code>IRIDE</code> <code>UseCase</code> entity {@link XStream} {@link Converter}.
 *
 * <p>Usage: <pre>
 * {@code
 * IrideUseCase obj = new IrideUseCase();
 *
 * // set obj properties as needed
 *
 * XStream xstream = new XStream(new XppDriver());
 * xstream.registerConverter(new IrideUseCaseConverter());
 * xstream.alias(<code>UseCase</code>, IrideUseCase.class);
 * xstream.toXML(obj);
 * }
 * </pre>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideUseCaseConverter implements Converter {

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.ConverterMatcher#canConvert(java.lang.Class)
     */
    @Override
    public boolean canConvert(@SuppressWarnings("rawtypes") Class type) {
        return IrideUseCase.class.equals(type);
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)
     */
    @Override
    public void marshal(Object source, HierarchicalStreamWriter writer, MarshallingContext context) {
        final IrideUseCase in = (IrideUseCase) source;

        final ExtendedWriterWrapper w = wrapWriter(writer);

        // IrideUseCase attributes
        this.marshalApplication(in, w, context);
        w.setNode("id", in.getId());
    }

    /* (non-Javadoc)
     * @see com.thoughtworks.xstream.converters.Converter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)
     */
    @Override
    public Object unmarshal(HierarchicalStreamReader reader, UnmarshallingContext context) {
        final IrideUseCase out = new IrideUseCase();

        final ExtendedReaderWrapper r = wrapReader(reader);

        // IrideUseCase attributes
        while (r.hasMoreChildren()) {
            this.unmarshalApplication(out, reader, context);
            out.setId(r.moveAndGetValue());
        }

        return out;
    }

    /**
     *
     * @param in
     * @param writer
     * @param context
     */
    private void marshalApplication(IrideUseCase in, HierarchicalStreamWriter writer, MarshallingContext context) {
        writer.startNode("appId");
        context.convertAnother(in.getAppId());
        writer.endNode();
    }

    /**
     *
     * @param out
     * @param reader
     * @param context
     */
    private void unmarshalApplication(IrideUseCase out, HierarchicalStreamReader reader, UnmarshallingContext context) {
        reader.moveDown();
        out.setAppId((IrideApplication) context.convertAnother(out, IrideApplication.class));
        reader.moveUp();
    }

}

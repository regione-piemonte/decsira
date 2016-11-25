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

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import org.geoserver.security.iride.entity.IrideApplication;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;

/**
 * <code>IRIDE</code> <code>Application</code> entity {@link XStream} {@link Converter} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideApplicationConverterTest extends AbstractXStreamTest {

    /**
     * <code>IRIDE</code> <code>Application</code> entity {@link XStream} {@link Converter}.
     */
    @Autowired
    private IrideApplicationConverter applicationXsConverter;

    /**
     * <code>IRIDE</code> <code>Application</code> entity.
     */
    @Autowired
    private IrideApplication application;

    private final String applicationXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><appId><id>DECSIRA</id></appId>";

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideApplicationConverter#canConvert(java.lang.Class)}.
     */
    @Test
    public void testCanConvertOnlyIrideApplication() {
        boolean result = this.applicationXsConverter.canConvert(IrideApplication.class);

        assertTrue(result);

        result = this.applicationXsConverter.canConvert(
            new Object() {
                @SuppressWarnings("unused")
                public final String id = "DECSIRA";
            }.getClass()
        );

        assertFalse(result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideApplicationConverter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)}.
     */
    @Test
    public void testMarshal() {
        final String result = this.getXs().toXML(this.application);

        assertThat(result, not(isEmptyOrNullString()));

        this.logger.trace("Marshalling result:\n{}", result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideApplicationConverter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)}.
     */
    @Test
    public void testUnmarshal() {
        final IrideApplication result = (IrideApplication) this.getXs().fromXML(this.applicationXml);

        assertThat(result, is(not(nullValue())));
        assertThat(result, is(this.application));

        this.logger.trace("Unmarshalling result:\n{}", result);
    }

}

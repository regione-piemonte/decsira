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

import java.util.List;
import java.util.Properties;

import org.geoserver.security.iride.entity.IrideInfoPersona;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;

/**
 * <code>IRIDE</code> <code>InfoPersona</code> entity {@link XStream} {@link Converter} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideInfoPersonaConverterTest extends AbstractXStreamTest {

    /**
     * <code>IRIDE</code> <code>InfoPersona</code> entity {@link XStream} {@link Converter}.
     */
    @Autowired
    private IrideInfoPersonaConverter infoPersonaXsConverter;

    /**
     * <code>IRIDE</code> <code>InfoPersona</code> entity.
     */
    @Autowired
    private IrideInfoPersona infoPersona;

    private final String applicationXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><list><infoPersona><role>PA_GEN_DECSIRA@REG_PMN</role><properties><property name=\"ID_AUTORITA\" value=\"1\"/><property name=\"ISTAT_PROVINCIA\" value=\"\"/><property name=\"ISTAT_COMUNE\" value=\"\"/></properties></infoPersona></list>";

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideInfoPersonaConverter#canConvert(java.lang.Class)}.
     */
    @Test
    public void testCanConvertOnlyIrideInfoPersona() {
        boolean result = this.infoPersonaXsConverter.canConvert(IrideInfoPersona.class);

        assertTrue(result);

        result = this.infoPersonaXsConverter.canConvert(
            new Object() {
                @SuppressWarnings("unused")
                public final Object role = new Object() {
                    public final String code   = "PA_GEN_DECSIRA";
                    public final String domain = "REG_PMN";
                };

                @SuppressWarnings("unused")
                public final Properties properties = new Properties();
            }.getClass()
        );

        assertFalse(result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideInfoPersonaConverter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)}.
     */
    @Test
    public void testMarshal() {
        final String result = this.getXs().toXML(this.infoPersona);

        assertThat(result, not(isEmptyOrNullString()));

        this.logger.trace("Marshalling result:\n{}", result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideInfoPersonaConverter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)}.
     */
    @Test
    public void testUnmarshal() {
        @SuppressWarnings("unchecked")
        final List<IrideInfoPersona> result = (List<IrideInfoPersona>) this.getXs().fromXML(this.applicationXml);

        assertThat(result, is(not(nullValue())));
        assertThat(result.size(), is(1));
        assertThat(result.get(0), is(this.infoPersona));

        this.logger.trace("Unmarshalling result:\n{}", result);
    }

}

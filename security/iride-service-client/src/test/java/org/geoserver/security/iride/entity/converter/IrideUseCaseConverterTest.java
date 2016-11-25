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

import org.geoserver.security.iride.entity.IrideUseCase;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;

/**
 * <code>IRIDE</code> <code>UseCase</code> entity {@link XStream} {@link Converter} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideUseCaseConverterTest extends AbstractXStreamTest {

    /**
     * <code>IRIDE</code> <code>UseCase</code> entity {@link XStream} {@link Converter}.
     */
    @Autowired
    private IrideUseCaseConverter useCaseXsConverter;

    /**
     * <code>IRIDE</code> <code>UseCase</code> entity.
     */
    @Autowired
    private IrideUseCase useCase;

    private final String applicationXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><list><useCase><appId><id>DECSIRA</id></appId><id>UC001</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC003</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC004</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC006</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC008</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC009</id></useCase><useCase><appId><id>DECSIRA</id></appId><id>UC010</id></useCase></list>";

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideUseCaseConverter#canConvert(java.lang.Class)}.
     */
    @Test
    public void testCanConvertOnlyIrideUseCase() {
        boolean result = this.useCaseXsConverter.canConvert(IrideUseCase.class);

        assertTrue(result);

        result = this.useCaseXsConverter.canConvert(
            new Object() {
                @SuppressWarnings("unused")
                public final Object appId = new Object() {
                    public final String id = "DECSIRA";
                };

                @SuppressWarnings("unused")
                public final String id = "UC001";
            }.getClass()
        );

        assertFalse(result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideUseCaseConverter#marshal(java.lang.Object, com.thoughtworks.xstream.io.HierarchicalStreamWriter, com.thoughtworks.xstream.converters.MarshallingContext)}.
     */
    @Test
    public void testMarshal() {
        final String result = this.getXs().toXML(this.useCase);

        assertThat(result, not(isEmptyOrNullString()));

        this.logger.trace("Marshalling result:\n{}", result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideUseCaseConverter#unmarshal(com.thoughtworks.xstream.io.HierarchicalStreamReader, com.thoughtworks.xstream.converters.UnmarshallingContext)}.
     */
    @Test
    public void testUnmarshal() {
        @SuppressWarnings("unchecked")
        final List<IrideUseCase> result = (List<IrideUseCase>) this.getXs().fromXML(this.applicationXml);

        assertThat(result, is(not(nullValue())));
        assertThat(result.size(), is(7));
        assertThat(result.get(0), is(this.useCase));

        this.logger.trace("Unmarshalling result:\n{}", result);
    }

}

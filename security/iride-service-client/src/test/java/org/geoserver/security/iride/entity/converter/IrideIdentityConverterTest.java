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

import org.geoserver.security.iride.entity.IrideIdentity;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityConverterTest extends AbstractXStreamTest {

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity {@link XStream} {@link Converter}.
     */
    @Autowired
    private IrideIdentityConverter identityXsConverter;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity.
     */
    @Autowired
    private IrideIdentity irideIdentity;

    private final String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><identity>AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==</identity>";

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideIdentityConverter#canConvert(java.lang.Class)}.
     */
    @Test
    public void testCanConvertOnlyIrideIdentity() {
        boolean result = this.identityXsConverter.canConvert(IrideIdentity.class);

        assertTrue(result);

        result = this.identityXsConverter.canConvert(
            new Object() { /* ...a bunch of properties here... */ }.getClass()
        );

        assertFalse(result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideIdentityConverter#toString(java.lang.Object)}.
     */
    @Test
    public void testToString() {
        final String result = this.getXs().toXML(this.irideIdentity);

        assertThat(result, not(isEmptyOrNullString()));

        this.logger.trace("Marshalling result:\n{}", result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideIdentityConverter#fromString(java.lang.String)}.
     */
    @Test
    public void testFromStringString() {
        final IrideIdentity result = (IrideIdentity) this.getXs().fromXML(this.xml);

        assertThat(result, is(not(nullValue())));
        assertThat(result, is(this.irideIdentity));

        this.logger.trace("Unmarshalling result:\n{}", result);
    }

}

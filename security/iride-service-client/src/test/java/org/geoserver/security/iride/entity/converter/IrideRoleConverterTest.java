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

import org.geoserver.security.iride.entity.IrideRole;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRoleConverterTest extends AbstractXStreamTest {

    /**
     * <code>IRIDE</code> <code>Role</code> entity {@link XStream} {@link Converter}.
     */
    @Autowired
    private IrideRoleConverter roleXsConverter;

    /**
     * <code>IRIDE</code> <code>Role</code> entity.
     */
    @Autowired
    private IrideRole role;

    private final String roleXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><list><role>PA_GEN_DECSIRA@REG_PMN</role></list>";

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideRoleConverter#canConvert(java.lang.Class)}.
     */
    @Test
    public void testCanConvertOnlyIrideRole() {
        boolean result = this.roleXsConverter.canConvert(IrideRole.class);

        assertTrue(result);

        result = this.roleXsConverter.canConvert(
            new Object() {
                @SuppressWarnings("unused")
                public final String code   = "PA_GEN_DECSIRA";

                @SuppressWarnings("unused")
                public final String domain = "REG_PMN";
            }.getClass()
        );

        assertFalse(result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideRoleConverter#toString(java.lang.Object)}.
     */
    @Test
    public void testToString() {
        final String result = this.getXs().toXML(this.role);

        assertThat(result, not(isEmptyOrNullString()));

        this.logger.trace("Marshalling result:\n{}", result);
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.converter.IrideRoleConverter#fromString(java.lang.String)}.
     */
    @Test
    public void testFromStringString() {
        @SuppressWarnings("unchecked")
        final List<IrideRole> result = (List<IrideRole>) this.getXs().fromXML(this.roleXml);

        assertThat(result, is(not(nullValue())));
        assertThat(result.size(), is(1));
        assertThat(result.get(0), is(this.role));

        this.logger.trace("Unmarshalling result:\n{}", result);
    }

}

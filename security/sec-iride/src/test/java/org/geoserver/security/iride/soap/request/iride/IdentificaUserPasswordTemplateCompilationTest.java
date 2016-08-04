/*
 *  GeoServer Security Provider plugin with which doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.soap.request.iride;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.io.IOException;
import java.util.HashMap;

import org.junit.Before;
import org.junit.Test;

import freemarker.template.Template;
import freemarker.template.TemplateException;

/**
 * <code>IRIDE</code> service <code>SOAP</code> <em>identificaUserPassword</em> request template compilation (using <a href="http://freemarker.org/">FreeMarker</a>) <code>JUnit</code>.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IdentificaUserPasswordTemplateCompilationTest extends AbstractIrideSoapRequestTemplateCompilationTest {

    /* (non-Javadoc)
     * @see org.geoserver.security.iride.soap.request.iride.IrideSoapRequestTemplateCompilationTest#setUp()
     */
    @Before
    @Override
    public void setUp() throws Exception {
        this.getDataModel().putAll(new HashMap<String, Object>() {
            private static final long serialVersionUID = 1L;

            {
                put("username", "username");
                put("password", "********");
            }
        });
    }

    /**
     * Test method for {@link Template#process(Object, java.io.Writer)}.
     */
    @Test
    public void test() throws TemplateException, IOException {
        final String result = this.processTemplate();

        assertThat(result, not(isEmptyOrNullString()));

        final String username = (String) this.getDataModel().get("username");
        final String password = (String) this.getDataModel().get("password");

        assertThat(result, hasXPath("/soapenv:Envelope/soapenv:Body/int:identificaUserPassword/in0", equalTo(username)));
        assertThat(result, hasXPath("/soapenv:Envelope/soapenv:Body/int:identificaUserPassword/in1", equalTo(password)));
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.soap.request.iride.IrideSoapRequestTemplateCompilationTest#getTemplateName()
     */
    @Override
    protected String getTemplateName() {
        return "identificaUserPassword";
    }

}

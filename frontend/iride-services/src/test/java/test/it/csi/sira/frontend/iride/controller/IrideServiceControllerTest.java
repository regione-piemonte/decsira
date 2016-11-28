/*
 *  REST service to query for IRIDE roles using CSI-Piemonte IRIDE Service.
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
package test.it.csi.sira.frontend.iride.controller;

import static org.junit.Assert.fail;

import org.geoserver.security.iride.service.IrideService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.server.MockMvc;
import org.springframework.test.web.server.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:testContext.xml", "classpath:applicationContext.xml" })
public final class IrideServiceControllerTest {

	private MockMvc mockMvc;

	@Autowired
	private IrideService irideServiceMock;

    @Autowired
    private WebApplicationContext webApplicationContext;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
    	Mockito.reset(this.irideServiceMock);

    	this.mockMvc = MockMvcBuilders.webApplicationContextSetup(this.webApplicationContext).build();
    }

    /**
     * Test method for {@link it.csi.sira.frontend.iride.controller.IrideServiceController#getRolesForDigitalIdentity(java.lang.String)}.
     */
    @Test
    public void testGetRolesForDigitalIdentity() {
        fail("Not yet implemented");
    }

}

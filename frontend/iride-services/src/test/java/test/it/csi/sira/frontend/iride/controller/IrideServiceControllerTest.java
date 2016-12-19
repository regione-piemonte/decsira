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

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.server.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.server.result.MockMvcResultMatchers.*;

import it.csi.sira.frontend.iride.controller.IrideServiceConstants;

import org.geoserver.security.iride.entity.IrideApplication;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.IrideRole;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.server.MockMvc;
import org.springframework.test.web.server.MvcResult;
import org.springframework.test.web.server.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

/**
 * <code>IRIDE</code> <code>REST</code> <a href="https://en.wikipedia.org/wiki/Spring_Framework#Model.E2.80.93view.E2.80.93controller_framework">Spring MVC</a> action <code>JUnit</code> test.
 * <p>Please see also <a href="https://github.com/jayway/JsonPath">JayWay JsonPath</a> for a thorough documentation of the Java port
 * of the original <a href="http://goessner.net/articles/JsonPath/">JsonPath implementation</a>.
 * <p><a href="http://jsonpath.herokuapp.com/">Here</a> for an <code>Heroku</code>-powered quick-and-dirty online evaluator.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(
    loader = IrideServiceControllerTestContextLoader.class,
    locations = { "classpath:testContext.xml", "classpath:applicationContext.xml" }
)
public final class IrideServiceControllerTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideServiceControllerTest.class);

    private MockMvc mockMvc;

    @Autowired
    private IrideService irideServiceMock;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private IrideIdentity irideIdentity;

    @Autowired
    private IrideApplication application;

    @Autowired
    private IrideRole role;

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
     *
     * @throws Exception
     
    @Test
    public void testGetRolesWithValidDigitalIdentityHeader() throws Exception {
        when(this.irideServiceMock.findRuoliForPersonaInApplication(this.irideIdentity, this.application)).then(new Answer<IrideRole[]>() {

            /*
             * (non-Javadoc)
             * @see org.mockito.stubbing.Answer#answer(org.mockito.invocation.InvocationOnMock)
             */
    /*
            @Override
            public IrideRole[] answer(InvocationOnMock invocation) throws Throwable {
                return new IrideRole[] {
                    IrideServiceControllerTest.this.role
                };
            }
        });

        final String url = IrideServiceConstants.MAPPING_IRIDE_SERVICE + IrideServiceConstants.MAPPING_ROLES_FOR_DIGITAL_IDENTITY;
        LOGGER.debug("{} my url: ", url);
        LOGGER.trace("BEGIN {}::testGetRolesForValidDigitalIdentity", this.getClass().getName());
        try {
            final MvcResult mvcResult = this.mockMvc.perform(
                get(url).header(IrideServiceConstants.HEADER_SHIBBOLETH_IRIDE, this.irideIdentity.toString())
            )
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].code", is("PA_GEN_DECSIRA")))
            .andExpect(jsonPath("$[0].domain", is("REG_PMN")))
            .andExpect(jsonPath("$[0].mnemonic", is("PA_GEN_DECSIRA@REG_PMN")))
            .andReturn();

            final int    status   = mvcResult.getResponse().getStatus();
            final String response = mvcResult.getResponse().getContentAsString();

            verify(this.irideServiceMock, times(1)).findRuoliForPersonaInApplication(this.irideIdentity, this.application);
            verifyNoMoreInteractions(this.irideServiceMock);

            LOGGER.debug("{} result (HTTP {}): {}", url, status, response);
        } finally {
            LOGGER.trace("END {}::testGetRolesForValidDigitalIdentity", this.getClass().getName());
        }
    }*/
    
    /**
     * Test method for {@link it.csi.sira.frontend.iride.controller.IrideServiceController#getRolesForDigitalIdentity(java.lang.String)}.
     *
     * @throws Exception
     
    @Test
    public void testGetRolesWithInvalidDigitalIdentityHeader() throws Exception {
        final String url = IrideServiceConstants.MAPPING_IRIDE_SERVICE + IrideServiceConstants.MAPPING_ROLES_FOR_DIGITAL_IDENTITY;

        LOGGER.trace("BEGIN {}::testGetRolesWithInvalidDigitalIdentityHeader", this.getClass().getName());
        try {
            final MvcResult mvcResult = this.mockMvc.perform(
                get(url).header(IrideServiceConstants.HEADER_SHIBBOLETH_IRIDE, "INVALID_DIGITAL_IDENTITY")
            )
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(0)))
            .andReturn();

            verifyNoMoreInteractions(this.irideServiceMock);

            LOGGER.debug("{} result (HTTP {}): {}", url, mvcResult.getResponse().getStatus(), mvcResult.getResponse().getContentAsString());
        } finally {
            LOGGER.trace("END {}::testGetRolesWithInvalidDigitalIdentityHeader", this.getClass().getName());
        }
    }*/

    /**
     * Test method for {@link it.csi.sira.frontend.iride.controller.IrideServiceController#getRolesForDigitalIdentity(java.lang.String)}.
     *
     * @throws Exception
     
    @Test
    public void testGetRolesWithoutDigitalIdentityHeader() throws Exception {
        final String url = IrideServiceConstants.MAPPING_IRIDE_SERVICE + IrideServiceConstants.MAPPING_ROLES_FOR_DIGITAL_IDENTITY;

        LOGGER.trace("BEGIN {}::testGetRolesWithoutDigitalIdentityHeader", this.getClass().getName());
        try {
            final MvcResult mvcResult = this.mockMvc.perform(
                get(url).accept(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().isNotFound())
            .andReturn();

            verifyNoMoreInteractions(this.irideServiceMock);

            LOGGER.debug("{} result (HTTP {}): {}", url, mvcResult.getResponse().getStatus(), mvcResult.getResponse().getContentAsString());
        } finally {
            LOGGER.trace("END {}::testGetRolesWithoutDigitalIdentityHeader", this.getClass().getName());
        }
    }
    */
    @Test
    public void testResources() throws Exception {
        final String url = IrideServiceConstants.MAPPING_IRIDE_SERVICE + "testResources";
        LOGGER.trace("BEGIN {}::testGetRolesWithoutDigitalIdentityHeader", this.getClass().getName());
        try {
            final MvcResult mvcResult = this.mockMvc.perform(
                get(url).accept(MediaType.APPLICATION_JSON)
            )
            .andExpect(status().isNotFound())
            .andReturn();

            verifyNoMoreInteractions(this.irideServiceMock);

            LOGGER.debug("{} result (HTTP {}): {}", url, mvcResult.getResponse().getStatus(), mvcResult.getResponse().getContentAsString());
        } finally {
            LOGGER.trace("END {}::testGetRolesWithoutDigitalIdentityHeader", this.getClass().getName());
        }
    }

}

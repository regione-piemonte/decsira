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
package org.geoserver.security.iride.util.factory.roleservice;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import org.geoserver.security.iride.IrideRoleService;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.service.policy.IridePolicyManager;
import org.geoserver.security.iride.util.factory.security.IrideRoleServiceFactory;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;

/**
 * {@link IrideRoleService} Factory <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@RunWith( SpringJUnit4ClassRunner.class )
@ContextConfiguration(locations = {
    "classpath:/testContext.xml",
})
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class })
public final class IrideRoleServiceFactoryTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideRoleServiceFactoryTest.class);

    /**
     * {@link IrideRoleService} Factory.
     */
    @Autowired
    private IrideRoleServiceFactory irideRoleServiceFactoryTest;

    /**
     * <code>IRIDE</code> service "policies" enforcer instance.
     */
    @Autowired
    private IrideService irideService;

    /**
     * Test method for {@link org.geoserver.security.iride.util.factory.security.IrideRoleServiceFactory#setPolicyManager(IridePolicyManager)}.
     */
    @Test
    public void testSetIrideRoleServiceFactoryPolicyEnforcer() {
    	LOGGER.trace("BEGIN {}::testSetIrideRoleServiceFactoryPolicyEnforcer", this.getClass().getName());

        try {
            assertThat(this.irideRoleServiceFactoryTest.getIrideService(), is(nullValue()));

            this.irideRoleServiceFactoryTest.setIrideService(this.irideService);

            assertThat(this.irideRoleServiceFactoryTest.getIrideService(), is(not(nullValue())));
        } finally {
        	LOGGER.trace("END {}::testSetIrideRoleServiceFactoryPolicyEnforcer", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.factory.security.IrideRoleServiceFactory#create()}.
     */
    @Test
    public void testIrideRoleServiceFactoryCreate() {
    	LOGGER.trace("BEGIN {}::testIrideRoleServiceFactoryCreate", this.getClass().getName());

        try {
            this.irideRoleServiceFactoryTest.setIrideService(this.irideService);

            final IrideRoleService irideRoleService = this.irideRoleServiceFactoryTest.create();

            assertThat(irideRoleService.getIrideService(), is(this.irideService));
        } finally {
        	LOGGER.trace("END {}::testIrideRoleServiceFactoryCreate", this.getClass().getName());
        }
    }

}

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
package it.csi.sira.frontend.iride.controller;

import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <code>IRIDE</code> <code>REST</code> <a href="https://en.wikipedia.org/wiki/Spring_Framework#Model.E2.80.93view.E2.80.93controller_framework">Spring MVC</a> action constants.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideServiceConstants {

	/**
     * Application name requesting <code>IRIDE</code> service.
     */
    public static final String LOGGER = "iride";
    
    /**
     * Application name requesting <code>IRIDE</code> service.
     */
    public static final String APPLICATION_NAME = "DECSIRA";

    /**
     * {@link RequestMapping} for {@link IrideServiceController} type.
     */
    public static final String MAPPING_IRIDE_SERVICE = "/iride";

    /**
     * {@link RequestMapping} for {@link IrideServiceController#getRolesForDigitalIdentity(String)} method.
     */
    public static final String MAPPING_ROLES_FOR_DIGITAL_IDENTITY = "/getRolesForDigitalIdentity";

    /**
     * <a href="https://shibboleth.net/">Shibboleth</a> <code>IRIDE</code> <code>HTTP</code> request header attribute.
     */
    public static final String HEADER_SHIBBOLETH_IRIDE = "Shib-Iride-IdentitaDigitale";

    /**
     * Constructor.
     */
    private IrideServiceConstants() {
        /* NOP */
    }

}

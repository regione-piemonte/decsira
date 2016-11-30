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

import it.csi.sira.frontend.iride.vo.IrideRoleVO;

import java.io.IOException;
import java.util.List;

import org.geoserver.security.iride.entity.IrideApplication;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.IrideRole;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;

/**
 * <code>IRIDE</code> <code>REST</code> <a href="https://en.wikipedia.org/wiki/Spring_Framework#Model.E2.80.93view.E2.80.93controller_framework">Spring MVC</a> action,
 * backed by <a href="http://www.csipiemonte.it/">CSI</a> <code>IRIDE</code> service.
 * <p>Please see also:
 * <ul>
 *   <li><a href="http://stackoverflow.com/questions/19556039/spring-mvc-controller-rest-service-needs-access-to-header-information-how-to-do">Spring mvc controller REST service needs access to header information. How to do that in spring mvc?</a></li>
 *   <li><a href="http://stackoverflow.com/questions/28209242/read-http-headers-in-java-spring-rest-api/28209710#28209710">Read http headers in Java Spring rest api</a></li>
 * </ul>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@Controller
@RequestMapping(method = RequestMethod.GET, value = IrideServiceConstants.MAPPING_IRIDE_SERVICE)
public class IrideServiceController {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideServiceController.class);

    /**
     * "No roles" empty {@link IrideRole} array.
     */
    private static final IrideRole[] NO_ROLES = new IrideRole[0];

    /**
     * <code>IRIDE</code> service "policies" enforcer instance.
     */
    private IrideService irideService;

    /**
     * Get the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @return the <code>IRIDE</code> service "policies" enforcer instance
     */
    public IrideService getIrideService() {
        return this.irideService;
    }

    /**
     * Set the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @param irideService the <code>IRIDE</code> service "policies" enforcer instance
     */
    @Autowired
    public void setIrideService(IrideService irideService) {
        this.irideService = irideService;
    }

    /**
     *
     * @param user
     * @return
     */
    @RequestMapping(
        headers = {
            IrideServiceConstants.HEADER_SHIBBOLETH_IRIDE,
            IrideServiceConstants.HEADER_ACCEPT_JSON
        },
        value = IrideServiceConstants.MAPPING_ROLES_FOR_DIGITAL_IDENTITY
    )
    @ResponseBody
    public ResponseEntity<String> getRolesForDigitalIdentity(
        @RequestHeader(
            value = IrideServiceConstants.HEADER_SHIBBOLETH_IRIDE,
            defaultValue = ""
        ) String user) {
        LOGGER.trace("IRIDE Digital Identity: {}", user);

        try {
            final IrideRole[] roles = this.getRolesForUser(user);

            LOGGER.trace("Got {} role(s) for IRIDE Digital Identity {}", roles.length, user);

            return new ResponseEntity<>(this.toJson(roles), HttpStatus.OK);
        } catch (IOException e) {
            LOGGER.error("IRIDE roles retrieval for Digital Identity {} error: {}", user, e.getMessage(), e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     *
     * @param user
     * @return
     */
    private IrideRole[] getRolesForUser(String user) {
        IrideRole[] roles = NO_ROLES;

        final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity(user);
        if (irideIdentity != null) {
            roles = this.getIrideService().findRuoliForPersonaInApplication(
                irideIdentity,
                new IrideApplication(IrideServiceConstants.APPLICATION_NAME)
            );
        }

        return roles;
    }

    /**
     *
     * @param roles
     * @return
     * @throws JsonProcessingException
     */
    private String toJson(IrideRole[] roles) throws JsonProcessingException {
        final ObjectMapper mapper = new ObjectMapper();

        final String json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(this.toVO(roles));

        LOGGER.trace("Convert IRIDE {} role(s) to JSON: {}", roles.length, json);

        return json;
    }

    /**
     *
     * @param roles
     * @return
     */
    private IrideRoleVO[] toVO(IrideRole[] roles) {
        final List<IrideRoleVO> roleVOs = Lists.newArrayList();
        for (final IrideRole role : roles) {
            roleVOs.add(new IrideRoleVO(role));
        }

        return roleVOs.toArray(new IrideRoleVO[roles.length]);
    }

}

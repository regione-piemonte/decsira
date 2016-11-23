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
package org.geoserver.security.iride.service.policy;

import com.google.common.base.CaseFormat;

/**
 * <code>IRIDE</code> service "policies": the various service callable operations.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public enum IridePolicy {

    // === Base Policies ======================================================

    FIND_RUOLI_FOR_PERSONA_IN_APPLICATION,
    FIND_RUOLI_FOR_PERSONA_IN_USE_CASE,
    FIND_USE_CASES_FOR_PERSONA_IN_APPLICATION,
    IDENTIFICA_USER_PASSWORD,
    IS_IDENTITA_AUTENTICA,
    IS_PERSONA_AUTORIZZATA_IN_USE_CASE,
    IS_PERSONA_IN_RUOLO,
    GET_INFO_PERSONA_IN_USE_CASE,
    GET_INFO_PERSONA_SCHEMA,

    // === Helper Policies ====================================================

    FIND_APPLICATIONS,
    FIND_USE_CASES_FOR_APPLICATION,
    IS_APPLICATION_ESISTENTE,
    IS_USE_CASE_ESISTENTE,
    ;

    /**
     * Returns the <code>IRIDE</code> "policy" <code>service name</code>, i.e.: the name of the operation.
     *
     * @return the <code>IRIDE</code> "policy" <code>service name</code>, i.e.: the name of the operation
     */
    public String getServiceName() {
        return CaseFormat.UPPER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, this.name());
    }

}

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
package org.geoserver.security.iride.policy;

import it.csi.iride2.policy.entity.Application;
import it.csi.iride2.policy.entity.UseCase;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public interface PolicyEnforcerHelper {

    /**
     *
     * @return
     */
    Application[] findApplications();

    /**
     *
     * @param application
     * @return
     */
    UseCase[] findUseCasesForApplication(Application application);

    /**
     *
     * @param application
     * @return
     */
    boolean isApplicationEsistente(Application application);

    /**
     *
     * @param useCase
     * @return
     */
    boolean isUseCaseEsistente(UseCase useCase);

}

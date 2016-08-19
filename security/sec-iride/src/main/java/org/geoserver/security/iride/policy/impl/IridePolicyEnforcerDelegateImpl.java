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
package org.geoserver.security.iride.policy.impl;

import it.csi.iride2.iridefed.entity.Role;
import it.csi.iride2.policy.entity.Application;
import it.csi.iride2.policy.entity.UseCase;

import org.geoserver.security.iride.identity.IrideIdentity;
import org.geoserver.security.iride.policy.IridePolicyEnforcerDelegate;
import org.geoserver.security.iride.policy.PolicyEnforcerBase;
import org.geoserver.security.iride.policy.PolicyEnforcerHelper;

/**
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 *
 */
public final class IridePolicyEnforcerDelegateImpl implements IridePolicyEnforcerDelegate {

    /**
     * {@link PolicyEnforcerBase} instance.
     */
    private PolicyEnforcerBase policyEnforcerBase;

    /**
     * {@link PolicyEnforcerHelper} instance.
     */
    private PolicyEnforcerHelper policyEnforcerHelper;

    // === PolicyEnforcerBase interface === BEGIN =============================

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findRuoliForPersonaInApplication(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.policy.entity.Application)
     */
    @Override
    public Role[] findRuoliForPersonaInApplication(IrideIdentity identity, Application application) {
        return this.policyEnforcerBase.findRuoliForPersonaInApplication(identity, application);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findRuoliForPersonaInUseCase(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public Role[] findRuoliForPersonaInUseCase(IrideIdentity identity, UseCase useCase) {
        return this.policyEnforcerBase.findRuoliForPersonaInUseCase(identity, useCase);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#findUseCasesForPersonaInApplication(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.policy.entity.Application)
     */
    @Override
    public UseCase[] findUseCasesForPersonaInApplication(IrideIdentity identity, Application application) {
        return this.policyEnforcerBase.findUseCasesForPersonaInApplication(identity, application);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#identificaUserPassword(java.lang.String, java.lang.String)
     */
    @Override
    public IrideIdentity identificaUserPassword(String username, String password) {
        return this.policyEnforcerBase.identificaUserPassword(username, password);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isIdentitaAutentica(org.geoserver.security.iride.identity.IrideIdentity)
     */
    @Override
    public boolean isIdentitaAutentica(IrideIdentity identity) {
        return this.policyEnforcerBase.isIdentitaAutentica(identity);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isPersonaAutorizzataInUseCase(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public boolean isPersonaAutorizzataInUseCase(IrideIdentity identity, UseCase useCase) {
        return this.policyEnforcerBase.isPersonaAutorizzataInUseCase(identity, useCase);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#isPersonaInRuolo(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.iridefed.entity.Role)
     */
    @Override
    public boolean isPersonaInRuolo(IrideIdentity identity, Role role) {
        return this.policyEnforcerBase.isPersonaInRuolo(identity, role);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#getInfoPersonaInUseCase(org.geoserver.security.iride.identity.IrideIdentity, it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public String getInfoPersonaInUseCase(IrideIdentity identity, UseCase useCase) {
        return this.policyEnforcerBase.getInfoPersonaInUseCase(identity, useCase);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerBase#getInfoPersonaSchema(it.csi.iride2.iridefed.entity.Role)
     */
    @Override
    public String getInfoPersonaSchema(Role role) {
        return this.policyEnforcerBase.getInfoPersonaSchema(role);
    }

    // === PolicyEnforcerBase interface ===   END =============================

    // === PolicyEnforcerHelper interface === BEGIN ===========================

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerHelper#findApplications()
     */
    @Override
    public Application[] findApplications() {
        return this.policyEnforcerHelper.findApplications();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerHelper#findUseCasesForApplication(it.csi.iride2.policy.entity.Application)
     */
    @Override
    public UseCase[] findUseCasesForApplication(Application application) {
        return this.policyEnforcerHelper.findUseCasesForApplication(application);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerHelper#isApplicationEsistente(it.csi.iride2.policy.entity.Application)
     */
    @Override
    public boolean isApplicationEsistente(Application application) {
        return this.policyEnforcerHelper.isApplicationEsistente(application);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.policy.PolicyEnforcerHelper#isUseCaseEsistente(it.csi.iride2.policy.entity.UseCase)
     */
    @Override
    public boolean isUseCaseEsistente(UseCase useCase) {
        return this.policyEnforcerHelper.isUseCaseEsistente(useCase);
    }

    // === PolicyEnforcerHelper interface ===   END ===========================

}

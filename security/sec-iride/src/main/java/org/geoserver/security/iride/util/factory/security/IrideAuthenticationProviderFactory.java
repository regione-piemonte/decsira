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
package org.geoserver.security.iride.util.factory.security;

import org.geoserver.security.iride.IrideAuthenticationProvider;

/**
 * Factory that creates a new, configured, {@link IrideAuthenticationProviderFactory} instance.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideAuthenticationProviderFactory extends AbstractIrideSecurityServiceFactory<IrideAuthenticationProvider> {

    /**
     * Factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     */
    private IridePolicyAuthenticationProviderFactory delegateAuthProviderFactory;

    /**
     * Get the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     *
     * @return the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance
     */
    public IridePolicyAuthenticationProviderFactory getDelegateAuthProviderFactory() {
        return this.delegateAuthProviderFactory;
    }

    /**
     * Set the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
     *
     * @param delegateAuthProviderFactory the factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance
     */
    public void setDelegateAuthProviderFactory(IridePolicyAuthenticationProviderFactory delegateAuthProviderFactory) {
        this.delegateAuthProviderFactory = delegateAuthProviderFactory;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected final IrideAuthenticationProvider newInstance() {
        final IrideAuthenticationProvider irideAuthenticationProvider = new IrideAuthenticationProvider();

        irideAuthenticationProvider.setSecurityManager(this.securityManager);
        irideAuthenticationProvider.setDelegateAuthProviderFactory(this.delegateAuthProviderFactory);

        return irideAuthenticationProvider;
    }

}

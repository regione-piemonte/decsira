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

import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.GeoServerUserGroupService;
import org.geoserver.security.iride.authentication.IridePolicyAuthenticationProvider;

import com.google.common.base.Preconditions;

/**
 * Factory that creates a new, configured, {@link IridePolicyAuthenticationProviderFactory} instance.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IridePolicyAuthenticationProviderFactory extends AbstractIrideServiceFactory<IridePolicyAuthenticationProvider> {

    /**
     * User/Group Service name.
     */
    private String userGroupServiceName;

    /**
     * @return the userGroupServiceName
     */
    public String getUserGroupServiceName() {
        return this.userGroupServiceName;
    }

    /**
     * @param userGroupServiceName the userGroupServiceName to set
     */
    public void setUserGroupServiceName(String userGroupServiceName) {
        this.userGroupServiceName = userGroupServiceName;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected final IridePolicyAuthenticationProvider newInstance() {
        Preconditions.checkState(StringUtils.isNotBlank(this.userGroupServiceName), "User/Group Service name must be of a non-empty string");

        GeoServerUserGroupService userGroupService = null;
        try {
            userGroupService = this.getSecurityManager().loadUserGroupService(this.userGroupServiceName);
        } catch (IOException e) {
            throw new IllegalStateException("Unable to load User/Group Service: " + this.userGroupServiceName, e);
        }
        if (userGroupService == null) {
            throw new IllegalStateException("Unable to load User/Group Service: " + this.userGroupServiceName);
        }

        final IridePolicyAuthenticationProvider iridePolicyAuthenticationProvider = new IridePolicyAuthenticationProvider();
        iridePolicyAuthenticationProvider.setUserDetailsService(userGroupService);
        iridePolicyAuthenticationProvider.setIrideService(this.irideService);
        iridePolicyAuthenticationProvider.setForcePrincipalAsString(false);

        return iridePolicyAuthenticationProvider;
    }

}

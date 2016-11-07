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
package org.geoserver.security.iride.config;

import org.geoserver.security.GeoServerUserGroupService;
import org.geoserver.security.config.SecurityAuthProviderConfig;

import com.thoughtworks.xstream.XStream;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/auth/providers.html">Authentication provider</a> configuration.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideAuthenticationProviderConfig extends BaseIrideSecurityServiceConfig implements SecurityAuthProviderConfig {

    private static final long serialVersionUID = -1627386108891323625L;

    /**
     * Alias to be used for the {@link XStream}ed <a href="http://docs.geoserver.org/stable/en/user/security/auth/providers.html">Authentication provider</a> configuration:
     */
    public static final String ALIAS = "irideUsernamePassword";

    /**
     * Name of the {@link GeoServerUserGroupService} to use.
     */
    private String userGroupServiceName;

    /**
     * Constructor.
     */
    public IrideAuthenticationProviderConfig() {
        /* NOP */
    }

    /**
     * <a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)#Copy_constructors">Copy constructor</a>.
     *
     * @param other the other {@link IrideAuthenticationProviderConfig} instance to copy from
     */
    public IrideAuthenticationProviderConfig(IrideAuthenticationProviderConfig other) {
        super(other);

        this.userGroupServiceName = other.getUserGroupServiceName();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityAuthProviderConfig#getUserGroupServiceName()
     */
    /**
     * Return the name of the {@link GeoServerUserGroupService} to use.
     */
    @Override
    public String getUserGroupServiceName() {
        return this.userGroupServiceName;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityAuthProviderConfig#setUserGroupServiceName(java.lang.String)
     */
    /**
     * Set the name of the {@link GeoServerUserGroupService} to use.
     */
    @Override
    public void setUserGroupServiceName(String userGroupServiceName) {
        this.userGroupServiceName = userGroupServiceName;
    }

}

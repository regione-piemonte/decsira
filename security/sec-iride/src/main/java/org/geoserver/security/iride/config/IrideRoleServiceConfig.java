/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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

import org.geoserver.security.GeoServerRoleService;
import org.geoserver.security.config.SecurityRoleServiceConfig;
import org.geoserver.security.iride.IrideRoleService;

import com.thoughtworks.xstream.XStream;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/usergrouprole/roleservices.html">Role Service</a> configuration.
 *
 * @author "Mauro Bartolomeoli - mauro.bartolomeoli@geo-solutions.it"
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRoleServiceConfig extends BaseIrideSecurityServiceConfig implements SecurityRoleServiceConfig {

    private static final long serialVersionUID = -8931342487350680340L;

    /**
     * Alias to be used for the {@link XStream}ed <a href="http://docs.geoserver.org/stable/en/user/security/usergrouprole/roleservices.html">Role Service</a> configuration.
     */
    public static final String ALIAS = "irideRoleService";

    /**
     * Admin role.
     * Used for both <code>admin role name</code> and <code>group admin role name</code>.
     */
    private String adminRole;

    /**
     * Name of the {@link GeoServerRoleService} to rely on as a fallback
     * when {@link IrideRoleService} does not found any roles for a given user.
     */
    private String fallbackRoleService;

    /**
     * Constructor.
     */
    public IrideRoleServiceConfig() {
        /* NOP */
    }

    /**
     * <a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)#Copy_constructors">Copy constructor</a>.
     *
     * @param other the other {@link IrideRoleServiceConfig} instance to copy from
     */
    public IrideRoleServiceConfig(IrideRoleServiceConfig other) {
        super(other);

        this.adminRole            = other.getAdminRole();
        this.fallbackRoleService  = other.getFallbackRoleService();
    }

    /**
     * @return the adminRole
     */
    public String getAdminRole() {
        return this.adminRole;
    }

    /**
     * @param adminRole the adminRole to set
     */
    public void setAdminRole(String adminRole) {
        this.adminRole = adminRole;
    }

    /**
     *
     * @return
     */
    public String getFallbackRoleService() {
        return this.fallbackRoleService;
    }

    /**
     *
     * @param fallbackRoleService
     */
    public void setFallbackRoleService(String fallbackRoleService) {
        this.fallbackRoleService = fallbackRoleService;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityRoleServiceConfig#getAdminRoleName()
     */
    /**
     * @see {@link #getAdminRole()}.
     */
    @Override
    public String getAdminRoleName() {
        return this.getAdminRole();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityRoleServiceConfig#setAdminRoleName(java.lang.String)
     */
    /**
     * @see #setAdminRole(String)
     */
    @Override
    public void setAdminRoleName(String adminRoleName) {
        this.setAdminRole(adminRoleName);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityRoleServiceConfig#getGroupAdminRoleName()
     */
    /**
     * @see {@link #getAdminRole()}.
     */
    @Override
    public String getGroupAdminRoleName() {
        return this.getAdminRole();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.SecurityRoleServiceConfig#setGroupAdminRoleName(java.lang.String)
     */
    /**
     * @see #setAdminRole(String)
     */
    @Override
    public void setGroupAdminRoleName(String adminRoleName) {
        this.setAdminRole(adminRoleName);
    }

}

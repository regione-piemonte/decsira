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

import org.geoserver.security.config.SecurityUserGroupServiceConfig;

import com.thoughtworks.xstream.XStream;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/usergrouprole/usergroupservices.html">User/Group Service</a> configuration.
 * <p><code>IRIDE</code> implementation <em>does not need a password encoder nor a password policy to be defined</em>,
 * therefore setting those properties has no effect, and retrieving those same properties always returns {@code null}.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideUserGroupServiceConfig extends BaseIrideSecurityServiceConfig implements SecurityUserGroupServiceConfig {

    private static final long serialVersionUID = -5034898267087375446L;

    /**
     * Alias to be used for the {@link XStream}ed <a href="http://docs.geoserver.org/stable/en/user/security/usergrouprole/usergroupservices.html">User/Group Service</a> configuration.
     */
    public static final String ALIAS = "irideUserGroupService";

    /**
     * Constructor.
     */
    public IrideUserGroupServiceConfig() {
        /* NOP */
    }

    /**
     * <a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)#Copy_constructors">Copy constructor</a>.
     *
     * @param other the other {@link IrideUserGroupServiceConfig} instance to copy from
     */
    public IrideUserGroupServiceConfig(IrideUserGroupServiceConfig other) {
        super(other);
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.config.SecurityUserGroupServiceConfig#getPasswordEncoderName()
     */
    @Override
    public String getPasswordEncoderName() {
        return null;
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.config.SecurityUserGroupServiceConfig#setPasswordEncoderName(java.lang.String)
     */
    @Override
    public void setPasswordEncoderName(String passwordEncoderName) {
        /* NOP */
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.config.SecurityUserGroupServiceConfig#getPasswordPolicyName()
     */
    @Override
    public String getPasswordPolicyName() {
        return null;
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.config.SecurityUserGroupServiceConfig#setPasswordPolicyName(java.lang.String)
     */
    @Override
    public void setPasswordPolicyName(String passwordPolicyName) {
        /* NOP */
    }

}

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

import static org.geoserver.security.iride.util.builder.ToStringReflectionBuilder.reflectToString;

import org.geoserver.security.config.BaseSecurityNamedServiceConfig;

/**
 * <code>GeoServer</code> <code>IRIDE</code> <a href="http://docs.geoserver.org/stable/en/user/security/">security services</a> base configuration.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public abstract class BaseIrideSecurityServiceConfig extends BaseSecurityNamedServiceConfig {

    private static final long serialVersionUID = -7882339484677251192L;

    /**
     * <code>IRIDE</code> server <code>URL</code>.
     */
    private String serverURL;

    /**
     * Application name requesting <code>IRIDE</code> service.
     *
     * @todo should be set dynamically at runtime
     */
    private String applicationName;

    /**
     * Constructor.
     */
    protected BaseIrideSecurityServiceConfig() {
        /* NOP */
    }

    /**
     * <a href="https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)#Copy_constructors">Copy constructor</a>.
     *
     * @param other the other {@link BaseIrideSecurityServiceConfig} instance to copy from
     */
    protected BaseIrideSecurityServiceConfig(BaseIrideSecurityServiceConfig other) {
        super(other);

        this.serverURL       = other.getServerURL();
        this.applicationName = other.getApplicationName();
    }

    /**
     * Get the <code>IRIDE</code> server <code>URL</code>.
     *
     * @return the <code>IRIDE</code> server <code>URL</code>
     */
    public final String getServerURL() {
        return this.serverURL;
    }

    /**
     * Set the <code>IRIDE</code> server <code>URL</code>.
     *
     * @param serverURL the <code>IRIDE</code> server <code>URL</code>
     */
    public final void setServerURL(String serverURL) {
        this.serverURL = serverURL;
    }

    /**
     * @return the applicationName
     */
    public final String getApplicationName() {
        return this.applicationName;
    }

    /**
     * @param applicationName the applicationName to set
     */
    public final void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.config.BaseSecurityNamedServiceConfig#toString()
     */
    @Override
    public final String toString() {
        return reflectToString(this);
    }

}

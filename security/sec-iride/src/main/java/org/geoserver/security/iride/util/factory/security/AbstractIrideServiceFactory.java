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

import org.geoserver.security.GeoServerSecurityManager;
import org.geoserver.security.iride.service.IrideService;
import org.geoserver.security.iride.util.factory.AbstractFactory;

/**
 * Factory that creates a new, configured, security service instance, specialized in the context of <code>IRIDE</code>service.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 *
 * @param <T>
 */
public abstract class AbstractIrideServiceFactory<T> extends AbstractFactory<T> {

    /**
     * <code>GeoServer</code> security manager.
     */
    protected GeoServerSecurityManager securityManager;

    /**
     * <code>IRIDE</code> service "policies" enforcer instance.
     */
    protected IrideService irideService;

    /**
     * Get the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @return the <code>IRIDE</code> service "policies" enforcer instance
     */
    public final IrideService getIrideService() {
        return this.irideService;
    }

    /**
     * Set the <code>IRIDE</code> service "policies" enforcer instance.
     *
     * @param irideService the <code>IRIDE</code> service "policies" enforcer instance
     */
    public final void setIrideService(IrideService irideService) {
        this.irideService = irideService;
    }

    /**
     * Get the <code>GeoServer</code> security manager.
     *
     * @return the <code>GeoServer</code> security manager
     */
    public final GeoServerSecurityManager getSecurityManager() {
        return this.securityManager;
    }

    /**
     * Set the <code>GeoServer</code> security manager.
     *
     * @param securityManager the <code>GeoServer</code> security manager
     */
    public final void setSecurityManager(GeoServerSecurityManager securityManager) {
        this.securityManager = securityManager;
    }

}

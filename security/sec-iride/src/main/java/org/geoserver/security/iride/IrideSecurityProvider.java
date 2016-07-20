/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations against CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride;

import java.io.IOException;

import org.geoserver.config.util.XStreamPersister;
import org.geoserver.security.GeoServerRoleService;
import org.geoserver.security.GeoServerSecurityManager;
import org.geoserver.security.GeoServerSecurityProvider;
import org.geoserver.security.config.SecurityNamedServiceConfig;

/**
 *
 * @author "Mauro Bartolomeoli - mauro.bartolomeoli@geo-solutions.it"
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideSecurityProvider extends GeoServerSecurityProvider {

    /**
     * <code>GeoServer</code> security manager.
     */
    private GeoServerSecurityManager securityManager;

    /**
     * Constructor.
     *
     * @param securityManager {@link GeoServerSecurityManager} instance
     */
    public IrideSecurityProvider(GeoServerSecurityManager securityManager) {
        this.securityManager = securityManager;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerSecurityProvider#configure(org.geoserver.config.util.XStreamPersister)
     */
    @Override
    public void configure(XStreamPersister xp) {
        xp.getXStream().alias("iride", IrideSecurityServiceConfig.class);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerSecurityProvider#getRoleServiceClass()
     */
    @Override
    public Class<? extends GeoServerRoleService> getRoleServiceClass() {
        return IrideRoleService.class;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.GeoServerSecurityProvider#createRoleService(org.geoserver.security.config.SecurityNamedServiceConfig)
     */
    @Override
    public GeoServerRoleService createRoleService(SecurityNamedServiceConfig config) throws IOException {
        final IrideRoleService service = new IrideRoleService();
        service.initializeFromConfig(config);

        return service;
    }

}

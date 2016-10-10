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
package org.geoserver.security.iride.util.factory.roleservice;

import org.geoserver.security.iride.IrideRoleService;
import org.geoserver.security.iride.util.factory.Factory;
import org.geoserver.security.iride.util.template.TemplateEngine;

/**
 * Factory that creates a new, configured, {@link IrideRoleService} instance.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRoleServiceFactory implements Factory<IrideRoleService> {

    /**
     * {@link TemplateEngine} implementation.
     */
    private TemplateEngine templateEngine;

    /**
     * Constructor.
     */
    public IrideRoleServiceFactory() {
        /* NOP */
    }

    /**
     * Constructor.
     *
     * @param templateEngine the {@link TemplateEngine} implementation
     */
    public IrideRoleServiceFactory(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }

    /**
     * Set the {@link TemplateEngine} implementation
     *
     * @param templateEngine the {@link TemplateEngine} implementation
     */
    public void setTemplateEngine(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.Factory#create()
     */
    @Override
    public IrideRoleService create() {
        final IrideRoleService irideRoleService = new IrideRoleService();

        // Set the TemplateEngine implementation
        irideRoleService.setTemplateEngine(this.templateEngine);

        return irideRoleService;
    }

}

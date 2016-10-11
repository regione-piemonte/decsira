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
package org.geoserver.security.iride.util.factory.template.freemarker;

import org.geoserver.security.iride.util.factory.Factory;

import freemarker.template.Configuration;

/**
 * Factory that configures a <a href="http://freemarker.org/"><code>FreeMarker</code></a> {@link Configuration}.
 * Can be used standalone, but typically you will use {@link FreeMarkerConfigurationFactoryBean}
 * for preparing a {@link Configuration} as bean reference.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see FreeMarkerConfigurationFactoryBean
 * @see freemarker.template.Configuration
 */
public abstract class FreeMarkerConfigurationFactory implements Factory<Configuration> {

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.Factory#create()
     */
    @Override
    public final Configuration create() {
        return this.newConfiguration();
    }

    /**
     * Return a new {@link Configuration} object.
     * <p>Called by {@code create()}.
     * <p>Subclasses can override this for custom initialization, or for using a mock object for testing.
     *
     * @return the Configuration object
     * @see #create()
     */
    protected abstract Configuration newConfiguration();

}

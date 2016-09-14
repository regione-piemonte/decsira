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

import java.nio.charset.StandardCharsets;

import freemarker.cache.ClassTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.TemplateExceptionHandler;

/**
 * Factory that configures a <a href="http://freemarker.org/"><code>FreeMarker</code></a> {@link Configuration}.
 * Can be used standalone, but typically you will use {@link FreeMarkerConfigurationFactoryBean}
 * for preparing a {@link Configuration} as bean reference.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see FreeMarkerConfigurationFactoryBean
 * @see freemarker.template.Configuration
 */
public class FreeMarkerConfigurationDefaultFactory extends FreeMarkerConfigurationFactory {

    /**
     * Template base path.
     */
    private static final String TEMPLATE_BASE_PATH = "/iride/soap/request";

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.template.freemarker.AbstractFreeMarkerConfigurationFactory#newConfiguration()
     */
    /**
     * Return a new {@link Configuration} object, configured as follows:
     * <ul>
     *   <li>the default encoding with which template files are stored is set to <code>UTF-8</code></li>
     *   <li>the <code>TemplateExceptionHandler</code> with which to handle errors is set <code>TemplateExceptionHandler.RETHROW_HANDLER</code></li>
     *   <li>the <code>TemplateLoader</code> with which to handle the resolution of where the template files come from, that is set to <code>ClassTemplateLoader</code></li>
     * </ul>
     */
    @Override
    protected Configuration newConfiguration() {
        final Configuration configuration = new Configuration();
        configuration.setDefaultEncoding(StandardCharsets.UTF_8.name());
        configuration.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
        configuration.setTemplateLoader(
            new ClassTemplateLoader(this.getClass(), TEMPLATE_BASE_PATH)
        );

        return configuration;
    }

}

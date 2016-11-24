/*
 *  Simple SOAP service client for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.service.util.factory.template.freemarker;

import java.nio.charset.StandardCharsets;

import org.geoserver.security.iride.util.factory.AbstractFactory;

import freemarker.cache.ClassTemplateLoader;
import freemarker.cache.TemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.TemplateExceptionHandler;

/**
 * <a href="http://freemarker.org/"><code>FreeMarker</code></a> {@link Configuration} <em>default</em> Factory.
 * <p>Can be used standalone, but typically you will use {@link FreeMarkerConfigurationFactoryBean}
 * for preparing a {@link Configuration} as bean reference.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see FreeMarkerConfigurationFactoryBean
 * @see freemarker.template.Configuration
 */
public class FreeMarkerConfigurationFactory extends AbstractFactory<Configuration> {

    /**
     * Template base path.
     */
    public static final String TEMPLATE_BASE_PATH = "/iride/soap/request";

    /**
     * Static factory method, useful for testing.
     *
     * @return a new {@link Configuration} object
     */
    public static Configuration createConfiguration() {
        final FreeMarkerConfigurationFactory factory = new FreeMarkerConfigurationFactory();

        return factory.create();
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    /**
     * Return a new {@link Configuration} object, configured as follows:
     * <ul>
     *   <li>the {@link TemplateLoader} with which to handle the resolution of where the template files come from, that is set to {@link ClassTemplateLoader}</li>
     *   <li>the default encoding with which template files are stored,, that is set to <code>UTF-8</code></li>
     *   <li>the output encoding with which template files get compiled to, that is set to <code>UTF-8</code></li>
     *   <li>the {@link TemplateExceptionHandler} with which to handle errors, that is set to {@link TemplateExceptionHandler#RETHROW_HANDLER}</li>
     * </ul>
     */
    @Override
    protected final Configuration newInstance() {
        final Configuration configuration = new Configuration();

        configuration.setClassForTemplateLoading(this.getClass(), TEMPLATE_BASE_PATH);
        configuration.setDefaultEncoding(StandardCharsets.UTF_8.name());
        configuration.setOutputEncoding(configuration.getDefaultEncoding());
        configuration.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);

        return configuration;
    }

}

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

import org.geoserver.security.iride.service.util.template.impl.freemarker.FreeMarkerTemplateEngine;
import org.geoserver.security.iride.util.factory.AbstractFactory;
import org.geoserver.security.iride.util.template.TemplateEngine;

import freemarker.template.Configuration;

/**
 * <a href="http://freemarker.org/"><a href="http://freemarker.org/"><code>FreeMarker</code></a></a> {@link TemplateEngine} implementation Factory.
 * <p>Useful for tests.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class FreeMarkerTemplateEngineFactory extends AbstractFactory<FreeMarkerTemplateEngine> {

    /**
     * <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}.
     */
    private Configuration templateConfiguration;

    /**
     * <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null}).
     */
    private String templateExtension;

    /**
     * Static factory method, useful for testing.
     *
     * @param templateConfiguration <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}
     * @return a new <a href="http://freemarker.org/"><a href="http://freemarker.org/"><code>FreeMarker</code></a></a> {@link TemplateEngine} implementation
     */
    public static FreeMarkerTemplateEngine createTemplateEngine(Configuration templateConfiguration) {
        return createTemplateEngine(templateConfiguration, null);
    }

    /**
     * Static factory method, useful for testing.
     *
     * @param templateConfiguration <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}
     * @param templateExtension <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null})
     * @return a new <a href="http://freemarker.org/"><a href="http://freemarker.org/"><code>FreeMarker</code></a></a> {@link TemplateEngine} implementation
     */
    public static FreeMarkerTemplateEngine createTemplateEngine(Configuration templateConfiguration, String templateExtension) {
        final FreeMarkerTemplateEngineFactory factory = new FreeMarkerTemplateEngineFactory();
        factory.setTemplateConfiguration(templateConfiguration);
        factory.setTemplateExtension(templateExtension);

        return factory.create();
    }

    /**
     * Get the <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}.
     *
     * @return the the <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}
     */
    public final Configuration getTemplateConfiguration() {
        return this.templateConfiguration;
    }

    /**
     * Set the <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}.
     *
     * @param templateConfiguration the <a href="http://freemarker.org/"><code>FreeMarker</code></a> Template {@link Configuration}
     */
    public final void setTemplateConfiguration(Configuration templateConfiguration) {
        this.templateConfiguration = templateConfiguration;
    }

    /**
     * Get the <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null}).
     *
     * @return the <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null})
     */
    public final String getTemplateExtension() {
        return this.templateExtension;
    }

    /**
     * Set the <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null}).
     *
     * @param templateExtension the <a href="http://freemarker.org/"><code>FreeMarker</code></a> template file extension (could be {@code null})
     */
    public final void setTemplateExtension(String templateExtension) {
        this.templateExtension = templateExtension;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected final FreeMarkerTemplateEngine newInstance() {
        final FreeMarkerTemplateEngine freeMarkerTemplateEngine = new FreeMarkerTemplateEngine();

        // Inject the FreeMarker Template Configuration
        freeMarkerTemplateEngine.setTemplateConfiguration(this.templateConfiguration);

        // Set FreeMarker template file extension
        freeMarkerTemplateEngine.setTemplateExtension(this.templateExtension);

        return freeMarkerTemplateEngine;
    }

}

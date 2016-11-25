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
package org.geoserver.security.iride.util.factory.template.freemarker;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.iride.service.util.factory.template.freemarker.FreeMarkerConfigurationFactory;
import org.geoserver.security.iride.service.util.factory.template.freemarker.FreeMarkerTemplateEngineFactory;
import org.geoserver.security.iride.service.util.template.impl.freemarker.FreeMarkerTemplateEngine;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.geoserver.security.iride.util.template.TemplateEngine;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;

import freemarker.cache.ClassTemplateLoader;
import freemarker.cache.TemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.TemplateExceptionHandler;

/**
 * <a href="http://freemarker.org/"><code>FreeMarker</code></a> {@link TemplateEngine} implementation Factory <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@RunWith( SpringJUnit4ClassRunner.class )
@ContextConfiguration(locations = {
    "classpath:/testContext.xml",
})
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class })
public final class FreeMarkerTemplateEngineFactoryTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(FreeMarkerTemplateEngineFactoryTest.class);

    /**
     * <a href="http://freemarker.org/"><code>FreeMarker</code></a> default {@link Configuration}.
     */
    private Configuration defaultConfiguration;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.defaultConfiguration = FreeMarkerConfigurationFactory.createConfiguration();

        assertThat(this.defaultConfiguration, is(not(nullValue())));
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.factory.template.freemarker.FreeMarkerTemplateEngineFactory#createTemplateEngine(freemarker.template.Configuration)}.
     *
     * @throws IOException
     * @throws URISyntaxException
     */
    @Test
    public void testCreateTemplateEngineConfiguration() throws IOException, URISyntaxException {
    	LOGGER.trace("BEGIN {}::testCreateTemplateEngineConfiguration", this.getClass().getName());
        try {
            final FreeMarkerTemplateEngine templateEngine = FreeMarkerTemplateEngineFactory.createTemplateEngine(this.defaultConfiguration);

            assertThat(templateEngine, is(not(nullValue())));
            assertThat(templateEngine.getTemplateConfiguration(), is(not(nullValue())));

            // FreeMarker Configuration
            final Configuration templateConfiguration = templateEngine.getTemplateConfiguration();

            // - FreeMarker TemplateLoader Configuration
            final TemplateLoader templateLoader = templateConfiguration.getTemplateLoader();

            assertThat(templateLoader, is(not(nullValue())));
            assertThat(templateLoader, is(instanceOf(ClassTemplateLoader.class)));

            final String templateSource = ((ClassTemplateLoader) templateLoader).findTemplateSource("").toString();

            assertThat(templateSource, is(not(nullValue())));

            final Path templateSourcePath = Paths.get(new URI(templateSource));
            final Path templateBasePath   = Paths.get(FreeMarkerConfigurationFactory.TEMPLATE_BASE_PATH);

            assertThat(StringUtils.endsWith(templateSourcePath.toString(), templateBasePath.toString()), is(true));

            // - FreeMarker Default and Output Encoding Configuration
            assertThat(templateConfiguration.getDefaultEncoding(), is(StandardCharsets.UTF_8.name()));
            assertThat(templateConfiguration.getOutputEncoding(), is(templateConfiguration.getDefaultEncoding()));

            // - FreeMarker TemplateExceptionHandler Configuration
            assertThat(templateConfiguration.getTemplateExceptionHandler(), is(TemplateExceptionHandler.RETHROW_HANDLER));

            // FreeMarker Template Extension
            assertThat(templateEngine.getTemplateExtension(), is(nullValue()));
        } finally {
        	LOGGER.trace("END {}::testCreateTemplateEngineConfiguration", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.factory.template.freemarker.FreeMarkerTemplateEngineFactory#createTemplateEngine(freemarker.template.Configuration, java.lang.String)}.
     *
     * @throws IOException
     * @throws URISyntaxException
     */
    @Test
    public void testCreateTemplateEngineConfigurationWithExtension() throws IOException, URISyntaxException {
    	LOGGER.trace("BEGIN {}::testCreateTemplateEngineConfigurationWithExtension", this.getClass().getName());
        try {
            final FreeMarkerTemplateEngine templateEngine = FreeMarkerTemplateEngineFactory.createTemplateEngine(this.defaultConfiguration, "xml");

            assertThat(templateEngine, is(not(nullValue())));
            assertThat(templateEngine.getTemplateConfiguration(), is(not(nullValue())));

            // FreeMarker Configuration
            final Configuration templateConfiguration = templateEngine.getTemplateConfiguration();

            // - FreeMarker TemplateLoader Configuration
            final TemplateLoader templateLoader = templateConfiguration.getTemplateLoader();

            assertThat(templateLoader, is(not(nullValue())));
            assertThat(templateLoader, is(instanceOf(ClassTemplateLoader.class)));

            final String templateSource = ((ClassTemplateLoader) templateLoader).findTemplateSource("").toString();

            assertThat(templateSource, is(not(nullValue())));

            final Path templateSourcePath = Paths.get(new URI(templateSource));
            final Path templateBasePath   = Paths.get(FreeMarkerConfigurationFactory.TEMPLATE_BASE_PATH);

            assertThat(StringUtils.endsWith(templateSourcePath.toString(), templateBasePath.toString()), is(true));

            // - FreeMarker Default and Output Encoding Configuration
            assertThat(templateConfiguration.getDefaultEncoding(), is(StandardCharsets.UTF_8.name()));
            assertThat(templateConfiguration.getOutputEncoding(), is(templateConfiguration.getDefaultEncoding()));

            // - FreeMarker TemplateExceptionHandler Configuration
            assertThat(templateConfiguration.getTemplateExceptionHandler(), is(TemplateExceptionHandler.RETHROW_HANDLER));

            // FreeMarker Template Extension
            assertThat(templateEngine.getTemplateExtension(), is("xml"));
        } finally {
        	LOGGER.trace("END {}::testCreateTemplateEngineConfigurationWithExtension", this.getClass().getName());
        }
    }

}

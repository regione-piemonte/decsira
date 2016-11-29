/*
 *  REST service to query for IRIDE roles using CSI-Piemonte IRIDE Service.
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
package test.org.springframework.test.context.support;

import javax.servlet.RequestDispatcher;

import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotatedBeanDefinitionReader;
import org.springframework.context.annotation.AnnotationConfigUtils;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.FileSystemResourceLoader;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mock.web.MockRequestDispatcher;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.context.MergedContextConfiguration;
import org.springframework.test.context.support.AbstractContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.GenericWebApplicationContext;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class MockWebContextLoader extends AbstractContextLoader {

    /**
     * Mocked servlet context.
     */
    private final MockServletContext servletContext;

    /**
     * Constructor.
     *
     * @param warRootDir
     */
    public MockWebContextLoader(String warRootDir) {
        this(warRootDir, false);
    }

    /**
     * Constructor.
     *
     * @param warRootDir
     * @param isClasspathRelative
     */
    public MockWebContextLoader(String warRootDir, boolean isClasspathRelative) {
        final ResourceLoader resourceLoader = isClasspathRelative ? new DefaultResourceLoader() : new FileSystemResourceLoader();

        this.servletContext = this.initServletContext(warRootDir, resourceLoader);
    }

    /* (non-Javadoc)
     * @see org.springframework.test.context.SmartContextLoader#loadContext(org.springframework.test.context.MergedContextConfiguration)
     */
    @Override
    public ApplicationContext loadContext(MergedContextConfiguration mergedConfig) throws Exception {
        final GenericWebApplicationContext context = new GenericWebApplicationContext();
        context.getEnvironment().setActiveProfiles(mergedConfig.getActiveProfiles());

        this.prepareContext(context);
        this.loadBeanDefinitions(context, mergedConfig);

        return context;
    }

    /* (non-Javadoc)
     * @see org.springframework.test.context.ContextLoader#loadContext(java.lang.String[])
     */
    @Override
    public ApplicationContext loadContext(String... locations) throws Exception {
        final GenericWebApplicationContext context = new GenericWebApplicationContext();

        this.prepareContext(context);
        this.loadBeanDefinitions(context, locations);

        return context;
    }

    /* (non-Javadoc)
     * @see org.springframework.test.context.support.AbstractContextLoader#getResourceSuffix()
     */
    @Override
    protected String getResourceSuffix() {
        return "-context.xml";
    }

    /**
     *
     * @param warRootDir
     * @param resourceLoader
     * @return
     */
    private MockServletContext initServletContext(String warRootDir, ResourceLoader resourceLoader) {
        return new MockServletContext(warRootDir, resourceLoader) {
            // Required for DefaultServletHttpRequestHandler...
            public RequestDispatcher getNamedDispatcher(String path) {
                return (path.equals("default")) ? new MockRequestDispatcher(path) : super.getNamedDispatcher(path);
            }
        };
    }

    /**
     *
     * @param context
     */
    private void prepareContext(GenericWebApplicationContext context) {
        this.servletContext.setAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE, context);

        context.setServletContext(this.servletContext);
    }

    /**
    *
    * @param context
    * @param mergedConfig
    */
   private void loadBeanDefinitions(GenericWebApplicationContext context, MergedContextConfiguration mergedConfig) {
       new AnnotatedBeanDefinitionReader(context).register(mergedConfig.getClasses());

       this.loadBeanDefinitions(context, mergedConfig.getLocations());
   }

    /**
     *
     * @param context
     * @param locations
     */
    private void loadBeanDefinitions(GenericWebApplicationContext context, String[] locations) {
        new XmlBeanDefinitionReader(context).loadBeanDefinitions(locations);
        AnnotationConfigUtils.registerAnnotationConfigProcessors(context);

        context.refresh();
        context.registerShutdownHook();
    }

}

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
package org.geoserver.security.iride.soap.request.iride;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.geoserver.security.iride.IrideSecurityProvider;
import org.geoserver.security.iride.util.IrideSecurityUtils;
import org.geotools.util.logging.Logging;
import org.hamcrest.Matcher;
import org.xmlunit.matchers.EvaluateXPathMatcher;

import freemarker.cache.ClassTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;

/**
 * <code>IRIDE</code> service <code>SOAP</code> request template compilation (using <a href="http://freemarker.org/"><code>FreeMarker</code></a>) <code>JUnit</code>.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public abstract class AbstractIrideSoapRequestTemplateCompilationTest {

    /**
     * <code>FreeMarker</code> Configuration instance.
     */
    private static final Configuration CONFIGURATION;
    static {
        /*
         * Configure FreeMarker
         *
         *  - Specify the TemplateLoader to handle the resolution of where the template files come from
         *  - Specify the preferred charset template files are stored in to UTF-8
         *  - Specify the TemplateExceptionHandler to handler errors
         */
        CONFIGURATION = new Configuration();
        CONFIGURATION.setTemplateLoader(new ClassTemplateLoader(IrideSecurityProvider.class, "/iride/soap/request"));
        CONFIGURATION.setDefaultEncoding("UTF-8");
        CONFIGURATION.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    }

    /**
     * Logger.
     */
    protected final Logger LOGGER = Logging.getLogger(this.getClass());

    /**
     * <code>FreeMarker</code> template <code>data model</code>.
     */
    private final Map<String, Object> dataModel = new HashMap<String, Object>();

    /**
     * Convenient facade to {@link EvaluateXPathMatcher#hasXPath(String, Matcher)}.<br />
     * It has the same behaviour, with the added bonus to set the correct <em>Namespace Context</em> to {@link #getNamespaceContext()}.<p>
     * Creates a matcher that matches when the examined XML input has a value at the
     * specified <code>xPath</code> that satisfies the specified <code>valueMatcher</code>.
     *
     * <p>For example:</p>
     * <pre>assertThat(xml, hasXPath(&quot;//fruits/fruit/@name&quot;, equalTo(&quot;apple&quot;))</pre>
     *
     * @param xPath the target xpath
     * @param valueMatcher matcher for the value at the specified xpath
     * @return the xpath matcher
     * @see EvaluateXPathMatcher#hasXPath(String, Matcher)
     */
    protected static final EvaluateXPathMatcher hasXPath(String xPath, Matcher<String> valueMatcher) {
        return EvaluateXPathMatcher.hasXPath(xPath, valueMatcher).withNamespaceContext(getNamespaceContext());
    }

    /**
     *
     * @return
     */
    protected static final Map<String, String> getNamespaceContext() {
        return new HashMap<String, String>() {
            private static final long serialVersionUID = 1L;

            {
                this.put("xsi", "http://www.w3.org/2001/XMLSchema-instance");
                this.put("xsd", "http://www.w3.org/2001/XMLSchema");
                this.put("soapenv", "http://schemas.xmlsoap.org/soap/envelope/");
                this.put("int", "http://interfaces.policy.iride2.csi.it");
            }
        };
    }

    /**
     *
     * @throws Exception
     */
    protected abstract void setUp() throws Exception;

    /**
     *
     * @return
     * @throws TemplateException
     * @throws IOException
     */
    protected final String processTemplate() throws TemplateException, IOException {
        final Writer out = new StringWriter();

        final Template template = this.getTemplate();

        LOGGER.fine("IRIDE SOAP request '" + this.getTemplateName() + "' template: \n" + template);
        LOGGER.fine("IRIDE SOAP request '" + this.getTemplateName() + "' context: \n" + this.getDataModel());

        template.process(this.getDataModel(), out);

        final String result = out.toString();

        LOGGER.fine("IRIDE SOAP request '" + this.getTemplateName() + "' template processing result: \n" + result);

        return result;
    }

    /**
     * Returns the <code>FreeMarker</code> template <code>data model</code>.
     *
     * @return the <code>FreeMarker</code> template <code>data model</code>
     */
    protected final Map<String, Object> getDataModel() {
        return this.dataModel;
    }

    /**
     *
     * @return
     */
    protected abstract String getTemplateName();

    /**
     *
     * @return
     * @throws IOException
     */
    protected final Template getTemplate() throws IOException {
        return CONFIGURATION.getTemplate(
            IrideSecurityUtils.ensureExtension(this.getTemplateName(), "xml"),
            CONFIGURATION.getDefaultEncoding()
        );
    }

}

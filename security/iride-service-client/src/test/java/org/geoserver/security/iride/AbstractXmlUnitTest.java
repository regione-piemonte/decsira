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
package org.geoserver.security.iride;

import java.util.Map;

import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.hamcrest.Matcher;
import org.slf4j.Logger;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.xmlunit.builder.DiffBuilder;
import org.xmlunit.builder.Input;
import org.xmlunit.diff.DifferenceEvaluator;
import org.xmlunit.diff.DifferenceEvaluators;
import org.xmlunit.matchers.CompareMatcher;
import org.xmlunit.matchers.EvaluateXPathMatcher;

/**
 * Base classe for those <code>JUnit</code> Tests that make use of <a href="http://www.xmlunit.org/"><code>XMLUnit</code></a>.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class })
public abstract class AbstractXmlUnitTest {

    /**
     * Namespace context mapping to be used in <code>XPath</code> matching.<br />
     * Maps from prefix to namespace <code>URI</code>,
     * and is used to resolve <code>XML</code> namespace prefixes in the <code>XPath</code> expression.
     */
    private static Map<String, String> namespaceContext;

    /**
     * Logger.
     */
    protected final Logger logger = LoggerProvider.getLogger(this.getClass());

    /**
     * Set the namespace context mapping to be used in <code>XPath</code> matching.
     *
     * @return the namespace context mapping to be used in <code>XPath</code> matching
     */
    public static final void setNamespaceContext(Map<String, String> nsContext) {
        namespaceContext = nsContext;
    }

    /**
     * Convenient facade to {@link EvaluateXPathMatcher#hasXPath(String, Matcher)}.
     * <p>It has the same behaviour, with the added bonus to set the correct <em>Namespace Context</em>.
     * <p>Creates a matcher that matches when the examined XML input has a value at the
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
        return EvaluateXPathMatcher.hasXPath(xPath, valueMatcher)
                                   .withNamespaceContext(namespaceContext);
    }

    /**
     * Convenient facade to {@link CompareMatcher#isSimilarTo(Object)}.
     * <p>Customize {@link CompareMatcher#isSimilarTo(Object)} returned {@link CompareMatcher} behaviour as follows:
     * <ul>
     *   <li><em>ignoring comments</em> (see {@link CompareMatcher#ignoreComments()})</li>
     *   <li><em>normalizing whitespace</em> (see {@link CompareMatcher#normalizeWhitespace()})</li>
     * </ul>
     * <p>Create a {@link CompareMatcher} which compares the test-Object with the given control Object for similarity.
     * <p>
     * Example for Similar: The XML node "&lt;a&gt;Text&lt;/a&gt;" and "&lt;a&gt;&lt;![CDATA[Text]]&gt;&lt;/a&gt;" are
     * similar and the Test will not fail.
     * <p>
     * The rating, if a node is similar, will be done by the {@link DifferenceEvaluators#Default}.
     * See {@link DiffBuilder#withDifferenceEvaluator(DifferenceEvaluator)}
     * <p>
     * As input all types are supported which are supported by {@link Input#from(Object)}.
     *
     * @param control the <code>control</code> to compare with
     * @return the compare matcher
     * @see CompareMatcher#isSimilarTo(Object)
     */
    protected static final CompareMatcher isSimilarTo(Object control) {
        return CompareMatcher.isSimilarTo(control)
                             .throwComparisonFailure()
                             .ignoreComments()
                             .normalizeWhitespace();
    }

}

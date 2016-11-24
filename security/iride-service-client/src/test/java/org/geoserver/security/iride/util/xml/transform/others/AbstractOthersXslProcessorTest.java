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
package org.geoserver.security.iride.util.xml.transform.others;

import static org.junit.Assert.assertThat;

import java.util.Map;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;

import org.geoserver.security.iride.util.xml.transform.AbstractXslProcessorTest;
import org.geoserver.security.iride.util.xml.transform.StringResult;
import org.geoserver.security.iride.util.xml.transform.XmlTransformer;
import org.junit.Test;
import org.springframework.test.context.ContextConfiguration;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@ContextConfiguration(locations = {
    "classpath:/transformationOthersContext.xml",
})
public abstract class AbstractOthersXslProcessorTest extends AbstractXslProcessorTest {

    /**
     * <code>XSL</code> transformation parameters.
     */
    private Map<String, Object> params;

    /**
     * Constructor.
     *
     * @param xslSourceName
     * @param xmlSourceName
     * @param params <code>XSL</code> transformation parameters
     */
    protected AbstractOthersXslProcessorTest(String xslSourceName, String xmlSourceName, Map<String, Object> params) {
        this(xslSourceName, xmlSourceName, null, params);
    }

    /**
     * Constructor.
     * Constructor.
     *
     * @param xslSourceName
     * @param xmlSourceName
     * @param expectedResultName
     * @param params <code>XSL</code> transformation parameters
     */
    protected AbstractOthersXslProcessorTest(String xslSourceName, String xmlSourceName, String expectedResultName, Map<String, Object> params) {
        super(xslSourceName, xmlSourceName, expectedResultName);

        this.params = params;
    }

    /**
     * Test method for {@link XmlTransformer#transform(Source, Source, javax.xml.transform.Result, Map, boolean))}.
     *
     * @throws XmlTransformerException
     */
    @Test
    @Override
    public void testXslProcessing() throws TransformerException {
        assertThat(this.doTestXslProcessing(), isSimilarTo(this.getExpectedResult()));
    }

    /**
     * Returns the result of <code>XSL</code> processing,
     * transforming the given <code>XML</code> {@link #xmlSourceName} with the given <code>XSL</code> {@link #xslSourceName}
     * and parameters ({@link #params}).
     *
     * @return the result of the <code>XSL</code> processing,
     *         transforming the given <code>XML</code> {@link #xmlSourceName} with the given <code>XSL</code> {@link #xslSourceName}
     *         and parameters ({@link #params})
     * @throws XmlTransformerException
     * @see {@link XmlTransformer#transform(Source, Source, javax.xml.transform.Result, Map, boolean)}
     */
    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.xml.transform.AbstractXslProcessorTest#transform()
     */
    @Override
    protected String transform() throws TransformerException {
        final StringResult result = XmlTransformer.newStreamResult();

        this.getProcessor().transform(this.getXslSource(), this.getXmlSource(), result, this.params, true);

        return result.toString();
    }

}

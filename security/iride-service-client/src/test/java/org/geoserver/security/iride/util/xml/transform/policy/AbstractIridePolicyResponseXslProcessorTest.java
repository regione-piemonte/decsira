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
package org.geoserver.security.iride.util.xml.transform.policy;

import static org.junit.Assert.*;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;

import org.geoserver.security.iride.service.policy.IridePolicy;
import org.geoserver.security.iride.util.xml.transform.AbstractXslProcessorTest;
import org.geoserver.security.iride.util.xml.transform.XmlTransformer;
import org.junit.Test;
import org.springframework.test.context.ContextConfiguration;

/**
 * Base class for <code>IRIDE</code> service <code>SOAP</code> response processing
 * (using <a href="https://en.wikipedia.org/wiki/XSLT"><code>XSL</code> transformation</a> processor) <code>JUnit</code> Test.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@ContextConfiguration(locations = {
    "classpath:/transformationIrideSoapResponseContext.xml",
})
public abstract class AbstractIridePolicyResponseXslProcessorTest extends AbstractXslProcessorTest {

    /**
     * <code>IRIDE</code> service "policy": one of the the various service callable operations.
     */
    private IridePolicy policy;

    /**
     * Constructor.
     *
     * @param policy
     * @param xslSourceName
     * @param xmlSourceName
     * @param expectedResultName
     */
    protected AbstractIridePolicyResponseXslProcessorTest(IridePolicy policy, String operationName) {
        super(toOperationName(policy, operationName), toOperationName(policy, operationName), toOperationName(policy, operationName));

        this.policy = policy;
    }

    /**
     *
     * @param policy
     * @param operationName
     * @return
     */
    private static String toOperationName(IridePolicy policy, String operationName) {
    	return operationName == null ? policy.getServiceName() : operationName;
    }

    /**
     * Test method for {@link XmlTransformer#transform(Source, Source, javax.xml.transform.Result, boolean)}.
     *
     * @throws TransformerException
     */
    @Test
    @Override
    public final void testXslProcessing() throws TransformerException {
        assertThat(this.doTestXslProcessing(), isSimilarTo(this.getExpectedResult()));
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.xml.transform.AbstractXslProcessorTest#doTestXslProcessing()
     */
    @Override
    protected String doTestXslProcessing() throws TransformerException {
        logger.trace("Processing {} IRIDE policy response", this.policy.getServiceName());

        final String result = this.transform();

        logger.trace("Processed {} IRIDE policy response result:\n", this.policy.getServiceName(), result);

        return result;
    }

}

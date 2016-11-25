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
package org.geoserver.security.iride.service.policy.handler;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;
import javax.xml.transform.stream.StreamSource;

import org.geoserver.security.iride.service.policy.IridePolicy;
import org.geoserver.security.iride.service.util.factory.sax.SAXSourceFactory;
import org.geoserver.security.iride.util.xml.transform.StringResult;
import org.geoserver.security.iride.util.xml.transform.XmlTransformer;

import com.thoughtworks.xstream.XStream;

/**
 * <code>IRIDE</code> service "policy" <em>response</em> handler.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IridePolicyResponseHandler extends AbstractIridePolicyHandler {

    /**
     * <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformer</a>.
     */
    private XmlTransformer xmlTransformer;

    /**
     * The <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> sources factories
     * with which create <code>SAX</code> {@link Source} instances
     * used during <code>IRIDE</code> service "policy" <em>response</em> processing.
     */
    private Set<SAXSourceFactory> transformationSources;

    /**
     * <a href="http://x-stream.github.io/"><code>XStream</code></a> instance, configured for <code>IRIDE</code> entities.
     */
    private XStream xs;

    /**
     * Constructor.
     *
     * @param policy <code>IRIDE</code> service "policy": the specific service operation to handle
     */
    public IridePolicyResponseHandler(IridePolicy policy) {
        super(policy);
    }

    /**
     * Get the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformer</a>.
     *
     * @return the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformer</a>
     */
    public XmlTransformer getXmlTransformer() {
        return this.xmlTransformer;
    }

    /**
     * Set the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformer</a>.
     *
     * @param xmlTransformer the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformer</a>
     */
    public void setXmlTransformer(XmlTransformer xmlTransformer) {
        this.xmlTransformer = xmlTransformer;
    }

    /**
     * Set the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> sources factories
     * with which create <code>SAX</code> {@link Source} instances
     * used during <code>IRIDE</code> service "policy" <em>response</em> processing.
     *
     * @return the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> sources factories
     *         with which create <code>SAX</code> {@link Source} instances
     *         used during <code>IRIDE</code> service "policy" <em>response</em> processing
     */
    public Set<SAXSourceFactory> getTransformationSources() {
        return this.transformationSources;
    }

    /**
     * Get the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> sources factories
     * with which create <code>SAX</code> {@link Source} instances
     * used during <code>IRIDE</code> service "policy" <em>response</em> processing.
     *
     * @param transformationSources the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> sources factories
     *                              with which create <code>SAX</code> {@link Source} instances
     *                              used during <code>IRIDE</code> service "policy" <em>response</em> processing
     */
    public void setTransformationSources(Set<SAXSourceFactory> transformationSources) {
        if (transformationSources == null) {
            this.transformationSources = new LinkedHashSet<>();
        }

        this.transformationSources = transformationSources;
    }

    /**
     * Get the <a href="http://x-stream.github.io/"><code>XStream</code></a> instance, configured for <code>IRIDE</code> entities.
     *
     * @return the <a href="http://x-stream.github.io/"><code>XStream</code></a> instance, configured for <code>IRIDE</code> entities
     */
    public XStream getXs() {
        return this.xs;
    }

    /**
     * Set the <a href="http://x-stream.github.io/"><code>XStream</code></a> instance, configured for <code>IRIDE</code> entities.
     *
     * @param xs the <a href="http://x-stream.github.io/"><code>XStream</code></a> instance, configured for <code>IRIDE</code> entities
     */
    public void setXs(XStream xs) {
        if (xs == null) {
            // an XStream just to avoid NPEs with no IRIDE-specific configuration
            this.xs = new XStream();
        }

        this.xs = xs;
    }

    /**
     *
     * @param policyResponse
     * @return
     * @throws TransformerException
     */
    public Object handleResponse(String policyResponse) throws TransformerException {
        final String policyResponseMarshalledXml = this.createPolicyResponseMarshalledXml(policyResponse);

        LOGGER.trace("IRIDE Policy marshalled response: {}", policyResponseMarshalledXml);

        return this.getXs().fromXML(policyResponseMarshalledXml);
    }

    /**
     *
     * @param policyResponse
     * @return
     * @throws TransformerException
     */
    private String createPolicyResponseMarshalledXml(String policyResponse) throws TransformerException {
        String policyResponseMarshalledXml = null;

        for (final SAXSourceFactory transformationSource : this.getTransformationSources()) {
            final StreamSource source = XmlTransformer.newStreamSource(
                policyResponseMarshalledXml == null
                    ? policyResponse
                    : policyResponseMarshalledXml
            );
            final StringResult output = XmlTransformer.newStreamResult();

            this.getXmlTransformer().transform(transformationSource.create(), source, output);

            policyResponseMarshalledXml = output.toString();
        }

        return policyResponseMarshalledXml;
    }

}

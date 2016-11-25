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
package org.geoserver.security.iride.service.util.factory.sax;

import java.io.IOException;
import java.net.URISyntaxException;

import javax.xml.transform.ErrorListener;
import javax.xml.transform.sax.SAXSource;

import org.geoserver.security.iride.util.factory.AbstractFactory;
import org.geoserver.security.iride.util.xml.transform.XmlTransformerErrorHandler;
import org.springframework.core.io.Resource;
import org.xml.sax.ErrorHandler;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

/**
 * {@link SAXSource} Factory, specialized to create {@link SAXSource} instances reading from a Spring {@link Resource} for an <code>XML</code> source.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see http://docs.spring.io/spring-ws/site/apidocs/org/springframework/xml/transform/ResourceSource.html
 * @see http://docs.spring.io/spring-ws/site/apidocs/org/springframework/xml/sax/SaxUtils.html
 */
public class SAXSourceFactory extends AbstractFactory<SAXSource> {

    /**
     * <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     */
    private XmlTransformerErrorHandler errorHandler;

    /**
     * Spring {@link Resource} for an <code>XML</code> source.
     */
    private Resource resource;

    /**
     * Creates a <code>SAX</code> {@link XMLReader}, with the given error handler.
     * <p>The error handler, implements both the {@link ErrorHandler} and {@link ErrorListener} interfaces.
     *
     * @param errorHandler the given error handler
     * @return the <code>SAX</code> {@link XMLReader}, or {@code null} if an error occurs during {@link XMLReader} creation
     */
    private static XMLReader createXmlReader(XmlTransformerErrorHandler errorHandler) {
        try {
            XMLReader xmlReader = XMLReaderFactory.createXMLReader();
            xmlReader.setErrorHandler(errorHandler);

            return xmlReader;
        } catch (SAXException e) {
            LOGGER.warn("SAX XMLReader creation error: ", e.getMessage());

            return null;
        }
    }

    /**
     * Creates a <code>SAX</code> {@link InputSource} from the given resource.
     * <p>Sets the system identifier to the resource's <code>URL</code>, if available.
     *
     * @param resource the given resource
     * @return the input source created from the resource
     * @throws IOException if an I/O exception occurs
     * @see InputSource#setSystemId(String)
     * @see #getSystemId(org.springframework.core.io.Resource)
     */
    private static InputSource createInputSource(Resource resource) throws IOException {
        final InputSource inputSource = new InputSource(resource.getInputStream());
        inputSource.setSystemId(getSystemId(resource));

        return inputSource;
    }

    /**
     * Retrieves the <code>URL</code> from the given resource as <code>System ID</code>,
     * or {@code null} if it cannot be opened.
     *
     * @param resource the given
     * @return the <code>URL</code> from the given resource as <code>System ID</code>,
     *         or {@code null} if it cannot be opened
     */
    private static String getSystemId(Resource resource) {
        try {
            return resource.getURL().toURI().toString();
        } catch (IOException | URISyntaxException e) {
            LOGGER.warn("Could not get System ID from [{}], error: {}", resource, e.getMessage());

            return null;
        }
    }

    /**
     * Get the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     *
     * @return the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance
     */
    public final XmlTransformerErrorHandler getErrorHandler() {
        return this.errorHandler;
    }

    /**
     * Set the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     *
     * @param errorHandler the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance
     */
    public final void setErrorHandler(XmlTransformerErrorHandler errorHandler) {
        this.errorHandler = errorHandler;
    }

    /**
     * Get the Spring {@link Resource} for an <code>XML</code> source.
     *
     * @return the Spring {@link Resource} for an <code>XML</code> source
     */
    public final Resource getResource() {
        return this.resource;
    }

    /**
     * Set the Spring {@link Resource} for an <code>XML</code> source.
     *
     * @param resource the Spring {@link Resource} for an <code>XML</code> source
     */
    public final void setResource(Resource resource) {
        this.resource = resource;
    }

    /**
     * @throws IllegalStateException if any error occurs opening the input to the <code>SAX</code> source.
     */
    /* (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected final SAXSource newInstance() {
        try {
            /*
             * Each new SAXSource instance MUST have a fresh, new XMLReader instance as well,
             * or else null (a new XMLReader will be instantiated by JAXP under the hood).
             */
            return new SAXSource(createXmlReader(this.errorHandler), createInputSource(this.resource));
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }
    }

}

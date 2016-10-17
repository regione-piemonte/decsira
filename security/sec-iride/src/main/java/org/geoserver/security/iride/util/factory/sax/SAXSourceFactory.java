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
package org.geoserver.security.iride.util.factory.sax;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.logging.Logger;

import javax.xml.transform.sax.SAXSource;

import org.geoserver.security.iride.util.factory.AbstractFactory;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.springframework.core.io.Resource;
import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;

/**
 * {@link SAXSource} Factory, specialized to create {@link SAXSource} instances reading from a Spring {@link Resource} for an <code>XML</code> source.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see http://docs.spring.io/spring-ws/site/apidocs/org/springframework/xml/transform/ResourceSource.html
 * @see http://docs.spring.io/spring-ws/site/apidocs/org/springframework/xml/sax/SaxUtils.html
 */
public class SAXSourceFactory extends AbstractFactory<SAXSource> {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.UTIL.getLogger();

    /**
     * <code>SAX</code> {@link XMLReader} istance.
     */
    private XMLReader xmlReader;

    /**
     * Spring {@link Resource} for an <code>XML</code> source.
     */
    private Resource resource;

    /**
     * Creates a SAX <code>InputSource</code> from the given resource.
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
            LOGGER.severe(String.format("Could not get System ID from [%s], error: %s", resource, e.getMessage()));

            return null;
        }
    }

    /**
     * Set the <code>SAX</code> {@link XMLReader}.
     *
     * @param xmlReader the <code>SAX</code> {@link XMLReader}
     */
    public final void setXmlReader(XMLReader xmlReader) {
        this.xmlReader = xmlReader;
    }

    /**
     * Set the Spring {@link Resource} for an <code>XML</code> source.
     *
     * @param resource the Spring {@link Resource} for an <code>XML</code> source
     */
    public final void setResource(Resource resource) {
        this.resource = resource;
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected SAXSource newInstance() {
        try {
            /*
             * Each new SAXSource instance MUST have a fresh, new XMLReader instance as well,
             * or else null (a new XMLReader will be instantiated by JAXP under the hood).
             */
            return new SAXSource(this.xmlReader, createInputSource(this.resource));
        } catch (IOException e) {
            return null;
        }
    }

}

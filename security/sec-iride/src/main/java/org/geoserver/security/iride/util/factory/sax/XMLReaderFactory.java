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

import org.geoserver.security.iride.util.factory.AbstractFactory;
import org.geoserver.security.iride.util.xml.transform.XmlTransformerErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;

/**
 * <code>SAX</code> {@link XMLReader} Factory.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class XMLReaderFactory extends AbstractFactory<XMLReader> {

    /**
     * <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     */
    private XmlTransformerErrorHandler errorHandler;

    /**
     * Get the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     *
     * @return the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance
     */
    public XmlTransformerErrorHandler getErrorHandler() {
        return this.errorHandler;
    }

    /**
     * Set the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     *
     * @param errorHandler the <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance
     */
    public void setErrorHandler(XmlTransformerErrorHandler errorHandler) {
        this.errorHandler = errorHandler;
    }

    /* (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected XMLReader newInstance() {
        try {
            final XMLReader reader = org.xml.sax.helpers.XMLReaderFactory.createXMLReader();

            reader.setErrorHandler(this.errorHandler);

            return reader;
        } catch (SAXException e) {
            return null;
        }
    }

}

/*
 *  Classes common to the modules offering authentication and authorization functionalities using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.util.xml.transform;

import java.io.StringReader;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;

import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;

import com.google.common.base.Preconditions;

/**
 * <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> simple facade class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class XmlTransformer {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.UTIL.getLogger();

    /**
     * <a href="https://en.wikipedia.org/wiki/XSLT"><code>XML</code> transformation</a> processor error handler instance.
     */
    private XmlTransformerErrorHandler errorHandler;

    /**
     *
     *
     * @param source
     * @return
     */
    public static StreamSource newStreamSource(String source) {
        return new StreamSource(new StringReader(source));
    }

    /**
     *
     * @return
     */
    public static StringResult newStreamResult() {
        return new StringResult();
    }

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

    /**
     *
     * @param xslSource
     * @param xmlSource
     * @param outputTarget
     * @throws XmlTransformerException
     */
    public void transform(Source xslSource, Source xmlSource, Result outputTarget) throws TransformerException {
        this.transform(xslSource, xmlSource, outputTarget, false);
    }

    /**
     *
     * @param xslSource
     * @param xmlSource
     * @param outputTarget
     * @param indent
     * @throws XmlTransformerException
     */
    public void transform(Source xslSource, Source xmlSource, Result outputTarget, boolean indent) throws TransformerException {
        this.transform(xslSource, xmlSource, outputTarget, Collections.<String, Object>emptyMap(), indent);
    }

    /**
     *
     * @param xslSource
     * @param xmlSource
     * @param outputTarget
     * @param params
     * @throws XmlTransformerException
     */
    public void transform(Source xslSource, Source xmlSource, Result outputTarget, Map<String, Object> params) throws TransformerException {
        this.transform(xslSource, xmlSource, outputTarget, params, false);
    }

    /**
     *
     * @param xslSource
     * @param xmlSource
     * @param outputTarget
     * @param params
     * @param indent to indent or not to indent
     * @throws XmlTransformerException
     */
    public void transform(Source xslSource, Source xmlSource, Result outputTarget, Map<String, Object> params, boolean indent) throws TransformerException {
        Preconditions.checkArgument(xslSource != null, "XSL source cannot be null");
        Preconditions.checkArgument(xmlSource != null, "XML source cannot be null");
        Preconditions.checkArgument(outputTarget != null, "Output target cannot be null");

        final Transformer transformer = this.buildTransformer(
            xslSource,
            params == null ? Collections.<String, Object>emptyMap() : params,
            indent
        );
        transformer.transform(xmlSource, outputTarget);
    }

    /**
     *
     * @param params
     * @param xslSource
     * @param indent
     * @return
     * @throws XmlTransformerException
     */
    private Transformer buildTransformer(Source xslSource, Map<String, Object> params, boolean indent) throws TransformerException {
        final TransformerFactory factory = TransformerFactory.newInstance();
        // Prevent IllegalArgumentException
        if (this.errorHandler != null) {
            factory.setErrorListener(this.errorHandler);
        }

        try {
            final Transformer transformer = factory.newTransformer(xslSource);

            // Prevent IllegalArgumentException
            if (this.errorHandler != null) {
                transformer.setErrorListener(this.errorHandler);
            }
            transformer.setOutputProperty(OutputKeys.ENCODING, StandardCharsets.UTF_8.name());
            transformer.setOutputProperty(OutputKeys.INDENT, indent ? "yes" : "no");
            if (indent) {
                transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");
            }
            final Set<Entry<String, Object>> entries = params == null ? Collections.<Entry<String, Object>>emptySet() : params.entrySet();
            for (final Entry<String, Object> entry : entries) {
                transformer.setParameter(entry.getKey(), entry.getValue());
            }

            return transformer;
        } catch (TransformerConfigurationException e) {
            LOGGER.error(ErrorHandlerUtils.getErrorMessage(e));

            throw e;
        }
    }

}

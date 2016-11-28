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

import static org.apache.commons.lang.SystemUtils.LINE_SEPARATOR;

import javax.xml.transform.SourceLocator;
import javax.xml.transform.TransformerException;
import javax.xml.transform.dom.DOMLocator;

import org.apache.commons.lang.StringUtils;
import org.xml.sax.SAXException;

/**
 * <code>XML</code> transformation errors handling utility class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
final class ErrorHandlerUtils {

    /**
     * <code>XSL</code> Transformation error message template.
     */
    private static final String ERROR_MESSAGE_TEMPLATE = "Transformation Error: %s";

    /**
     * <code>TRaX Transform Exception</code> message token.
     */
    private static final String TRAX_EXCEPTION_MESSAGE_TOKEN = "TRaX Transform Exception";

    /**
     * Constructor.
     */
    private ErrorHandlerUtils() {
        /* NOP */
    }

    /**
     *
     * @param exception
     * @return
     */
    static String getErrorMessage(TransformerException exception) {
        final String locationMessage = getLocationMessage(exception);

        return String.format(
            ERROR_MESSAGE_TEMPLATE,
            StringUtils.isNotEmpty(locationMessage)
                ? locationMessage + LINE_SEPARATOR
                : ""
            + expandMessage(exception)
        );
    }

    /**
     * Get a string identifying the location of an error.
     *
     * @param err the exception containing the location information
     * @return a message string describing the location
     */
    private static String getLocationMessage(TransformerException err) {
        TransformerException e = err;

        SourceLocator loc = e.getLocator();
        while (loc == null) {
            if (e.getException() instanceof TransformerException) {
                e = (TransformerException) e.getException();
                loc = e.getLocator();
            } else if (e.getCause() instanceof TransformerException) {
                e = (TransformerException) e.getCause();
                loc = e.getLocator();
            } else {
                return "";
            }
        }

        return getLocationMessageText(loc);
    }

    /**
     *
     * @param locator
     * @return
     */
    private static String getLocationMessageText(SourceLocator locator) {
        String locMessage = "";
        String systemId = locator.getSystemId();
        String nodeMessage = null;
        int lineNumber = locator.getLineNumber();

        if (locator instanceof DOMLocator) {
            nodeMessage = "at " + ((DOMLocator) locator).getOriginatingNode().getNodeName() + ' ';
        }
        boolean containsLineNumber = lineNumber != -1;
        if (nodeMessage != null) {
            locMessage += nodeMessage;
        }
        if (containsLineNumber) {
            locMessage += "on line " + lineNumber + ' ';
            if (locator.getColumnNumber() != -1) {
                locMessage += "column " + locator.getColumnNumber() + ' ';
            }
        }
        if (StringUtils.length(systemId) > 0) {
            locMessage += (containsLineNumber ? "of " : "in ") + abbreviatePath(systemId) + ':';
        }

        return locMessage;
    }

    /**
     * Abbreviate a <code>URI</code> (if requested).
     *
     * @param uri the <code>URI</code> to be abbreviated
     * @return the abbreviated <code>URI</code>, unless full path names were requested,
     *         in which case the <code>URI</code> as supplied
     */
    private static String abbreviatePath(String uri) {
        if (uri == null) {
            return "*unknown*";
        }
        final int slash = uri.lastIndexOf('/');
        if (slash >= 0 && slash < uri.length() - 1) {
            return uri.substring(slash + 1);
        } else {
            return uri;
        }
    }

    /**
     * Get a string containing the message for this exception and all contained exceptions
     *
     * @param err the exception containing the required information
     * @return a message that concatenates the message of this exception with its contained exceptions,
     *         also including information about the error code and location.
     */
    private static String expandMessage(TransformerException err) {
        String message = "";

        if (err == null) {
            return message;
        }

        final StringBuilder b = new StringBuilder();

        Throwable e = err;
        while (e != null) {
            String next = e.getMessage();
            if (next == null) {
                next = "";
            }
            if (! (TRAX_EXCEPTION_MESSAGE_TOKEN.equals(next) || message.endsWith(next))) {
                if (! "".equals(message) && ! message.trim().endsWith(":")) {
                    b.append(" ");
                }
                b.append(next);
            }

            e = extractNestedException(e);
        }

        return b.toString();
    }

    /**
     * Extract the nested exception of the given {@link Throwable} instance,
     * converted to the specific exception type, where found:<br />
     * <ul>
     *   <li>TransformerException</li>
     *   <li>SAXException</li>
     * </ul>
     *
     * @param e the given {@link Throwable} instance
     * @return the converted nested exception, or {@code null} if no nested exception is found
     */
    private static Throwable extractNestedException(Throwable e) {
        if (e instanceof TransformerException) {
            return ((TransformerException) e).getException();
        } else if (e instanceof SAXException) {
            return ((SAXException) e).getException();
        } else {
            return null;
        }
    }

}

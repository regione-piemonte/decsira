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

import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.lang.StringUtils;

/**
 * {@link XmlTransformer} utilities.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
final class XmlTransformerUtils {

    /**
     * Escaped <code>XML</code> character entities.
     */
    private static final String[] XML_ESCAPED_ENTITIES = {
        "&quot;", // " - double-quote
        "&amp;",  // & - ampersand
        "&lt;",   // < - less-than
        "&gt;",   // > - greater-than
        "&apos;"  // XML apostrophe
    };

    /**
     * Constructor.
     */
    private XmlTransformerUtils() {
        /* NOP */
    }

    /**
     * Returns {@code true} if the given string contains any one
     * of the escaped <code>XML</code> character entities, {@code false} otherwise.
     *
     * @param input the given string
     * @return {@code true} if the given string contains any one
     *         of the escaped <code>XML</code> character entities, {@code false} otherwise
     */
    public static boolean hasEscapedXml(String input) {
        return StringUtils.indexOfAny(input, XML_ESCAPED_ENTITIES) > -1;
    }

    /**
     * @param input
     * @return
     * @see StringEscapeUtils#escapeXml(String)
     */
    public static String escapeXml(String input) {
        return StringEscapeUtils.escapeXml(input);
    }

    /**
     * @param input
     * @return
     * @see StringEscapeUtils#unescapeXml(String)
     */
    public static String unescapeXml(String input) {
        return StringEscapeUtils.unescapeXml(input);
    }

}

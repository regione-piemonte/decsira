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

import java.security.CodeSource;
import java.text.MessageFormat;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.TransformerFactory;
import javax.xml.xpath.XPathFactory;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 * @see http://stackoverflow.com/questions/1798366/how-do-i-find-out-which-jaxp-implementation-is-in-use-and-where-it-was-loaded-fr
 */
public final class JaxpImplementationInfoPoint {

    /**
     * @param args
     */
    public static void main(String[] args) {
        outputJaxpImplementationInfo();
    }

    private static void outputJaxpImplementationInfo() {
        System.out.println(getJaxpImplementationInfo("DocumentBuilderFactory", DocumentBuilderFactory.newInstance().getClass()));
        System.out.println(getJaxpImplementationInfo("XPathFactory", XPathFactory.newInstance().getClass()));
        System.out.println(getJaxpImplementationInfo("TransformerFactory", TransformerFactory.newInstance().getClass()));
        System.out.println(getJaxpImplementationInfo("SAXParserFactory", SAXParserFactory.newInstance().getClass()));
    }

    private static String getJaxpImplementationInfo(String componentName, Class<?> componentClass) {
        final CodeSource source = componentClass.getProtectionDomain().getCodeSource();

        return MessageFormat.format(
            "{0} implementation: {1} loaded from: {2}",
            componentName,
            componentClass.getName(),
            source == null ? "Java Runtime" : source.getLocation()
        );
    }

}

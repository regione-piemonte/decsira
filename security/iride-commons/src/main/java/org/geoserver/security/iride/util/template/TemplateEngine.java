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
package org.geoserver.security.iride.util.template;

import java.io.IOException;
import java.io.Writer;

/**
 * A simple yet complete <a href="https://en.wikipedia.org/wiki/Template_processor">Template Engine<a/> interface definition.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public interface TemplateEngine {

    /**
     * Processes the given <code>source template</code> with the given context (i.e.: the <code>data model</code>),
     * directing the output of the resulting <code>result document</code> to the given {@link Writer} instance.
     * <p>The exact meaning of what the <code>source template</code> and <code>data model</code> are is implementation dependant.
     *
     * @param template <code>source template</code>
     * @param context context (i.e.: the <code>data model</code>)
     * @param writer {@link Writer} instance where the output of the resulting <code>result document</code> is directed to
     */
    void process(String template, Object context, Writer writer) throws IOException;

    /**
     * Processes the given <code>source template</code> with the given context (i.e.: the <code>data model</code>),
     * returning the resulting <code>result document</code> as a string.
     * <p>The exact meaning of what the <code>source template</code> and <code>data model</code> are is implementation dependant.
     *
     * @param template <code>source template</code>
     * @param context context (i.e.: the <code>data model</code>)
     * @return the resulting <code>result document</code> as a string
     */
    String process(String template, Object context) throws IOException;

}

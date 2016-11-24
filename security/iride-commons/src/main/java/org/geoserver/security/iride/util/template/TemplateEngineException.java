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

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class TemplateEngineException extends RuntimeException {

    private static final long serialVersionUID = 1741548507964965577L;

    /**
     * Constructor.
     */
    public TemplateEngineException() {
        /* NOP */
    }

    /**
     * Constructor.
     *
     * @param message
     */
    public TemplateEngineException(String message) {
        super(message);
    }

    /**
     * Constructor.
     *
     * @param cause
     */
    public TemplateEngineException(Throwable cause) {
        super(cause);
    }

    /**
     * Constructor.
     *
     * @param message
     * @param cause
     */
    public TemplateEngineException(String message, Throwable cause) {
        super(message, cause);
    }

}

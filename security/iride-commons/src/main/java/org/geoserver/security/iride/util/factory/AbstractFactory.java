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
package org.geoserver.security.iride.util.factory;

import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.slf4j.Logger;

/**
 * Base <em>Factory</em> class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 *
 * @param <T> the type of objects the <em>Factory</em> can create.
 */
public abstract class AbstractFactory<T> implements Factory<T> {

    /**
     * Logger.
     */
    protected static final Logger LOGGER = LoggerProvider.UTIL.getLogger();

    /* (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.Factory#create()
     */
    @Override
    public final T create() {
        return this.newInstance();
    }

    /**
     * Returns a new instance of the specific type.
     * <p>Called by {@code create()}.
     * <p>Subclasses can override this for custom initialization, or for using a mock object for testing.
     *
     * @return the new instance of the specific type
     * @see #create()
     */
    protected abstract T newInstance();

}

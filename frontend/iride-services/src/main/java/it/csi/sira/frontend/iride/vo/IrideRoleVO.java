/*
 *  REST service to query for IRIDE roles using CSI-Piemonte IRIDE Service.
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
package it.csi.sira.frontend.iride.vo;

import java.io.Serializable;

import org.geoserver.security.iride.entity.IrideRole;

/**
 * <code>IRIDE</code> Role <a href="https://en.wikipedia.org/wiki/Value_object#Value_Objects_in_Java">value object</a>.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideRoleVO implements Serializable{

    /**
     * <code>IRIDE</code> Role code.
     */
    private final String code;

    /**
     * <code>IRIDE</code> Role domain code.
     */
    private final String domain;

    /**
     * <code>IRIDE</code> Role mnemonic string representation.
     */
    private final String mnemonic;

    /**
     * Constructor.
     *
     * @param role <code>IRIDE</code> Role entity.
     */
    public IrideRoleVO(IrideRole role) {
        this.code     = role.getCode();
        this.domain   = role.getDomain();
        this.mnemonic = role.toMnemonicRepresentation();
    }

    /**
     * Returns the <code>IRIDE</code> Role code.
     *
     * @return the <code>IRIDE</code> Role code
     */
    public String getCode() {
        return this.code;
    }

    /**
     * Returns the <code>IRIDE</code> Role domain code.
     *
     * @return the <code>IRIDE</code> Role domain code
     */
    public String getDomain() {
        return this.domain;
    }

    /**
     * Returns the <code>IRIDE</code> Role mnemonic string representation.
     *
     * @return the <code>IRIDE</code> Role mnemonic string representation
     */
    public String getMnemonic() {
        return this.mnemonic;
    }

}

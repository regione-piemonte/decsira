/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.util;

import java.util.Arrays;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Transformer;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.SystemUtils;
import org.geoserver.security.iride.identity.IrideIdentity;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;

/**
 * <code>IRIDE</code> Digital Identity utilities.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideSecurityUtils {

    /**
     * Constructor.
     */
    private IrideSecurityUtils() {
        /* NOP */
    }

    /**
     *
     * @param array
     * @return
     */
    @SuppressWarnings("unchecked")
    public static <T> T[] defaultToEmpty(T[] array) {
        return (T[]) ArrayUtils.nullToEmpty(array);
    }

    /**
     *
     * @deprecated
     * @param irideDigitalIdentity
     * @return
     */
    @Deprecated
    public static boolean isValidIrideIdentity(String irideDigitalIdentity) {
        return IrideIdentity.isValidIrideIdentity(irideDigitalIdentity);
    }

    /**
     *
     * @deprecated
     * @param irideDigitalIdentity
     * @return
     */
    @Deprecated
    public static boolean isNotValidIrideIdentity(String irideDigitalIdentity) {
        return IrideIdentity.isNotValidIrideIdentity(irideDigitalIdentity);
    }

    /**
     *
     * @param invalidTokenValues
     * @return
     */
    public static String toString(IrideIdentityInvalidTokenValue... invalidTokenValues) {
        return toString(Constants.INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE, invalidTokenValues);
    }

    /**
     *
     * @param invalidTokenValuesMessageTemplate
     * @param invalidTokenValues
     * @return
     */
    public static String toString(final String invalidTokenValuesMessageTemplate, IrideIdentityInvalidTokenValue... invalidTokenValues) {
        return StringUtils.join(
            CollectionUtils.collect(
                Arrays.asList(defaultToEmpty(invalidTokenValues)),
                new Transformer() {
                    /*
                     * (non-Javadoc)
                     * @see org.apache.commons.collections.Transformer#transform(java.lang.Object)
                     */
                    @Override
                    public String transform(Object input) {
                        if (input == null) {
                            return StringUtils.EMPTY;
                        } else {
                            final IrideIdentityInvalidTokenValue invalidToken = (IrideIdentityInvalidTokenValue) input;

                            return String.format(
                                invalidTokenValuesMessageTemplate,
                                invalidToken.getToken(),
                                String.valueOf(invalidToken.getValue())
                            );
                        }
                    }
                }
            ),
            SystemUtils.LINE_SEPARATOR
        );
    }

    /**
     *
     * @param filename
     * @param extension
     * @return
     */
    public static String ensureFileWithExtension(String filename, String extension) {
        if (! FilenameUtils.isExtension(filename, extension)) {
            return filename + "." + extension;
        }

        return filename;
    }

}

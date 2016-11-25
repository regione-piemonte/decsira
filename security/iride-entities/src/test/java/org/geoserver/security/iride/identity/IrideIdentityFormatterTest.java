/*
 *  Entity classes involved during authentication and authorization operations using CSI-Piemonte IRIDE Service.
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
package org.geoserver.security.iride.identity;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.Arrays;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.identity.IrideIdentityFormatter;
import org.geoserver.security.iride.entity.identity.IrideIdentityFormatter.FormatStyle;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> entity formatter <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityFormatterTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideIdentityTest.class);

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> tokens.
     */
    private String[] tokens;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity instance.
     */
    private IrideIdentity irideIdentity;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity formatter.
     */
    private IrideIdentityFormatter formatter;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.tokens = new String[] { "AAAAAA00A11D000L", "CSI PIEMONTE", "DEMO 23", "IPA", "20160725152035", "2", "SQGMT++caXxGO/7s3Zu2ow==" };

        this.irideIdentity = new IrideIdentity(this.tokens);

        this.formatter = new IrideIdentityFormatter();
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityFormatter.FormatStyle#values()}.
     */
    @Test
    public void testIrideIdentityFormatterHasExpectedFormatStylesCount() {
        final int expectedFormatStyleCount = 2;

        LOGGER.trace("BEGIN {}::testIrideIdentityFormatterHasExpectedFormatStylesCount - {}", this.getClass().getName());
        try {
            final FormatStyle[] result = IrideIdentityFormatter.FormatStyle.values();

            assertThat(result, is(not(nullValue())));
            assertThat(result, is(arrayWithSize(expectedFormatStyleCount)));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityFormatterHasExpectedFormatStylesCount", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityFormatter#format(IrideIdentity, FormatStyle)}.
     */
    @Test
    public void testFormatWithNullIrideIdentityAndNullStyleReturnsNull() {
        final IrideIdentity                      irideIdentity = null;
        final IrideIdentityFormatter.FormatStyle formatStyle   = null;

        LOGGER.trace("BEGIN {}::testFormatWithNullIrideIdentityAndNullStyleReturnsNull - {}, {}", new Object[] {this.getClass().getName(), irideIdentity, formatStyle});
        try {
            final String result = this.formatter.format(irideIdentity, formatStyle);

            assertThat(result, is(nullValue()));

            LOGGER.info("Formatted IrideIdentity: " + result);
        } finally {
        	LOGGER.trace("END {}::testFormatWithNullIrideIdentityAndNullStyleReturnsNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityFormatter#format(IrideIdentity, FormatStyle)}.
     */
    @Test
    public void testFormatWithNullIrideIdentityReturnsNull() {
        final IrideIdentity                      irideIdentity = null;
        final IrideIdentityFormatter.FormatStyle formatStyle   = IrideIdentityFormatter.FormatStyle.INTERNAL_REPRESENTATION;

        LOGGER.trace("BEGIN {}::testFormatWithNullIrideIdentityReturnsNull - {}, {}", new Object[] {this.getClass().getName(), irideIdentity, formatStyle});
        try {
            final String result = this.formatter.format(irideIdentity, formatStyle);

            assertThat(result, is(nullValue()));

            LOGGER.info("Formatted IrideIdentity: " + result);
        } finally {
        	LOGGER.trace("END {}::testFormatWithNullIrideIdentityAndNullStyleReturnsNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityFormatter#format(IrideIdentity, FormatStyle)}.
     */
    @Test
    public void testFormatWithNullStyleReturnsNull() {
        final IrideIdentityFormatter.FormatStyle formatStyle = null;

        LOGGER.trace("BEGIN {}::testFormatWithNullStyleReturnsNull - {}, {}", new Object[] {this.getClass().getName(), irideIdentity, formatStyle});
        try {
            final String result = this.formatter.format(this.irideIdentity, formatStyle);

            assertThat(result, is(nullValue()));

            LOGGER.info("Formatted IrideIdentity: " + result);
        } finally {
        	LOGGER.trace("END {}::testFormatWithNullStyleReturnsNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityFormatter#format(IrideIdentity, FormatStyle)}.
     */
    @Test
    public void testFormatWithInternalRepresentationStyleReturnsValidDigitalRepresentation() {
        final IrideIdentityFormatter.FormatStyle formatStyle = IrideIdentityFormatter.FormatStyle.INTERNAL_REPRESENTATION;

        LOGGER.trace("BEGIN {}::testFormatWithInternalRepresentationStyleReturnsValidDigitalRepresentation - {}, {}", new Object[] {this.getClass().getName(), irideIdentity, formatStyle});
        try {
            final String result = this.formatter.format(this.irideIdentity, formatStyle);

            assertThat(result, is(not(nullValue())));
            assertThat(result, is(StringUtils.join(Arrays.copyOfRange(this.tokens, 0, this.tokens.length - 1), IrideIdentityToken.SEPARATOR)));

            LOGGER.info("Formatted IrideIdentity: " + result);
        } finally {
        	LOGGER.trace("END {}::testFormatWithInternalRepresentationStyleReturnsValidDigitalRepresentation", this.getClass().getName());
        }
    }

}

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

import static org.apache.commons.lang.StringUtils.EMPTY;
import static org.geoserver.security.iride.Utils.BLANK;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.geoserver.security.iride.entity.IrideIdentity;
import org.geotools.util.logging.Logging;
import org.junit.Test;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> validity <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityValidityTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideIdentityValidityTest.class);

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotInvalidIrideIdentity() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotInvalidIrideIdentity", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(false));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotInvalidIrideIdentity");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNullValue() {
        final String value = null;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithNullValue", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithNullValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithBlankValue() {
        final String value = BLANK;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithBlankValue", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithBlankValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithEmptyValue() {
        final String value = EMPTY;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithEmptyValue", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithEmptyValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithUnrecognizedValue() {
        final String value = "UNRECOGNIZED_VALUE";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithUnrecognizedValue", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithUnrecognizedValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken() {
        final String value = "AAAAAA00B77B000F";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingNomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingNomeToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingNomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCognomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCognomeToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCognomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingIdProviderToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingIdProviderToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingIdProviderToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingTimestampToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingTimestampToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingTimestampToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingMacToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingMacToken", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingMacToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleEmpty() {
        final String value = "/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleBlank() {
        final String value = BLANK + "/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat() {
        final String value = "AAAAAA00011D000L/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNomeEmpty() {
        final String value = "AAAAAA00B77B000F/" + EMPTY + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNomeBlank() {
        final String value = "AAAAAA00B77B000F/" + BLANK + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCognomeEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/" + EMPTY + "/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCognomeBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/" + BLANK + "/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithIdProviderEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/" + EMPTY + "/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithIdProviderBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/" + BLANK + "/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/" + EMPTY + "/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/" + BLANK + "/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/201605311139/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampWithInvalidFormat", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/" + EMPTY + "/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/" + BLANK + "/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/A/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/0/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/3/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/" + EMPTY;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/" + BLANK;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacOfInvalidLength() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacOfInvalidLength", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacOfInvalidLength");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty() {
        final String value = "AAAAAA00011D000L/" + EMPTY + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank() {
        final String value = "AAAAAA00011D000L/" + BLANK + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithAllNullTokens() {
        final String value = null + "/" +
                             null + "/" +
                             null + "/" +
                             null + "/" +
                             null + "/" +
                             null + "/" +
                             null;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllNullTokens", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllNullTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithAllEmptyTokens() {
        final String value = EMPTY + "/" +
                             EMPTY + "/" +
                             EMPTY + "/" +
                             EMPTY + "/" +
                             EMPTY + "/" +
                             EMPTY + "/" +
                             EMPTY;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllEmptyTokens", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllEmptyTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithAllBlankTokens() {
        final String value = BLANK + "/" +
                             BLANK + "/" +
                             BLANK + "/" +
                             BLANK + "/" +
                             BLANK + "/" +
                             BLANK + "/" +
                             BLANK;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllBlankTokens", value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllBlankTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentity() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentity", value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentity");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithComplexMacToken() {
        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2//VZjBdhZTwU+/7AUMNSHjQ==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentityWithComplexMacToken", value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentityWithComplexMacToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithRealisticDigitalIdentity() {
        final String value = "NNRLSN69P26L570X/Aldesino/Innerkofler/IPA/20160531113948/2//VZjBdhZTwU+/7AU0A8HjQ==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentityWithRealisticDigitalIdentity", value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentityWithRealisticDigitalIdentity");
        }
    }

}

/*
 *  GeoServer Security Provider plugin used for doing authentication and authorization operations against CSI-Piemonte IRIDE Service.
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

import static org.geoserver.security.iride.Utils.randomBlankOrEmptyString;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.geotools.util.logging.Logging;
import org.junit.Test;

/**
 * <code>IRIDE</code> Digital Identity utilities <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideSecurityUtilsTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideSecurityUtilsTest.class);

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNullValue() {
        final String value = null;

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithNullValue", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithNullValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithEmptyOrBlankValue() {
        final String value = StringUtils.repeat(" ", RandomUtils.nextInt(10));

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithEmptyOrBlankValue", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithEmptyOrBlankValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithUnrecognizedValue() {
        final String value = "UNRECOGNIZED_VALUE";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithUnrecognizedValue", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithUnrecognizedValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken() {
        final String value = "AAAAAA00B77B000F";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingNomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingNomeToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingNomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCognomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCognomeToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingCognomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingIdProviderToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingIdProviderToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingIdProviderToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingTimestampToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingTimestampToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingTimestampToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingMacToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingMacToken", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMissingMacToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleBlankOrEmpty() {
        final String value = randomBlankOrEmptyString() + "/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat() {
        final String value = "AAAAAA00011D000L/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNomeBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/" + randomBlankOrEmptyString() + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithNomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCognomeBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/" + randomBlankOrEmptyString() + "/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCognomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithIdProviderBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/" + randomBlankOrEmptyString() + "/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithIdProviderBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/" + randomBlankOrEmptyString() + "/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/201605311139/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampWithInvalidFormat", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithTimestampWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/" + randomBlankOrEmptyString() + "/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/A/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/0/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/3/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacBlankOrEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/" + randomBlankOrEmptyString();

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacOfInvalidLength() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacOfInvalidLength", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithMacOfInvalidLength");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlankOrEmpty() {
        final String value = "AAAAAA00011D000L/" + randomBlankOrEmptyString() + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlankOrEmpty", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithAllInvalidTokens() {
        final String value = randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString() + "/" +
                             randomBlankOrEmptyString();

        LOGGER.entering(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllInvalidTokens", value);
        try {
            final boolean result = IrideSecurityUtils.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIrideIdentityWithAllInvalidTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentity() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentity", value);
        try {
            final boolean result = IrideSecurityUtils.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentity");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithComplexMacToken() {
        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2//VZjBdhZTwU+/7AUMNSHjQ==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentityWithComplexMacToken", value);
        try {
            final boolean result = IrideSecurityUtils.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentityWithComplexMacToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.IrideSecurityUtils#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithRealisticDigitalIdentity() {
        final String value = "NNRLSN69P26L570X/Aldesino/Innerkofler/IPA/20160531113948/2//VZjBdhZTwU+/7AU0A8HjQ==";

        LOGGER.entering(this.getClass().getName(), "testIsValidIrideIdentityWithRealisticDigitalIdentity", value);
        try {
            final boolean result = IrideSecurityUtils.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidIrideIdentityWithRealisticDigitalIdentity");
        }
    }

}

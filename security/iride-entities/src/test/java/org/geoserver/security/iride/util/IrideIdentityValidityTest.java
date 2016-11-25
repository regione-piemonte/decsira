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

import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Test;
import org.slf4j.Logger;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> validity <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityValidityTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideIdentityValidityTest.class);

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotInvalidIrideIdentity() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotInvalidIrideIdentity - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(false));
        } finally {
            LOGGER.trace("END {}::testIsNotInvalidIrideIdentity", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNullValue() {
        final String value = null;

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithNullValue - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithNullValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithBlankValue() {
        final String value = BLANK;

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithBlankValue - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithBlankValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithEmptyValue() {
        final String value = EMPTY;

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithEmptyValue - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithEmptyValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithUnrecognizedValue() {
        final String value = "UNRECOGNIZED_VALUE";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithUnrecognizedValue - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithUnrecognizedValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken() {
        final String value = "AAAAAA00B77B000F";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingCodiceFiscaleToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingNomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingNomeToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingNomeToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingCognomeToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingCognomeToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingCognomeToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingIdProviderToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingIdProviderToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingIdProviderToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingTimestampToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingTimestampToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingTimestampToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingLivelloAutenticazioneToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMissingMacToken() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMissingMacToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMissingMacToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleEmpty() {
        final String value = "/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCodiceFiscaleEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCodiceFiscaleEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleBlank() {
        final String value = BLANK + "/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCodiceFiscaleBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCodiceFiscaleBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat() {
        final String value = "AAAAAA00011D000L/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNomeEmpty() {
        final String value = "AAAAAA00B77B000F/" + EMPTY + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithNomeEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithNomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithNomeBlank() {
        final String value = "AAAAAA00B77B000F/" + BLANK + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithNomeBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithNomeBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCognomeEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/" + EMPTY + "/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCognomeEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCognomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCognomeBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/" + BLANK + "/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCognomeBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCognomeBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithIdProviderEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/" + EMPTY + "/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithIdProviderEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithIdProviderEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithIdProviderBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/" + BLANK + "/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithIdProviderBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithIdProviderBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/" + EMPTY + "/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithTimestampEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithTimestampEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/" + BLANK + "/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithTimestampBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithTimestampBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithTimestampWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/201605311139/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithTimestampWithInvalidFormat - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithTimestampWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/" + EMPTY + "/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/" + BLANK + "/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/A/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/0/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneValue0NotInRange", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/3/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithLivelloAutenticazioneValue3NotInRange", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacEmpty() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/" + EMPTY;

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMacEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMacEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacBlank() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/" + BLANK;

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMacBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMacBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithMacOfInvalidLength() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithMacOfInvalidLength - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithMacOfInvalidLength", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty() {
        final String value = "AAAAAA00011D000L/" + EMPTY + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank() {
        final String value = "AAAAAA00011D000L/" + BLANK + "/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithCodiceFiscaleWithInvalidFormatAndWithNomeBlank", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithAllNullTokens - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithAllNullTokens", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithAllEmptyTokens - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithAllEmptyTokens", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIsNotValidIrideIdentityWithAllBlankTokens - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isNotValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsNotValidIrideIdentityWithAllBlankTokens", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentity() {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testIsValidIrideIdentity - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsValidIrideIdentity", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithComplexMacToken() {
        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2//VZjBdhZTwU+/7AUMNSHjQ==";

        LOGGER.trace("BEGIN {}::testIsValidIrideIdentityWithComplexMacToken - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsValidIrideIdentityWithComplexMacToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isValidIrideIdentity(java.lang.String)}.
     */
    @Test
    public void testIsValidIrideIdentityWithRealisticDigitalIdentity() {
        final String value = "NNRLSN69P26L570X/Aldesino/Innerkofler/IPA/20160531113948/2//VZjBdhZTwU+/7AU0A8HjQ==";

        LOGGER.trace("BEGIN {}::testIsValidIrideIdentityWithRealisticDigitalIdentity - {}", this.getClass().getName(), value);
        try {
            final boolean result = IrideIdentity.isValidIrideIdentity(value);

            assertThat(result, is(true));
        } finally {
        	LOGGER.trace("END {}::testIsValidIrideIdentityWithRealisticDigitalIdentity", this.getClass().getName());
        }
    }

}

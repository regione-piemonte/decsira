package org.geoserver.security.iride.util.validator;

import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.geoserver.security.iride.util.validator.IdentitaIrideValidator;
import org.geotools.util.logging.Logging;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IdentitaIrideValidatorTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IdentitaIrideValidatorTest.class.getPackage().getName());

    /**
     * {@link IdentitaIrideValidator} with <em>default</em> validation options set.
     */
    private IdentitaIrideValidator defaultOptionsValidator;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.defaultOptionsValidator = IdentitaIrideValidator.getInstance();
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testNegativeOptionsNotAllowed() {
        LOGGER.entering(this.getClass().getName(), "testNegativeOptionsNotAllowed");

        final long options = -1L;
        try {
            new IdentitaIrideValidator(options);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNegativeOptionsNotAllowed");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidDueToNullValue() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidDueToNullValue");

        final String value = null;
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidDueToNullValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidDueToEmptyValue() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidDueToEmptyValue");

        final String value = "";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidDueToEmptyValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidDueToBlankValue() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidDueToBlankValue");

        final String value = "   ";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidDueToBlankValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokens() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokens");

        final String value = "Simone";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingCodiceFiscaleToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingCodiceFiscaleToken");

        final String value = "AAAAAA00B77B000F";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingCodiceFiscaleToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingNomeToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingNomeToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingNomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingCognomeToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingCognomeToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingCognomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingIdProviderToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingIdProviderToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingIdProviderToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingTimestampToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingTimestampToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingTimestampToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingLivelloAutenticazioneToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingLivelloAutenticazioneToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingLivelloAutenticazioneToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTokensDueToMissingMACToken() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTokensDueToMissingMACToken");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTokensDueToMissingMACToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsValid() {
        LOGGER.entering(this.getClass().getName(), "testIsValid");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

        assertTrue(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValid");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsValidWithComplexMACToken() {
        LOGGER.entering(this.getClass().getName(), "testIsValidWithComplexMACToken");

        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2/z3W/rtwMv/CTx22DyxgVLg==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertTrue(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsValidWithComplexMACToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidCodiceFiscaleBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidCodiceFiscaleBlank");

        final String value = "               /CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidCodiceFiscaleBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidCodiceFiscaleFormat() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidCodiceFiscaleFormat");

        final String value = "AAAAAA00011D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2/z3W/rtwMv/CTx22DyxgVLg==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidCodiceFiscaleFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidNomeBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidNomeBlank");

        final String value = "AAAAAA00A11D000L/            /DEMO 23/IPA/20150223095441/2/z3W/rtwMv/CTx22DyxgVLg==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidNomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidCognomeBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidCognomeBlank");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/       /IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidCognomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidIdProviderBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidIdProviderBlank");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20//20160531113948/2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidIdProviderBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTimestampBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTimestampBlank");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/              /2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

        assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTimestampBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidTimestampFormat() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidTimestampFormat");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/201605311139/2/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidTimestampFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidLivelloAutenticazioneNonDigits() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidLivelloAutenticazioneNonDigits");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/A/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidLivelloAutenticazioneNonDigits");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidLivelloAutenticazione0NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidLivelloAutenticazione0NotInRange");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/0/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidLivelloAutenticazione0NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidLivelloAutenticazione3NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidLivelloAutenticazione3NotInRange");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/3/1IQssTaf4vNMa66qU52m7g==";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidLivelloAutenticazione3NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidMACBlank() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidMACBlank");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidMACBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsNotValidMACLength() {
        LOGGER.entering(this.getClass().getName(), "testIsNotValidMACLength");

        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g";
        try {
            final boolean valid = this.defaultOptionsValidator.isValid(value);

            assertFalse(valid);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIsNotValidMACLength");
        }
    }

}

package org.geoserver.security.iride.identity;

import static org.geoserver.security.iride.util.IrideSecurityUtils.printInvalidTokenValues;
import static org.apache.commons.lang.StringUtils.repeat;
import static org.apache.commons.lang.math.RandomUtils.nextInt;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.geoserver.security.iride.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geotools.util.logging.Logging;
import org.junit.Before;
import org.junit.Test;

/**
 * {@link IrideIdentityValidator} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityValidatorTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideIdentityValidatorTest.class);

    /**
     * A single space character string.
     */
    private static final String A_SPACE = " ";

    /**
     * {@link IrideIdentityValidator} instance.
     */
    private IrideIdentityValidator validator;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.validator = new IrideIdentityValidator();
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateSuccessful() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateSuccessful");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(emptyArray()));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateSuccessful");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateSuccessfulForRealCodiceFiscale() {
        final String[] tokens = new String[] { "NNRLSN69P26L570X", "Aldesino", "Innerkofler", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateSuccessfulForRealisticCodiceFiscale");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(emptyArray()));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateSuccessfulForRealisticCodiceFiscale");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidExpectedTokensLength() {
        final String[] tokens = new String[nextInt(IrideIdentityToken.values().length)];

        LOGGER.entering(this.getClass().getName(), "testValidateFailForInvalidExpectedTokensLength");
        try {
            this.validator.validate(tokens);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForInvalidExpectedTokensLength");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleBlankOrEmpty() {
        final String[] tokens = new String[] { repeat(A_SPACE, nextInt(10)), "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleBlankOrEmpty");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleOfInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleOfInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00011D000L", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleOfInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForNomeBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", repeat(A_SPACE, nextInt(10)), "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForNomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCognomeBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", repeat(A_SPACE, nextInt(10)), "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCognomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForIdProviderBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", repeat(A_SPACE, nextInt(10)), "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForIdProviderBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", repeat(A_SPACE, nextInt(10)), "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampOfInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampOfInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "201605311139", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampOfInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneOfInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneOfInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "A", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneOfInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneValue0NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneValue0NotInRange");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "0", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneValue0NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneValue3NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneValue3NotInRange");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "3", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneValue3NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", repeat(A_SPACE, nextInt(10)) };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacOfInvalidLenght() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacOfInvalidLenght");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacOfInvalidLenght");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleOfInvalidFormatAndForNomeBlankOrEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleOfInvalidFormatAndForNomeBlankOrEmpty");

        final String[] tokens = new String[] { "AAAAAA00011D000L", repeat(A_SPACE, nextInt(10)), "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleOfInvalidFormatAndForNomeBlankOrEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllInvalidTokens() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForAllInvalidTokens");

        final String[] tokens = new String[] { repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)), repeat(A_SPACE, nextInt(10)) };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warning(printInvalidTokenValues(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForAllInvalidTokens");
        }
    }

}

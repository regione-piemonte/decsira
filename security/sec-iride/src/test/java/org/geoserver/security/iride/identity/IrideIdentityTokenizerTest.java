package org.geoserver.security.iride.identity;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.geoserver.security.iride.identity.exception.IrideIdentityMissingTokenException;
import org.geoserver.security.iride.identity.token.IrideIdentityToken;
import org.geotools.util.logging.Logging;
import org.junit.Before;
import org.junit.Test;

/**
 * {@link IrideIdentityTokenizer} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityTokenizerTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideIdentityTokenizerTest.class);

    /**
     * {@link IrideIdentityTokenizer} instance.
     */
    private IrideIdentityTokenizer tokenizer;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.tokenizer = new IrideIdentityTokenizer();
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = NullPointerException.class)
    public void testTokenizationThrowNullPointerExceptionForNullValue() throws IrideIdentityMissingTokenException {
        final String value = null;

        LOGGER.entering(this.getClass().getName(), "testTokenizationThrowNullPointerExceptionForNullValue", value);
        try {
            this.tokenizer.tokenize(value);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationThrowNullPointerExceptionForNullValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForEmptyOrBlankValue() throws IrideIdentityMissingTokenException {
        final String value = StringUtils.repeat(" ", RandomUtils.nextInt(10));

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForEmptyOrBlankValue", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForEmptyOrBlankValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForUnrecognizedValue() throws IrideIdentityMissingTokenException {
        final String value = "UnrecognizedValue";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForUnrecognizedValue", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForUnrecognizedValue");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingCodiceFiscaleToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingCodiceFiscaleToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingCodiceFiscaleToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingNomeToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingNomeToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.NOME));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingNomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingCognomeToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingCognomeToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingCognomeToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingIdProviderToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingIdProviderToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingIdProviderToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingTimestampToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingTimestampToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingTimestampToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingLivelloAutenticazioneToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingLivelloAutenticazioneToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingLivelloAutenticazioneToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingMacToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";

        LOGGER.entering(this.getClass().getName(), "testTokenizationFailForMissingMacToken", value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.MAC));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationFailForMissingMacToken");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test
    public void testTokenizationSuccessful() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testTokenizationSuccessful", value);
        try {
            final String[] result = this.tokenizer.tokenize(value);

            assertThat(result, is(arrayWithSize(IrideIdentityToken.values().length)));
            assertThat(result, is(arrayContaining("AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==")));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationSuccessful");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test
    public void testTokenizationSuccessfulForComplexMacToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2//VZjBdhZTwU+/7AUMNSHjQ==";

        LOGGER.entering(this.getClass().getName(), "testTokenizationSuccessfulForComplexMacToken", value);
        try {
            final String[] result = this.tokenizer.tokenize(value);

            assertThat(result, is(arrayWithSize(IrideIdentityToken.values().length)));
            assertThat(result, is(arrayContaining("AAAAAA00A11D000L", "CSI PIEMONTE", "DEMO 23", "IPA", "20150223095441", "2", "/VZjBdhZTwU+/7AUMNSHjQ==")));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testTokenizationSuccessfulForComplexMacToken");
        }
    }

}

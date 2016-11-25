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

import static org.apache.commons.lang.StringUtils.EMPTY;
import static org.geoserver.security.iride.Utils.BLANK;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityMissingTokenException;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;

/**
 * {@link IrideIdentityTokenizer} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityTokenizerTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideIdentityTokenizerTest.class);

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
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = NullPointerException.class)
    public void testTokenizationThrowNullPointerExceptionForNullValue() throws IrideIdentityMissingTokenException {
        final String value = null;

        LOGGER.trace("BEGIN {}::testTokenizationThrowNullPointerExceptionForNullValue - {}", this.getClass().getName(), IrideIdentityToken.SEPARATOR);
        try {
            this.tokenizer.tokenize(value);
        } finally {
        	LOGGER.trace("END {}::testTokenizationThrowNullPointerExceptionForNullValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForEmptyValue() throws IrideIdentityMissingTokenException {
        final String value = EMPTY;

        LOGGER.trace("BEGIN {}::testTokenizationFailForEmptyValue - {}", this.getClass().getName(), IrideIdentityToken.SEPARATOR);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForEmptyValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForBlankValue() throws IrideIdentityMissingTokenException {
        final String value = BLANK;

        LOGGER.trace("BEGIN {}::testTokenizationFailForBlankValue - {}", this.getClass().getName(), IrideIdentityToken.SEPARATOR);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForBlankValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForUnrecognizedValue() throws IrideIdentityMissingTokenException {
        final String value = "UNRECOGNIZED_VALUE";

        LOGGER.trace("BEGIN {}::testTokenizationFailForUnrecognizedValue - {}", this.getClass().getName(), IrideIdentityToken.SEPARATOR);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForUnrecognizedValue", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingCodiceFiscaleToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingCodiceFiscaleToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingCodiceFiscaleToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingNomeToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingNomeToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.NOME));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingNomeToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingCognomeToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingCognomeToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingCognomeToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingIdProviderToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingIdProviderToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingIdProviderToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingTimestampToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingTimestampToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingTimestampToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingLivelloAutenticazioneToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingLivelloAutenticazioneToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingLivelloAutenticazioneToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testTokenizationFailForMissingMacToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/";

        LOGGER.trace("BEGIN {}::testTokenizationFailForMissingMacToken - {}", this.getClass().getName(), value);
        try {
            this.tokenizer.tokenize(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.MAC));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testTokenizationFailForMissingMacToken", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test
    public void testTokenizationSuccessful() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.trace("BEGIN {}::testTokenizationSuccessful - {}", this.getClass().getName(), value);
        try {
            final String[] result = this.tokenizer.tokenize(value);

            assertThat(result, is(arrayWithSize(IrideIdentityToken.values().length)));
            assertThat(result, is(arrayContaining("AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==")));
        } finally {
        	LOGGER.trace("END {}::testTokenizationSuccessful", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityTokenizer#tokenize(java.lang.String)}.
     *
     * @throws IrideIdentityMissingTokenException
     */
    @Test
    public void testTokenizationSuccessfulForComplexMacToken() throws IrideIdentityMissingTokenException {
        final String value = "AAAAAA00A11D000L/CSI PIEMONTE/DEMO 23/IPA/20150223095441/2//VZjBdhZTwU+/7AUMNSHjQ==";

        LOGGER.trace("BEGIN {}::testTokenizationSuccessfulForComplexMacToken - {}", this.getClass().getName(), value);
        try {
            final String[] result = this.tokenizer.tokenize(value);

            assertThat(result, is(arrayWithSize(IrideIdentityToken.values().length)));
            assertThat(result, is(arrayContaining("AAAAAA00A11D000L", "CSI PIEMONTE", "DEMO 23", "IPA", "20150223095441", "2", "/VZjBdhZTwU+/7AUMNSHjQ==")));
        } finally {
        	LOGGER.trace("END {}::testTokenizationSuccessfulForComplexMacToken", this.getClass().getName());
        }
    }

}

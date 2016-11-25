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

import org.geoserver.security.iride.entity.identity.IrideIdentityValidator;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.entity.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geoserver.security.iride.entity.util.Utils;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;

/**
 * {@link IrideIdentityValidator} <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityValidatorTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideIdentityValidatorTest.class);

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
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateSuccessful() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateSuccessful - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(emptyArray()));
        } finally {
        	LOGGER.trace("END {}::testValidateSuccessful", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateSuccessfulForRealisticDigitalIdentity() {
        final String[] tokens = new String[] { "NNRLSN69P26L570X", "Aldesino", "Innerkofler", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateSuccessfulForRealisticDigitalIdentity - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(emptyArray()));
        } finally {
        	LOGGER.trace("END {}::testValidateSuccessfulForRealisticDigitalIdentity", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidNullTokensArray() {
        final String[] tokens = null;

        LOGGER.trace("BEGIN {}::testValidateFailForInvalidNullTokensArray - {}", this.getClass().getName(), tokens);
        try {
            this.validator.validate(tokens);
        } finally {
        	LOGGER.trace("END {}::testValidateFailForInvalidNullTokensArray", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidEmptyTokensArray() {
        final String[] tokens = new String[0];

        LOGGER.trace("BEGIN {}::testValidateFailForInvalidEmptyTokensArray - {}", this.getClass().getName(), tokens);
        try {
            this.validator.validate(tokens);
        } finally {
        	LOGGER.trace("END {}::testValidateFailForInvalidEmptyTokensArray", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidLengthTokensArray() {
        final String[] tokens = new String[5];

        LOGGER.trace("BEGIN {}::testValidateFailForInvalidLengthTokensArray - {}", this.getClass().getName(), tokens);
        try {
            this.validator.validate(tokens);
        } finally {
        	LOGGER.trace("END {}::testValidateFailForInvalidLengthTokensArray", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleNull() {
        final String[] tokens = new String[] { null, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleBlank() {
        final String[] tokens = new String[] { BLANK, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleEmpty() {
        final String[] tokens = new String[] { EMPTY, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormat() {
        final String[] tokens = new String[] { "AAAAAA00011D000L", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleWithInvalidFormat - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", null, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForNomeNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForNomeNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", BLANK, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForNomeBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForNomeBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", EMPTY, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForNomeEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForNomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", null, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCognomeNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCognomeNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", BLANK, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCognomeBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCognomeNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", EMPTY, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCognomeEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCognomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", null, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForIdProviderNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForIdProviderNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", BLANK, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForIdProviderBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForIdProviderBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", EMPTY, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForIdProviderEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForIdProviderEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", null, "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForTimestampNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForTimestampNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", BLANK, "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForTimestampBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForTimestampBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", EMPTY, "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForTimestampEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForTimestampEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampWithInvalidFormat() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "201605311139", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForTimestampWithInvalidFormat - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForTimestampWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", null, "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", BLANK, "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", EMPTY, "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithInvalidFormat() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "A", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneWithInvalidFormat - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneWithInvalidFormat", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithValue0NotInRange() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "0", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneWithValue0NotInRange - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneWithValue0NotInRange", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithValue3NotInRange() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "3", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForLivelloAutenticazioneWithValue3NotInRange - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForLivelloAutenticazioneWithValue3NotInRange", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacNull() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", null };

        LOGGER.trace("BEGIN {}::testValidateFailForMacNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForMacNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacBlank() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", BLANK };

        LOGGER.trace("BEGIN {}::testValidateFailForMacBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForMacBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacEmpty() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", EMPTY };

        LOGGER.trace("BEGIN {}::testValidateFailForMacEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForMacEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacWithInvalidLenght() {
        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g" };

        LOGGER.trace("BEGIN {}::testValidateFailForMacWithInvalidLenght - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForMacWithInvalidLenght", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull() {
        final String[] tokens = new String[] { "AAAAAA00011D000L", null, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank() {
        final String[] tokens = new String[] { "AAAAAA00011D000L", BLANK, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty() {
        final String[] tokens = new String[] { "AAAAAA00011D000L", EMPTY, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.trace("BEGIN {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllNullTokens() {
        final String[] tokens = new String[] { null, null, null, null, null, null, null };

        LOGGER.trace("BEGIN {}::testValidateFailForAllNullTokens - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForAllNullTokens", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllBlankTokens() {
        final String[] tokens = new String[] { BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK };

        LOGGER.trace("BEGIN {}::testValidateFailForAllBlankTokens - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForAllBlankTokens", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllEmptyTokens() {
        final String[] tokens = new String[] { EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY };

        LOGGER.trace("BEGIN {}::testValidateFailForAllEmptyTokens - {}", this.getClass().getName(), tokens);
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warn(Utils.toString(result));
        } finally {
        	LOGGER.trace("END {}::testValidateFailForAllEmptyTokens", this.getClass().getName());
        }
    }

}

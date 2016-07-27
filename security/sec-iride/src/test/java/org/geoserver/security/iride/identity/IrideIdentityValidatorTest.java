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
package org.geoserver.security.iride.identity;

import static org.geoserver.security.iride.Utils.BLANK;
import static org.geoserver.security.iride.Utils.EMPTY;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

import java.util.logging.Logger;

import org.geoserver.security.iride.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geoserver.security.iride.util.IrideSecurityUtils;
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
    public void testValidateSuccessfulForRealisticDigitalIdentity() {
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
    public void testValidateFailForInvalidNullTokensArray() {
        final String[] tokens = null;

        LOGGER.entering(this.getClass().getName(), "testValidateFailForInvalidNullTokensArray");
        try {
            this.validator.validate(tokens);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForInvalidNullTokensArray");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidEmptyTokensArray() {
        final String[] tokens = new String[0];

        LOGGER.entering(this.getClass().getName(), "testValidateFailForInvalidEmptyTokensArray");
        try {
            this.validator.validate(tokens);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForInvalidEmptyTokensArray");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test(expected = IllegalArgumentException.class)
    public void testValidateFailForInvalidLengthTokensArray() {
        final String[] tokens = new String[5];

        LOGGER.entering(this.getClass().getName(), "testValidateFailForInvalidLengthTokensArray");
        try {
            this.validator.validate(tokens);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForInvalidLengthTokensArray");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleNull() {
        final String[] tokens = new String[] { null, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleNull");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleBlank() {
        final String[] tokens = new String[] { BLANK, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleBlank");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleEmpty() {
        final String[] tokens = new String[] { EMPTY, "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };

        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleEmpty");
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00011D000L", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForNomeNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", null, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForNomeNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForNomeBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", BLANK, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForNomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForNomeEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForNomeEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", EMPTY, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForNomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCognomeNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", null, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCognomeNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCognomeBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", BLANK, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCognomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCognomeEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCognomeEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", EMPTY, "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.COGNOME));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.COGNOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCognomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForIdProviderNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", null, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForIdProviderNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForIdProviderBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", BLANK, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForIdProviderBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForIdProviderEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForIdProviderEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", EMPTY, "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.ID_PROVIDER));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForIdProviderEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", null, "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", BLANK, "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", EMPTY, "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForTimestampWithInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForTimestampWithInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "201605311139", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.TIMESTAMP));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForTimestampWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", null, "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", BLANK, "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", EMPTY, "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithInvalidFormat() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithInvalidFormat");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "A", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithInvalidFormat");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithValue0NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithValue0NotInRange");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "0", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithValue0NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForLivelloAutenticazioneWithValue3NotInRange() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithValue3NotInRange");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "3", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.LIVELLO_AUTENTICAZIONE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForLivelloAutenticazioneWithValue3NotInRange");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacNull");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", null };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacBlank");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", BLANK };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacEmpty");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", EMPTY };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForMacWithInvalidLenght() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForMacWithInvalidLenght");

        final String[] tokens = new String[] { "AAAAAA00B77B000F", "CSI PIEMONTE", "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(1));
            assertThat(result[0].getToken(), is(IrideIdentityToken.MAC));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.MAC.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForMacWithInvalidLenght");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull");

        final String[] tokens = new String[] { "AAAAAA00011D000L", null, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank");

        final String[] tokens = new String[] { "AAAAAA00011D000L", BLANK, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty");

        final String[] tokens = new String[] { "AAAAAA00011D000L", EMPTY, "DEMO 20", "IPA", "20160531113948", "2", "1IQssTaf4vNMa66qU52m7g==" };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));
            assertThat(result, arrayWithSize(2));
            assertThat(result[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(result[0].getValue(), is(tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result[1].getToken(), is(IrideIdentityToken.NOME));
            assertThat(result[1].getValue(), is(tokens[IrideIdentityToken.NOME.getPosition()]));

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForCodiceFiscaleWithInvalidFormatAndForNomeEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllNullTokens() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForAllNullTokens");

        final String[] tokens = new String[] { null, null, null, null, null, null, null };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForAllNullTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllBlankTokens() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForAllBlankTokens");

        final String[] tokens = new String[] { BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForAllBlankTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.IrideIdentityValidator.IrideIdentityValidator#validate(java.lang.String)}.
     */
    @Test
    public void testValidateFailForAllEmptyTokens() {
        LOGGER.entering(this.getClass().getName(), "testValidateFailForAllEmptyTokens");

        final String[] tokens = new String[] { EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY };
        try {
            final IrideIdentityInvalidTokenValue[] result = this.validator.validate(tokens);

            assertThat(result, is(not(emptyArray())));

            final IrideIdentityToken[] irideIdentityTokens = IrideIdentityToken.values();

            assertThat(result, arrayWithSize(irideIdentityTokens.length));
            for (int i = 0; i < irideIdentityTokens.length; i++) {
                assertThat(result[i].getToken(), is(irideIdentityTokens[i]));
                assertThat(result[i].getValue(), is(tokens[irideIdentityTokens[i].getPosition()]));
            }

            LOGGER.warning(IrideSecurityUtils.toString(result));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testValidateFailForAllEmptyTokens");
        }
    }

}

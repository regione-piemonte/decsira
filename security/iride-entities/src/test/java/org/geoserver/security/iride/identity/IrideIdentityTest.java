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

import java.util.Arrays;
import java.util.logging.Logger;

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityTokenizationException;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityInvalidTokensException;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityMissingTokenException;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geotools.util.logging.Logging;
import org.junit.Before;
import org.junit.Test;
import org.springframework.util.SerializationUtils;

/**
 * <code>IRIDE</code> <code>Digital Identity</code> entity <code>JUnit</code> Test Case.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideIdentityTest.class);

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> tokens.
     */
    private String[] tokens;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.tokens = new String[] { "AAAAAA00A11D000L", "CSI PIEMONTE", "DEMO 23", "IPA", "20160725152035", "2", "SQGMT++caXxGO/7s3Zu2ow==" };
    }

    /**
     * Test method for {@link org.geoserver.security.iride.identity.token.IrideIdentityToken#SEPARATOR}.
     */
    @Test
    public void testIrideIdentityTokenSeparatorIsSlashCharacter() {
        LOGGER.entering(this.getClass().getName(), "testIrideIdentityTokenSeparatorIsSlashCharacter", IrideIdentityToken.SEPARATOR);

        assertThat(IrideIdentityToken.SEPARATOR, is('/'));

        LOGGER.exiting(this.getClass().getName(), "testIrideIdentityTokenSeparatorIsSlashCharacter");
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IllegalArgumentException.class)
    public void testNewIrideIdentityInstanceWithNullDigitalIdentityTokens() throws IrideIdentityTokenizationException {
        final String[] tokens = null;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithNullDigitalIdentityTokens", tokens);
        try {
            new IrideIdentity(tokens);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithNullDigitalIdentityTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityInvalidTokensException.class)
    public void testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleNull() throws IrideIdentityTokenizationException {
        final String[] tokensWithCodiceFiscaleNull = Arrays.copyOf(this.tokens, this.tokens.length);
        tokensWithCodiceFiscaleNull[IrideIdentityToken.CODICE_FISCALE.getPosition()] = null;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleNull", tokensWithCodiceFiscaleNull);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleNull);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityInvalidTokensException.class)
    public void testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty() throws IrideIdentityTokenizationException {
        final String[] tokensWithCodiceFiscaleNull = Arrays.copyOf(this.tokens, this.tokens.length);
        tokensWithCodiceFiscaleNull[IrideIdentityToken.CODICE_FISCALE.getPosition()] = EMPTY;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty", tokensWithCodiceFiscaleNull);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleNull);
        } catch (IrideIdentityInvalidTokensException e) {
            assertThat(e.getInvalidTokens(), is(not(nullValue())));
            assertThat(e.getInvalidTokens(), is(not(emptyArray())));
            assertThat(e.getInvalidTokens(), is(arrayWithSize(1)));
            assertThat(e.getInvalidTokens()[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getInvalidTokens()[0].getValue(), is(tokensWithCodiceFiscaleNull[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityInvalidTokensException.class)
    public void testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank() throws IrideIdentityTokenizationException {
        final String[] tokensWithCodiceFiscaleNull = Arrays.copyOf(this.tokens, this.tokens.length);
        tokensWithCodiceFiscaleNull[IrideIdentityToken.CODICE_FISCALE.getPosition()] = BLANK;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank", tokensWithCodiceFiscaleNull);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleNull);
        } catch (IrideIdentityInvalidTokensException e) {
            assertThat(e.getInvalidTokens(), is(not(nullValue())));
            assertThat(e.getInvalidTokens(), is(not(emptyArray())));
            assertThat(e.getInvalidTokens(), is(arrayWithSize(1)));
            assertThat(e.getInvalidTokens()[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getInvalidTokens()[0].getValue(), is(tokensWithCodiceFiscaleNull[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = NullPointerException.class)
    public void testNewIrideIdentityInstanceWithNullDigitalIdentityStringRepresentation() throws IrideIdentityTokenizationException {
        final String value = null;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithNullDigitalIdentityStringRepresentation", value);
        try {
            new IrideIdentity(value);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithNullDigitalIdentityStringRepresentation");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testNewIrideIdentityInstanceWithBlankDigitalIdentityStringRepresentation() throws IrideIdentityTokenizationException {
        final String value = BLANK;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithBlankDigitalIdentityStringRepresentation", value);
        try {
            new IrideIdentity(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithBlankDigitalIdentityStringRepresentation");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityMissingTokenException.class)
    public void testNewIrideIdentityInstanceWithEmptyDigitalIdentityStringRepresentation() throws IrideIdentityTokenizationException {
        final String value = EMPTY;

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithEmptyDigitalIdentityStringRepresentation", value);
        try {
            new IrideIdentity(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithEmptyDigitalIdentityStringRepresentation");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testNewIrideIdentityInstanceWithValidDigitalIdentityTokens() throws IrideIdentityTokenizationException {
        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityTokens", this.tokens);
        try {
            final IrideIdentity result = new IrideIdentity(this.tokens);

            assertThat(result, is(notNullValue()));
            assertThat(result.getCodFiscale(), is(this.tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result.getNome(), is(this.tokens[IrideIdentityToken.NOME.getPosition()]));
            assertThat(result.getCognome(), is(this.tokens[IrideIdentityToken.COGNOME.getPosition()]));
            assertThat(result.getIdProvider(), is(this.tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));
            assertThat(result.getTimestamp(), is(this.tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));
            assertThat(String.valueOf(result.getLivelloAutenticazione()), is(this.tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));
            assertThat(result.getMac(), is(this.tokens[IrideIdentityToken.MAC.getPosition()]));
            assertThat(result.toString(), is(StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR)));
            assertThat(result.toInternalRepresentation(), is(tokensToInternalRepresentation()));

            LOGGER.info("IrideIdentity: " + result);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityTokens");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testNewIrideIdentityInstanceWithValidDigitalIdentityParameters() throws IrideIdentityTokenizationException {
        final String codFiscale            = this.tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()];
        final String nome                  = this.tokens[IrideIdentityToken.NOME.getPosition()];
        final String cognome               = this.tokens[IrideIdentityToken.COGNOME.getPosition()];
        final String idProvider            = this.tokens[IrideIdentityToken.ID_PROVIDER.getPosition()];
        final String timestamp             = this.tokens[IrideIdentityToken.TIMESTAMP.getPosition()];
        final int livelloAutenticazione    = Integer.valueOf(this.tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]);
        final String mac                   = this.tokens[IrideIdentityToken.MAC.getPosition()];

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityParameters", this.tokens);
        try {
            final IrideIdentity result = new IrideIdentity(codFiscale, nome, cognome, idProvider, timestamp, livelloAutenticazione, mac);

            assertThat(result, is(notNullValue()));
            assertThat(result.getCodFiscale(), is(this.tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result.getNome(), is(this.tokens[IrideIdentityToken.NOME.getPosition()]));
            assertThat(result.getCognome(), is(this.tokens[IrideIdentityToken.COGNOME.getPosition()]));
            assertThat(result.getIdProvider(), is(this.tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));
            assertThat(result.getTimestamp(), is(this.tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));
            assertThat(String.valueOf(result.getLivelloAutenticazione()), is(this.tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));
            assertThat(result.getMac(), is(this.tokens[IrideIdentityToken.MAC.getPosition()]));
            assertThat(result.toString(), is(StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR)));
            assertThat(result.toInternalRepresentation(), is(tokensToInternalRepresentation()));

            LOGGER.info("IrideIdentity: " + result);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityParameters");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testNewIrideIdentityInstanceWithValidDigitalIdentityStringRepresentation() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityStringRepresentation", value);
        try {
            final IrideIdentity result = new IrideIdentity(value);

            assertThat(result, is(notNullValue()));
            assertThat(result.getCodFiscale(), is(this.tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result.getNome(), is(this.tokens[IrideIdentityToken.NOME.getPosition()]));
            assertThat(result.getCognome(), is(this.tokens[IrideIdentityToken.COGNOME.getPosition()]));
            assertThat(result.getIdProvider(), is(this.tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));
            assertThat(result.getTimestamp(), is(this.tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));
            assertThat(String.valueOf(result.getLivelloAutenticazione()), is(this.tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));
            assertThat(result.getMac(), is(this.tokens[IrideIdentityToken.MAC.getPosition()]));
            assertThat(result.toString(), is(value));
            assertThat(result.toInternalRepresentation(), is(tokensToInternalRepresentation()));

            LOGGER.info("IrideIdentity: " + result);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testNewIrideIdentityInstanceWithValidDigitalIdentityStringRepresentation");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#compareTo(IrideIdentity)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceComparesToItself() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceComparesToItself", value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = irideIdentity1;

            assertThat(irideIdentity1.compareTo(irideIdentity2), is(0));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceComparesToItself");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#compareTo(IrideIdentity)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceComparesToAnother() throws IrideIdentityTokenizationException {
        final String value1 = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);
        final String value2 = "NNRLSN69P26L570X/Aldesino/Innerkofler/IPA/20160531113948/2//VZjBdhZTwU+/7AU0A8HjQ==";

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceComparesToAnother", new String[] { value1, value2 });
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value1);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = new IrideIdentity(value2);

            assertThat(irideIdentity2, is(notNullValue()));
            assertThat(irideIdentity1.compareTo(irideIdentity2), is(lessThan(0)));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceComparesToAnother");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#equals(Object)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceIsEqualToItself() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceIsEqualToItself", value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = irideIdentity1;

            assertThat(irideIdentity1.equals(irideIdentity2), is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceIsEqualToItself");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#equals(Object)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceIsNotEqualToNull() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceIsNotEqualToNull", value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            assertThat(irideIdentity1.equals(null), is(false));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceIsNotEqualToNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#equals(Object)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceIsNotEqualToAnotherClassInstance() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceIsNotEqualToSubclassInstance", value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final Object anotherClassInstance = new Object();

            assertThat(irideIdentity1.equals(anotherClassInstance), is(false));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceIsNotEqualToSubclassInstance");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#equals(Object)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testIrideIdentityInstanceIsEqualToItsCopy() throws IrideIdentityTokenizationException {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentityInstanceIsEqualToItsCopy", value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = new IrideIdentity(irideIdentity1.toString());

            assertThat(irideIdentity1.equals(irideIdentity2), is(true));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentityInstanceIsEqualToItsCopy");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#parseIrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testParseIrideIdentityWithNullDigitalRepresentationReturnsNull() {
        final String value = null;

        LOGGER.entering(this.getClass().getName(), "testParseIrideIdentityWithNullDigitalRepresentationReturnsNull", value);
        try {
            final IrideIdentity result = IrideIdentity.parseIrideIdentity(value);

            assertThat(result, is(nullValue()));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testParseIrideIdentityWithNullDigitalRepresentationReturnsNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#parseIrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testParseIrideIdentityWithNotValidDigitalRepresentationReturnsNull() {
        final String value = "AAAAAA00011D000L/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";

        LOGGER.entering(this.getClass().getName(), "testParseIrideIdentityWithNotValidDigitalRepresentationReturnsNull", value);
        try {
            final IrideIdentity result = IrideIdentity.parseIrideIdentity(value);

            assertThat(result, is(nullValue()));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testParseIrideIdentityWithNotValidDigitalRepresentationReturnsNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#parseIrideIdentity(String)}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testParseIrideIdentityWithValidDigitalRepresentation() {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testParseIrideIdentityWithNullDigitalRepresentationReturnsNull", value);
        try {
            final IrideIdentity result = IrideIdentity.parseIrideIdentity(value);

            assertThat(result, is(notNullValue()));
            assertThat(result.getCodFiscale(), is(this.tokens[IrideIdentityToken.CODICE_FISCALE.getPosition()]));
            assertThat(result.getNome(), is(this.tokens[IrideIdentityToken.NOME.getPosition()]));
            assertThat(result.getCognome(), is(this.tokens[IrideIdentityToken.COGNOME.getPosition()]));
            assertThat(result.getIdProvider(), is(this.tokens[IrideIdentityToken.ID_PROVIDER.getPosition()]));
            assertThat(result.getTimestamp(), is(this.tokens[IrideIdentityToken.TIMESTAMP.getPosition()]));
            assertThat(String.valueOf(result.getLivelloAutenticazione()), is(this.tokens[IrideIdentityToken.LIVELLO_AUTENTICAZIONE.getPosition()]));
            assertThat(result.getMac(), is(this.tokens[IrideIdentityToken.MAC.getPosition()]));
            assertThat(result.toString(), is(value));
            assertThat(result.toInternalRepresentation(), is(tokensToInternalRepresentation()));

            LOGGER.info("IrideIdentity: " + result);
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testParseIrideIdentityWithNullDigitalRepresentationReturnsNull");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
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

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity} serialization.
     */
    @Test
    public void testIrideIdentitySuccesfulSerialization() {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentitySuccesfulSerialization", value);
        try {
            final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity(value);

            final byte[] serialized = SerializationUtils.serialize(irideIdentity);

            assertThat(serialized, is(not(nullValue())));
            assertThat(ArrayUtils.toObject(serialized), is(arrayWithSize(greaterThan(0))));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentitySuccesfulSerialization");
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity} serialization.
     */
    @Test
    public void testIrideIdentitySuccesfulDeserialization() {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.entering(this.getClass().getName(), "testIrideIdentitySuccesfulDeserialization", value);
        try {
            final IrideIdentity irideIdentity1 = IrideIdentity.parseIrideIdentity(value);

            final byte[] serialized = SerializationUtils.serialize(irideIdentity1);

            assertThat(serialized, is(not(nullValue())));
            assertThat(ArrayUtils.toObject(serialized), is(arrayWithSize(greaterThan(0))));

            final Object deserialized = SerializationUtils.deserialize(serialized);

            assertThat(deserialized, is(not(nullValue())));
            assertThat(deserialized, is(instanceOf(IrideIdentity.class)));

            final IrideIdentity irideIdentity2 = (IrideIdentity) deserialized;

            assertThat(irideIdentity1, is(not(sameInstance(irideIdentity2))));
            assertThat(irideIdentity1, is(irideIdentity2));
            assertThat(irideIdentity1.compareTo(irideIdentity2), is(0));
        } finally {
            LOGGER.exiting(this.getClass().getName(), "testIrideIdentitySuccesfulDeserialization");
        }
    }

    /**
     * Helper method to build an {@link IrideIdentity#toInternalRepresentation()} equivalent string joining {@link #tokens}.
     *
     * @return an {@link IrideIdentity#toInternalRepresentation()} equivalent string joining {@link #tokens}
     */
    private String tokensToInternalRepresentation() {
        return StringUtils.join(Arrays.copyOfRange(this.tokens, 0, this.tokens.length - 1), IrideIdentityToken.SEPARATOR);
    }

}

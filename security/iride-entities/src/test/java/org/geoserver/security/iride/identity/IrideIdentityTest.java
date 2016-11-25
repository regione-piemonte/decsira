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

import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityTokenizationException;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityInvalidTokensException;
import org.geoserver.security.iride.entity.identity.exception.IrideIdentityMissingTokenException;
import org.geoserver.security.iride.entity.identity.token.IrideIdentityToken;
import org.geoserver.security.iride.util.logging.LoggerProvider;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
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
    private static final Logger LOGGER = LoggerProvider.getLogger(IrideIdentityTest.class);

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
        LOGGER.trace("BEGIN {}::testIrideIdentityTokenSeparatorIsSlashCharacter - {}", this.getClass().getName(), IrideIdentityToken.SEPARATOR);

        assertThat(IrideIdentityToken.SEPARATOR, is('/'));

        LOGGER.trace("END {}::testIrideIdentityTokenSeparatorIsSlashCharacter", this.getClass().getName());
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IllegalArgumentException.class)
    public void testNewIrideIdentityInstanceWithNullDigitalIdentityTokens() throws IrideIdentityTokenizationException {
        final String[] tokens = null;

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithNullDigitalIdentityTokens - {}", this.getClass().getName(), tokens);
        try {
            new IrideIdentity(tokens);
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithNullDigitalIdentityTokens", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleNull - {}", this.getClass().getName(), tokensWithCodiceFiscaleNull);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleNull);
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleNull", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityInvalidTokensException.class)
    public void testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty() throws IrideIdentityTokenizationException {
        final String[] tokensWithCodiceFiscaleEmpty = Arrays.copyOf(this.tokens, this.tokens.length);
        tokensWithCodiceFiscaleEmpty[IrideIdentityToken.CODICE_FISCALE.getPosition()] = EMPTY;

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty - {}", this.getClass().getName(), tokensWithCodiceFiscaleEmpty);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleEmpty);
        } catch (IrideIdentityInvalidTokensException e) {
            assertThat(e.getInvalidTokens(), is(not(nullValue())));
            assertThat(e.getInvalidTokens(), is(not(emptyArray())));
            assertThat(e.getInvalidTokens(), is(arrayWithSize(1)));
            assertThat(e.getInvalidTokens()[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getInvalidTokens()[0].getValue(), is(tokensWithCodiceFiscaleEmpty[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleEmpty", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test(expected = IrideIdentityInvalidTokensException.class)
    public void testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank() throws IrideIdentityTokenizationException {
        final String[] tokensWithCodiceFiscaleBlank = Arrays.copyOf(this.tokens, this.tokens.length);
        tokensWithCodiceFiscaleBlank[IrideIdentityToken.CODICE_FISCALE.getPosition()] = BLANK;

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank - {}", this.getClass().getName(), tokensWithCodiceFiscaleBlank);
        try {
            new IrideIdentity(tokensWithCodiceFiscaleBlank);
        } catch (IrideIdentityInvalidTokensException e) {
            assertThat(e.getInvalidTokens(), is(not(nullValue())));
            assertThat(e.getInvalidTokens(), is(not(emptyArray())));
            assertThat(e.getInvalidTokens(), is(arrayWithSize(1)));
            assertThat(e.getInvalidTokens()[0].getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getInvalidTokens()[0].getValue(), is(tokensWithCodiceFiscaleBlank[IrideIdentityToken.CODICE_FISCALE.getPosition()]));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithDigitalIdentityTokensWithCodiceFiscaleBlank", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithNullDigitalIdentityStringRepresentation - {}", this.getClass().getName(), value);
        try {
            new IrideIdentity(value);
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithNullDigitalIdentityStringRepresentation", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithBlankDigitalIdentityStringRepresentation - {}", this.getClass().getName(), value);
        try {
            new IrideIdentity(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithBlankDigitalIdentityStringRepresentation", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithEmptyDigitalIdentityStringRepresentation - {}", this.getClass().getName(), value);
        try {
            new IrideIdentity(value);
        } catch (IrideIdentityMissingTokenException e) {
            assertThat(e.getMissingTokenValue().getToken(), is(IrideIdentityToken.CODICE_FISCALE));
            assertThat(e.getMissingTokenValue().getValue(), is(value));

            throw e;
        } finally {
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithEmptyDigitalIdentityStringRepresentation", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#IrideIdentity(String[])}.
     *
     * @throws IrideIdentityTokenizationException
     */
    @Test
    public void testNewIrideIdentityInstanceWithValidDigitalIdentityTokens() throws IrideIdentityTokenizationException {
    	LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithValidDigitalIdentityTokens - {}", this.getClass().getName(), this.tokens);
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
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithValidDigitalIdentityTokens", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithValidDigitalIdentityParameters - {}", this.getClass().getName(), this.tokens);
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
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithValidDigitalIdentityParameters", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testNewIrideIdentityInstanceWithValidDigitalIdentityStringRepresentation - {}", this.getClass().getName(), this.tokens);
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
        	LOGGER.trace("END {}::testNewIrideIdentityInstanceWithValidDigitalIdentityStringRepresentation", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceComparesToItself - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = irideIdentity1;

            assertThat(irideIdentity1.compareTo(irideIdentity2), is(0));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceComparesToItself", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceComparesToAnother - {}", new String[] { this.getClass().getName(), value1, value2 });
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value1);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = new IrideIdentity(value2);

            assertThat(irideIdentity2, is(notNullValue()));
            assertThat(irideIdentity1.compareTo(irideIdentity2), is(lessThan(0)));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceComparesToAnother", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceIsEqualToItself - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = irideIdentity1;

            assertThat(irideIdentity1.equals(irideIdentity2), is(true));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceIsEqualToItself", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceIsNotEqualToNull - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            assertThat(irideIdentity1.equals(null), is(false));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceIsNotEqualToNull", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceIsNotEqualToSubclassInstance - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final Object anotherClassInstance = new Object();

            assertThat(irideIdentity1.equals(anotherClassInstance), is(false));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceIsNotEqualToSubclassInstance", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testIrideIdentityInstanceIsEqualToItsCopy - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity1 = new IrideIdentity(value);

            assertThat(irideIdentity1, is(notNullValue()));

            final IrideIdentity irideIdentity2 = new IrideIdentity(irideIdentity1.toString());

            assertThat(irideIdentity1.equals(irideIdentity2), is(true));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentityInstanceIsEqualToItsCopy", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testParseIrideIdentityWithNullDigitalRepresentationReturnsNull - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity result = IrideIdentity.parseIrideIdentity(value);

            assertThat(result, is(nullValue()));
        } finally {
            LOGGER.trace("END {}::testParseIrideIdentityWithNullDigitalRepresentationReturnsNull", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testParseIrideIdentityWithNotValidDigitalRepresentationReturnsNull - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity result = IrideIdentity.parseIrideIdentity(value);

            assertThat(result, is(nullValue()));
        } finally {
        	LOGGER.trace("END {}::testParseIrideIdentityWithNotValidDigitalRepresentationReturnsNull", this.getClass().getName());
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

        LOGGER.trace("BEGIN {}::testParseIrideIdentityWithValidDigitalRepresentation - {}", this.getClass().getName(), value);
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
        	LOGGER.trace("END {}::testParseIrideIdentityWithValidDigitalRepresentation", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity#isNotValidIrideIdentity(java.lang.String)}.
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

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity} serialization.
     */
    @Test
    public void testIrideIdentitySuccesfulSerialization() {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.trace("BEGIN {}::testIrideIdentitySuccesfulSerialization - {}", this.getClass().getName(), value);
        try {
            final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity(value);

            final byte[] serialized = SerializationUtils.serialize(irideIdentity);

            assertThat(serialized, is(not(nullValue())));
            assertThat(ArrayUtils.toObject(serialized), is(arrayWithSize(greaterThan(0))));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentitySuccesfulSerialization", this.getClass().getName());
        }
    }

    /**
     * Test method for {@link org.geoserver.security.iride.entity.IrideIdentity} serialization.
     */
    @Test
    public void testIrideIdentitySuccesfulDeserialization() {
        final String value = StringUtils.join(this.tokens, IrideIdentityToken.SEPARATOR);

        LOGGER.trace("BEGIN {}::testIrideIdentitySuccesfulDeserialization - {}", this.getClass().getName(), value);
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
            assertThat(irideIdentity1, is(equalTo(irideIdentity2)));
            assertThat(irideIdentity1.compareTo(irideIdentity2), is(0));
        } finally {
        	LOGGER.trace("END {}::testIrideIdentitySuccesfulDeserialization", this.getClass().getName());
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

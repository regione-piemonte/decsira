/*
 *  CSI SIRA - Access Manager Security Module ("Rules Engine"), a GeoServer Secure Catalog Resource Access Manager plugin with which specify advanced rules evaluated to decide what the specified user can access.
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
package it.geosolutions.geoserver.sira.security;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.geoserver.catalog.Catalog;
import org.geoserver.catalog.FeatureTypeInfo;
import org.geoserver.data.test.SystemTestData;
import org.geoserver.platform.GeoServerExtensions;
import org.geoserver.security.impl.GeoServerUser;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.geoserver.security.iride.util.IrideUserProperties;
import org.geoserver.test.AbstractAppSchemaTestSupport;
import org.junit.Test;
import org.w3c.dom.Document;

/**
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class SiraSecurityTest extends AbstractAppSchemaTestSupport {

    private static final String CONFIG_RESOURCE = "/test-sira-access-manager-config.xml";
    private static final String CONFIG_FILE_DEST = "sira-access-manager.xml";

    @Test
    public void testSecureDataStore() {
        final Catalog catalog = this.getCatalog();

        // I'm not logged in, nothing should be returned
        FeatureTypeInfo aua = catalog.getFeatureTypeByName("sira:AutorizzazioneUnicaAmbientale");
        assertNull(aua);

        // login as user with role Profilo_A
        this.login("userA", "test", "Profilo_A");

        aua = catalog.getFeatureTypeByName("sira:AutorizzazioneUnicaAmbientale");
        assertNotNull(aua);
    }

    /**
     * Test that query returns correct output for a user with role 'Profilo_A'.
     */
    @Test
    public void testSecureAutorizzazioneUnicaAmbientaleProfiloA() {
        this.setRequestAuth("userA", "test");
        final Catalog catalog = this.getCatalog();
        final Document doc = this.getAsDOM("ows?service=WFS&version=1.1.0&request=GetFeature&typeName=sira:AutorizzazioneUnicaAmbientale");
        LOGGER.info("WFS GetFeature response:\n" + this.prettyString(doc));

        assertXpathCount(2, "//sira:AutorizzazioneUnicaAmbientale", doc);
        assertXpathCount(2, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa", doc);
        // should be visible
        assertXpathCount(2, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:nrProvvedimento", doc);
        // should be hidden
        assertXpathCount(0, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:dataRilascio", doc);
    }

    /**
     * Test that query returns correct output for a user with role 'Profilo_B'.
     */
    @Test
    public void testSecureAutorizzazioneUnicaAmbientaleProfiloB() {
        this.setRequestAuth("userB", "test");

        final Document doc = this.getAsDOM("ows?service=WFS&version=1.1.0&request=GetFeature&typeName=sira:AutorizzazioneUnicaAmbientale");

        LOGGER.info("WFS GetFeature response:\n" + this.prettyString(doc));

        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale", doc);
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa", doc);
        // should be visible
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:nrProvvedimento", doc);
        // should be visible as well
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:dataRilascio", doc);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.test.AbstractAppSchemaTestSupport#createTestData()
     */
    @Override
    protected SiraSecurityTestData createTestData() {
        return new SiraSecurityTestData();
    }

    /**
     * Enable the Spring Security auth filters
     */
    /*
     * (non-Javadoc)
     * @see org.geoserver.test.GeoServerSystemTestSupport#getFilters()
     */
    @Override
    protected List<javax.servlet.Filter> getFilters() {
        return Collections.singletonList((javax.servlet.Filter) GeoServerExtensions.bean("filterChainProxy"));
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.test.GeoServerSystemTestSupport#setUpTestData(org.geoserver.data.test.SystemTestData)
     */
    @Override
    protected void setUpTestData(SystemTestData testData) throws Exception {
        super.setUpTestData(testData);

        this.copyConfigurationFile(testData.getDataDirectoryRoot(), CONFIG_RESOURCE);
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.test.AbstractAppSchemaTestSupport#onSetUp(org.geoserver.data.test.SystemTestData)
     */
    @Override
    protected void onSetUp(SystemTestData testData) throws Exception {
        super.onSetUp(testData);

        this.addUser("userA", "test", null, Arrays.asList("Profilo_A"));
        this.addUser("userB", "test", null, Arrays.asList("Profilo_B"));

        final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity("NNRLSN69P26L570X/Aldesino/Innerkofler/IPA/20160531113948/2//VZjBdhZTwU+/7AU0A8HjQ==");

        this.addUser("userC", "test", null, Arrays.asList("PA_SPEC_CONS_DECSIRA@REG_PMN", "PA_SPEC_DECSIRA@REG_PMN"));

        final GeoServerUser userC = this.getSecurityManager().loadUserGroupService("default").getUserByUsername("userC");
        userC.getProperties().put(IrideUserProperties.IRIDE_IDENTITY, irideIdentity);
    }

    private void copyConfigurationFile(File dataDirRoot, String configResource) throws IOException {
        // copy configuration to data directory
        assertTrue(dataDirRoot.canWrite());

        final File securityDir = new File(dataDirRoot, "security");
        assertNotNull(securityDir);
        if (! securityDir.exists()) {
            assertTrue(securityDir.mkdir());
        }
        assertTrue(securityDir.canWrite());
        final File configFile = new File(securityDir, CONFIG_FILE_DEST);
        try (final FileOutputStream fos = new FileOutputStream(configFile)) {
            IOUtils.copy(this.getClass().getResourceAsStream(configResource), fos);
        }
        assertTrue(configFile.exists());
    }

}

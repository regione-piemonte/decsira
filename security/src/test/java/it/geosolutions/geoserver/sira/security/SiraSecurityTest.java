package it.geosolutions.geoserver.sira.security;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

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
import org.geoserver.test.AbstractAppSchemaTestSupport;
import org.junit.Test;
import org.w3c.dom.Document;


public class SiraSecurityTest extends AbstractAppSchemaTestSupport {

    private static final String CONFIG_RESOURCE = "/test-sira-access-manager-config.xml";
    private static final String CONFIG_FILE_DEST = "sira-access-manager.xml";

    @Override
    protected SiraSecurityTestData createTestData() {
        return new SiraSecurityTestData();
    }

    /**
     * Enable the Spring Security auth filters
     */
    @Override
    protected List<javax.servlet.Filter> getFilters() {
        return Collections.singletonList((javax.servlet.Filter) GeoServerExtensions
                .bean("filterChainProxy"));
    }

    @Override
    protected void setUpTestData(SystemTestData testData) throws Exception {
        super.setUpTestData(testData);

        copyConfigurationFile(testData.getDataDirectoryRoot(), CONFIG_RESOURCE);
    }

    @Override
    protected void onSetUp(SystemTestData testData) throws Exception {
        super.onSetUp(testData);

        addUser("userA", "test", null, Arrays.asList("Profilo_A"));
        addUser("userB", "test", null, Arrays.asList("Profilo_B"));
    }

    @Test
    public void testSecureDataStore() {
        Catalog catalog = getCatalog();

        // I'm not logged in, nothing should be returned
        FeatureTypeInfo aua = catalog.getFeatureTypeByName("sira:AutorizzazioneUnicaAmbientale");
        assertNull(aua);

        // login as user with role Profilo_A
        login("userA", "test", "Profilo_A");
        aua = catalog.getFeatureTypeByName("sira:AutorizzazioneUnicaAmbientale");
        assertNotNull(aua);
    }

    /**
     * Test that query returns correct output for a user with role 'Profilo_A'.
     */
    @Test
    public void testSecureAutorizzazioneUnicaAmbientaleProfiloA() {
        setRequestAuth("userA", "test");
        Document doc = getAsDOM("ows?service=WFS&version=1.1.0&request=GetFeature&typeName=sira:AutorizzazioneUnicaAmbientale");
        LOGGER.info("WFS GetFeature response:\n"
                + prettyString(doc));
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
        setRequestAuth("userB", "test");
        Document doc = getAsDOM("ows?service=WFS&version=1.1.0&request=GetFeature&typeName=sira:AutorizzazioneUnicaAmbientale");
        LOGGER.info("WFS GetFeature response:\n"
                + prettyString(doc));
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale", doc);
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa", doc);
        // should be visible
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:nrProvvedimento", doc);
        // should be visible as well
        assertXpathCount(4, "//sira:AutorizzazioneUnicaAmbientale/sira:istanza/sira:IstanzaAutorizzativa/sira:dataRilascio", doc);
    }

    private void copyConfigurationFile(File dataDirRoot, String configResource)
            throws IOException {
        // copy configuration to data directory
        assertTrue(dataDirRoot.canWrite());
        File securityDir = new File(dataDirRoot, "security");
        assertNotNull(securityDir);
        if (!securityDir.exists()) {
            assertTrue(securityDir.mkdir());
        }
        assertTrue(securityDir.canWrite());
        File configFile = new File(securityDir, CONFIG_FILE_DEST);
        try (FileOutputStream fos = new FileOutputStream(configFile)) {
            IOUtils.copy(this.getClass().getResourceAsStream(configResource),
                    fos);
        }
        assertTrue(configFile.exists());
    }

}

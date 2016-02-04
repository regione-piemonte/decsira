package it.geosolutions.csi.sira.backend.queryform.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PropertiesFileQueryFormConfigProviderTest {

    private static final Logger LOGGER = LoggerFactory.getLogger(PropertiesFileQueryFormConfigProviderTest.class);

    private static final String TEST_FEATURE_TYPE_NAME = "test-feature";

    @Test
    public void testLoadFromClasspath() {
        PropertiesFileQueryFormConfigProvider provider = new PropertiesFileQueryFormConfigProvider();
        try {
            Properties p = provider.loadFromClasspath(TEST_FEATURE_TYPE_NAME);
            assertNotNull(p);
            assertEquals(6, p.keySet().size());
        } catch (IOException e) {
            LOGGER.error("Exception trown loading configuration from classpath", e);
            fail();
        }
    }

    @Test
    public void testLoadFromConfigDir() {
        File tempDir = null;
        File tempFile = null;
        try {
            // create temp directory
            Path tempDirPath = Files.createTempDirectory("_queryform" + new Date().getTime());
            tempDir = tempDirPath.toFile();

            // copy config file to temp directory
            String resourceName = TEST_FEATURE_TYPE_NAME + ".properties";
            tempFile = new File(tempDir, resourceName);
            Files.copy(getClass().getResourceAsStream("/" + resourceName), Paths.get(tempFile.getPath()));

            // set system property for configuration directory
            System.setProperty(PropertiesFileQueryFormConfigProvider.CONFIG_DIR_SYSTEM_PROP, tempDir.getAbsolutePath());

            PropertiesFileQueryFormConfigProvider provider = new PropertiesFileQueryFormConfigProvider();
            try {
                assertTrue(provider.isConfigDirSet());

                Properties p = provider.loadFromConfigDir(provider.getConfigDir(), TEST_FEATURE_TYPE_NAME);
                assertNotNull(p);
                assertEquals(6, p.keySet().size());
            } catch (IOException e) {
                LOGGER.error("Exception trown loading configuration from configuration directory", e);
                fail();
            }
        } catch (IOException e) {
            LOGGER.error("Exception trown creating temporary directory", e);
        } finally {
            // reset system property for configuration directory
            System.setProperty(PropertiesFileQueryFormConfigProvider.CONFIG_DIR_SYSTEM_PROP, "");

            if (tempFile != null) {
                tempFile.delete();
            }
            if (tempDir != null) {
                tempDir.delete();
            }
        }
    }

    @Test
    public void testConfigurationProcessing() {
        PropertiesFileQueryFormConfigProvider provider = new PropertiesFileQueryFormConfigProvider();
        QueryFormConfig config = provider.getConfiguration(TEST_FEATURE_TYPE_NAME);

        assertNotNull(config);
        assertEquals(TEST_FEATURE_TYPE_NAME, config.getFeatureTypeName());
        assertNotNull(config.getFields());
        assertEquals(2, config.getFields().size());

        QueryFormField fieldColor = config.getFields().get(0);
        assertEquals("field-color", fieldColor.id);
        assertEquals(QueryFormFieldType.list, fieldColor.type);
        List<String> fieldColorValues = ((ListField)fieldColor).getValues();
        assertEquals(3, fieldColorValues.size());
        assertEquals("Red", fieldColorValues.get(0));
        assertEquals("Green", fieldColorValues.get(1));
        assertEquals("Blue", fieldColorValues.get(2));

        QueryFormField fieldPeriod = config.getFields().get(1);
        assertEquals("field-period", fieldPeriod.id);
        assertEquals(QueryFormFieldType.date, fieldPeriod.type);
    }

}

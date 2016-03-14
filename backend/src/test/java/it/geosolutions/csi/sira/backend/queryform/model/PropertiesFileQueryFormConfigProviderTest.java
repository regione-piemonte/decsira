package it.geosolutions.csi.sira.backend.queryform.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import it.geosolutions.csi.sira.backend.queryform.model.parser.JsonAttributeParser;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PropertiesFileQueryFormConfigProviderTest {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(PropertiesFileQueryFormConfigProviderTest.class);

    private static final int NUM_PROPERTIES = 23;
    private static final String TEST_FEATURE_TYPE_CONFIG_NAME = "test-feature";
    private static final String TEST_FEATURE_TYPE_NAME = "cite:TestFeature";
    private static final String TEST_FEATURE_TYPE_LABEL = "Test Feature";
    private static final String TEST_FEATURE_TYPE_GEOMETRY = "geometria";

    @Test
    public void testLoadFromClasspath() {
        PropertiesFileQueryFormConfigProvider provider = new PropertiesFileQueryFormConfigProvider();
        try {
            Properties p = provider.loadFromClasspath(TEST_FEATURE_TYPE_CONFIG_NAME);
            assertNotNull(p);
            assertEquals(NUM_PROPERTIES, p.keySet().size());
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
            String resourceName = TEST_FEATURE_TYPE_CONFIG_NAME + ".properties";
            tempFile = new File(tempDir, resourceName);
            Files.copy(getClass().getResourceAsStream("/" + resourceName),
                    Paths.get(tempFile.getPath()));

            // set system property for configuration directory
            System.setProperty(PropertiesFileQueryFormConfigProvider.CONFIG_DIR_SYSTEM_PROP,
                    tempDir.getAbsolutePath());

            PropertiesFileQueryFormConfigProvider provider = new PropertiesFileQueryFormConfigProvider();
            try {
                assertTrue(provider.isConfigDirSet());

                Properties p = provider.loadFromConfigDir(provider.getConfigDir(),
                        TEST_FEATURE_TYPE_CONFIG_NAME);
                assertNotNull(p);
                assertEquals(NUM_PROPERTIES, p.keySet().size());
            } catch (IOException e) {
                LOGGER.error("Exception trown loading configuration from configuration directory",
                        e);
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
        provider.attributeParser = new JsonAttributeParser();

        QueryFormConfig config = provider.getConfiguration(TEST_FEATURE_TYPE_CONFIG_NAME);

        assertNotNull(config);
        assertEquals(TEST_FEATURE_TYPE_NAME, config.getFeatureTypeName());
        assertEquals(TEST_FEATURE_TYPE_LABEL, config.getFeatureTypeNameLabel());
        assertEquals(TEST_FEATURE_TYPE_GEOMETRY, config.getGeometricField());
        assertNotNull(config.getFields());
        assertEquals(5, config.getFields().size());

        QueryFormField fieldColor = config.getFields().get(0);
        assertEquals("field-color", fieldColor.id);
        assertEquals(fieldColor.id, fieldColor.name);
        assertEquals(QueryFormFieldType.list, fieldColor.type);
        List<Object> fieldColorValues = ((ListField) fieldColor).getValues();
        assertEquals(3, fieldColorValues.size());
        assertEquals("Red", fieldColorValues.get(0));
        assertEquals("Green", fieldColorValues.get(1));
        assertEquals("Blue", fieldColorValues.get(2));

        QueryFormField fieldPeriod = config.getFields().get(1);
        assertEquals("field-period", fieldPeriod.id);
        assertEquals("Period", fieldPeriod.name);
        assertEquals(QueryFormFieldType.date, fieldPeriod.type);

        QueryFormField fieldShapeClass = config.getFields().get(2);
        assertEquals("field-shapeclass", fieldShapeClass.id);
        assertEquals(fieldShapeClass.id, fieldShapeClass.name);
        assertEquals(QueryFormFieldType.list, fieldShapeClass.type);
        List<Object> fieldShapeClassValues = ((ListField) fieldShapeClass).getValues();
        assertEquals(2, fieldShapeClassValues.size());
        assertTrue(fieldShapeClassValues.get(0) instanceof Map);
        assertTrue(fieldShapeClassValues.get(1) instanceof Map);
        Map<String, Object> polygon = (Map<String, Object>) fieldShapeClassValues.get(0);
        assertEquals(1, polygon.get("id"));
        assertEquals("Polygon", polygon.get("name"));
        Map<String, Object> curve = (Map<String, Object>) fieldShapeClassValues.get(1);
        assertEquals(2, curve.get("id"));
        assertEquals("Curve", curve.get("name"));

        QueryFormField fieldShape = config.getFields().get(3);
        assertEquals("field-shape", fieldShape.id);
        assertEquals("Geometric Shape", fieldShape.name);
        assertEquals(QueryFormFieldType.list, fieldShape.type);
        assertTrue(fieldShape instanceof ListField);
        ListField shape = (ListField) fieldShape;
        assertNotNull(shape.getDependsOn());
        assertEquals("field-shapeclass", shape.getDependsOn().getField());
        assertEquals("id", shape.getDependsOn().getFrom());
        assertEquals("classId", shape.getDependsOn().getTo());
        List<Object> fieldShapeValues = ((ListField) fieldShape).getValues();
        assertEquals(5, fieldShapeValues.size());
        assertTrue(fieldShapeValues.get(0) instanceof Map);
        Map<String, Object> square = (Map<String, Object>) fieldShapeValues.get(0);
        assertEquals(1, square.get("id"));
        assertEquals(1, square.get("classId"));
        assertEquals("Square", square.get("name"));
        assertTrue(fieldShapeValues.get(3) instanceof Map);
        Map<String, Object> circle = (Map<String, Object>) fieldShapeValues.get(3);
        assertEquals(4, circle.get("id"));
        assertEquals(2, circle.get("classId"));
        assertEquals("Circle", circle.get("name"));

        QueryFormField fieldRemote = config.getFields().get(4);
        assertEquals("field-remote", fieldRemote.id);
        assertEquals(fieldRemote.id, fieldRemote.name);
        assertEquals(QueryFormFieldType.list, fieldRemote.type);
        assertTrue(fieldRemote instanceof ListField);
        ListField remote = (ListField) fieldRemote;
        assertNotNull(remote.getValueService());
        assertEquals("http", remote.getValueService().getProtocol());
        assertEquals("localhost", remote.getValueService().getHost());
        assertEquals(8080, remote.getValueService().getPort());
        assertEquals("/geoserver/ows", remote.getValueService().getPath());
        assertEquals(
                "service=WFS&version=1.1.0&request=GetFeature&typeName=cite:buildings&outputFormat=application/json",
                remote.getValueService().getQuery());
        assertNotNull(remote.getValueId());
        assertEquals("id_building", remote.getValueId());
        assertNotNull(remote.getValueLabel());
        assertEquals("description", remote.getValueLabel());
    }

}

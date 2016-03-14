package it.geosolutions.csi.sira.backend.queryform.model;

import it.geosolutions.csi.sira.backend.queryform.model.parser.AttributeParser;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

/**
 * {@link QueryFormConfigProvider} implementation that reads the configuration from a <code>.properties</code> file.
 * 
 * <p>
 * The configuration file must be named according to the pattern <code>{feature type name}.properties</code> and must be located either in the
 * classpath root, or in a directory that can be specified by setting the {@value #CONFIG_DIR_SYSTEM_PROP} system property.
 * </p>
 * 
 * <p>
 * The configuration directory is scanned first, then, if no configuration file for the specified feature type is found, the classpath is scanned.
 * </p>
 * 
 * <p>
 * Sample configuration file:
 * 
 * <blockquote>
 * <pre>
 * # the display name of the feature type
 * label=Test Feature
 * # the name of the geometry field in the feature type
 * geometry=the_geom
 * # the fields that will be part of the query form
 * fields=color,period
 * 
 * # attributes are specified according to the format: <strong>[field name]</strong>.<strong>[field attribute]</strong>=<strong>[field value]</strong>
 * 
 * # configuration for the field "color"
 * color.id=field-color
 * color.type=list
 * color.values=Red|| Green|| Blue 
 * 
 * # configuration for the field "period"
 * period.id=field-period
 * period.name=Period
 * period.type=date
 * </pre>
 * </blockquote>
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class PropertiesFileQueryFormConfigProvider implements QueryFormConfigProvider {

    public static final String CONFIG_DIR_SYSTEM_PROP = "queryform.config.dir";

    public static final String NAME_PROP = "name";

    public static final String LABEL_PROP = "label";

    public static final String GEOMETRY_PROP = "geometry";

    public static final String FIELDS_PROP = "fields";

    public static final String FIELD_ID_PROP_SUFFIX = ".id";

    public static final String FIELD_NAME_PROP_SUFFIX = ".name";

    public static final String FIELD_TYPE_PROP_SUFFIX = ".type";

    private static final Logger logger = LoggerFactory
            .getLogger(PropertiesFileQueryFormConfigProvider.class);

    AttributeParser attributeParser;

    @Override
    public QueryFormConfig getConfiguration(String featureTypeName) {
        if (!StringUtils.hasText(featureTypeName)) {
            throw new IllegalArgumentException("featureTypeName must be provided");
        }

        Properties conf = null;
        try {
            if (isConfigDirSet()) {
                logger.debug("Loading configration from config dir: " + getConfigDir());
                conf = loadFromConfigDir(getConfigDir(), featureTypeName);
            } else {
                logger.debug("Loading configration from classpath");
                conf = loadFromClasspath(featureTypeName);
            }
        } catch (IOException e) {
            throw new QueryFormConfigNotFoundException(featureTypeName, e);
        }

        if (conf == null || conf.isEmpty()) {
            throw new QueryFormConfigNotFoundException(featureTypeName);
        }

        String name = conf.getProperty(NAME_PROP, "");
        if (name.trim().isEmpty()) {
            // default to feature type name used for loading the configuration file
            name = featureTypeName;
        }
        String label = conf.getProperty(LABEL_PROP, "");
        if (label.trim().isEmpty()) {
            // default to name
            label = name;
        }
        String geometry = conf.getProperty(GEOMETRY_PROP, "");
        if (geometry.trim().isEmpty()) {
            // default to "geometry"
            geometry = "geometry";
        }

        QueryFormConfig queryFormConfig = new QueryFormConfig(name, label, geometry);
        return processConfiguration(queryFormConfig, conf);
    }

    QueryFormConfig processConfiguration(QueryFormConfig queryFormConfig, Properties conf) {
        String fieldsPropertyValue = conf.getProperty(FIELDS_PROP, "");
        if (fieldsPropertyValue.trim().isEmpty()) {
            logger.warn("No fields specified, returning empty config");
            return queryFormConfig;
        }

        String[] fieldNames = fieldsPropertyValue.split(",");
        List<QueryFormField> fields = processFields(fieldNames, conf);
        queryFormConfig.setFields(fields);

        return queryFormConfig;
    }

    List<QueryFormField> processFields(String[] fieldNames, Properties conf) {
        List<QueryFormField> fields = new ArrayList<>();

        for (String fieldName : fieldNames) {
            fieldName = fieldName.trim();
            QueryFormField field = processField(fieldName, conf);
            if (field != null) {
                fields.add(field);
            } else {
                logger.debug("Field '" + fieldName + "' could not be processed, skipping it");
            }
        }

        return fields;
    }

    QueryFormField processField(String fieldName, Properties conf) {
        QueryFormField field = null;

        // determine field type
        String fieldTypeProperty = fieldName + FIELD_TYPE_PROP_SUFFIX;
        QueryFormFieldType fieldType = processFieldType(fieldName,
                conf.getProperty(fieldTypeProperty));
        if (fieldType != null) {
            try {
                field = fieldType.getFieldClass().newInstance();
                // "manually" inject attribute parser
                field.setAttributeParser(attributeParser);
            } catch (InstantiationException | IllegalAccessException e) {
                logger.error("Failed to instantiate field of type: " + fieldType.getFieldClass(), e);
            }
        }

        // populate field attributes
        if (field != null) {
            String fieldIdProperty = fieldName + FIELD_ID_PROP_SUFFIX;
            field.id = conf.getProperty(fieldIdProperty);
            String fieldNameProperty = fieldName + FIELD_NAME_PROP_SUFFIX;
            field.name = conf.getProperty(fieldNameProperty, "");
            if (field.name.trim().isEmpty()) {
                // default to field.id
                field.name = field.id;
            }
            // set extra attributes
            for (String attribute : fieldType.getExtraAttributes()) {
                String attributeProperty = fieldName + "." + attribute;
                field.setExtraAttribute(attribute, conf.getProperty(attributeProperty));
            }
        }

        return field;
    }

    QueryFormFieldType processFieldType(String fieldName, String fieldTypeAsString) {
        QueryFormFieldType fieldType = null;

        if (fieldTypeAsString == null || fieldTypeAsString.trim().isEmpty()) {
            logger.warn("No type specified for field '" + fieldName + "', ignoring it");
        }
        try {
            fieldType = QueryFormFieldType.valueOf(fieldTypeAsString);
        } catch (Exception e) {
            logger.error(fieldTypeAsString + ": unknown type specified for field '" + fieldName
                    + "', ignoring it");
        }

        return fieldType;
    }

    Properties loadFromConfigDir(String configDirName, String featureTypeName) throws IOException {
        File configDir = new File(configDirName);
        if (!configDir.exists() || !configDir.isDirectory() || !configDir.canRead()) {
            logger.error(configDirName + " is not a readable directory");
            return null;
        }

        File configFile = new File(configDir, getConfigFileName(featureTypeName));
        if (!configFile.exists() || !configFile.isFile() || !configFile.canRead()) {
            logger.error(configFile.getName() + " is not a readable file");
            return null;
        }

        // load properties from file
        InputStream in = new FileInputStream(configFile);
        Properties p = new Properties();
        p.load(in);
        return p;
    }

    Properties loadFromClasspath(String featureTypeName) throws IOException {
        // look-up config file in the classpath root
        InputStream in = getClass().getResourceAsStream("/" + getConfigFileName(featureTypeName));
        if (in == null) {
            return null;
        }

        // load properties from resource
        Properties p = new Properties();
        p.load(in);
        return p;
    }

    boolean isConfigDirSet() {
        return StringUtils.hasText(getConfigDir());
    }

    String getConfigDir() {
        return System.getProperty(CONFIG_DIR_SYSTEM_PROP);
    }

    private String getConfigFileName(String featureTypeName) {
        return featureTypeName + ".properties";
    }

    /**
     * 
     * @return the attribute parser implementation in use
     */
    public AttributeParser getAttributeParser() {
        return attributeParser;
    }

    /**
     * 
     * @param attributeParser the attribute parser implementation to use
     */
    public void setAttributeParser(AttributeParser attributeParser) {
        this.attributeParser = attributeParser;
    }

}

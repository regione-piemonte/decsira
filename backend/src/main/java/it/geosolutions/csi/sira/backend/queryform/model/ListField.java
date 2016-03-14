package it.geosolutions.csi.sira.backend.queryform.model;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

/**
 * Configuration for a form field allowing the user to choose an option from a finite set of values.
 * 
 * <p>
 * Visually, it could be rendered e.g. as a drop down or a list box.
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class ListField extends QueryFormField {

    public static final String SEPARATOR = "\\|\\|";

    public static final String EXTRA_ATTR_DEPENDSON = "dependson";

    public static final String EXTRA_ATTR_VALUES = "values";

    public static final String EXTRA_ATTR_VALUE_SERVICE = "valueService";

    public static final String EXTRA_ATTR_ID_FIELD = "valueId";

    public static final String EXTRA_ATTR_LABEL_FIELD = "valueLabel";

    public static final String DEFAULT_ID_FIELD = "id";

    public static final String DEFAULT_LABEL_FIELD = "label";

    private static final Logger logger = LoggerFactory.getLogger(ListField.class);

    private DependsOn dependsOn;

    private List<Object> values;

    private URL valueService;

    private String valueId;

    private String valueLabel;

    ListField() {
        super(QueryFormFieldType.list);
        values = new ArrayList<>();
    }

    ListField(List<Object> values) {
        this();
        setValues(values);
    }

    @JsonProperty("dependson")
    @JsonSerialize(include = Inclusion.NON_NULL)
    public DependsOn getDependsOn() {
        return dependsOn;
    }

    public void setDependsOn(DependsOn dependsOn) {
        this.dependsOn = dependsOn;
    }

    /**
     * @return a copy of the internal values list
     */
    @JsonSerialize(include = Inclusion.NON_EMPTY)
    public List<Object> getValues() {
        if (CollectionUtils.isEmpty(values)) {
            return Collections.emptyList();
        }
        return new ArrayList<>(values);
    }

    /**
     * Sets a new values list.
     * 
     * <p>
     * If a <code>null</code> or empty list is passed, the method does nothing.
     * </p>
     * 
     * @param values the values to set
     */
    public void setValues(List<Object> values) {
        if (!CollectionUtils.isEmpty(values)) {
            this.values.clear();
            this.values.addAll(values);
        }
    }

    /**
     * 
     * @return URL of the service from which values can be retrieved
     */
    @JsonSerialize(include = Inclusion.NON_NULL)
    public URL getValueService() {
        return valueService;
    }

    /**
     * 
     * @param valueService the URL of the service from which values can be retrieved
     */
    public void setValueService(URL valueService) {
        this.valueService = valueService;
    }

    /**
     * 
     * @return the name of the ID field
     */
    @JsonSerialize(include = Inclusion.NON_NULL)
    public String getValueId() {
        return valueId;
    }

    public void setValueId(String valueId) {
        if (!StringUtils.hasText(valueId)) {
            this.valueId = DEFAULT_ID_FIELD;
        } else {
            this.valueId = valueId;
        }
    }

    /**
     * 
     * @return the name of the field to be used as textual description
     */
    @JsonSerialize(include = Inclusion.NON_NULL)
    public String getValueLabel() {
        return valueLabel;
    }

    public void setValueLabel(String valueLabel) {
        if (!StringUtils.hasText(valueLabel)) {
            this.valueLabel = DEFAULT_LABEL_FIELD;
        } else {
            this.valueLabel = valueLabel;
        }
    }

    /**
     * <p>
     * The <code>dependson</code> attribute can be set by passing either a {@link DependsOn} instance, or a {@link String}, which is assumed to be a
     * JSON-encoded object.
     * </p>
     * 
     * <p>
     * The <code>values</code> attribute can be set by passing either a {@link Collection} of {@link String}s, or a {@link String} value, which is
     * interpreted as a list of JSON-encoded values separated by <code>||</code>.
     * </p>
     * 
     */
    @Override
    public void setExtraAttribute(String name, Object value) {
        if (EXTRA_ATTR_DEPENDSON.equals(name)) {
            parseDependsOnAttribute(value);
        } else if (EXTRA_ATTR_VALUES.equals(name)) {
            parseValuesAttribute(value);
        } else if (EXTRA_ATTR_VALUE_SERVICE.equals(name)) {
            parseValueServiceAttribute(value);
        } else if (EXTRA_ATTR_ID_FIELD.equals(name)) {
            if (value != null && value instanceof String) {
                setValueId(value.toString());
            }
        } else if (EXTRA_ATTR_LABEL_FIELD.equals(name)) {
            if (value != null && value instanceof String) {
                setValueLabel(value.toString());
            }
        } else {
            logger.debug("unknown attribute specified : '" + name + "'");
        }
    }

    void parseDependsOnAttribute(Object value) {
        if (value == null || value instanceof DependsOn) {
            dependsOn = (DependsOn) value;
        } else if (value instanceof String) {
            String text = (String) value;
            if (StringUtils.hasText(text)) {
                try {
                    dependsOn = attributeParser.parseValue(text, DependsOn.class);
                } catch (IOException e) {
                    logger.error("Could not parse value: " + text, e);
                    dependsOn = null;
                }
            } else {
                dependsOn = null;
            }
        }
    }

    void parseValuesAttribute(Object value) {
        if (value == null) {
            // empty values list
            values.clear();
            return;
        }

        List<Object> values = new ArrayList<>();

        // process value according to its type
        if (value instanceof Collection) {
            Collection<?> valueCollection = (Collection<?>) value;
            for (Object item : valueCollection) {
                if (item != null) {
                    String itemText = item.toString().trim();
                    if (StringUtils.hasText(itemText)) {
                        parseAndAddValueToList(values, itemText);
                    } else {
                        logger.debug("omitting empty value...");
                    }
                } else {
                    logger.debug("omitting null value...");
                }
            }
        } else if (value instanceof String) {
            // treat it as ||-separated list of values
            String[] valuesArray = ((String) value).split(SEPARATOR);
            // remove white-spaces before and after
            for (String item : valuesArray) {
                item = item.trim();
                if (StringUtils.hasText(item)) {
                    parseAndAddValueToList(values, item);
                } else {
                    logger.debug("omitting empty value...");
                }
            }
        } else {
            logger.debug("could not process provided value for extra attribute '"
                    + EXTRA_ATTR_VALUES + "'");
        }

        // update internal values list
        setValues(values);
    }

    void parseAndAddValueToList(List<Object> values, String text) {
        try {
            Object value = attributeParser.parseValue(text);
            values.add(value);
        } catch (IOException e) {
            logger.error("Could not parse value: " + text, e);
        }
    }

    void parseValueServiceAttribute(Object value) {
        if (value == null) {
            this.valueService = null;
            return;
        }

        if (value instanceof String && StringUtils.hasText(value.toString())) {
            // try to parse into URL
            try {
                this.valueService = new URL(value.toString());
            } catch (MalformedURLException e) {
                throw new IllegalArgumentException("Invalid URL provided for " + EXTRA_ATTR_VALUE_SERVICE, e);
            }
        } else if (value instanceof URL) {
            this.valueService = (URL)value;
        } else {
            logger.debug("Unsupported value provided for attribute " + EXTRA_ATTR_VALUE_SERVICE + ", skipping");
        }
    }

    /**
     * Specifies a dependency from this field and a parent field, whose values can be used to filter the values in this field.
     * 
     * @author Stefano Costa, GeoSolutions
     *
     */
    public static final class DependsOn {

        private String field;

        private String from;

        private String to;

        /**
         * 
         * @return the parent field name
         */
        public String getField() {
            return field;
        }

        public void setField(String field) {
            this.field = field;
        }

        /**
         * 
         * @return the attribute mapping the association in the parent field
         */
        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }

        /**
         * 
         * @return the attribute mapping the association in the child field
         */
        public String getTo() {
            return to;
        }

        public void setTo(String to) {
            this.to = to;
        }
    }
}

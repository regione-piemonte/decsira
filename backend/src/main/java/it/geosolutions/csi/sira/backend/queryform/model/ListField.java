package it.geosolutions.csi.sira.backend.queryform.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

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
    public static final String EXTRA_ATTR_VALUES = "values";

    private static final Logger logger = LoggerFactory.getLogger(ListField.class);

    private List<String> values;

    ListField() {
        super(QueryFormFieldType.list);
        values = new ArrayList<>();
    }

    ListField(List<String> values) {
        this();
        setValues(values);
    }

    /**
     * @return a copy of the internal values list 
     */
    public List<String> getValues() {
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
    public void setValues(List<String> values) {
        if (!CollectionUtils.isEmpty(values)) {
            this.values.clear();
            this.values.addAll(values);
        }
    }

    /**
     * The <code>values</code> attribute can be set by passing either a {@link Collection} of {@link String}s,
     * or a {@link String} value, which is interpreted as a list of values separated by <code>||</code>.  
     */
    @Override
    public void setExtraAttribute(String name, Object value) {
        if (value == null) {
            // empty values list
            values.clear();
            return;
        }

        if (EXTRA_ATTR_VALUES.equals(name)) {
            List<String> values = new ArrayList<>();

            // process value according to its type
            if (value instanceof Collection) {
                Collection<?> valueCollection = (Collection<?>) value;
                for (Object item: valueCollection) {
                    if (item != null) {
                        String itemText = item.toString().trim();
                        if (StringUtils.hasText(itemText)) {
                            values.add(itemText);
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
                for (String item: valuesArray) {
                    item = item.trim();
                    if (StringUtils.hasText(item)) {
                        values.add(item);
                    } else {
                        logger.debug("omitting empty value...");
                    }
                }
            } else {
                logger.debug("could not process provided value for extra attribute '" + EXTRA_ATTR_VALUES + "'");
            }

            // update internal values list
            setValues(values);
        } else {
            logger.debug("unknown attribute specified : '" + name + "'");
        }
    }

}

package it.geosolutions.csi.sira.backend.queryform.model;

import java.util.Arrays;

/**
 * Enumeration listing the supported form field types.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public enum QueryFormFieldType {

    list(ListField.class, new String[] { ListField.EXTRA_ATTR_DEPENDSON,
            ListField.EXTRA_ATTR_VALUES, ListField.EXTRA_ATTR_VALUE_SERVICE,
            ListField.EXTRA_ATTR_ID_FIELD, ListField.EXTRA_ATTR_LABEL_FIELD }),
    date(DateField.class, new String[] {});

    private Class<?> fieldClass;
    private String[] extraAttributes;

    private <T extends QueryFormField> QueryFormFieldType(Class<T> fieldClass, String[] extraAttributes) {
        this.fieldClass = fieldClass;
        this.extraAttributes = extraAttributes;
    }

    /**
     * @return the concrete {@link QueryFormField} subclass implementing this field type
     */
    /* It's safe to suppress the warning, as type safety is ensured by the immutability of this class */
    @SuppressWarnings("unchecked")
    public <T extends QueryFormField> Class<T> getFieldClass() {
        return (Class<T>) fieldClass;
    }

    /**
     * @return the names of the extra attributes supported by this field type
     */
    public String[] getExtraAttributes() {
        return Arrays.copyOf(extraAttributes, extraAttributes.length);
    }
}

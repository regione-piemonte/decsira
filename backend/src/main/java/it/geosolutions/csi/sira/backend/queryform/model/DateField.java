package it.geosolutions.csi.sira.backend.queryform.model;

/**
 * Configuration for a form field allowing the user to enter a date.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class DateField extends QueryFormField {

    DateField() {
        super(QueryFormFieldType.date);
    }

    @Override
    public void setExtraAttribute(String name, Object value) {
        // no-op
    }

}

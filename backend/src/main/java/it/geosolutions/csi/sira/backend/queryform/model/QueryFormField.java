package it.geosolutions.csi.sira.backend.queryform.model;

/**
 * Base class for query form field types.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public abstract class QueryFormField {

    protected String id;
    protected QueryFormFieldType type;

    QueryFormField(QueryFormFieldType type) {
        if (type == null) {
            throw new IllegalArgumentException("field type must be provided");
        }
        this.type = type;
    }

    /**
     * A field ID should be unique in the context of the form containing it.
     * 
     * @return the field ID
     */
    public String getId() {
        return id;
    }

    /**
     * 
     * @return the field type
     */
    public QueryFormFieldType getType() {
        return type;
    }

    /**
     * Concrete field types can implement this method to support extra configuration attributes,
     * besides the default ones (namely, <code>id</code> and <code>type</code>).
     * 
     * @param name the attribute name
     * @param value the attribute value 
     */
    public abstract void setExtraAttribute(String name, Object value);

}

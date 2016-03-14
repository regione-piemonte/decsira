package it.geosolutions.csi.sira.backend.queryform.model;

import it.geosolutions.csi.sira.backend.queryform.model.parser.AttributeParser;

import javax.xml.bind.annotation.XmlTransient;

import org.codehaus.jackson.annotate.JsonIgnore;

/**
 * Base class for query form field types.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public abstract class QueryFormField {

    protected String id;
    protected String name;
    protected QueryFormFieldType type;
    protected AttributeParser attributeParser;

    QueryFormField(QueryFormFieldType type) {
        if (type == null) {
            throw new IllegalArgumentException("field type must be provided");
        }
        this.type = type;
    }

    /**
     * 
     * @return the attribute parser currently in use
     */
    @XmlTransient
    @JsonIgnore
    public AttributeParser getAttributeParser() {
        return attributeParser;
    }

    /**
     * 
     * @param attributeParser the attribute parser instance that will be used to parse attribute values
     */
    public void setAttributeParser(AttributeParser attributeParser) {
        this.attributeParser = attributeParser;
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
     * @return the human readable field name
     */
    public String getFieldName() {
        return name;
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

package it.geosolutions.csi.sira.backend.queryform.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Configuration for a query form component.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class QueryFormConfig {

    private String featureTypeName;
    private String featureTypeNameLabel;
    private String geometricField;
    private List<QueryFormField> fields;

    QueryFormConfig(String featureTypeName) {
        this.featureTypeName = featureTypeName;
        this.featureTypeNameLabel = featureTypeName;
        this.geometricField = "geometry";
        fields = new ArrayList<QueryFormField>();
    }

    public QueryFormConfig(String featureTypeName, String featureTypeNameLabel) {
        this(featureTypeName);
        this.featureTypeNameLabel = featureTypeNameLabel;
    }

    public QueryFormConfig(String featureTypeName, String featureTypeNameLabel,
            String geometricField) {
        this(featureTypeName, featureTypeNameLabel);
        this.geometricField = geometricField;
    }

    /**
     * 
     * @return the name of the feature type associated to the query form configuration 
     */
    public String getFeatureTypeName() {
        return featureTypeName;
    }

    /**
     * 
     * @return the display name of the feature type associated to the query form configuration
     */
    public String getFeatureTypeNameLabel() {
        return featureTypeNameLabel;
    }

    /**
     * 
     * @return the name of the geometry field in the feature type associated to the query form configuration
     */
    public String getGeometricField() {
        return geometricField;
    }

    /**
     * 
     * @return the list of query form fields
     */
    public List<QueryFormField> getFields() {
        return fields;
    }

    /**
     * A <code>null</code> input parameter is ignored.
     * 
     * @param fields the query form fields to set
     */
    public void setFields(List<QueryFormField> fields) {
        if (fields != null) {
            this.fields = fields;
        }
    }

}

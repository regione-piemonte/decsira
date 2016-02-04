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
    private List<QueryFormField> fields;

    QueryFormConfig(String featureTypeName) {
        this.featureTypeName = featureTypeName;
        fields = new ArrayList<QueryFormField>();
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

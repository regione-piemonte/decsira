package it.geosolutions.csi.sira.backend.queryform.model;

/**
 * Basic interface describing a service which provides the query form configuration of a feature type.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public interface QueryFormConfigProvider {

    /**
     * 
     * @param featureTypeName the name of the feature type
     * @return the query form configuration
     */
    public QueryFormConfig getConfiguration(String featureTypeName);

}

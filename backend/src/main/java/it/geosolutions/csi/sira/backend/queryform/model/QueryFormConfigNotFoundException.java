package it.geosolutions.csi.sira.backend.queryform.model;

/**
 * Runtime exception thrown by a {@link QueryFormConfigProvider} when the configuration cannot be loaded.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class QueryFormConfigNotFoundException extends RuntimeException {

    /** serialVersionUID */
    private static final long serialVersionUID = -1712340689529350078L;

    public QueryFormConfigNotFoundException(String featureTypeName) {
        super("No query from configuration found for feature type " + featureTypeName);
    }

    public QueryFormConfigNotFoundException(String featureTypeName, Throwable t) {
        super("No query from configuration found for feature type " + featureTypeName, t);
    }

}

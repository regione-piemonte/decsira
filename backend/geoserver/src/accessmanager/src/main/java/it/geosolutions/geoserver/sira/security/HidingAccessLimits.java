package it.geosolutions.geoserver.sira.security;

import java.util.ArrayList;
import java.util.List;

import org.geoserver.security.CatalogMode;
import org.geoserver.security.VectorAccessLimits;
import org.opengis.filter.Filter;
import org.opengis.filter.expression.PropertyName;

/**
 * {@link VectorAccessLimits} subclass giving client code the ability to specify a list of properties that should be removed from the retrieved
 * resources (typically feature types).
 * 
 * <p>
 * Works in combination with {@link SecuredMappingFeatureIterator}.
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class HidingAccessLimits extends VectorAccessLimits {

    /** serialVersionUID */
    private static final long serialVersionUID = 7485101131641588345L;

    private List<PropertyName> hiddenProperties = new ArrayList<>();

    public HidingAccessLimits(CatalogMode mode, List<PropertyName> readAttributes,
            Filter readFilter, List<PropertyName> writeAttributes, Filter writeFilter) {
        super(mode, readAttributes, readFilter, writeAttributes, writeFilter);
    }

    /**
     * 
     * @return the list of properties to hide
     */
    public List<PropertyName> getHiddenProperties() {
        return hiddenProperties;
    }

}

package it.geosolutions.geoserver.sira.security;

import org.geoserver.platform.ExtensionPriority;
import org.geoserver.security.WrapperPolicy;
import org.geoserver.security.decorators.SecuredObjectFactory;
import org.geotools.data.complex.IMappingFeatureIterator;

/**
 * Specialized {@link SecuredObjectFactory} wrapping {@link IMappingFeatureIterator} instances with a {@link SecuredMappingFeatureIterator}.
 * 
 * <p>
 * Mainly useful to secure Application Schema DataStores.
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions.
 *
 */
public class MappingFeatureIteratorSecureFactory implements SecuredObjectFactory {

    @Override
    public boolean canSecure(Class clazz) {
        return IMappingFeatureIterator.class.isAssignableFrom(clazz);
    }

    @Override
    public Object secure(Object object, WrapperPolicy policy) {
        // null check
        if (object == null)
            return null;

        // wrapping check
        Class<?> clazz = object.getClass();
        if (!canSecure(clazz))
            throw new IllegalArgumentException("Don't know how to wrap objects of class "
                    + object.getClass());

        if (IMappingFeatureIterator.class.isAssignableFrom(clazz)) {
            return new SecuredMappingFeatureIterator((IMappingFeatureIterator) object, policy);
        }

        // all attempts have been made, we don't know how to handle this object
        throw new IllegalArgumentException("Don't know how to wrap objects of class "
                + object.getClass());
    }

    @Override
    public int getPriority() {
        return ExtensionPriority.HIGHEST;
    }

}

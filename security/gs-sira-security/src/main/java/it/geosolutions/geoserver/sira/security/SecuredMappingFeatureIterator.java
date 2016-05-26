package it.geosolutions.geoserver.sira.security;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.security.WrapperPolicy;
import org.geotools.data.complex.IMappingFeatureIterator;
import org.geotools.factory.Hints;
import org.geotools.filter.expression.FeaturePropertyAccessorFactory;
import org.geotools.filter.expression.PropertyAccessor;
import org.geotools.filter.expression.PropertyAccessorFactory;
import org.geotools.util.logging.Logging;
import org.opengis.feature.Feature;
import org.opengis.feature.Property;
import org.opengis.filter.expression.PropertyName;
import org.xml.sax.helpers.NamespaceSupport;

/**
 * Wraps a {@link IMappingFeatureIterator} and adds additional security checks to it.
 * 
 * <p>
 * More specifically, if the {@code limits} object inside the provided {@code policy} is an instance of {@link HidingAccessLimits}, sets to {@code null} all the
 * hidden properties specified there.
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class SecuredMappingFeatureIterator implements IMappingFeatureIterator {

    private static final Logger LOGGER = Logging.getLogger(SecuredMappingFeatureIterator.class);

    private IMappingFeatureIterator delegate;

    private WrapperPolicy policy;

    public SecuredMappingFeatureIterator(IMappingFeatureIterator delegate, WrapperPolicy policy) {
        this.delegate = delegate;
        this.policy = policy;
    }

    @Override
    public boolean hasNext() {
        return delegate.hasNext();
    }

    @Override
    public Feature next() throws NoSuchElementException {
        Feature next = delegate.next();

        if (next != null) {
            // set to null attributes that should be hidden
            if (policy.limits instanceof HidingAccessLimits) {
                HidingAccessLimits accessLimits = (HidingAccessLimits) policy.limits;
                List<PropertyName> hiddenAttrs = accessLimits.getHiddenProperties();
                long startTime = System.currentTimeMillis();
                for (PropertyName hiddenAttr : hiddenAttrs) {
                    Property hiddenProperty = getProperty(next, hiddenAttr.getPropertyName(), null,
                            hiddenAttr.getNamespaceContext());
                    if (hiddenProperty != null) {
                        hiddenProperty.setValue(null);
                    }
                }
                long endTime = System.currentTimeMillis();
                if (LOGGER.isLoggable(Level.FINER)) {
                    LOGGER.log(Level.FINER, "{0} properties were hidden in {1} ms", new Object[] { hiddenAttrs.size(), endTime-startTime });
                }
            }
            ;
        }

        return next;
    }

    @Override
    public void close() {
        this.delegate.close();
    }

    <T> T getProperty(Object obj, String attPath, Class<T> target, NamespaceSupport namespaceSupport) {
        Hints hints = null;
        if (namespaceSupport != null) {
            hints = new Hints(PropertyAccessorFactory.NAMESPACE_CONTEXT, namespaceSupport);
        }
        PropertyAccessor accessor = new FeaturePropertyAccessorFactory().createPropertyAccessor(obj.getClass(), attPath, target, hints);
        try {
            return accessor.get(obj, attPath, target);
        } catch (Exception e) {
            LOGGER.log(Level.FINER,
                  "Could not find working property accessor for attribute (" + attPath
                          + ") in object (" + obj + ")", e);
            return null;
        }
    }

    @Override
    public void remove() {
        throw new UnsupportedOperationException();
    }

}

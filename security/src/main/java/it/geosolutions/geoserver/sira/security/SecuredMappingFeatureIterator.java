package it.geosolutions.geoserver.sira.security;

import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.atomic.AtomicReference;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.security.WrapperPolicy;
import org.geotools.data.complex.IMappingFeatureIterator;
import org.geotools.factory.Hints;
import org.geotools.filter.expression.PropertyAccessor;
import org.geotools.filter.expression.PropertyAccessorFactory;
import org.geotools.filter.expression.PropertyAccessors;
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
                for (PropertyName hiddenAttr : hiddenAttrs) {
                    Property hiddenProperty = getProperty(next, hiddenAttr.getPropertyName(), null,
                            hiddenAttr.getNamespaceContext());
                    if (hiddenProperty != null) {
                        hiddenProperty.setValue(null);
                    }
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
        PropertyAccessor accessor = getLastPropertyAccessor();
        AtomicReference<Exception> e = new AtomicReference<Exception>();

        if (accessor == null || !accessor.canHandle(obj, attPath, target)
                || !tryAccessor(accessor, obj, attPath, target, e)) {
            boolean success = false;
            Hints hints = null;
            if (namespaceSupport != null) {
                hints = new Hints(PropertyAccessorFactory.NAMESPACE_CONTEXT, namespaceSupport);
            }
            List<PropertyAccessor> accessors = PropertyAccessors.findPropertyAccessors(obj,
                    attPath, target, hints);

            if (accessors != null) {
                Iterator<PropertyAccessor> it = accessors.iterator();
                while (!success && it.hasNext()) {
                    accessor = it.next();
                    success = tryAccessor(accessor, obj, attPath, target, e);
                }
            }

            if (!success) {
                LOGGER.log(Level.WARNING,
                        "Could not find working property accessor for attribute (" + attPath
                                + ") in object (" + obj + ")", e.get());
                return null;
            } else {
                setLastPropertyAccessor(accessor);
            }
        }

        return accessor.get(obj, attPath, target);

    }

    @Override
    public void remove() {
        throw new UnsupportedOperationException();
    }

    // SC - helper method for evaluation - attempt to use property accessor
    private boolean tryAccessor(PropertyAccessor accessor, Object obj, String attPath,
            Class<?> target, AtomicReference<Exception> ex) {
        try {
            accessor.get(obj, attPath, target);
            return true;
        } catch (Exception e) {
            ex.set(e);
            return false;
        }
    }

    // accessor caching, scanning the registry every time is really very expensive
    private PropertyAccessor lastAccessor;

    private synchronized PropertyAccessor getLastPropertyAccessor() {
        return lastAccessor;
    }

    private synchronized void setLastPropertyAccessor(PropertyAccessor accessor) {
        lastAccessor = accessor;
    }

}

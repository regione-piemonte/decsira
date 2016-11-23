package org.geoserver.security.iride.entity.converter.util;

import java.util.Iterator;
import java.util.List;

import org.apache.commons.collections.IteratorUtils;

import com.google.common.base.Preconditions;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.ReaderWrapper;

/**
 * An extended {@link ReaderWrapper} implementation.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class ExtendedReaderWrapper extends ReaderWrapper {

    /**
     * Constructor.
     *
     * @param reader
     */
    public ExtendedReaderWrapper(HierarchicalStreamReader reader) {
        super(Preconditions.checkNotNull(reader));
    }

    /**
     *
     * @param reader
     * @return
     */
    public static final ExtendedReaderWrapper wrapReader(HierarchicalStreamReader reader) {
        return new ExtendedReaderWrapper(reader);
    }

    /**
     * Returns the attribute names as a {@link List}.
     *
     * @return the attribute names as a {@link List}
     */
    public String[] getAttributeNamesList() {
        @SuppressWarnings("unchecked")
        final List<String> attributes = IteratorUtils.toList(this.wrapped.getAttributeNames());

        return attributes.toArray(new String[attributes.size()]);
    }

    /*
     * (non-Javadoc)
     * @see com.thoughtworks.xstream.io.ReaderWrapper#getAttributeNames()
     */
    @Override
    @SuppressWarnings("unchecked")
    public Iterator<String> getAttributeNames() {
        return this.wrapped.getAttributeNames();
    }

    /**
     *
     * @return
     */
    public String moveAndGetValue() {
        this.wrapped.moveDown();

        final String result = this.wrapped.getValue();

        this.wrapped.moveUp();

        return result;
    }

}

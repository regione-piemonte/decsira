package org.geoserver.security.iride.entity.converter.util;

import com.google.common.base.Preconditions;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;
import com.thoughtworks.xstream.io.StatefulWriter;
import com.thoughtworks.xstream.io.WriterWrapper;

/**
 * An extended {@link WriterWrapper} implementation.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class ExtendedWriterWrapper extends WriterWrapper {

    private boolean nodeStarted;

    /**
     * Constructor.
     *
     * @param writer
     */
    public ExtendedWriterWrapper(HierarchicalStreamWriter writer) {
        super(Preconditions.checkNotNull(writer));
    }

    /**
     *
     * @param writer
     * @return
     */
    public static final ExtendedWriterWrapper wrapWriter(HierarchicalStreamWriter writer) {
        return new ExtendedWriterWrapper(writer);
    }

    /*
     * (non-Javadoc)
     * @see com.thoughtworks.xstream.io.WriterWrapper#startNode(java.lang.String)
     */
    @Override
    public void startNode(String name) {
        if (this.wrapped instanceof StatefulWriter &&
            StatefulWriter.STATE_NODE_START != ((StatefulWriter) this.wrapped).state()) {
            this.wrapped.startNode(name);

            this.nodeStarted = true;
        }
    }

    /*
     * (non-Javadoc)
     * @see com.thoughtworks.xstream.io.WriterWrapper#endNode()
     */
    @Override
    public void endNode() {
        if (this.nodeStarted) {
            this.wrapped.endNode();

            this.nodeStarted = false;
        }
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, Object value) {
        this.wrapped.startNode(name);

        this.setValue(value);

        this.wrapped.endNode();
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, byte value) {
        this.setNode(name, Byte.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, short value) {
        this.setNode(name, Short.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, int value) {
        this.setNode(name, Integer.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, long value) {
        this.setNode(name, Long.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, float value) {
        this.setNode(name, Float.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, double value) {
        this.setNode(name, Double.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, boolean value) {
        this.setNode(name, Boolean.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void setNode(String name, char value) {
        this.setNode(name, Character.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(Object value) {
        this.wrapped.setValue(value == null ? null : value.toString());
    }

    /**
     *
     * @param value
     */
    public void setValue(byte value) {
        setValue(Byte.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(short value) {
        setValue(Short.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(int value) {
        setValue(Integer.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(long value) {
        setValue(Long.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(float value) {
        setValue(Float.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(double value) {
        setValue(Double.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(boolean value) {
        setValue(Boolean.valueOf(value));
    }

    /**
     *
     * @param value
     */
    public void setValue(char value) {
        setValue(Character.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, Object value) {
        this.wrapped.addAttribute(name, value == null ? null : value.toString());
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, byte value) {
        this.addAttribute(name, Byte.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, short value) {
        this.addAttribute(name, Short.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, int value) {
        this.addAttribute(name, Integer.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, long value) {
        this.addAttribute(name, Long.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, float value) {
        this.addAttribute(name, Float.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, double value) {
        this.addAttribute(name, Double.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, boolean value) {
        this.addAttribute(name, Boolean.valueOf(value));
    }

    /**
     *
     * @param name
     * @param value
     */
    public void addAttribute(String name, char value) {
        this.addAttribute(name, Character.valueOf(value));
    }

}

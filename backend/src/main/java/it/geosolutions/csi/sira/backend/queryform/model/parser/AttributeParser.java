package it.geosolutions.csi.sira.backend.queryform.model.parser;

import java.io.IOException;

/**
 * Common interface for attribute value parsers.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public interface AttributeParser {

    /**
     * Constructs an attribute value from its string representation.
     * 
     * @param text the string representation of the attribute value
     * @return the parsed attribute value
     * @throws IOException
     */
    public Object parseValue(String text) throws IOException;

    /**
     * Constructs an attribute value of the specified type from its string representation.
     * @param text the string representation of the attribute value
     * @param binding the attribute value type
     * @return the parsed attribute value
     * @throws IOException
     */
    public <T> T parseValue(String text, Class<T> binding) throws IOException;

}

package it.geosolutions.csi.sira.backend.queryform.model.parser;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.util.StringUtils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * {@link AttributeParser} implementation capable of parsing JSON data.
 * 
 * <p>
 * Internally, uses the Jackson 2 library to parse JSON strings, using either its Stream or Data-Binding API.
 * </p>
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
public class JsonAttributeParser implements AttributeParser {

    final ObjectMapper OBJECT_MAPPER;
    
    public JsonAttributeParser() {
        this.OBJECT_MAPPER = new ObjectMapper();
    }

    /**
     * Parses a JSON string into a Java object.
     * 
     * <p>
     * This method is able to handle JSON primitive types, or JSON objects with properties containing only primitive types.
     * </p>
     * 
     * <p>
     * JSON objects are converted to a {@code Map<String, Object>} instance.
     * </p>
     * 
     */
    @Override
    public Object parseValue(String json) throws IOException {
        return processJson(json);
    }

    /**
     * Parses a JSON string into a Java object of the specified type.
     * 
     * <p>
     * Uses Jackson 2 Data-Binding API.
     * </p>
     * 
     */
    @Override
    public <T> T parseValue(String json, Class<T> binding) throws IOException {
        if (!StringUtils.hasText(json)) {
            throw new IllegalArgumentException("No JSON provided");
        }
        if (binding == null) {
            throw new IllegalArgumentException("No data binding specified");
        }

        return OBJECT_MAPPER.readValue(json, binding);
    }

    Object processJson(String text) throws IOException {
        JsonParser jsonParser = OBJECT_MAPPER.getFactory().createParser(text);
        JsonToken firstToken = jsonParser.nextToken();
        if (JsonToken.START_OBJECT == firstToken) {
            return parseObject(jsonParser);
        } else {
            return parsePrimitiveValue(jsonParser, firstToken);
        }
    }

    private Map<String, Object> parseObject(JsonParser parser) throws IOException {
        Map<String, Object> parsedObject = new HashMap<>();

        while (parser.nextToken() != JsonToken.END_OBJECT) {
            String fieldName = parser.getCurrentName();
            // move to value
            JsonToken valueToken = parser.nextToken();
            Object value = parsePrimitiveValue(parser, valueToken);
            parsedObject.put(fieldName, value);
        }

        return parsedObject;
    }

    private Object parsePrimitiveValue(JsonParser parser, JsonToken valueToken) throws IOException {
        Object value = null;

        if (JsonToken.VALUE_NUMBER_INT == valueToken || JsonToken.VALUE_NUMBER_FLOAT == valueToken) {
            value = parser.getNumberValue();
        } else if (JsonToken.VALUE_STRING == valueToken) {
            value = parser.getText();
        } else if (JsonToken.VALUE_TRUE == valueToken || JsonToken.VALUE_FALSE == valueToken) {
            value = parser.getBooleanValue();
        } else if (JsonToken.VALUE_NULL == valueToken) {
            value = null;
        } else {
            throw new JsonParseException("Value is not primitive", parser.getCurrentLocation());
        }

        return value;
    }

}

/*
 *  Simple SOAP service client for doing authentication and authorization operations using CSI-Piemonte IRIDE Service.
 *  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.geoserver.security.iride.service.util.factory.xstream;

import java.util.Collection;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.geoserver.security.iride.util.factory.AbstractFactory;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.ConverterMatcher;
import com.thoughtworks.xstream.converters.SingleValueConverter;
import com.thoughtworks.xstream.io.xml.Xpp3Driver;

/**
 * <a href="http://x-stream.github.io/"><code>XStream</code></a> Factory, configured for <code>IRIDE</code> entities.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class XStreamFactory extends AbstractFactory<XStream> {

    /**
     * Message describing that an invalid {@link XStream} converter type has been specified.
     * <p>Allowed types are:
     * <ul>
     *   <li>{@link Converter}</li>
     *   <li>{@link SingleValueConverter}</li>
     * </ul>
     */
    private static final String INVALID_CONVERTER_MSG_PATTERN = "Invalid converter type specified: '%s'. Allowed types are: %s";

    /**
     * <p>Allowed {@link XStream} converter types:
     * <ul>
     *   <li>{@link Converter}</li>
     *   <li>{@link SingleValueConverter}</li>
     * </ul>
     * */
    private static final ImmutableList<Class<? extends ConverterMatcher>> ALLOWED_CONVERTER_TYPES = ImmutableList.of(
        Converter.class, SingleValueConverter.class
    );

    /**
     * {@link XStream} alias/type map, consisting of string aliases mapped to {@link Class} instances.
     */
    private final Map<String, Class<?>> aliases = Maps.newHashMap();

    /**
     * {@link Converter}s or {@link SingleValueConverter}s to be registered with {@link XStream}.
     */
    private final Set<ConverterMatcher> converters = Sets.newHashSet();

    /**
     * Static factory method, useful for testing.
     *
     * @param aliases {@link XStream} alias/type map, consisting of string aliases mapped to {@link Class} instances
     * @param converters {@link Converter}s or {@link SingleValueConverter}s to be registered with {@link XStream}
     * @return a new {@link XStream} instance.
     */
    public static XStream createXStream(Map<String, Class<?>> aliases, ConverterMatcher[] converters) {
        final XStreamFactory factory = new XStreamFactory();
        factory.setAliases(aliases);
        factory.setConverters(converters);

        return factory.create();
    }

    /**
     * Set the alias/type map, consisting of string aliases mapped to {@link Class} instances.
     *
     * @param aliases the alias/type map, consisting of string aliases mapped to {@link Class} instances
     */
    public final void setAliases(Map<String, Class<?>> aliases) {
        if (aliases == null) {
            this.aliases.clear();

            return;
        }

        for (final Entry<String, Class<?>> entry : aliases.entrySet()) {
            this.addAlias(entry.getKey(), entry.getValue());
        }
    }

    /**
     * Get the alias/type map, consisting of string aliases mapped to {@link Class} instances.
     *
     * @return the alias/type map, consisting of string aliases mapped to {@link Class} instances
     */
    public final Map<String, Class<?>> getAliases() {
        return ImmutableMap.copyOf(this.aliases);
    }

    /**
     * Adds an alias for the given type.
     *
     * @param name alias to be used for the type
     * @param type the type to be aliased
     */
    public final void addAlias(String name, Class<?> type) {
        this.aliases.put(name, type);
    }

    /**
     * Sets the {@link Converter}s or {@link SingleValueConverter}s to be registered with {@link XStream}.
     *
     * @param converters
     * @see Converter
     * @see SingleValueConverter
     */
    public final void setConverters(ConverterMatcher[] converters) {
        if (converters == null) {
            this.converters.clear();

            return;
        }

        for (final ConverterMatcher converter : converters) {
            this.addConverter(converter);
        }
    }

    /**
     * Get the {@link Converter}s or {@link SingleValueConverter}s to be registered with {@link XStream}.
     *
     * @return the converters
     */
    public final ConverterMatcher[] getConverters() {
        return this.converters.toArray(new ConverterMatcher[this.converters.size()]);
    }

    /**
     *
     * @param converter
     */
    public final void addConverter(ConverterMatcher converter) {
        if (this.isConverterAllowed(converter)) {
            this.converters.add(converter);
        } else {
            throw new IllegalArgumentException(
                String.format(
                    INVALID_CONVERTER_MSG_PATTERN,
                    converter == null ? null : converter.getClass(),
                    ALLOWED_CONVERTER_TYPES
                )
            );
        }
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.Factory#create()
     */
    @Override
    protected final XStream newInstance() {
        // Initialize XStream
        final XStream xs = new XStream(new Xpp3Driver());
        xs.setMode(XStream.NO_REFERENCES);

        // Aliases for IRIDE entities
        LOGGER.trace("IRIDE XStream: aliasing {} types", this.getAliases().size());
        for (final Entry<String, Class<?>> entry : this.getAliases().entrySet()) {
            xs.alias(entry.getKey(), entry.getValue());

            LOGGER.trace("IRIDE XStream: aliased {} to '{}'", entry.getValue(), entry.getKey());
        }

        // Allowed types
        final Collection<Class<?>> types = this.getAliases().values();
        LOGGER.trace("IRIDE XStream: allowing {} types", types.size());
        xs.allowTypes(types.toArray(new Class<?>[types.size()]));

        // Custom converters for IRIDE entities
        LOGGER.trace("IRIDE XStream: registering {} converters", this.converters.size());
        for (final ConverterMatcher converter : this.converters) {
            if (converter instanceof Converter) {
                xs.registerConverter((Converter) converter);
            } else if (converter instanceof SingleValueConverter) {
                xs.registerConverter((SingleValueConverter) converter);
            }

            LOGGER.trace("IRIDE XStream: registered {} converter", converter.getClass());
        }

        return xs;
    }

    /**
     * Returns {@code true} if the given {@link XStream} converter type is allowed, {@code false} otherwise.
     *
     * @param converter the given {@link XStream} converter
     * @return {@code true} if the given {@link XStream} converter type is allowed, {@code false} otherwise
     * @see #ALLOWED_CONVERTER_TYPES
     */
    private boolean isConverterAllowed(ConverterMatcher converter) {
        if (converter == null) {
            return false;
        }

        for (Class<? extends ConverterMatcher> type : ALLOWED_CONVERTER_TYPES) {
            if (type.isAssignableFrom(converter.getClass())) {
                return true;
            }
        }

        return false;
    }

}

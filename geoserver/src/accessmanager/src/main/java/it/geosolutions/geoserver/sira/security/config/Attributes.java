/*
 *  CSI SIRA - Access Manager Security Module ("Rules Engine"), a GeoServer Secure Catalog Resource Access Manager plugin with which specify advanced rules evaluated to decide what the specified user can access.
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
package it.geosolutions.geoserver.sira.security.config;

import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

import org.apache.commons.lang.builder.HashCodeBuilder;
import org.opengis.feature.type.FeatureType;

import com.google.common.collect.Lists;
import com.thoughtworks.xstream.XStream;

// TODO: implement toString as needed
/**
 * Plain Old Java Object (POJO) representing the expressions
 * by which conditionally choose which {@link FeatureType} attributes to return,
 * with the possibility to define a collection of default attributes to always return.
 *
 * <p>
 * Should be serialized / deserialized using {@link XStream}.
 * </p>
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Attributes implements ValidatableConfiguration {

    /**
     * The "choose" construct.
     */
    Choose choose;

    /**
     * A collection of default attributes.
     */
    SortedSet<String> defaultAttributes = new TreeSet<>();

    /**
     * Constructor.
     */
    public Attributes() {
        /* NOP */
    }

    /*
     * (non-Javadoc)
     * @see it.geosolutions.geoserver.sira.security.config.ValidatableConfiguration#isValid()
     */
    @Override
    public boolean isValid() {
        return
            ValidationUtils.validateChoose(this.choose) &&
            ValidationUtils.validateAttributes(this.defaultAttributes);
    }

    /**
     * @return the choose
     */
    public Choose getChoose() {
        return this.choose;
    }

    /**
     * @return the defaultAttributes
     */
    public SortedSet<String> getDefaultAttributes() {
        return this.defaultAttributes;
    }

    /**
     * Invoked by {@link XStream} after deserialization.
     *
     * <p>
     * Takes care of initializing a rule with default values.
     * </p>
     *
     * @return a fully initialized {@link Attributes} object
     */
    private Object readResolve() {
        if (this.defaultAttributes == null) {
            this.defaultAttributes = new TreeSet<>();
        }

        return this;
    }

    /**
     * Plain Old Java Object (POJO) representing the expressions
     * by which conditionally choose which {@link FeatureType} attributes return.
     *
     * <p>
     * Should be serialized / deserialized using {@link XStream}.
     * </p>
     *
     * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
     */
    public static final class Choose implements ValidatableConfiguration {

        /**
         * The "when" conditions.
         */
        List<When> whenConditions = Lists.newArrayList(new When());

        /**
         * The "when" conditions, ordered by their declaration order.
         */
        SortedSet<When> orderedWhenConditions = new TreeSet<>(this.whenConditions);

        /**
         * The "otherwise" condition to choose if no previous "when" condition was met,
         * i.e.: was evaluated {@code true}
         */
        Otherwise otherwiseCondition = new Otherwise();

        /**
         * Constructor.
         */
        public Choose() {
            /* NOP */
        }

        /**
         *
         * @return
         */
        public SortedSet<When> getOrderedWhenConditions() {
            return this.orderedWhenConditions;
        }

        /**
         *
         * @return
         */
        public Otherwise getOtherwiseCondition() {
            return this.otherwiseCondition;
        }

        /*
         * (non-Javadoc)
         * @see it.geosolutions.geoserver.sira.security.config.ValidatableConfiguration#isValid()
         */
        @Override
        public boolean isValid() {
            return ValidationUtils.validateWhenAndOtherwise(this.orderedWhenConditions, this.otherwiseCondition);
        }

        /**
         * Invoked by {@link XStream} after deserialization.
         *
         * <p>
         * Takes care of initializing a rule with default values.
         * </p>
         *
         * @return a fully initialized {@link Choose} object
         */
        private Object readResolve() {
            for (int i = 0; i < this.whenConditions.size(); i++) {
                final When when = this.whenConditions.get(i);
                when.index = i;
            }
            this.orderedWhenConditions = new TreeSet<>(this.whenConditions);
            if (this.whenConditions.isEmpty()) {
                this.otherwiseCondition = null;
            } else if (otherwiseCondition == null) {
                this.otherwiseCondition = new Otherwise();
            }

            return this;
        }

        /**
         * Plain Old Java Object (POJO) representing a conditional filter expression test,
         * with the corresponding list of attributes to return when the filter expression test is evaluated {@code true}.
         *
         * <p>
         * Should be serialized / deserialized using {@link XStream}.
         * </p>
         *
         * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
         */
        public static final class When implements Comparable<When>, ValidatableConfiguration {

            int index = 0;

            String filter = Rule.INCLUDE;

            SortedSet<String> attributes = new TreeSet<>();

            /**
             * Constructor.
             */
            public When() {
                /* NOP */
            }

            /**
             * @return the filter
             */
            public String getFilter() {
                return this.filter;
            }

            /**
             * @return the attributes
             */
            public SortedSet<String> getAttributes() {
                return this.attributes;
            }

            /*
             * (non-Javadoc)
             * @see java.lang.Comparable#compareTo(java.lang.Object)
             */
            @Override
            public int compareTo(When other) {
                if (this.index < other.index) {
                    return -1;
                } else if (this.index > other.index) {
                    return 1;
                } else {
                    return 0;
                }
            }

            /*
             * (non-Javadoc)
             * @see java.lang.Object#hashCode()
             */
            @Override
            public int hashCode() {
                final HashCodeBuilder builder = new HashCodeBuilder();
                builder.append(this.index);

                return builder.toHashCode();
            }

            /**
             * Makes natural ordering consistent with equals.
             */
            /*
             * (non-Javadoc)
             * @see java.lang.Object#equals(java.lang.Object)
             */
            @Override
            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj == null) {
                    return false;
                }
                if (this.getClass() != obj.getClass()) {
                    return false;
                }

                final When other = (When) obj;

                if (index != other.index) {
                    return false;
                }

                return true;
            }

            /*
             * (non-Javadoc)
             * @see it.geosolutions.geoserver.sira.security.config.ValidatableConfiguration#isValid()
             */
            @Override
            public boolean isValid() {
                return
                    ValidationUtils.validateFilter(this.filter) &&
                    ValidationUtils.validateAttributes(this.attributes);
            }

            /**
             * Invoked by {@link XStream} after deserialization.
             *
             * <p>
             * Takes care of initializing a rule with default values.
             * </p>
             *
             * @return a fully initialized {@link When} object
             */
            private Object readResolve() {
                if (this.filter == null) {
                    this.filter = Rule.INCLUDE;
                }
                if (this.attributes == null) {
                    this.attributes = new TreeSet<>();
                }

                return this;
            }

        }

        /**
         * Plain Old Java Object (POJO) representing which list of attributes to return
         * if no {@link When} conditional filter expressions has been evaluated to {@code true}.
         *
         * <p>
         * Should be serialized / deserialized using {@link XStream}.
         * </p>
         *
         * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
         */
        public static final class Otherwise implements ValidatableConfiguration {

            SortedSet<String> attributes = new TreeSet<>();

            /**
             * Constructor.
             */
            public Otherwise() {
                /* NOP */
            }

            /**
             * @return the attributes
             */
            public SortedSet<String> getAttributes() {
                return this.attributes;
            }

            /*
             * (non-Javadoc)
             * @see it.geosolutions.geoserver.sira.security.config.ValidatableConfiguration#isValid()
             */
            @Override
            public boolean isValid() {
                return ValidationUtils.validateAttributes(this.attributes);
            }

            /**
             * Invoked by {@link XStream} after deserialization.
             *
             * <p>
             * Takes care of initializing a rule with default values.
             * </p>
             *
             * @return a fully initialized {@link Otherwise} object
             */
            private Object readResolve() {
                if (this.attributes == null) {
                    this.attributes = new TreeSet<>();
                }

                return this;
            }

        }

    }

}

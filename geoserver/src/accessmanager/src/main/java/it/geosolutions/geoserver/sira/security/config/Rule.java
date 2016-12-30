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

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.geoserver.catalog.ResourceInfo;
import org.geoserver.security.AccessMode;
import org.geoserver.security.CatalogMode;
import org.geotools.filter.text.cql2.CQLException;
import org.geotools.util.logging.Logging;
import org.opengis.filter.Filter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import com.thoughtworks.xstream.XStream;

/**
 * Plain Old Java Object (POJO) representing an access rule configuration.
 *
 * <p>
 * Should be serialized / deserialized using {@link XStream}.
 * </p>
 *
 * <p>
 * A rule is made up of following bits of information:
 * <ul>
 *   <li><em>priority</em> - Defines the {@link Rule} priority, the higher the value, the higher the priority. Must be a positive integer number, defaults to {@code 0}.</li>
 *   <li><em>roles</em> <strong>(required)</strong> - Comma-separated list of role names, may be * to match any layer.</li>
 *   <li><em>workspace</em> <strong>(required)</strong> - May be * to match any workspace.</li>
 *   <li><em>layer</em> <strong>(required)</strong> - May be * to match any layer.</li>
 *   <li><em>accessMode</em> <strong>(required)</strong> - Specifies the {@link AccessMode} to apply to the resource(s).</li>
 *   <li><em>catalogMode</em> - Specifies the {@link CatalogMode} to apply to the resource(s), defaults to {@code HIDE}.</li>
 *   <li><em>filter</em> - An ECQL filter expression limiting access to the resource(s), defaults to {@code INCLUDE}.</li>
 *   <li><em>hiddenAttributes</em> - Specifies a list of attributes that will be set to {@code null} in the returned features.</li>
 *   <p>
 *   Sample configuration:
 *
 *      <pre>
 *&lt;!-- Limit access to layer gsml:GeologicUnit to users with role First_Profile or Second_Profile --&gt;
 *&lt;Rule&gt;
 *  &lt;priority&gt;10&lt;/priority&gt;
 *  &lt;roles&gt;First_Profile, Second_Profile&lt;/roles&gt;
 *  &lt;workspace&gt;gsml&lt;/workspace&gt;
 *  &lt;layer&gt;GeologicUnit&lt;/layer&gt;
 *  &lt;accessMode&gt;READ&lt;/accessMode&gt;
 *  &lt;filter&gt;"gsml:bodyMorphology/gsml:CGI_TermValue/gsml:value" = 'cone'&lt;/filter&gt; &lt;!-- XPath expressions are supported, but must be enclosed in double quotes --&gt;
 *  &lt;hiddenAttributes&gt;
 *    &lt;attribute&gt;gml:description&lt;/attribute&gt;
 *    &lt;attribute&gt;gml:occurrence/gsml:MappedFeature/gml:name&lt;/attribute&gt; &lt;!-- XPath expressions are supported --&gt;
 *  &lt;/hiddenAttributes&gt;
 *  &lt;catalogMode&gt;CHALLENGE&lt;/catalogMode&gt;
 *&lt;/Rule&gt;
 *
 *&lt;!-- Grants any user read-only access to any other layer --&gt;
 *&lt;Rule&gt;
 *  &lt;roles&gt;*&lt;/roles&gt;
 *  &lt;workspace&gt;*&lt;/workspace&gt;
 *  &lt;layer&gt;*&lt;/layer&gt;
 *  &lt;accessMode&gt;READ&lt;/accessMode&gt;
 *&lt;/Rule&gt;
 *      </pre>
 *   </p>
 * </ul>
 * </p>
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class Rule implements Comparable<Rule>, ValidatableConfiguration {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(Rule.class);

    /**
     * Allows all access to anyone.
     */
    public static final Rule ALLOW_ALL = new Rule();

    /**
     * Denies all access to anyone.
     */
    public static final Rule DENY_ALL = new Rule();

    /**
     * Lowest possible {@link Rule} {@link #priority} value.
     */
    public static final int LOWEST_PRIORITY = 0;

    /**
     * Highest possible {@link Rule} {@link #priority} value.
     */
    public static final int HIGHEST_PRIORITY = Integer.MAX_VALUE;

    /**
     * Wildcard to match any object.
     */
    public static final String ANY = "*";

    /**
     * Keyword meaning that access to a filtered layer is <em>always</em> permitted.
     *
     * @see #filter
     */
    public static final String INCLUDE = "INCLUDE";

    /**
     * Keyword meaning that access to a filtered layer is <em>never</em> permitted.
     *
     * @see #filter
     */
    public static final String EXCLUDE = "EXCLUDE";

    /**
     * Keyword meaning that a {@link Rule} must be <em>skipped</em> altogether.
     */
    public static final String IGNORERULE = "IGNORERULE";

    /**
     * Static initializations.
     */
    static {
        DENY_ALL.roles = ANY;
        DENY_ALL.workspace = ANY;
        DENY_ALL.layer = ANY;
        DENY_ALL.accessMode = AccessMode.READ.name();
        DENY_ALL.filter = EXCLUDE;

        ALLOW_ALL.roles = ANY;
        ALLOW_ALL.workspace = ANY;
        ALLOW_ALL.layer = ANY;
        ALLOW_ALL.accessMode = AccessMode.ADMIN.name();
    }

    int index = 0;

    int priority = LOWEST_PRIORITY;

    String roles = null;

    String workspace = null;

    String layer = null;

    String accessMode = null;

    CatalogMode catalogMode = CatalogMode.HIDE;

    String filter = INCLUDE;

    Attributes hiddenAttributes = new Attributes();

    /**
     * Constructor.
     */
    public Rule() {
        /* NOP */
    }

    /**
     *
     * @return the roles to which this rule applies
     */
    public Set<String> getRoles() {
        if (this.roles == null) {
            return Collections.emptySet();
        }

        final Set<String> roleSet = new HashSet<>();
        final String[] rolesArray = this.roles.split(",");
        for (final String role: rolesArray) {
            if (StringUtils.isNotBlank(role)) {
                roleSet.add(role.trim());
            }
        }
        return roleSet;
    }

    /**
     *
     * @return the access mode
     */
    public String getAccessMode() {
        return this.accessMode;
    }

    /**
     * Parses {@link #filter} into a {@link Filter} object.
     *
     * @return the parsed filter
     * @throws CQLException if {@link #filter} does not contain a valid ECQL filter expression
     */
    public String getFilter() {
        return this.filter;
    }

    /**
     * Get the attributes descriptor for attributes that will be hidden, either with or without an hiding condition.
     *
     * @return the attributes descriptor for attributes that will be hidden, either with or without an hiding condition
     */
    public Attributes getHiddenAttributes() {
        return this.hiddenAttributes;
    }

    /**
     *
     * @return the catalog mode
     */
    public CatalogMode getCatalogMode() {
        return this.catalogMode;
    }

    /**
     * A rule is valid if:
     * <ul>
     * <li><code>priority</code> is positive</li>
     * <li><code>accessMode</code>, <code>roles</code>, <code>layer</code> and <code>workspace</code> are set</li>
     * <li><code>filter</code> (if present) is a valid filter expression</li>
     * <li><code>hiddenAttributes</code> (if present) contains no empty or <code>null</code> attributes</li>
     *
     * @return {@code true} if rule is valid, {@code false} otherwise
     */
    @Override
    public boolean isValid() {
        return this.isValidPriority() &&
               this.isValidFilter() &&
               ValidationUtils.validateAttributes(this.hiddenAttributes) &&
               this.isValidAccessModeAndRolesAndLayerAndWorkspace();
    }

    /**
     * Checks if the rule applies to at least one of the roles granted to the user.
     *
     * @param user the user accessing the resource
     * @return {@code true} if the rule applies to this user (based on granted roles), {@code false} otherwise
     */
    public boolean matchRole(Authentication user) {
        if (this.matchesAnyRole()) {
            return true;
        }

        final Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
        // should never be null, but you never know...
        if (authorities != null) {
            for (final GrantedAuthority authority: authorities) {
                final String role = authority.getAuthority();
                if (role != null && this.getRoles().contains(role)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Checks if the workspace specified in the rule matches that of the resource.
     *
     * @param resourceInfo the resource to be accessed
     * @return {@code true} if workspace matches, {@code false} otherwise
     */
    public boolean matchWorkspace(ResourceInfo resourceInfo) {
        if (this.matchesAnyWorkspace()) {
            return true;
        }

        return this.workspace != null && this.workspace.equals(resourceInfo.getNamespace().getPrefix());
    }

    /**
     * Checks if the layer specified in the rule matches the resource.
     *
     * @param resourceInfo the resource to be accessed
     * @return {@code true} if layer matches, {@code false} otherwise
     */
    public boolean matchLayer(ResourceInfo resourceInfo) {
        if (this.matchesAnyLayer()) {
            return true;
        }

        return this.layer != null && this.layer.equals(resourceInfo.getName());
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(Rule other) {
        // not-null rule comes first
        if (other == null) {
            return 1;
        }
        // quick test
        if (this == other) {
            return 0;
        }

        if (this.priority < other.priority) {
            // this has lower priority, so should follow
            return 1;
        } else if (this.priority > other.priority) {
            // this has higher priority, so should come first
            return -1;
        } else {
            // equal priority, compare index
            if (this.index < other.index) {
                return -1;
            } else if (this.index > other.index) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(this.index)
               .append(this.priority);

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

        final Rule other = (Rule) obj;

        if (index != other.index) {
            return false;
        }
        if (priority != other.priority) {
            return false;
        }

        return true;
    }

    /*
     * (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return "Rule [priority=" + this.priority + ", index=" + this.index + ", roles=" + this.roles
                + ", workspace=" + this.workspace + ", layer=" + this.layer + ", filter=" + this.filter
                + ", hiddenAttributes=" + this.hiddenAttributes + ", accessMode=" + this.accessMode
                + ", catalogMode=" + this.catalogMode + "]";
    }

    private boolean isValidPriority() {
        if (this.priority < 0) {
            LOGGER.log(Level.FINE, "Priority must be a positive integer value, was: {}", this.priority);

            return false;
        }

        return true;
    }

    private boolean isValidFilter() {
        if (StringUtils.isBlank(this.filter)) {
            LOGGER.log(Level.FINE, "Filter must not be empty");

            return false;
        }

        return true;
    }

    private boolean isValidAccessModeAndRolesAndLayerAndWorkspace() {
        if (this.accessMode == null || StringUtils.isBlank(this.roles) || StringUtils.isBlank(this.layer) || StringUtils.isBlank(this.workspace)) {
            LOGGER.log(Level.FINE, "accessMode, roles, layer and workspace must not be empty: {}", this.toString());

            return false;
        }

        return true;
    }

    /**
     *
     * @return {@code true} if rule applies to any role, {@code false} otherwise
     */
    private boolean matchesAnyRole() {
        return this.roles != null && ANY.equals(roles);
    }

    /**
     *
     * @return {@code true} if rule applies to any workspace, {@code false} otherwise
     */
    private boolean matchesAnyWorkspace() {
        return this.workspace != null && ANY.equals(workspace);
    }

    /**
     *
     * @return {@code true} if rule applies to any layer, {@code false} otherwise
     */
    private boolean matchesAnyLayer() {
        return this.layer != null && ANY.equals(layer);
    }

    /**
     * Invoked by {@link XStream} after deserialization.
     *
     * <p>
     * Takes care of initializing a rule with default values.
     * </p>
     *
     * @return a fully initialized {@link Rule} object
     */
    private Object readResolve() {
        if (this.hiddenAttributes == null) {
            this.hiddenAttributes = new Attributes();
        }
        if (this.catalogMode == null) {
            this.catalogMode = CatalogMode.HIDE;
        }
        if (this.filter == null) {
            this.filter = INCLUDE;
        }

        return this;
    }

}

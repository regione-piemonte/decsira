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

import static org.apache.commons.lang.StringUtils.isBlank;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.geoserver.catalog.ResourceInfo;
import org.geoserver.security.AccessMode;
import org.geoserver.security.CatalogMode;
import org.geotools.factory.CommonFactoryFinder;
import org.geotools.filter.text.cql2.CQLException;
import org.geotools.filter.text.ecql.ECQL;
import org.geotools.util.logging.Logging;
import org.opengis.filter.Filter;
import org.opengis.filter.FilterFactory2;
import org.opengis.filter.expression.PropertyName;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

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
 *   <li><em>priority</em> - Must be a positive integer number, defaults to {@code 0}.</li>
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
public class Rule implements Comparable<Rule> {

	/**
	 * Logger.
	 */
    private static final Logger LOGGER = Logging.getLogger(Rule.class);

    /** Wildcard to match any object. */
    public static final String ANY = "*";

    /** Allows all access to anyone. */
    public static final Rule ALLOW_ALL = new Rule();

    /** Denies all access. */
    public static final Rule DENY_ALL = new Rule();

    static {
        DENY_ALL.roles = ANY;
        DENY_ALL.workspace = ANY;
        DENY_ALL.layer = ANY;
        DENY_ALL.accessMode = AccessMode.READ;
        DENY_ALL.filter = "EXCLUDE";

        ALLOW_ALL.roles = ANY;
        ALLOW_ALL.workspace = ANY;
        ALLOW_ALL.layer = ANY;
        ALLOW_ALL.accessMode = AccessMode.ADMIN;
    }

    public static final int LOWEST_PRIORITY = 0;

    public static final int HIGHEST_PRIORITY = Integer.MAX_VALUE;

    int priority = LOWEST_PRIORITY;

    int index = 0;

    String roles = null;

    String workspace = null;

    String layer = null;

    String filter = "INCLUDE";

    TreeSet<String> hiddenAttributes = new TreeSet<>();

    AccessMode accessMode = null;

    CatalogMode catalogMode = CatalogMode.HIDE;

    FilterFactory2 filterFactory;

    Rule() {
    }

    Rule(FilterFactory2 filterFactory) {
        this.filterFactory = filterFactory;
    }

    /**
     * Invoked by XStream after deserialization.
     *
     * <p>
     * Takes care of initializing a rule with default values.
     * </p>
     *
     * @return a fully initialized rule object
     */
    private Object readResolve() {
        if (hiddenAttributes == null) {
            hiddenAttributes = new TreeSet<>();
        }
        if (catalogMode == null) {
            catalogMode = CatalogMode.HIDE;
        }
        if (filter == null) {
            filter = "INCLUDE";
        }

        return this;
    }

    @Override
    public int compareTo(Rule otherRule) {
        if (otherRule == null) {
            // not-null rule comes first
            return 1;
        }

        if (priority < otherRule.priority) {
            // this has lower priority, so should follow
            return 1;
        } else if (priority > otherRule.priority) {
            // this has higher priority, so should come first
            return -1;
        } else {
            // equal priority, compare index
            if (this.index < otherRule.index) {
                return -1;
            } else if (this.index > otherRule.index) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + index;
        result = prime * result + priority;
        return result;
    }

    /**
     * Makes natural ordering consistent with equals.
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Rule other = (Rule) obj;
        if (index != other.index)
            return false;
        if (priority != other.priority)
            return false;
        return true;
    }

    /**
     *
     * @return the roles to which this rule applies
     */
    public Set<String> getRoles() {
        if (roles == null) {
            return Collections.emptySet();
        }

        Set<String> roleSet = new HashSet<>();
        String[] rolesArray = roles.split(",");
        for (String role: rolesArray) {
            if (!isBlank(role)) {
                roleSet.add(role.trim());
            }
        }
        return roleSet;
    }

    /**
     *
     * @return the access mode
     */
    public AccessMode getAccessMode() {
        return accessMode;
    }

    /**
     * Parses {@link #filter} into a {@link Filter} object.
     *
     * @return the parsed filter
     * @throws CQLException if {@link #filter} does not contain a valid ECQL filter expression
     */
    public Filter getFilter() throws CQLException {
        return ECQL.toFilter(filter, filterFactory);
    }

    /**
     *
     * @return the list of properties that will be hidden (i.e. set to {@code null})
     */
    public List<PropertyName> getHiddenProperties() {
        if (filterFactory == null) {
            filterFactory = CommonFactoryFinder.getFilterFactory2();
        }

        List<PropertyName> hiddenProperties = new ArrayList<>();
        for (String hiddenAttribute : hiddenAttributes) {
            hiddenProperties.add(filterFactory.property(hiddenAttribute));
        }

        return hiddenProperties;
    }

    /**
     *
     * @return the catalog mode
     */
    public CatalogMode getCatalogMode() {
        return catalogMode;
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
    public boolean isValid() {
        if (priority < 0) {
            if (LOGGER.isLoggable(Level.FINE)) {
                LOGGER.fine("Priority must be a positive integer value, was: " + priority);
            }
            return false;
        }

        if (accessMode == null || isBlank(roles) || isBlank(layer) || isBlank(workspace)) {
            if (LOGGER.isLoggable(Level.FINE)) {
                LOGGER.fine("accessMode, roles, layer and workspace must not be empty: " + toString());
            }
            return false;
        }

        if (filter != null) {
            try {
                getFilter();
            } catch (CQLException e) {
                if (LOGGER.isLoggable(Level.FINE)) {
                    LOGGER.log(Level.FINE, "Filter cannot be parsed", e);
                }
                return false;
            }
        }

        if (hiddenAttributes != null) {
            for (String hiddenAttr : hiddenAttributes) {
                if (isBlank(hiddenAttr)) {
                    if (LOGGER.isLoggable(Level.FINE)) {
                        LOGGER.fine("Hidden attributes must not be blank");
                    }
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Checks if the rule applies to at least one of the roles granted to the user.
     *
     * @param user the user accessing the resource
     * @return {@code true} if the rule applies to this user (based on granted roles), {@code false} otherwise
     */
    boolean matchRole(Authentication user) {
        if (matchesAnyRole()) {
            return true;
        }

        Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
        // should never be null, but you never know...
        if (authorities != null) {
            for (GrantedAuthority authority: authorities) {
                String role = authority.getAuthority();
                if (role != null && getRoles().contains(role)) {
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
    boolean matchWorkspace(ResourceInfo resourceInfo) {
        if (matchesAnyWorkspace()) {
            return true;
        }
        return workspace != null && workspace.equals(resourceInfo.getNamespace().getPrefix());
    }

    /**
     * Checks if the layer specified in the rule matches the resource.
     *
     * @param resourceInfo the resource to be accessed
     * @return {@code true} if layer matches, {@code false} otherwise
     */
    boolean matchLayer(ResourceInfo resourceInfo) {
        if (matchesAnyLayer()) {
            return true;
        }
        return layer != null && layer.equals(resourceInfo.getName());
    }

    /**
     *
     * @return {@code true} if rule applies to any role, {@code false} otherwise
     */
    boolean matchesAnyRole() {
        return roles != null && ANY.equals(roles);
    }

    /**
     *
     * @return {@code true} if rule applies to any workspace, {@code false} otherwise
     */
    boolean matchesAnyWorkspace() {
        return workspace != null && ANY.equals(workspace);
    }

    /**
     *
     * @return {@code true} if rule applies to any layer, {@code false} otherwise
     */
    boolean matchesAnyLayer() {
        return layer != null && ANY.equals(layer);
    }

    @Override
    public String toString() {
        return "Rule [priority=" + priority + ", index=" + index + ", roles=" + roles
                + ", workspace=" + workspace + ", layer=" + layer + ", filter=" + filter
                + ", hiddenAttributes=" + hiddenAttributes + ", accessMode=" + accessMode
                + ", catalogMode=" + catalogMode + "]";
    }

}

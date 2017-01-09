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

import static org.junit.Assert.*;
import it.geosolutions.geoserver.sira.security.config.Attributes.Choose;
import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleHelper;

import java.io.InputStream;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.geoserver.catalog.NamespaceInfo;
import org.geoserver.catalog.ResourceInfo;
import org.geoserver.catalog.impl.FeatureTypeInfoImpl;
import org.geoserver.catalog.impl.NamespaceInfoImpl;
import org.geoserver.data.test.CiteTestData;
import org.geoserver.security.AccessMode;
import org.geoserver.security.CatalogMode;
import org.geoserver.security.impl.GeoServerRole;
import org.geotools.util.logging.Logging;
import org.junit.Before;
import org.junit.Test;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.xml.sax.InputSource;

import com.google.common.collect.Lists;
import com.thoughtworks.xstream.XStream;

/**
 *
 * @author Stefano Costa, GeoSolutions
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class ConfigTest {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(ConfigTest.class);

    private XStream xstream;

    @Before
    public void setUp() {
        this.xstream = SiraAccessManagerConfigurator.buildXStream();
    }

    @Test
    public void testRuleSerialization() throws XPathExpressionException {
        final Rule r = new Rule();
        r.priority = 10;
        r.roles = "ADMIN";
        r.workspace = "cite";
        r.layer = Rule.ANY;
        r.accessMode = AccessMode.ADMIN.name();
        r.hiddenAttributes.defaultAttributes.add("name");
        r.hiddenAttributes.defaultAttributes.add("description");

        assertTrue(r.isValid());

        final StringWriter writer = new StringWriter();
        this.xstream.toXML(r, writer);
        final String xml = writer.toString();

        LOGGER.info("Serialized Rule: " + xml);

        final XPath xpath = XPathFactory.newInstance().newXPath();
        assertEquals("10", xpath.evaluate("//Rule/priority", new InputSource(new StringReader(xml))));
        assertEquals("ADMIN", xpath.evaluate("//Rule/roles", new InputSource(new StringReader(xml))));
        assertEquals("cite", xpath.evaluate("//Rule/workspace", new InputSource(new StringReader(xml))));
        assertEquals(Rule.ANY, xpath.evaluate("//Rule/layer", new InputSource(new StringReader(xml))));
        assertEquals("description", xpath.evaluate("//Rule/hiddenAttributes/attribute[1]", new InputSource(new StringReader(xml))));
        assertEquals("name", xpath.evaluate("//Rule/hiddenAttributes/attribute[2]", new InputSource(new StringReader(xml))));
    }

    @Test
    public void testRuleWithEmptyChooseAndNotEmptyDefaultHiddenAttributesSerialization() throws XPathExpressionException {
        final Rule r = new Rule();
        r.priority = 10;
        r.roles = "ADMIN";
        r.workspace = "cite";
        r.layer = Rule.ANY;
        r.accessMode = AccessMode.ADMIN.name();
        r.hiddenAttributes.choose = new Choose();
        r.hiddenAttributes.defaultAttributes.addAll(Lists.newArrayList("name", "description"));

        assertTrue(r.isValid());

        final StringWriter writer = new StringWriter();
        this.xstream.toXML(r, writer);
        final String xml = writer.toString();

        LOGGER.info("Serialized Rule: " + xml);

        final XPath xpath = XPathFactory.newInstance().newXPath();
        assertEquals("10", xpath.evaluate("//Rule/priority", new InputSource(new StringReader(xml))));
        assertEquals("ADMIN", xpath.evaluate("//Rule/roles", new InputSource(new StringReader(xml))));
        assertEquals("cite", xpath.evaluate("//Rule/workspace", new InputSource(new StringReader(xml))));
        assertEquals(Rule.ANY, xpath.evaluate("//Rule/layer", new InputSource(new StringReader(xml))));
        assertEquals("name", xpath.evaluate("//Rule/hiddenAttributes/attribute[2]", new InputSource(new StringReader(xml))));
        assertEquals("description", xpath.evaluate("//Rule/hiddenAttributes/attribute[1]", new InputSource(new StringReader(xml))));
    }

    @Test
    public void testRuleDeserialization() {
        final String xml = "<Rule>"
                         + "    <priority>10</priority>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>cite</workspace>"
                         + "    <layer>buildings</layer>"
                         + "    <accessMode>WRITE</accessMode>"
                         + "    <filter>EXCLUDE</filter>"
                         + "    <hiddenAttributes>"
                         + "        <attribute>name</attribute>"
                         + "        <attribute>description</attribute>"
                         + "    </hiddenAttributes>"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        LOGGER.info("Rule: " + r);

        assertTrue(r.isValid());
        assertEquals(10, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals("cite", r.workspace);
        assertEquals("buildings", r.layer);
        assertEquals(Rule.EXCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(2, r.hiddenAttributes.defaultAttributes.size());
        final List<String> hiddenAttributes = new ArrayList<String>(r.hiddenAttributes.defaultAttributes);
        Collections.sort(hiddenAttributes);
        assertEquals("description", hiddenAttributes.get(0));
        assertEquals("name", hiddenAttributes.get(1));
        assertEquals(Rule.EXCLUDE, r.getFilter());
    }

    @Test
    public void testRuleDefaults() {
        final String xml = "<Rule>"
                         + "    <roles>A</roles>"
                         + "    <workspace>cite</workspace>"
                         + "    <layer>buildings</layer>"
                         + "    <accessMode>READ</accessMode>"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        LOGGER.info("Rule: " + r);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("A", r.roles);
        assertEquals("cite", r.workspace);
        assertEquals("buildings", r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
    }

    @Test
    public void testConfigDeserialization() {
        final InputStream in = this.getClass().getResourceAsStream("test-config.xml");
        final SiraAccessManagerConfiguration config = (SiraAccessManagerConfiguration) this.xstream.fromXML(in);

        assertNotNull(config);
        assertNotNull(config.rules);
        assertEquals(2, config.rules.size());
        // check filter factory and index have been set correctly
        for (int i = 0; i < config.rules.size(); i++) {
            final Rule r = config.rules.get(i);

            assertEquals(i, r.index);
        }

        this.checkOrderedByPriorityAndIndex(config.orderedRules);

        assertTrue(config.isValid());
    }

    @Test
    public void testConfigRuleMatch() {
        final InputStream in = this.getClass().getResourceAsStream("test-config-order.xml");
        final SiraAccessManagerConfiguration config = (SiraAccessManagerConfiguration) this.xstream.fromXML(in);

        assertNotNull(config);
        assertNotNull(config.rules);
        assertNotNull(config.orderedRules);
        assertEquals(3, config.rules.size());
        assertEquals(3, config.orderedRules.size());

        this.checkOrderedByPriorityAndIndex(config.orderedRules);

        final Authentication userAB = this.buildUser("citeAB", "test", "A", "B");
        final Authentication userB  = this.buildUser("citeB", "test", "B");
        final NamespaceInfo citeNamespace = this.buildNamespace(CiteTestData.CITE_PREFIX, CiteTestData.CITE_URI);
        final NamespaceInfo cgfNamespace  = this.buildNamespace(CiteTestData.CGF_PREFIX, CiteTestData.CGF_URI);
        final ResourceInfo buildings = this.buildFeatureType(citeNamespace, CiteTestData.BUILDINGS.getLocalPart());
        final ResourceInfo polygons  = this.buildFeatureType(cgfNamespace, CiteTestData.POLYGONS.getLocalPart());

        // first rule with priority 15 should match
        Rule matchingRule = ExpressionRuleHelper.findFirstMatchingRule(userAB, buildings, config);
        assertNotNull(matchingRule);
        assertEquals("A", matchingRule.roles);
        assertEquals(CiteTestData.CITE_PREFIX, matchingRule.workspace);
        assertEquals(Rule.ANY, matchingRule.layer);
        assertEquals(AccessMode.READ.name(), matchingRule.accessMode);
        assertEquals(Rule.INCLUDE, matchingRule.filter);

        // second rule with priority 15 should match, since user was not granted role A
        matchingRule = ExpressionRuleHelper.findFirstMatchingRule(userB, buildings, config);
        assertNotNull(matchingRule);
        assertEquals(Rule.ANY, matchingRule.roles);
        assertEquals(CiteTestData.CITE_PREFIX, matchingRule.workspace);
        assertEquals(CiteTestData.BUILDINGS.getLocalPart(), matchingRule.layer);
        assertEquals(AccessMode.READ.name(), matchingRule.accessMode);
        assertNotNull(matchingRule.filter);
        assertEquals("FID = '113'", matchingRule.filter);

        // no rule should match, so default rule should be returned (deny all)
        matchingRule = ExpressionRuleHelper.findFirstMatchingRule(userAB, polygons, config);
        assertNotNull(matchingRule);
        assertEquals(SiraAccessManagerConfiguration.DEFAULT_RULE, matchingRule);
        // double check this is the deny-all rule
        assertEquals(Rule.ANY, matchingRule.roles);
        assertEquals(Rule.ANY, matchingRule.workspace);
        assertEquals(Rule.ANY, matchingRule.layer);
        assertEquals(AccessMode.READ.name(), matchingRule.accessMode);
        assertNotNull(matchingRule.filter);
        assertEquals(Rule.EXCLUDE, matchingRule.filter);
        assertEquals(CatalogMode.HIDE, matchingRule.catalogMode);
    }

    private void checkOrderedByPriorityAndIndex(Collection<Rule> rules) {
        final Iterator<Rule> ruleIterator = rules.iterator();
        int previousPriority = Rule.HIGHEST_PRIORITY;
        int previousIndex = Integer.MIN_VALUE;
        while (ruleIterator.hasNext()) {
            final Rule rule = ruleIterator.next();
            if (rule.priority > previousPriority) {
                fail("Rules are not ordered by priority: " + rule.priority + " is greater than " + previousPriority);
            }
            if (rule.priority == previousPriority && rule.index < previousIndex) {
                fail("Found two rules with same priority " + rule.priority + " which are not ordered by index: " + rule.index + " is less than " + previousIndex);
            }
            previousPriority = rule.priority;
        }
    }

    private Authentication buildUser(String username, String password, String... roles) {
        final List<GrantedAuthority> grantedRoles = new ArrayList<>();
        for (final String role: roles) {
            grantedRoles.add(new GeoServerRole(role));
        }
        final UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(username, password, grantedRoles);
        return user;
    }

    private NamespaceInfo buildNamespace(String prefix, String uri) {
        final NamespaceInfo citeNamespace = new NamespaceInfoImpl();
        citeNamespace.setPrefix(prefix);
        citeNamespace.setURI(uri);
        return citeNamespace;
    }

    private ResourceInfo buildFeatureType(NamespaceInfo ns, String name) {
        final ResourceInfo resourceInfo = new FeatureTypeInfoImpl(null);
        resourceInfo.setNamespace(ns);
        resourceInfo.setName(name);
        return resourceInfo;
    }

}

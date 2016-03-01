package it.geosolutions.geoserver.sira.security.config;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.InputStream;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.geoserver.catalog.NamespaceInfo;
import org.geoserver.catalog.ResourceInfo;
import org.geoserver.catalog.impl.FeatureTypeInfoImpl;
import org.geoserver.catalog.impl.NamespaceInfoImpl;
import org.geoserver.config.util.SecureXStream;
import org.geoserver.data.test.CiteTestData;
import org.geoserver.security.AccessMode;
import org.geoserver.security.CatalogMode;
import org.geoserver.security.impl.GeoServerRole;
import org.geotools.filter.text.cql2.CQLException;
import org.junit.Before;
import org.junit.Test;
import org.opengis.filter.Filter;
import org.opengis.filter.expression.PropertyName;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.xml.sax.InputSource;

import com.thoughtworks.xstream.XStream;

public class ConfigTest {

    XStream xstream;
    
    @Before
    public void setUp() {
        xstream = new SecureXStream();
        xstream.allowTypes(new Class[] { SiraAccessManagerConfiguration.class, Rule.class });
        xstream.alias("Config", SiraAccessManagerConfiguration.class);
        xstream.alias("Rule", Rule.class);
        xstream.alias("attribute", String.class);
    }

    @Test
    public void testRuleSerialization() throws XPathExpressionException {
        Rule r = new Rule();
        r.priority = 10;
        r.roles = "ADMIN";
        r.workspace = "cite";
        r.layer = "*";
        r.accessMode = AccessMode.ADMIN;
        r.hiddenAttributes.add("name");
        r.hiddenAttributes.add("description");
        assertTrue(r.isValid());

        StringWriter writer = new StringWriter();
        xstream.toXML(r, writer);
        String xml = writer.toString();

        XPath xpath = XPathFactory.newInstance().newXPath();
        assertEquals("10",
                xpath.evaluate("//Rule/priority", new InputSource(new StringReader(xml))));
        assertEquals("ADMIN",
                xpath.evaluate("//Rule/roles", new InputSource(new StringReader(xml))));
        assertEquals("cite",
                xpath.evaluate("//Rule/workspace", new InputSource(new StringReader(xml))));
        assertEquals(Rule.ANY,
                xpath.evaluate("//Rule/layer", new InputSource(new StringReader(xml))));
        assertEquals("description", xpath.evaluate("//Rule/hiddenAttributes/attribute[1]",
                new InputSource(new StringReader(xml))));
        assertEquals("name", xpath.evaluate("//Rule/hiddenAttributes/attribute[2]",
                new InputSource(new StringReader(xml))));
    }

    @Test
    public void testRuleDeserialization() {
        String xml = "<Rule>"
                + "     <priority>10</priority>"
                + "     <roles>ADMIN</roles>"
                + "     <workspace>cite</workspace>"
                + "     <layer>buildings</layer>"
                + "     <accessMode>WRITE</accessMode>"
                + "     <filter>EXCLUDE</filter>"
                + "     <hiddenAttributes>"
                + "         <attribute>name</attribute>"
                + "         <attribute>description</attribute>"
                + "     </hiddenAttributes>"
                + "</Rule>";
        Rule r = (Rule) xstream.fromXML(xml);
        assertTrue(r.isValid());
        assertEquals(10, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals("cite", r.workspace);
        assertEquals("buildings", r.layer);
        assertEquals("EXCLUDE", r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(2, r.hiddenAttributes.size());
        List<String> hiddenAttributes = new ArrayList<String>(r.hiddenAttributes);
        Collections.sort(hiddenAttributes);
        assertEquals("description", hiddenAttributes.get(0));
        assertEquals("name", hiddenAttributes.get(1));
        try {
            assertEquals(Filter.EXCLUDE, r.getFilter());
        } catch (CQLException e) {
            fail("CQLException should not have been raised: " + e.getMessage());
        }
        List<PropertyName> hiddenProperties = r.getHiddenProperties();
        assertNotNull(hiddenProperties);
        assertEquals(2, hiddenProperties.size());
    }

    @Test
    public void testRuleDefaults() {
        String xml = "<Rule>"
                + "     <roles>A</roles>"
                + "     <workspace>cite</workspace>"
                + "     <layer>buildings</layer>"
                + "     <accessMode>READ</accessMode>"
                + "</Rule>";
        Rule r = (Rule) xstream.fromXML(xml);
        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("A", r.roles);
        assertEquals("cite", r.workspace);
        assertEquals("buildings", r.layer);
        assertEquals(AccessMode.READ, r.accessMode);
        assertEquals("INCLUDE", r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.size());
    }

    @Test
    public void testConfigDeserialization() {
        InputStream in = getClass().getResourceAsStream("test-config.xml");
        SiraAccessManagerConfiguration config = (SiraAccessManagerConfiguration) xstream.fromXML(in);

        assertNotNull(config);
        assertNotNull(config.rules);
        assertEquals(2, config.rules.size());
        // check filter factory and index have been set correctly
        for (int i=0; i<config.rules.size(); i++) {
            Rule r = config.rules.get(i);
            assertEquals(i, r.index);
            assertEquals(SiraAccessManagerConfiguration.FF, r.filterFactory);
        }
        checkOrderedByPriorityAndIndex(config.orderedRules);
        assertTrue(config.isValid());
    }

    private void checkOrderedByPriorityAndIndex(Collection<Rule> rules) {
        Iterator<Rule> ruleIterator = rules.iterator();
        int previousPriority = Rule.HIGHEST_PRIORITY;
        int previousIndex = Integer.MIN_VALUE;
        while (ruleIterator.hasNext()) {
            Rule rule = ruleIterator.next();
            if (rule.priority > previousPriority) {
                fail("Rules are not ordered by priority: " + rule.priority + " is greater than " + previousPriority);
            }
            if (rule.priority == previousPriority && rule.index < previousIndex) {
                fail("Found two rules with same priority " + rule.priority + " which are not ordered by index: " + rule.index + " is less than " + previousIndex);
            }
            previousPriority = rule.priority;
        }
    }

    @Test
    public void testConfigRuleMatch() {
        InputStream in = getClass().getResourceAsStream("test-config-order.xml");
        SiraAccessManagerConfiguration config = (SiraAccessManagerConfiguration) xstream.fromXML(in);
        
        assertNotNull(config);
        assertNotNull(config.rules);
        assertNotNull(config.orderedRules);
        assertEquals(3, config.rules.size());
        assertEquals(3, config.orderedRules.size());
        checkOrderedByPriorityAndIndex(config.orderedRules);

        Authentication userAB = buildUser("citeAB", "test", "A", "B");
        Authentication userB = buildUser("citeB", "test", "B");
        NamespaceInfo citeNamespace = buildNamespace(CiteTestData.CITE_PREFIX, CiteTestData.CITE_URI);
        NamespaceInfo cgfNamespace = buildNamespace(CiteTestData.CGF_PREFIX, CiteTestData.CGF_URI);
        ResourceInfo buildings = buildFeatureType(citeNamespace, CiteTestData.BUILDINGS.getLocalPart());
        ResourceInfo polygons = buildFeatureType(cgfNamespace, CiteTestData.POLYGONS.getLocalPart());

        // first rule with priority 15 should match
        Rule matchingRule = config.findFirstMatchingRuleForResource(userAB, buildings);
        assertNotNull(matchingRule);
        assertEquals("A", matchingRule.roles);
        assertEquals(CiteTestData.CITE_PREFIX, matchingRule.workspace);
        assertEquals(Rule.ANY, matchingRule.layer);
        assertEquals(AccessMode.READ, matchingRule.accessMode);
        assertEquals("INCLUDE", matchingRule.filter);

        // second rule with priority 15 should match, since user was not granted role A
        matchingRule = config.findFirstMatchingRuleForResource(userB, buildings);
        assertNotNull(matchingRule);
        assertEquals(Rule.ANY, matchingRule.roles);
        assertEquals(CiteTestData.CITE_PREFIX, matchingRule.workspace);
        assertEquals(CiteTestData.BUILDINGS.getLocalPart(), matchingRule.layer);
        assertEquals(AccessMode.READ, matchingRule.accessMode);
        assertNotNull(matchingRule.filter);
        assertEquals("FID = '113'", matchingRule.filter);

        // no rule should match, so default rule should be returned (deny all)
        matchingRule = config.findFirstMatchingRuleForResource(userAB, polygons);
        assertNotNull(matchingRule);
        assertEquals(SiraAccessManagerConfiguration.DEFAULT_RULE, matchingRule);
        // double check this is the deny-all rule
        assertEquals(Rule.ANY, matchingRule.roles);
        assertEquals(Rule.ANY, matchingRule.workspace);
        assertEquals(Rule.ANY, matchingRule.layer);
        assertEquals(AccessMode.READ, matchingRule.accessMode);
        assertNotNull(matchingRule.filter);
        assertEquals("EXCLUDE", matchingRule.filter);
        assertEquals(CatalogMode.HIDE, matchingRule.catalogMode);
        assertEquals(0, matchingRule.getHiddenProperties().size());
    }

    private Authentication buildUser(String username, String password, String... roles) {
        List<GrantedAuthority> grantedRoles = new ArrayList<>();
        for (String role: roles) {
            grantedRoles.add(new GeoServerRole(role));
        }
        UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(username, password, grantedRoles);
        return user;
    }

    private NamespaceInfo buildNamespace(String prefix, String uri) {
        NamespaceInfo citeNamespace = new NamespaceInfoImpl();
        citeNamespace.setPrefix(prefix);
        citeNamespace.setURI(uri);
        return citeNamespace;
    }

    private ResourceInfo buildFeatureType(NamespaceInfo ns, String name) {
        ResourceInfo resourceInfo = new FeatureTypeInfoImpl(null);
        resourceInfo.setNamespace(ns);
        resourceInfo.setName(name);
        return resourceInfo;
    }

}

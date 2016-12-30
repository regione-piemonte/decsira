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
import static org.hamcrest.Matchers.*;

import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleEngine;
import it.geosolutions.geoserver.sira.security.util.factory.expression.ExpressionRuleEngineFactory;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;
import org.geoserver.security.AccessMode;
import org.geoserver.security.CatalogMode;
import org.geotools.filter.text.cql2.CQLException;
import org.junit.Before;
import org.junit.Test;
import org.opengis.filter.Filter;

import com.thoughtworks.xstream.XStream;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class ExpressionTest {

    private ExpressionRuleEngine expressionRuleEngineBare;

    private ExpressionRuleEngine expressionRuleEngine;

    private XStream xstream;

    private Properties props;

    @Before
    public void setUp() throws NoSuchMethodException, SecurityException {
        final SimpleDateFormat dateFormatter = new SimpleDateFormat("HH:mm:ss a");
        final String now = dateFormatter.format(new Date());

        this.props = new Properties();
        this.props.put("now", now);

        assertThat(ExpressionRuleEngine.getTemplateExpression().getExpressionPrefix(), is("#{"));
        assertThat(ExpressionRuleEngine.getTemplateExpression().getExpressionSuffix(), is("}"));

        this.expressionRuleEngineBare = new ExpressionRuleEngine();
        this.expressionRuleEngine     = ExpressionRuleEngineFactory.createExpressionRuleEngine(this.props);

        this.xstream = SiraAccessManagerConfigurator.buildXStream();
    }

    @Test
    public void testRuleAccessModeReadLiteral() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>READ</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.READ));
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());
    }

    @Test
    public void testRuleAccessModeWriteEvaluatedWithBareExpressionEngine() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>#{'WRITE'}</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals("#{'WRITE'}", r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngineBare.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.WRITE));
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());
    }

    @Test
    public void testRuleAccessModeIgnoreRuleLiteral() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>IGNORERULE</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(Rule.IGNORERULE, r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(nullValue()));
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());
    }

    @Test
    public void testRuleAccessModeReadOrWriteEvaluated() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>#{#if(['now'].toLowerCase().endsWith('pm'), 'READ', 'WRITE')}</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals("#{#if(['now'].toLowerCase().endsWith('pm'), 'READ', 'WRITE')}", r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, isIn(new AccessMode[] { AccessMode.READ, AccessMode.WRITE }));
        assertEquals(((String) this.props.get("now")).toLowerCase().endsWith("pm") ? AccessMode.READ : AccessMode.WRITE, accessMode);
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());
    }

    @Test
    public void testRuleAccessModeIgnoreRuleEvaluated() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>#{'IGNORERULE'}</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals("#{'IGNORERULE'}", r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(nullValue()));
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());
    }

    @Test(expected = IllegalStateException.class)
    public void testRuleAccessModeUnknownErrorEvaluated() {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>#{'UNKNOWN'}</accessMode>"
                         + "    <filter>INCLUDE</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals("#{'UNKNOWN'}", r.accessMode);
        assertEquals(Rule.INCLUDE, r.filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
        assertEquals(Rule.INCLUDE, r.getFilter());

        // should throw an IllegalStateException
        this.expressionRuleEngine.evaluateAccessMode(r);
    }

    @Test
    public void testRuleAccessFilterIncludeEvaluated() throws CQLException {
        final String xml = "<Rule>"
                         + "    <roles>ADMIN</roles>"
                         + "    <workspace>*</workspace>"
                         + "    <layer>*</layer>"
                         + "    <accessMode>READ</accessMode>"
                         + "    <filter>#{'INCLUDE'}</filter>"
                         + "    <hiddenAttributes />"
                         + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.READ));
        assertEquals("#{'INCLUDE'}", r.filter);
        final Filter filter = this.expressionRuleEngine.evaluateFilter(r);
        assertEquals(Filter.INCLUDE, filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
    }

    @Test
    public void testRuleAccessFilterExcludeEvaluated() throws CQLException {
        final String xml = "<Rule>"
                + "    <roles>ADMIN</roles>"
                + "    <workspace>*</workspace>"
                + "    <layer>*</layer>"
                + "    <accessMode>READ</accessMode>"
                + "    <filter>#{'EXCLUDE'}</filter>"
                + "    <hiddenAttributes />"
                + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.READ));
        assertEquals("#{'EXCLUDE'}", r.filter);
        final Filter filter = this.expressionRuleEngine.evaluateFilter(r);
        assertEquals(Filter.EXCLUDE, filter);
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
    }

    @Test
    public void testRuleAccessFilterECQLEvaluated() throws CQLException {
        final String xml = "<Rule>"
                + "    <roles>ADMIN</roles>"
                + "    <workspace>*</workspace>"
                + "    <layer>*</layer>"
                + "    <accessMode>READ</accessMode>"
                + "    <filter>\"sira:attivita/sira:Attivita/@gml:id\" = 'attivita.#{new java.util.Random().nextInt(9) + 1}'</filter>"
                + "    <hiddenAttributes />"
                + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.READ));
        assertEquals("\"sira:attivita/sira:Attivita/@gml:id\" = 'attivita.#{new java.util.Random().nextInt(9) + 1}'", r.filter);
        final Filter filter = this.expressionRuleEngine.evaluateFilter(r);
        final String lastFilterChar = StringUtils.substring(filter.toString(), -3, -2);
        try {
            final Integer attivitaId = Integer.valueOf(lastFilterChar);

            assertThat(attivitaId, is(both(greaterThanOrEqualTo(0)).and(lessThanOrEqualTo(9))));
        } catch (NumberFormatException e) {
            fail("Exception not expected");
        }
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
    }

    @Test
    public void testRuleAccessFilterECQLEvaluatedWithRootObject() throws CQLException {
        final String xml = "<Rule>"
                + "    <roles>ADMIN</roles>"
                + "    <workspace>*</workspace>"
                + "    <layer>*</layer>"
                + "    <accessMode>READ</accessMode>"
                + "    <filter>\"sira:attivita/sira:Attivita/@gml:id\" = 'attivita.#{[\'value\']}'</filter>"
                + "    <hiddenAttributes />"
                + "</Rule>";

        final Rule r = (Rule) this.xstream.fromXML(xml);

        @SuppressWarnings("serial")
        final Map<String, Object> rootObject = new HashMap<String, Object>() {{
            // ...a little reminder of how far the development of this project has been taken by "you-know-what";-)
            this.put("value", 20161231);
        }};

        this.expressionRuleEngine.setRootObject(rootObject);

        assertTrue(r.isValid());
        assertEquals(0, r.priority);
        assertEquals("ADMIN", r.roles);
        assertEquals(Rule.ANY, r.workspace);
        assertEquals(Rule.ANY, r.layer);
        assertEquals(AccessMode.READ.name(), r.accessMode);
        final AccessMode accessMode = this.expressionRuleEngine.evaluateAccessMode(r);
        assertThat(accessMode, is(AccessMode.READ));
        assertEquals("\"sira:attivita/sira:Attivita/@gml:id\" = 'attivita.#{[\'value\']}'", r.filter);
        final Filter filter = this.expressionRuleEngine.evaluateFilter(r);

        final String lastFilterChar = StringUtils.substring(filter.toString(), -10, -2);
        try {
            final Integer attivitaId = Integer.valueOf(lastFilterChar);

            assertThat(attivitaId, is(rootObject.get("value")));
        } catch (NumberFormatException e) {
            fail("Exception not expected");
        }
        assertEquals(CatalogMode.HIDE, r.catalogMode);
        assertTrue(r.hiddenAttributes != null);
        assertEquals(0, r.hiddenAttributes.defaultAttributes.size());
    }

}

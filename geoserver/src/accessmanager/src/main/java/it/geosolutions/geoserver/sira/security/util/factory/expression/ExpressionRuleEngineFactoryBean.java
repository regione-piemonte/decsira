package it.geosolutions.geoserver.sira.security.util.factory.expression;

import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleEngine;

import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.InitializingBean;

/**
 * Factory that provides <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
 * <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine
 * as a <code>Spring</code> bean reference.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class ExpressionRuleEngineFactoryBean extends ExpressionRuleEngineFactory implements FactoryBean<ExpressionRuleEngine>, InitializingBean {

    /**
     * {@link ExpressionRuleEngine} instance.
     */
    private ExpressionRuleEngine expressionRuleEngine;

    @Override
    public void afterPropertiesSet() throws Exception {
        this.expressionRuleEngine = this.create();
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.beans.factory.FactoryBean#getObject()
     */
    @Override
    public ExpressionRuleEngine getObject() throws Exception {
        return this.expressionRuleEngine;
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.beans.factory.FactoryBean#getObjectType()
     */
    @Override
    public Class<?> getObjectType() {
        return ExpressionRuleEngine.class;
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.beans.factory.FactoryBean#isSingleton()
     */
    @Override
    public boolean isSingleton() {
        return true;
    }

}

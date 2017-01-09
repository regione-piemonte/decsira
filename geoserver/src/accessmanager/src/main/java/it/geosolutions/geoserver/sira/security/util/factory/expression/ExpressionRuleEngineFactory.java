package it.geosolutions.geoserver.sira.security.util.factory.expression;

import it.geosolutions.geoserver.sira.security.expression.ExpressionRuleEngine;

import java.lang.reflect.Method;
import java.util.Collections;
import java.util.Map;

import org.geoserver.security.iride.util.factory.AbstractFactory;

/**
 * <code>CSI</code> <code>SIRA</code> <code>Access Manager</code>
 * <a href="http://docs.spring.io/spring/docs/3.1.4.RELEASE/spring-framework-reference/html/expressions.html">Spring Expression Language (SpEL)</a> engine <em>default</em> Factory,
 * providing a set of registered built-in user-defined functions.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class ExpressionRuleEngineFactory extends AbstractFactory<ExpressionRuleEngine> {

    /**
     * The root object.
     */
    private Object rootObject;

    /**
     * User-defined functions to register into the expression engine.
     */
    private Map<String, Method> functions;

    /**
     * Static factory method, useful for testing.
     *
     * @return a new {@link ExpressionRuleEngine} object
     */
    public static ExpressionRuleEngine createExpressionRuleEngine() {
        return createExpressionRuleEngine(null, null);
    }

    /**
     * Static factory method, useful for testing.
     *
     * @param rootObject the root object
     * @return a new {@link ExpressionRuleEngine} object
     */
    public static ExpressionRuleEngine createExpressionRuleEngine(Object rootObject) {
        return createExpressionRuleEngine(rootObject, null);
    }

    /**
     * Static factory method, useful for testing.
     *
     * @param rootObject the root object
     * @param functions the user-defined functions to register into the expression engine
     * @return a new {@link ExpressionRuleEngine} object
     */
    public static ExpressionRuleEngine createExpressionRuleEngine(Object rootObject, Map<String, Method> functions) {
        final ExpressionRuleEngineFactory factory = new ExpressionRuleEngineFactory();
        factory.setRootObject(rootObject);
        factory.setFunctions(functions);

        return factory.create();
    }

    /**
     * Get the root object.
     *
     * @return the root object
     */
    public Object getRootObject() {
        return this.rootObject;
    }

    /**
     * Set the root object.
     *
     * @param rootObject the root object
     */
    public void setRootObject(Object rootObject) {
        this.rootObject = rootObject;
    }

    /**
     * Get the user-defined functions to register into the expression engine.
     *
     * @return the the user-defined functions to register into the expression engine
     */
    public Map<String, Method> getFunctions() {
        if (this.functions == null) {
            this.functions = Collections.<String, Method>emptyMap();
        }

        return this.functions;
    }

    /**
     * Set the user-defined functions to register into the expression engine.
     *
     * @param functions the user-defined functions to register into the expression engine
     */
    public void setFunctions(Map<String, Method> functions) {
        this.functions = functions;
    }

    /*
     * (non-Javadoc)
     * @see org.geoserver.security.iride.util.factory.AbstractFactory#newInstance()
     */
    @Override
    protected ExpressionRuleEngine newInstance() {
        final ExpressionRuleEngine expressionRuleEngine = new ExpressionRuleEngine(this.rootObject);

        // register user-defined functions (if any), as well as built-in ones
        expressionRuleEngine.setFunctions(this.getFunctions());
        expressionRuleEngine.setFunctions(ExpressionRuleEngine.Functions.BUILTINS);

        return expressionRuleEngine;
    }

}

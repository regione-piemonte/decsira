package org.geoserver.security.iride.identity;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

/**
 * <code>IRIDE</code> Identity tokenization and validation <code>JUnit</code> Test Suite.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
@RunWith(Suite.class)
@SuiteClasses({ IrideIdentityTokenizerTest.class, IrideIdentityValidatorTest.class })
public final class AllTests {

    /**
     * Constructor.
     */
    private AllTests() {
        /* NOP */
    }

}

package org.geoserver.security.iride.util;

import static org.junit.Assert.*;

import org.geoserver.security.iride.util.validator.IdentitaIrideValidator;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IdentitaIrideValidatorTestCase {

    private String identitaIride;

    /**
     * @throws java.lang.Exception
     */
    @Before
    public void setUp() throws Exception {
        this.identitaIride = "AAAAAA00B77B000F/CSI PIEMONTE/DEMO 20/IPA/20160531113948/2/1IQssTaf4vNMa66qU52m7g==";
    }

    /**
     * Test method for {@link org.geoserver.security.iride.util.validator.IdentitaIrideValidator#isValid(java.lang.String)}.
     */
    @Test
    public void testIsValid() {
        final boolean valid = IdentitaIrideValidator.getInstance().isValid(this.identitaIride);

        assertTrue(valid);
    }

}

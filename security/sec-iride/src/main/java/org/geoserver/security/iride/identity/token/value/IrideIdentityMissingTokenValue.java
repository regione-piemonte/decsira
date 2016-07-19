package org.geoserver.security.iride.identity.token.value;

import org.geoserver.security.iride.identity.IrideIdentityTokenizer;
import org.geoserver.security.iride.identity.token.IrideIdentityToken;

/**
 * <code>IRIDE</code> Digital Identity placeholder object for any missing token.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityMissingTokenValue extends IrideIdentityTokenValue {

    /**
     * Constructor.
     *
     * @param token the <code>IRIDE</code> Digital Identity missing token
     * @param value the candidate <code>IRIDE</code> Digital Identity string representation being tokenized by {@link IrideIdentityTokenizer}
     */
    public IrideIdentityMissingTokenValue(IrideIdentityToken token, String value) {
        super(token, value);
    }

}

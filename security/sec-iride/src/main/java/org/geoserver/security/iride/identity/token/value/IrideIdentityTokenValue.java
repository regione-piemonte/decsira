package org.geoserver.security.iride.identity.token.value;

import org.geoserver.security.iride.identity.token.IrideIdentityToken;

/**
 * <code>IRIDE</code> Digital Identity object holding an {@link IrideIdentityToken} instance and an associated value.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideIdentityTokenValue {

    /**
     * The <code>IRIDE</code> Digital Identity token.
     */
    private final IrideIdentityToken token;

    /**
     * The <code>IRIDE</code> Digital Identity token associated value.
     */
    private final String value;

    /**
     * Constructor.
     *
     * @param token the <code>IRIDE</code> Digital Identity token
     * @param value the <code>IRIDE</code> Digital Identity token value
     */
    public IrideIdentityTokenValue(IrideIdentityToken token, String value) {
        this.token = token;
        this.value = value;
    }

    /**
     * Returns the <code>IRIDE</code> Digital Identity token.
     *
     * @return the token
     */
    public final IrideIdentityToken getToken() {
        return this.token;
    }

    /**
     * Returns the <code>IRIDE</code> Digital Identity token value.
     *
     * @return the <code>IRIDE</code> Digital Identity token value
     */
    public final String getValue() {
        return this.value;
    }

}
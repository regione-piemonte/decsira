package org.geoserver.security.iride.identity.token.value;

import org.geoserver.security.iride.identity.token.IrideIdentityToken;

/**
 * <code>IRIDE</code> Digital Identity placeholder object for any {@link IrideIdentityToken} instance with its associated <em>invalid<em> value and reason.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityInvalidTokenValue extends IrideIdentityTokenValue {

    /**
     * The <code>IRIDE</code> Digital Identity token <em>invalid<em> value reason.
     */
    private final String reason;

    /**
     * Constructor.
     *
     * @param token the <code>IRIDE</code> Digital Identity token
     * @param value the <code>IRIDE</code> Digital Identity token associated <em>invalid<em> value
     * @param value the <code>IRIDE</code> Digital Identity token associated <em>invalid<em> value reason
     */
    public IrideIdentityInvalidTokenValue(IrideIdentityToken token, String value, String reason) {
        super(token, value);

        this.reason = reason;
    }

    /**
     * Returns the <code>IRIDE</code> Digital Identity token <em>invalid<em> value reason.
     *
     * @return the <code>IRIDE</code> Digital Identity token <em>invalid<em> value reason
     */
    public final String getReason() {
        return this.reason;
    }

}

package org.geoserver.security.iride.identity.exception;

import org.geoserver.security.iride.identity.token.value.IrideIdentityMissingTokenValue;
import org.geoserver.security.iride.util.Constants;

/**
 * <code>IRIDE</code> Digital Identity exception thrown for any <em>missing</em> tokens.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityMissingTokenException extends IrideIdentityTokenizationException {

    private static final long serialVersionUID = 2810994807986926520L;

    /**
     * The missing token.
     */
    private IrideIdentityMissingTokenValue missingTokenValue;

    /**
     * Constructor.
     */
    public IrideIdentityMissingTokenException() {
        this(null);
    }

    /**
     * Constructor.
     *
     * @param missingToken the missing token
     */
    public IrideIdentityMissingTokenException(IrideIdentityMissingTokenValue missingToken) {
        super(missingToken == null
            ? Constants.MISSING_UNSPECIFIED_TOKEN_EXCEPTION_MESSAGE
            : String.format(Constants.MISSING_TOKEN_EXCEPTION_MESSAGE, missingToken.getToken())
        );

        this.missingTokenValue = missingToken;
    }

    /**
     * Returns the missing token.
     *
     * @return the missing token
     */
    public IrideIdentityMissingTokenValue getMissingTokenValue() {
        return this.missingTokenValue;
    }

}

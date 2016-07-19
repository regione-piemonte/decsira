package org.geoserver.security.iride.identity.exception;

import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geoserver.security.iride.util.Constants;
import org.geoserver.security.iride.util.IrideSecurityUtils;

/**
 * <code>IRIDE</code> Digital Identity exception thrown for one or more <em>invalid</em> tokens.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideIdentityInvalidTokensException extends IrideIdentityTokenizationException {

    private static final long serialVersionUID = -5732259205731098733L;

    /**
     * No invalid tokens specified.
     */
    private static final IrideIdentityInvalidTokenValue[] NO_INVALID_TOKENS_SPECIFIED = new IrideIdentityInvalidTokenValue[0];

    /**
     * The invalid tokens.
     */
    private final IrideIdentityInvalidTokenValue[] invalidTokens;

    /**
     * Constructor.
     */
    public IrideIdentityInvalidTokensException() {
        this(
            Constants.INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION,
            NO_INVALID_TOKENS_SPECIFIED
        );
    }

    /**
     * Constructor.
     *
     * @param message
     */
    public IrideIdentityInvalidTokensException(String message) {
        this(
            String.format(Constants.INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE, message),
            NO_INVALID_TOKENS_SPECIFIED
        );
    }

    /**
     * Constructor.
     *
     * @param invalidTokens the invalid tokens
     */
    public IrideIdentityInvalidTokensException(IrideIdentityInvalidTokenValue[] invalidTokens) {
        this(
            IrideSecurityUtils.printInvalidTokenValues(Constants.INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE, invalidTokens),
            invalidTokens
        );
    }

    /**
     * Constructor.
     *
     * @param message
     * @param invalidTokens2
     */
    private IrideIdentityInvalidTokensException(String message, IrideIdentityInvalidTokenValue[] invalidTokens) {
        super(message);

        this.invalidTokens = IrideSecurityUtils.defaultToEmpty(invalidTokens);
    }

    /**
     * Returns the invalid tokens, if any.
     *
     * @return the invalid tokens, if any
     */
    public IrideIdentityInvalidTokenValue[] getInvalidTokens() {
        return this.invalidTokens;
    }

}

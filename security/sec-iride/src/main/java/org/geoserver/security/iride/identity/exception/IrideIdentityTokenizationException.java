package org.geoserver.security.iride.identity.exception;

import org.geoserver.security.iride.util.Constants;

/**
 * <code>IRIDE</code> Digital Identity base tokenization-related exception class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public class IrideIdentityTokenizationException extends IrideIdentityException {

    private static final long serialVersionUID = -2870022721604366580L;

    /**
     * Constructor.
     *
     * @param cause
     */
    public IrideIdentityTokenizationException(Throwable cause) {
        super(String.format(Constants.INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE, "an error occured during tokenization"), cause);
    }

    /**
     * Constructor.
     *
     * @param message
     */
    protected IrideIdentityTokenizationException(String message) {
        super(message);
    }

}

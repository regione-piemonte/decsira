package org.geoserver.security.iride.identity.exception;

import org.geoserver.security.iride.exception.IrideSecurityApplicationException;

/**
 * <code>IRIDE</code> Digital Identity base exception class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public abstract class IrideIdentityException extends IrideSecurityApplicationException {

    private static final long serialVersionUID = 4616700982521599438L;

    /**
     * Constructor.
     *
     * @param message exception message
     */
    protected IrideIdentityException(String message) {
        super(message);
    }

    /**
     * Constructor.
     *
     * @param message exception message
     * @param cause exception cause
     */
    protected IrideIdentityException(String message, Throwable cause) {
        super(message, cause);
    }

}

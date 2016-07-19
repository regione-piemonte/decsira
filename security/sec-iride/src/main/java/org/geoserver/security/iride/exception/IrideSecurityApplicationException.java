package org.geoserver.security.iride.exception;

/**
 * <code>IRIDE</code> Digital Identity base application exception class.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public abstract class IrideSecurityApplicationException extends Exception {

    private static final long serialVersionUID = -4405088588435502355L;

    /**
     * Constructor.
     */
    protected IrideSecurityApplicationException() {
        super();
    }

    /**
     * Constructor.
     *
     * @param message
     */
    protected IrideSecurityApplicationException(String message) {
        super(message);
    }

    /**
     * Constructor.
     *
     * @param cause
     */
    protected IrideSecurityApplicationException(Throwable cause) {
        super(cause);
    }

    /**
     * Constructor.
     *
     * @param message
     * @param cause
     */
    protected IrideSecurityApplicationException(String message, Throwable cause) {
        super(message, cause);
    }

}

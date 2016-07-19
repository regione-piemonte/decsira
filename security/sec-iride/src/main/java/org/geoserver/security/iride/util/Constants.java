package org.geoserver.security.iride.util;

/**
 * Utility class for <code>IRIDE</code> Digital Identity exceptions constants.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Constants {

    /**
     * Exception message caption for invalid tokens.
     */
    public static final String INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION = "Invalid IRIDE Identity tokens";

    /**
     * Exception message for invalid tokens.
     */
    public static final String INVALID_TOKENS_GENERIC_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": %s";

    /**
     * Exception message for an invalid token.
     */
    public static final String INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": invalid %s, with value '%s'";

    /**
     * Exception message for missing token.
     */
    public static final String MISSING_TOKEN_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": missing %s";

    /**
     * Exception message for an unspecified missing token.
     */
    public static final String MISSING_UNSPECIFIED_TOKEN_EXCEPTION_MESSAGE = INVALID_TOKENS_EXCEPTION_MESSAGE_CAPTION + ": an unspecified token is missing";

    /**
     * Constructor.
     */
    private Constants() {
        /* NOP */
    }

}

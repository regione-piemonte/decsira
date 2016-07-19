package org.geoserver.security.iride.util;

import java.util.Arrays;
import java.util.logging.Logger;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Transformer;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.SystemUtils;
import org.geoserver.security.iride.identity.IrideIdentityTokenizer;
import org.geoserver.security.iride.identity.IrideIdentityValidator;
import org.geoserver.security.iride.identity.exception.IrideIdentityException;
import org.geoserver.security.iride.identity.token.value.IrideIdentityInvalidTokenValue;
import org.geotools.util.logging.Logging;

/**
 * <code>IRIDE</code> Digital Identity utilities.
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class IrideSecurityUtils {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logging.getLogger(IrideSecurityUtils.class);

    /**
     * IRIDE Digital Identity tokenizer  instance.
     */
    private static final IrideIdentityTokenizer TOKENIZER = new IrideIdentityTokenizer();

    /**
     * IRIDE Digital Identity tokenizer instance.
     */
    private static final IrideIdentityValidator VALIDATOR = new IrideIdentityValidator();

    /**
     *
     * @param array
     * @return
     */
    @SuppressWarnings("unchecked")
    public static <T> T[] defaultToEmpty(T[] array) {
        return (T[]) ArrayUtils.nullToEmpty(array);
    }

    /**
     *
     * @param candidateIrideIdentity
     * @return
     */
    public static boolean isValidIrideIdentity(String candidateIrideIdentity) {
        if (StringUtils.isEmpty(candidateIrideIdentity)) {
            return false;
        }

        try {
            final String[] tokens = TOKENIZER.tokenize(candidateIrideIdentity);

            final IrideIdentityInvalidTokenValue[] validationResult = VALIDATOR.validate(tokens);

            if (ArrayUtils.isEmpty(validationResult)) {
                return true;
            } else {
                LOGGER.warning(printInvalidTokenValues(validationResult));

                return false;
            }
        } catch (IrideIdentityException e) {
            LOGGER.severe(e.getMessage());

            return false;
        }
    }

    /**
     *
     * @param invalidTokenValues
     * @return
     */
    public static String printInvalidTokenValues(IrideIdentityInvalidTokenValue... invalidTokenValues) {
        return printInvalidTokenValues(Constants.INVALID_TOKENS_SPECIFIC_EXCEPTION_MESSAGE, invalidTokenValues);
    }

    /**
     *
     * @param result
     * @return
     */
    public static String printInvalidTokenValues(final String invalidTokenValuesMessageTemplate, IrideIdentityInvalidTokenValue... invalidTokenValues) {
        return StringUtils.join(
            CollectionUtils.collect(
                Arrays.asList(defaultToEmpty(invalidTokenValues)),
                new Transformer() {

                    /*
                     * (non-Javadoc)
                     * @see org.apache.commons.collections.Transformer#transform(java.lang.Object)
                     */
                    @Override
                    public String transform(Object input) {
                        if (input == null) {
                            return StringUtils.EMPTY;
                        } else {
                            final IrideIdentityInvalidTokenValue invalidToken = (IrideIdentityInvalidTokenValue) input;

                            return String.format(
                                invalidTokenValuesMessageTemplate,
                                invalidToken.getToken(),
                                String.valueOf(invalidToken.getValue())
                            );
                        }
                    }

                }
            ),
            SystemUtils.LINE_SEPARATOR
        );
    }

    /**
     * Constructor.
     */
    private IrideSecurityUtils() {
        /* NOP */
    }

}

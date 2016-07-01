package org.geoserver.security.iride.util;

/**
 *
 * @author "Simone Cornacchia - seancrow76@gmail.com, simone.cornacchia@consulenti.csi.it (CSI:71740)"
 */
public final class Flag {

    /**
     * Tests whether the given flag is on.
     * If the flag is not a power of 2 (ie. 3) this tests whether the combination of flags is on.
     *
     * @param options
     * @param flag Flag value to check.
     *
     * @return whether the specified flag value is on.
     */
    public static boolean isOn(long options, long flag) {
        return (options & flag) > 0;
    }

    /**
     * Tests whether the given flag is off.
     * If the flag is not a power of 2 (ie. 3) this tests whether the combination of flags is off.
     *
     * @param options
     * @param flag Flag value to check.
     *
     * @return whether the specified flag value is off.
     */
    public static boolean isOff(long options, long flag) {
        return (options & flag) == 0;
    }

    /**
     * Constructor.
     */
    private Flag() {
        /* NOP */
    }

}

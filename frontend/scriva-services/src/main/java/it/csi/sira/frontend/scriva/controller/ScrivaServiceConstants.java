package it.csi.sira.frontend.scriva.controller;

import java.util.Arrays;
import java.util.List;

public final class ScrivaServiceConstants {

	/**
	 * Application name requesting <code>IRIDE</code> service.
	 */
	public static final String LOGGER = "scriva";

	public static final String DECSIRA_APIMAN_CONSUMERKEY = "DECSIRA_APIMAN_CONSUMERKEY";
	public static final String DECSIRA_APIMAN_CONSUMERSECRET = "DECSIRA_APIMAN_CONSUMERSECRET";
	public static final String DECSIRA_APIMAN_COMPONENTE_APPLICATIVA = "DECSIRA_APIMAN_COMPONENTE_APPLICATIVA";
	public static final String DECSIRA_APIMAN_RUOLO = "DECSIRA_APIMAN_RUOLO";
	public static final String DECSIRA_APIMAN_USERNAME = "DECSIRA_APIMAN_USERNAME";
	public static final String DECSIRA_APIMAN_PASSWORD = "DECSIRA_APIMAN_PASSWORD";
	public static final List<String> CONF_KEYS_RISCA_SCRIVA = Arrays.asList(DECSIRA_APIMAN_CONSUMERKEY,
			DECSIRA_APIMAN_CONSUMERSECRET, DECSIRA_APIMAN_COMPONENTE_APPLICATIVA, DECSIRA_APIMAN_RUOLO,
			DECSIRA_APIMAN_USERNAME, DECSIRA_APIMAN_PASSWORD);

	/**
	 * Application name requesting <code>IRIDE</code> service.
	 */
	public static final String APPLICATION_NAME = "DECSIRA";

	/**
	 * <a href="https://shibboleth.net/">Shibboleth</a> <code>IRIDE</code>
	 * <code>HTTP</code> request header attribute.
	 */
	public static final String HEADER_SHIBBOLETH_IRIDE = "Shib-Iride-IdentitaDigitale";

	/**
	 * Constructor.
	 */
	private ScrivaServiceConstants() {
		/* NOP */
	}

}

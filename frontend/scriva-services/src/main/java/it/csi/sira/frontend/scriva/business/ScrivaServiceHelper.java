package it.csi.sira.frontend.scriva.business;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import it.csi.sira.frontend.scriva.business.dto.AllegatoIstanzaDTO;
import it.csi.sira.frontend.scriva.business.dto.XRequestAuth;
import it.csi.sira.frontend.scriva.controller.ScrivaServiceConstants;
import it.csi.sira.frontend.util.oauth2.OauthHelper;

/**
 * The type Scriva service helper.
 *
 * @author CSI PIEMONTE
 */
public class ScrivaServiceHelper {

	private final String tokenUrl;
	private final String apiEndpoint;
	private String consumerKey;
	private String consumerSecret;
	private String compApp;
	private String ruolo;
	private String username;
	private String password;

	private Map<String, String> configurazione = null;

	protected static Logger logger = Logger.getLogger(ScrivaServiceConstants.LOGGER);

	/**
	 * Instantiates a new Scriva service helper.
	 *
	 * @param endPoint       the end point
	 * @param serviceUrl     the service url
	 * @param configurazione
	 * @throws JsonProcessingException the json processing exception
	 */
	public ScrivaServiceHelper(String endPoint, String serviceUrl, Map<String, String> configurazione)
			throws JsonProcessingException {
		this.tokenUrl = endPoint + "/token";
		this.apiEndpoint = endPoint + serviceUrl;
		this.configurazione = configurazione;
	}

	/**
	 * Sets conf keys.
	 *
	 * @throws JsonProcessingException the json processing exception
	 */
	public void setConfKeys() throws JsonProcessingException {
		try {
			if (this.configurazione != null && !this.configurazione.isEmpty()) {
				consumerKey = configurazione.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_CONSUMERKEY,
						null);
				consumerSecret = configurazione
						.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_CONSUMERSECRET, null);

				compApp = configurazione
						.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_COMPONENTE_APPLICATIVA, null);
				ruolo = configurazione.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_RUOLO, null);
				username = configurazione.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_USERNAME, null);
				password = configurazione.getOrDefault(ScrivaServiceConstants.DECSIRA_APIMAN_PASSWORD, null);

			}
		} catch (Exception e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("******* ScrivaServiceHelper: " + e.getMessage());
			e.printStackTrace();
		}

	}

	/**
	 * Gets consumer key.
	 *
	 * @return the consumer key
	 * @throws JsonProcessingException the json processing exception
	 */
	public String getConsumerKey() throws JsonProcessingException {
		if (this.consumerKey == null || this.consumerKey.isEmpty()) {
			setConfKeys();
		}
		return consumerKey;
	}

	/**
	 * Gets consumer secret.
	 *
	 * @return the consumer secret
	 * @throws JsonProcessingException the json processing exception
	 */
	public String getConsumerSecret() throws JsonProcessingException {
		if (this.consumerSecret == null || this.consumerSecret.isEmpty()) {
			setConfKeys();
		}
		return consumerSecret;
	}

	public List<AllegatoIstanzaDTO> getAllegatiIstanza(String idIstanza, IrideIdentity irideIdentity) {
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("ScrivaServiceHelper - getAllegatiIstanza - BEGIN");
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("Parametro in input idIstanza: " + idIstanza);
		List<AllegatoIstanzaDTO> result = null;
		String api = "/documenti-pubblicati?id_istanza=" + idIstanza + "&flg_link_documento=true";

		try {
			RestTemplate restTemplate = new RestTemplate();
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("Got RestTemplate");

			HttpHeaders headers = getHeaders(irideIdentity);
			HttpEntity<Void> entity = new HttpEntity<Void>(headers);

			String url = apiEndpoint + api;
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("Calling url: " + url);
			ResponseEntity<AllegatoIstanzaDTO[]> response = restTemplate.exchange(url, HttpMethod.GET, entity,
					AllegatoIstanzaDTO[].class);
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("response status code: " + response.getStatusCode());

			AllegatoIstanzaDTO[] allegati = response.getBody();

			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("Got allegati: " + allegati.length);
			for (AllegatoIstanzaDTO allegato : allegati) {
				Logger.getLogger(ScrivaServiceConstants.LOGGER).info(allegato.getCodAllegato());
			}

			result = Arrays.asList(allegati);
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("result: " + result);

		} catch (JsonProcessingException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).error(e.getMessage());
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("ScrivaServiceHelper - getAllegatiIstanza - END");
		}
		return result;
	}

	private HttpHeaders getHeaders(IrideIdentity irideIdentity) throws JsonProcessingException {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", "Bearer " + getToken(tokenUrl, this.getConsumerKey(), this.getConsumerSecret()));
		XRequestAuth xRequestAuth = new XRequestAuth();
		xRequestAuth.setComponenteApplicativa(compApp);
		xRequestAuth.setRuolo(ruolo);
		xRequestAuth.setUsername(username);
		xRequestAuth.setPassword(password);
		if (irideIdentity != null) {
			xRequestAuth.setIdentita(irideIdentity);
		}
		String xRequestAuthJson = new ObjectMapper().writeValueAsString(xRequestAuth);
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("xRequestAuthJson --> " + xRequestAuthJson);
		String xRequestAuthHeader = new String(Base64.getEncoder().encode(xRequestAuthJson.getBytes()));
		headers.set("X-Request-Auth", xRequestAuthHeader);
		return headers;
	}

	private String getToken(String tokenUrl, String consumerKey, String consumerSecret) {
		String inputParam = "Parametro in input tokenUrl [" + tokenUrl + "] - consumerKey [" + consumerKey
				+ "] - consumerSecret [" + consumerSecret + "]";
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("getToken - " + inputParam);

		OauthHelper oauthHelper = new OauthHelper(tokenUrl, consumerKey, consumerSecret, 10000);
		String token = oauthHelper.getToken();

		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("Ricevuto token [" + token + "]");
		return token;
	}

}
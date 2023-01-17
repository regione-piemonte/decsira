/*
 *  REST service to query for IRIDE roles using CSI-Piemonte IRIDE Service.
 *  Copyright (C) 2016  Regione Piemonte (www.regione.piemonte.it)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package it.csi.sira.frontend.scriva.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.geoserver.security.iride.entity.IrideIdentity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import it.csi.sira.frontend.scriva.business.ScrivaServiceHelper;
import it.csi.sira.frontend.scriva.business.dao.ConfigurazioneDAO;
import it.csi.sira.frontend.scriva.business.dto.AllegatoIstanzaDTO;
import it.csi.sira.frontend.scriva.utils.LogFormatter;

@Controller
@RequestMapping(method = RequestMethod.GET, value = "/scriva")
public final class ScrivaServiceController {

	private static String className = ScrivaServiceController.class.getSimpleName();

	public static final String HEADER_SHIBBOLETH_IRIDE = "Shib-Iride-IdentitaDigitale";

	/**
	 * <code>Properties</code> url of scriva service.
	 */
	private Properties scrivaProperties;

	@Autowired
	private ConfigurazioneDAO configurazioneDAO;

	private Map<String, String> configurazione;

	public Properties getScrivaProperties() {
		return scrivaProperties;
	}

	public void setScrivaProperties(Properties scrivaProperties) {
		this.scrivaProperties = scrivaProperties;
	}

	/**
	 * Executed after dependencies have been injected.
	 *
	 * @throws IOException
	 */
	@PostConstruct
	public void init() throws IOException {
		this.configurazione = configurazioneDAO.loadConfigByKeyList(ScrivaServiceConstants.CONF_KEYS_RISCA_SCRIVA);
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public @ResponseBody String test() {
		final String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();

		Logger.getLogger(ScrivaServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "END"));
		return "OK";
	}

	/**
	 *
	 * @param user
	 * @return
	 */
	@RequestMapping(headers = {
			ScrivaServiceConstants.HEADER_SHIBBOLETH_IRIDE }, value = "/secure/allegati-istanza", produces = "application/json", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<AllegatoIstanzaDTO>> getAllegatiIstanza(
			@RequestHeader(value = ScrivaServiceConstants.HEADER_SHIBBOLETH_IRIDE, defaultValue = "") String user,
			HttpServletRequest request) {

		final String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));
		Logger.getLogger(ScrivaServiceConstants.LOGGER)
				.info(LogFormatter.format(className, methodName, "user: " + user));
		IrideIdentity irideIdentity = getIrideIdentity(user);

		Logger.getLogger(ScrivaServiceConstants.LOGGER)
				.info("**************** Logging headers - parameters ****************");
		Enumeration<String> headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements()) {
			String key = (String) headerNames.nextElement();
			String value = request.getHeader(key);
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.info(LogFormatter.format(className, methodName, "header: " + key + ": " + value));
		}
		Enumeration<String> parameterNames = request.getParameterNames();
		while (parameterNames.hasMoreElements()) {
			String key = (String) parameterNames.nextElement();
			String value = request.getParameter(key);
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.info(LogFormatter.format(className, methodName, "parameterName: " + key + ": " + value));
		}
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("*******************************************");

		try {
			String endPoint = scrivaProperties.getProperty("scrivaEndPoint");
			String serviceUrl = scrivaProperties.getProperty("scrivaServiceUrl");
			String idIstanza = request.getParameter("id_istanza");
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("instantiating helper class");
			ScrivaServiceHelper helper = new ScrivaServiceHelper(endPoint, serviceUrl, configurazione);
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("calling getAllegatiIstanza");
			List<AllegatoIstanzaDTO> result = helper.getAllegatiIstanza(idIstanza, irideIdentity);

			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error(it.csi.sira.frontend.scriva.utils.LogFormatter.format(className, methodName, "Error"), e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 *
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/allegati-istanza", produces = "application/json", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<AllegatoIstanzaDTO>> getAllegatiIstanza(HttpServletRequest request) {

		final String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

		Logger.getLogger(ScrivaServiceConstants.LOGGER)
				.info("**************** Logging headers - parameters ****************");
		Enumeration<String> headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements()) {
			String key = (String) headerNames.nextElement();
			String value = request.getHeader(key);
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.info(LogFormatter.format(className, methodName, "header: " + key + ": " + value));
		}
		Enumeration<String> parameterNames = request.getParameterNames();
		while (parameterNames.hasMoreElements()) {
			String key = (String) parameterNames.nextElement();
			String value = request.getParameter(key);
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.info(LogFormatter.format(className, methodName, "parameterName: " + key + ": " + value));
		}
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info("*******************************************");

		try {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("scrivaEndPoint: " + scrivaProperties.getProperty("scrivaEndPoint"));
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("scrivaServiceUrl: " + scrivaProperties.getProperty("scrivaServiceUrl"));
			
			String endPoint = scrivaProperties.getProperty("scrivaEndPoint");
			String serviceUrl = scrivaProperties.getProperty("scrivaServiceUrl");
			String idIstanza = request.getParameter("id_istanza");
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("instantiating helper class");
			ScrivaServiceHelper helper = new ScrivaServiceHelper(endPoint, serviceUrl, configurazione);
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info("calling getAllegatiIstanza");
			List<AllegatoIstanzaDTO> result = helper.getAllegatiIstanza(idIstanza, null);

			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error(it.csi.sira.frontend.scriva.utils.LogFormatter.format(className, methodName, "Error"), e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	private IrideIdentity getIrideIdentity(String user) {
		final String methodName = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Logger.getLogger(ScrivaServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

		final IrideIdentity irideIdentity = IrideIdentity.parseIrideIdentity(user);
		Logger.getLogger(ScrivaServiceConstants.LOGGER)
				.info(LogFormatter.format(className, methodName, "irideIdentity: " + irideIdentity));
		if (irideIdentity != null)
			Logger.getLogger(ScrivaServiceConstants.LOGGER).info(
					LogFormatter.format(className, methodName, "getCodFiscale: " + irideIdentity.getCodFiscale()));
		return irideIdentity;
	}

}

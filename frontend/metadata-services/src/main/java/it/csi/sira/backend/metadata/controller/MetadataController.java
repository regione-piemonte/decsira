package it.csi.sira.backend.metadata.controller;

import java.io.IOException;


import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.csi.sira.backend.metadata.business.MetadataManager;
import it.csi.sira.backend.metadata.dto.RequestParam;
import it.csi.sira.backend.metadata.dto.RequestCswParam;
import it.csi.sira.backend.metadata.exception.MetadataManagerException;
import it.csi.sira.backend.metadata.integration.servizi.csw.exception.CswAdapterException;
import it.csi.sira.backend.metadata.integration.servizi.csw.exception.CswServiceException;
import it.csi.sira.backend.metadata.utils.Constants;
import it.csi.sira.backend.metadata.utils.LogFormatter;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/metadata")
public class MetadataController {
  private static String className = MetadataController.class.getSimpleName();

  private Properties logger = null;
  private MetadataManager metadataManager = null;
  
  @RequestMapping(value = "/getPlatformNumbers", method = RequestMethod.GET)
  public @ResponseBody String getPlatformNumbers(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getPlatformNumbers();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  json = "{\"error\": " + e.getMessage() + "\"\"}";
	  e.printStackTrace();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }    

  @RequestMapping(value = "/getMosaico", method = RequestMethod.GET)
  public @ResponseBody String getMosaico(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getMosaico();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  json = "{\"error\": " + e.getMessage() + "\"\"}";
	  e.printStackTrace();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getMetadataObject", method = RequestMethod.POST)
  public @ResponseBody String getMetadataObject(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;
	int idAppCategory = Constants.ID_ROOT_APP_CATEGORY;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	String text = params.getText();
	String category = params.getCategory();

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "category: " + category));
	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "text: " + text));

	try {
	  if (category != null && category.length() > 0) {
		idAppCategory = Integer.parseInt(category);
	  }

	  json = metadataManager.getMetadata(idAppCategory, text, Constants.METADATA_OBJECTS);

	} catch (NumberFormatException | MetadataManagerException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  json = "{\"error\": " + e.getMessage() + "\"\"}";
	  e.printStackTrace();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getMetadataView", method = RequestMethod.POST)
  public @ResponseBody String getMetadataView(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;
	int idAppCategory = Constants.ID_ROOT_APP_CATEGORY;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	String text = params.getText();
	String category = params.getCategory();

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "category: " + category));
	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "text: " + text));

	try {
	  if (category != null && category.length() > 0) {
		idAppCategory = Integer.parseInt(category);
	  }

	  json = metadataManager.getMetadata(idAppCategory, text, Constants.METADATA_VIEWS);

	} catch (NumberFormatException | MetadataManagerException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  json = "{\"error\": " + e.getMessage() + "\"\"}";
	  e.printStackTrace();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getInfoBox", method = RequestMethod.POST)
  public @ResponseBody String getInfoBox(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;
	Integer idMetadato = null;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	String metadato = params.getMetadato();

	if (metadato != null && metadato.length() > 0) {

	  try {
		idMetadato = Integer.parseInt(metadato);
		json = metadataManager.getInfoBox(idMetadato);

	  } catch (NumberFormatException | MetadataManagerException e) {
		Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
		json = "{\"error\": " + e.getMessage() + "\"\"}";
		e.printStackTrace();
	  }
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/searchCswMetadata", method = RequestMethod.POST)
  public @ResponseBody String searchCswMetadata(@ModelAttribute RequestCswParam text) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	String json = null;

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	String txt = text.getText();
	String service = text.getService();
	int startPosition = text.getStartPosition();
	int maxRecords = text.getMaxRecords();

	try {
	  json = metadataManager.searchCswMetadata(txt, service, startPosition, maxRecords);
	} catch (CswServiceException | CswAdapterException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  json = "{\"error\": " + e.getMessage() + "\"\"}";
	  e.printStackTrace();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/index", method = RequestMethod.GET)
  public ModelAndView createIndexView(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	Format formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String date = formatter.format(new Date());
	request.setAttribute("date", date);

	ModelAndView modelAndView = new ModelAndView("metadata/index");

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return modelAndView;
  }

  public MetadataManager getMetadataManager() {
	return metadataManager;
  }

  public void setMetadataManager(MetadataManager metadataManager) {
	this.metadataManager = metadataManager;
  }

  public Properties getLogger() {
	return logger;
  }

  public void setLogger(Properties logger) {
	this.logger = logger;
  }
}

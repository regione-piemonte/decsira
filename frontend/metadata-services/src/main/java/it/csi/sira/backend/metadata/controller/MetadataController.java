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
import it.csi.sira.backend.metadata.dto.JsonAppCategory;
import it.csi.sira.backend.metadata.dto.JsonInfoBox;

import it.csi.sira.backend.metadata.dto.JsonMetaObject;
import it.csi.sira.backend.metadata.dto.JsonNews;
import it.csi.sira.backend.metadata.dto.JsonNote;
import it.csi.sira.backend.metadata.dto.JsonPlatformNumbers;
import it.csi.sira.backend.metadata.dto.JsonKeywordCounter;
import it.csi.sira.backend.metadata.dto.RequestParam;
import it.csi.sira.backend.metadata.exception.MetadataManagerException;
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

  private MetadataManager metadataManager = null;

  @RequestMapping(value = "/getMosaico", method = RequestMethod.GET)
  public @ResponseBody JsonAppCategory[] getMosaico() {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonAppCategory[] json = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getMosaico();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getNews", method = RequestMethod.GET)
  public @ResponseBody JsonNews[] getNews() {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonNews[] json = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getNews();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getNote", method = RequestMethod.GET)
  public @ResponseBody JsonNote[] getNote() {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonNote[] json = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getNote();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getKeywordCounters", method = RequestMethod.GET)
  public @ResponseBody JsonKeywordCounter[] getKeywordCounters() {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonKeywordCounter[] json = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getKeywordCounters();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getPlatformNumbers", method = RequestMethod.GET)
  public @ResponseBody JsonPlatformNumbers getPlatformNumbers() {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonPlatformNumbers json = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	try {
	  json = metadataManager.getPlatformNumbers();
	} catch (MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getMetadataObject", method = RequestMethod.POST)
  public @ResponseBody JsonMetaObject[] getMetadataObject(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonMetaObject[] json = null;
	int idAppCategory = Constants.ID_ROOT_APP_CATEGORY;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	String text = params.getText();
	String category = params.getCategory();

	Logger.getLogger(Constants.LOGGER).debug(LogFormatter.format(className, methodName, "category: " + category));
	Logger.getLogger(Constants.LOGGER).debug(LogFormatter.format(className, methodName, "text: " + text));

	try {
	  if (category != null && category.length() > 0) {
		idAppCategory = Integer.parseInt(category);
	  }

	  json = metadataManager.getMetadata(idAppCategory, text, Constants.METADATA_OBJECTS);

	} catch (NumberFormatException | MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getMetadataView", method = RequestMethod.POST)
  public @ResponseBody JsonMetaObject[] getMetadataView(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonMetaObject[] json = null;
	int idAppCategory = Constants.ID_ROOT_APP_CATEGORY;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	String text = params.getText();
	String category = params.getCategory();

	Logger.getLogger(Constants.LOGGER).debug(LogFormatter.format(className, methodName, "category: " + category));
	Logger.getLogger(Constants.LOGGER).debug(LogFormatter.format(className, methodName, "text: " + text));

	try {
	  if (category != null && category.length() > 0) {
		idAppCategory = Integer.parseInt(category);
	  }

	  json = metadataManager.getMetadata(idAppCategory, text, Constants.METADATA_VIEWS);

	} catch (NumberFormatException | MetadataManagerException e) {
	  Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/getInfoBox", method = RequestMethod.POST)
  public @ResponseBody JsonInfoBox getInfoBox(@ModelAttribute RequestParam params) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	JsonInfoBox json = null;
	Integer idMetadato = null;

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	String metadato = params.getMetadato();

	if (metadato != null && metadato.length() > 0) {

	  try {
		idMetadato = Integer.parseInt(metadato);
		json = metadataManager.getInfoBox(idMetadato);

	  } catch (NumberFormatException | MetadataManagerException e) {
		Logger.getLogger(Constants.LOGGER).error(LogFormatter.format(className, methodName, e.getMessage()));
		e.printStackTrace();
	  }
	}

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return json;
  }

  @RequestMapping(value = "/index", method = RequestMethod.GET)
  public ModelAndView createIndexView(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "BEGIN"));

	Format formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String date = formatter.format(new Date());
	request.setAttribute("date", date);

	ModelAndView modelAndView = new ModelAndView("metadata/index");

	Logger.getLogger(Constants.LOGGER).info(LogFormatter.format(className, methodName, "END"));

	return modelAndView;
  }

  public MetadataManager getMetadataManager() {
	return metadataManager;
  }

  public void setMetadataManager(MetadataManager metadataManager) {
	this.metadataManager = metadataManager;
  }


}

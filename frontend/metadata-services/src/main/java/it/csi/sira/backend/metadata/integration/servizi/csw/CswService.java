package it.csi.sira.backend.metadata.integration.servizi.csw;

import it.csi.sira.backend.metadata.integration.servizi.csw.exception.CswServiceException;



import it.csi.sira.backend.metadata.utils.LogFormatter;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.Properties;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.StringRequestEntity;
import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;

public class CswService {
  private static String className = CswService.class.getSimpleName();

  private Properties logger = null;

  private HttpClient client = null;
  private String urlService = null;

  public CswService() {
	client = new HttpClient();
  }

  public String getRecords(String text, int startPosition, int maxRecords) throws CswServiceException {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	String xml = null;

	PostMethod method = new PostMethod(urlService);

	StringBuilder sb = new StringBuilder();

	sb.append("<?xml version=\"1.0\" ?>");
	sb.append("<csw:GetRecords startPosition="
		+ "\""
		+ startPosition
		+ "\""
		+ " maxRecords="
		+ "\""
		+ maxRecords
		+ "\""
		+ " outputFormat=\"application/xml\" outputSchema=\"http://www.opengis.net/cat/csw/2.0.2\" resultType=\"results\" service=\"CSW\" version=\"2.0.2\" xmlns:csw=\"http://www.opengis.net/cat/csw/2.0.2\" xmlns:ogc=\"http://www.opengis.net/ogc\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd\">");
	sb.append("<csw:Query typeNames=\"csw:Record\">");
	sb.append("<csw:ElementSetName>full</csw:ElementSetName>");
	sb.append("<csw:Constraint version=\"1.1.0\">");
	sb.append("<ogc:Filter>");
	sb.append("<ogc:PropertyIsLike escapeChar=\"\\\" singleChar=\"_\" wildCard=\"%\">");
	sb.append("<ogc:PropertyName>csw:AnyText</ogc:PropertyName>");
	sb.append("<ogc:Literal>");
	sb.append(text);
	sb.append("</ogc:Literal>");
	sb.append("</ogc:PropertyIsLike>");
	sb.append("</ogc:Filter>");
	sb.append("</csw:Constraint>");
	sb.append("</csw:Query>");
	sb.append("</csw:GetRecords>");

	try {
	  method.setRequestEntity(new StringRequestEntity(sb.toString(), "text/xml", "UTF-8"));
	} catch (UnsupportedEncodingException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));
	  e.printStackTrace();
	  throw new CswServiceException(e);
	}

	try {

	  int statusCode = client.executeMethod(method);

	  if (statusCode != HttpStatus.SC_OK) {
		throw new CswServiceException("Method failed: " + method.getStatusLine());
	  }

	  InputStream is = method.getResponseBodyAsStream();
	  byte[] bytes = IOUtils.toByteArray(is);
	  xml = new String(bytes, "UTF-8");

	} catch (HttpException e) {
	  e.printStackTrace();
	  throw new CswServiceException(e);

	} catch (IOException e) {
	  e.printStackTrace();
	  throw new CswServiceException(e);

	} finally {
	  method.releaseConnection();
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	return xml;
  }

  public String getCapabilities() throws CswServiceException {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();
	
	String xml = null;

	GetMethod method = new GetMethod(urlService);

	NameValuePair[] params = new NameValuePair[] { new NameValuePair("version", "2.0.2"), new NameValuePair("request", "GetCapabilities"),
		new NameValuePair("service", "CSW") };

	method.setQueryString(params);

	try {

	  int statusCode = client.executeMethod(method);

	  if (statusCode != HttpStatus.SC_OK) {
		throw new CswServiceException("Method failed: " + method.getStatusLine());
	  }

	  InputStream is = method.getResponseBodyAsStream();
	  byte[] bytes = IOUtils.toByteArray(is);
	  xml = new String(bytes, "UTF-8");

	} catch (HttpException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));	  
	  e.printStackTrace();
	  throw new CswServiceException(e);

	} catch (IOException e) {
	  Logger.getLogger(logger.getProperty("LOGGER_NAME")).error(LogFormatter.format(className, methodName, e.getMessage()));	  
	  e.printStackTrace();
	  throw new CswServiceException(e);

	} finally {
	  method.releaseConnection();
	}

	return xml;
  }

  public String getUrlService() {
	return urlService;
  }

  public void setUrlService(String urlService) {
	this.urlService = urlService;
  }

  public Properties getLogger() {
    return logger;
  }

  public void setLogger(Properties logger) {
    this.logger = logger;
  }

}

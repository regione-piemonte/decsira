package it.csi.sira.backend.metadata.integration.servizi.csw;

import it.csi.sira.backend.metadata.integration.dto.SipraMtdDFontedati;


import it.csi.sira.backend.metadata.integration.dto.SipraMtdDTipoFunzione;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswBoundingBox;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswRecord;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswSubject;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswURI;
import it.csi.sira.backend.metadata.integration.servizi.csw.exception.CswAdapterException;
import it.csi.sira.backend.metadata.utils.IntegratioManager;
import it.csi.sira.backend.metadata.utils.LogFormatter;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.log4j.Logger;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class CswAdapter {
  private static String className = CswAdapter.class.getSimpleName();

  private IntegratioManager integratioManager;
  private Properties logger = null;

  public List<CswRecord> getCswRecords(String xml, SipraMtdDFontedati fonteDati) throws CswAdapterException {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "BEGIN"));

	List<SipraMtdDTipoFunzione> elencoTipoFunzioni = integratioManager.getDaoManager().getSipraMtdDTipoFunzioneDAO().findAll();

	InputStream xmlStream = new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8));

	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	DocumentBuilder builder;
	Document doc = null;

	try {
	  builder = factory.newDocumentBuilder();
	  doc = builder.parse(xmlStream);
	} catch (ParserConfigurationException e) {
	  throw new CswAdapterException(e);
	} catch (SAXException e) {
	  throw new CswAdapterException(e);
	} catch (IOException e) {
	  throw new CswAdapterException(e);
	}

	NodeList nl = null;

	XPathFactory xPathfactory = XPathFactory.newInstance();
	XPath xpath = xPathfactory.newXPath();
	XPathExpression expr;
	try {
	  expr = xpath.compile("/GetRecordsResponse/SearchResults/Record");
	  nl = (NodeList) expr.evaluate(doc, XPathConstants.NODESET);
	} catch (XPathExpressionException e) {
	  throw new CswAdapterException(e);
	}

	List<CswRecord> cswRecords = new ArrayList<CswRecord>();

	for (int i = 0; i < nl.getLength(); i++) {

	  CswRecord recordCSW = new CswRecord();

	  Node node = nl.item(i);
	  NodeList children = node.getChildNodes();

	  List<CswSubject> subjects = new ArrayList<CswSubject>();
	  List<CswURI> uri = new ArrayList<CswURI>();
	  List<CswBoundingBox> boundingBox = new ArrayList<CswBoundingBox>();
	  List<String> types = new ArrayList<String>();

	  int numValidIdentifier = 0;

	  for (int j = 0; j < children.getLength(); j++) {

		Node child = children.item(j);

		if (child.getNodeName().equals("dc:identifier") && child.getFirstChild() != null) {

		  String identifier = child.getFirstChild().getNodeValue();

		  if (identifier.startsWith(fonteDati.getPrefissoFontedati())) {
			recordCSW.setIdentifier(identifier);
			recordCSW.setProvider(fonteDati.getPrefissoFontedati());
			numValidIdentifier++;
		  }

		  if (fonteDati.getUrlPrefissoMetadato() != null) {
			recordCSW.setUrlMetadato(fonteDati.getUrlPrefissoMetadato() + identifier);
		  }
		} else if (child.getNodeName().equals("dc:title") && child.getFirstChild() != null) {
		  recordCSW.setTitle(child.getFirstChild().getNodeValue());
		} else if (child.getNodeName().equals("dc:type") && child.getFirstChild() != null) {
		  types.add(child.getFirstChild().getNodeValue());
		  // recordCSW.setType(child.getFirstChild().getNodeValue());
		} else if (child.getNodeName().equals("dc:subject") && child.getFirstChild() != null) {
		  CswSubject s = new CswSubject();
		  s.setTesto(child.getFirstChild().getNodeValue());
		  subjects.add(s);
		} else if (child.getNodeName().equals("dc:format") && child.getFirstChild() != null) {
		  recordCSW.setFormat(child.getFirstChild().getNodeValue());
		} else if (child.getNodeName().equals("dct:abstract") && child.getFirstChild() != null) {
		  recordCSW.setTextAbstract(child.getFirstChild().getNodeValue());
		} else if (child.getNodeName().equals("dc:URI") && child.getFirstChild() != null) {

		  if (child.getAttributes() != null) {

			Node protocol = child.getAttributes().getNamedItem("protocol");

			if (protocol != null && protocol.getNodeValue() != null) {
			  for (int f = 0; f < elencoTipoFunzioni.size(); f++) {

				if (elencoTipoFunzioni.get(f).getProtocollo() != null && !elencoTipoFunzioni.get(f).getProtocollo().equals("")) {
				  if (protocol.getNodeValue().startsWith(elencoTipoFunzioni.get(f).getProtocollo())) {
					CswURI cswURI = new CswURI();
					cswURI.setTipo(elencoTipoFunzioni.get(f).getIdTipoFunzione());
					cswURI.setProtocol(elencoTipoFunzioni.get(f).getProtocollo());
					cswURI.setUrl(child.getFirstChild().getNodeValue());
					uri.add(cswURI);
				  }
				}
			  }
			}
		  }
		} else if (child.getNodeName().equals("dct:references") && child.getFirstChild() != null) {

		  if (child.getAttributes() != null) {

			Node scheme = child.getAttributes().getNamedItem("scheme");

			if (scheme != null && scheme.getNodeValue() != null) {
			  for (int f = 0; f < elencoTipoFunzioni.size(); f++) {

				if (elencoTipoFunzioni.get(f).getProtocollo() != null && !elencoTipoFunzioni.get(f).getProtocollo().equals("")) {
				  if (scheme.getNodeValue().startsWith(elencoTipoFunzioni.get(f).getProtocollo())) {
					CswURI cswURI = new CswURI();
					cswURI.setTipo(elencoTipoFunzioni.get(f).getIdTipoFunzione());
					cswURI.setProtocol(elencoTipoFunzioni.get(f).getProtocollo());
					cswURI.setUrl(child.getFirstChild().getNodeValue());
					uri.add(cswURI);
				  }
				}
			  }
			}
		  }
		}

		else if (child.getNodeName().equals("ows:BoundingBox")) {

		  CswBoundingBox bb = new CswBoundingBox();

		  if (child.getAttributes() != null) {
			Node crs = child.getAttributes().getNamedItem("crs");

			if (crs != null) {
			  bb.setCrs(crs.getNodeValue());
			}
		  }

		  NodeList boundingBoxChildren = child.getChildNodes();

		  for (int u = 0; u < boundingBoxChildren.getLength(); u++) {

			Node childBoxChildren = boundingBoxChildren.item(u);

			if (childBoxChildren.getNodeName().equals("ows:LowerCorner") && childBoxChildren.getFirstChild() != null) {
			  bb.setLowerCorner(childBoxChildren.getFirstChild().getNodeValue());
			} else if (childBoxChildren.getNodeName().equals("ows:UpperCorner") && childBoxChildren.getFirstChild() != null) {
			  bb.setUpperCorner(childBoxChildren.getFirstChild().getNodeValue());
			}
		  }

		  boundingBox.add(bb);
		}

		if (subjects.size() > 0) {
		  recordCSW.setSubjects(subjects.toArray(new CswSubject[subjects.size()]));
		}

		if (uri.size() > 0) {
		  recordCSW.setUri(uri.toArray(new CswURI[uri.size()]));
		}

		if (boundingBox.size() > 0) {
		  recordCSW.setBoundingBox(boundingBox.toArray(new CswBoundingBox[boundingBox.size()]));
		}

		if (types.size() > 0) {
		  recordCSW.setTypes(types.toArray(new String[types.size()]));
		}
	  }

	  if (numValidIdentifier > 0) {
		cswRecords.add(recordCSW);
	  }
	}

	Logger.getLogger(logger.getProperty("LOGGER_NAME")).debug(LogFormatter.format(className, methodName, "END"));

	return cswRecords;
  }

  public IntegratioManager getIntegratioManager() {
	return integratioManager;
  }

  public void setIntegratioManager(IntegratioManager integratioManager) {
	this.integratioManager = integratioManager;
  }

  public Properties getLogger() {
	return logger;
  }

  public void setLogger(Properties logger) {
	this.logger = logger;
  }

}

package it.csi.sira.backend.metadata.integration.servizi.csw.dto;

public class CswRecord {

  private String identifier;
  private String provider;
  private String urlMetadato;
  private String title;
  private CswSubject[] subjects;
  private String[] types;
  private String format;
  private String textAbstract;
  private CswURI[] uri;
  private CswBoundingBox[] boundingBox;
  private int idMetadato;

  public String getIdentifier() {
	return identifier;
  }

  public void setIdentifier(String identifier) {
	this.identifier = identifier;
  }

  public String getTitle() {
	return title;
  }

  public void setTitle(String title) {
	this.title = title;
  }

  public String getFormat() {
	return format;
  }

  public void setFormat(String format) {
	this.format = format;
  }

  public String getProvider() {
	return provider;
  }

  public void setProvider(String provider) {
	this.provider = provider;
  }

  public String getUrlMetadato() {
	return urlMetadato;
  }

  public void setUrlMetadato(String urlMetadato) {
	this.urlMetadato = urlMetadato;
  }

  public String getTextAbstract() {
	return textAbstract;
  }

  public void setTextAbstract(String textAbstract) {
	this.textAbstract = textAbstract;
  }

  public CswSubject[] getSubjects() {
	return subjects;
  }

  public void setSubjects(CswSubject[] subjects) {
	this.subjects = subjects;
  }

  public int getIdMetadato() {
	return idMetadato;
  }

  public void setIdMetadato(int idMetadato) {
	this.idMetadato = idMetadato;
  }

  public CswURI[] getUri() {
	return uri;
  }

  public void setUri(CswURI[] uri) {
	this.uri = uri;
  }

  public CswBoundingBox[] getBoundingBox() {
	return boundingBox;
  }

  public void setBoundingBox(CswBoundingBox[] boundingBox) {
	this.boundingBox = boundingBox;
  }

  public String[] getTypes() {
    return types;
  }

  public void setTypes(String[] types) {
    this.types = types;
  }
}

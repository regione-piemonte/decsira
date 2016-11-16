package it.csi.sira.backend.metadata.integration.servizi.csw.dto;

public class CswURI {
  private int tipo;
  private String protocol;
  private String url;

  public String getProtocol() {
	return protocol;
  }

  public void setProtocol(String protocol) {
	this.protocol = protocol;
  }

  public String getUrl() {
	return url;
  }

  public void setUrl(String url) {
	this.url = url;
  }

  public int getTipo() {
    return tipo;
  }

  public void setTipo(int tipo) {
    this.tipo = tipo;
  }
}

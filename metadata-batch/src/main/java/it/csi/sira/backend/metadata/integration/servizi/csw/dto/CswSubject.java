package it.csi.sira.backend.metadata.integration.servizi.csw.dto;

public class CswSubject {

  private Integer idCategoria;
  private String testo;

  public String getTesto() {
	return testo;
  }

  public void setTesto(String testo) {
	this.testo = testo;
  }

  public Integer getIdCategoria() {
	return idCategoria;
  }

  public void setIdCategoria(Integer idCategoria) {
	this.idCategoria = idCategoria;
  }

}

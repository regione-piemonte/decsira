package it.csi.sira.backend.metadata.integration.custom.dto;

import java.util.Date;

public class InfoBoxDTO {

  private String titolo;
  private String testoAbstract;
  private String desFontedati;
  private Integer nrOggettiDatasetCalc;
  private String urlMetadatoCalc;  
  private Date dataUltAgg;

  public String getTitolo() {
	return titolo;
  }

  public void setTitolo(String titolo) {
	this.titolo = titolo;
  }

  public String getTestoAbstract() {
	return testoAbstract;
  }

  public void setTestoAbstract(String testoAbstract) {
	this.testoAbstract = testoAbstract;
  }

  public String getDesFontedati() {
	return desFontedati;
  }

  public void setDesFontedati(String desFontedati) {
	this.desFontedati = desFontedati;
  }

  public Integer getNrOggettiDatasetCalc() {
	return nrOggettiDatasetCalc;
  }

  public void setNrOggettiDatasetCalc(Integer nrOggettiDatasetCalc) {
	this.nrOggettiDatasetCalc = nrOggettiDatasetCalc;
  }

  public Date getDataUltAgg() {
	return dataUltAgg;
  }

  public void setDataUltAgg(Date dataUltAgg) {
	this.dataUltAgg = dataUltAgg;
  }

  public String getUrlMetadatoCalc() {
    return urlMetadatoCalc;
  }

  public void setUrlMetadatoCalc(String urlMetadatoCalc) {
    this.urlMetadatoCalc = urlMetadatoCalc;
  }
}

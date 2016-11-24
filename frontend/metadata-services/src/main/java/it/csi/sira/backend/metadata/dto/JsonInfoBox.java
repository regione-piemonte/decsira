package it.csi.sira.backend.metadata.dto;

import java.util.Date;
import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonInfoBox {
  private String title;
  private String text;
  private String dataProvider;
  private Date dataLastUpdate;
  private int numDatasetObjectCalc;
  private String urlMetadatoCalc;
  private String[] urlWMS;
  private String[] urlWFS;

  public String getTitle() {
	return title;
  }

  public void setTitle(String title) {
	this.title = title;
  }

  public String getText() {
	return text;
  }

  public void setText(String text) {
	this.text = text;
  }

  public String getDataProvider() {
	return dataProvider;
  }

  public void setDataProvider(String dataProvider) {
	this.dataProvider = dataProvider;
  }



  public int getNumDatasetObjectCalc() {
	return numDatasetObjectCalc;
  }

  public void setNumDatasetObjectCalc(int numDatasetObjectCalc) {
	this.numDatasetObjectCalc = numDatasetObjectCalc;
  }

  public String[] getUrlWMS() {
	return urlWMS;
  }

  public void setUrlWMS(String[] urlWMS) {
	this.urlWMS = urlWMS;
  }

  public String[] getUrlWFS() {
	return urlWFS;
  }

  public void setUrlWFS(String[] urlWFS) {
	this.urlWFS = urlWFS;
  }

  public Date getDataLastUpdate() {
    return dataLastUpdate;
  }

  public void setDataLastUpdate(Date dataLastUpdate) {
    this.dataLastUpdate = dataLastUpdate;
  }

  public String getUrlMetadatoCalc() {
    return urlMetadatoCalc;
  }

  public void setUrlMetadatoCalc(String urlMetadatoCalc) {
    this.urlMetadatoCalc = urlMetadatoCalc;
  }

}

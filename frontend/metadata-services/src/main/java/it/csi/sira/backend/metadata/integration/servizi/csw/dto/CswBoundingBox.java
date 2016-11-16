package it.csi.sira.backend.metadata.integration.servizi.csw.dto;

public class CswBoundingBox {
  private String crs;
  private String lowerCorner;
  private String upperCorner;

  public String getUpperCorner() {
	return upperCorner;
  }

  public void setUpperCorner(String upperCorner) {
	this.upperCorner = upperCorner;
  }

  public String getCrs() {
	return crs;
  }

  public void setCrs(String crs) {
	this.crs = crs;
  }

  public String getLowerCorner() {
	return lowerCorner;
  }

  public void setLowerCorner(String lowerCorner) {
	this.lowerCorner = lowerCorner;
  }
}

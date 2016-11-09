package it.csi.sira.backend.metadata.dto;

public class RequestParam {
  private String text = null;
  private String category = null;
  private String metadato = null;  

  public String getText() {
	return text;
  }

  public void setText(String text) {
	this.text = text;
  }

  public String getCategory() {
	return category;
  }

  public void setCategory(String category) {
	this.category = category;
  }

  public String getMetadato() {
    return metadato;
  }

  public void setMetadato(String metadato) {
    this.metadato = metadato;
  }
}

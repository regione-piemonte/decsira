package it.csi.sira.backend.metadata.dto;

public class TextSearch {
  private String text = null;
  private String service = null;  
  private int startPosition = 0;
  private int maxRecords = 0;

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public String getService() {
    return service;
  }

  public void setService(String service) {
    this.service = service;
  }

  public int getStartPosition() {
    return startPosition;
  }

  public void setStartPosition(int startPosition) {
    this.startPosition = startPosition;
  }

  public int getMaxRecords() {
    return maxRecords;
  }

  public void setMaxRecords(int maxRecords) {
    this.maxRecords = maxRecords;
  }
}

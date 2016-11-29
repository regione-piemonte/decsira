package it.csi.sira.backend.metadata.dto;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonKeywordCounter {

  private String keyword;
  private Integer metadataCounter;

  public String getKeyword() {
	return keyword;
  }

  public void setKeyword(String keyword) {
	this.keyword = keyword;
  }

  public Integer getMetadataCounter() {
	return metadataCounter;
  }

  public void setMetadataCounter(Integer metadataCounter) {
	this.metadataCounter = metadataCounter;
  }

}

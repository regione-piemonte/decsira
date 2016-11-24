package it.csi.sira.backend.metadata.dto;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonMetaObject {


  private Integer id;

  private String title;
  private String text;
  private String type;
  private String url;

  private Integer objectCounter = 0;
  private Integer tematicViewCounter = 0;

  private JsonMetaObject[] categories;
  private JsonMetaObject[] metadata;
  private JsonMetaObject[] functions;

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

  public String getUrl() {
	return url;
  }

  public void setUrl(String url) {
	this.url = url;
  }

  public JsonMetaObject[] getFunctions() {
	return functions;
  }

  public void setFunctions(JsonMetaObject[] functions) {
	this.functions = functions;
  }

  public JsonMetaObject[] getMetadata() {
	return metadata;
  }

  public void setMetadata(JsonMetaObject[] metadata) {
	this.metadata = metadata;
  }

  public JsonMetaObject[] getCategories() {
	return categories;
  }

  public void setCategories(JsonMetaObject[] categories) {
	this.categories = categories;
  }

  public String getType() {
	return type;
  }

  public void setType(String type) {
	this.type = type;
  }

  public Integer getId() {
	return id;
  }

  public void setId(Integer id) {
	this.id = id;
  }

  public Integer getObjectCounter() {
	return objectCounter;
  }

  public void setObjectCounter(Integer objectCounter) {
	this.objectCounter = objectCounter;
  }

  public Integer getTematicViewCounter() {
	return tematicViewCounter;
  }

  public void setTematicViewCounter(Integer tematicViewCounter) {
	this.tematicViewCounter = tematicViewCounter;
  }

}

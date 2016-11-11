package it.csi.sira.backend.metadata.dto;

public class MetaObject {

  private Integer id;

  private String title;
  private String text;
  private String type;
  private String url;

  private Integer objectCounter = 0;
  private Integer tematicViewCounter = 0;  

  private MetaObject[] categories;
  private MetaObject[] metadata;
  private MetaObject[] functions;

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

  public MetaObject[] getFunctions() {
	return functions;
  }

  public void setFunctions(MetaObject[] functions) {
	this.functions = functions;
  }

  public MetaObject[] getMetadata() {
	return metadata;
  }

  public void setMetadata(MetaObject[] metadata) {
	this.metadata = metadata;
  }

  public MetaObject[] getCategories() {
	return categories;
  }

  public void setCategories(MetaObject[] categories) {
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

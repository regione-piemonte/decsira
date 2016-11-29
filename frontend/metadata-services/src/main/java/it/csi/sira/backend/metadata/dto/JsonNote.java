package it.csi.sira.backend.metadata.dto;

import java.util.Date;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonNote {

  private Integer id;
  private String type;
  private String title;
  private String text;
  private Date date;

  public Integer getId() {
	return id;
  }

  public void setId(Integer id) {
	this.id = id;
  }

  public String getType() {
	return type;
  }

  public void setType(String type) {
	this.type = type;
  }

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

  public Date getDate() {
	return date;
  }

  public void setDate(Date date) {
	this.date = date;
  }

}

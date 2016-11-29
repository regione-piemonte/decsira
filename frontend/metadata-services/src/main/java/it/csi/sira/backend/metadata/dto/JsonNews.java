package it.csi.sira.backend.metadata.dto;

import java.util.Date;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonNews {

  private Integer id;
  private String title;
  private String news;
  private Integer priority;
  private Date date;

  public Integer getId() {
	return id;
  }

  public void setId(Integer id) {
	this.id = id;
  }

  public String getTitle() {
	return title;
  }

  public void setTitle(String title) {
	this.title = title;
  }

  public String getNews() {
	return news;
  }

  public void setNews(String news) {
	this.news = news;
  }

  public Integer getPriority() {
	return priority;
  }

  public void setPriority(Integer priority) {
	this.priority = priority;
  }

  public Date getDate() {
	return date;
  }

  public void setDate(Date date) {
	this.date = date;
  }
}

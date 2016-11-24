package it.csi.sira.backend.metadata.dto;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonAppCategory {

  private Integer id;
  private String name;
  private String icon;
  private int objectNumber;
  private int tematicViewNumber;

  public Integer getId() {
	return id;
  }

  public void setId(Integer id) {
	this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getIcon() {
    return icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public int getObjectNumber() {
    return objectNumber;
  }

  public void setObjectNumber(int objectNumber) {
    this.objectNumber = objectNumber;
  }

  public int getTematicViewNumber() {
    return tematicViewNumber;
  }

  public void setTematicViewNumber(int tematicViewNumber) {
    this.tematicViewNumber = tematicViewNumber;
  }
}

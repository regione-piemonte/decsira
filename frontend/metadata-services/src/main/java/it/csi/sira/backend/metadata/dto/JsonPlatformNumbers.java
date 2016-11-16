package it.csi.sira.backend.metadata.dto;

public class JsonPlatformNumbers {

  private Long siradecObject; 
  private Long functionObjectMap; 
  private Long functionObjectSearch; 
  private Long functionObjectView; 
  
  public Long getSiradecObject() {
	return siradecObject;
  }

  public void setSiradecObject(Long siradecObject) {
	this.siradecObject = siradecObject;
  }

  public Long getFunctionObjectMap() {
	return functionObjectMap;
  }

  public void setFunctionObjectMap(Long functionObjectMap) {
	this.functionObjectMap = functionObjectMap;
  }

  public Long getFunctionObjectSearch() {
	return functionObjectSearch;
  }

  public void setFunctionObjectSearch(Long functionObjectSearch) {
	this.functionObjectSearch = functionObjectSearch;
  }

  public Long getFunctionObjectView() {
	return functionObjectView;
  }

  public void setFunctionObjectView(Long functionObjectView) {
	this.functionObjectView = functionObjectView;
  }

}

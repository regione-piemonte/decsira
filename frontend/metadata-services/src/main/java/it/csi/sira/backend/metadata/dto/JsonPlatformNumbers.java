package it.csi.sira.backend.metadata.dto;

import org.codehaus.jackson.annotate.JsonWriteNullProperties;

@JsonWriteNullProperties(false)
public class JsonPlatformNumbers {

  private Long siradecObject; // 1) Numero dei record gestiti e pubblicati in
							  // SIRADEC: quindi somma dei dati
							  // "nr_oggetti_dataset_calc" della tavola
							  // "sipra_mtd_t_mtd_plus"
  private Long functionObjectMap; // 2) Numero dei WMS resi fruibili: cioè
								  // numero di
  // dati che hanno come tipo funzione = Mappa
  private Long functionObjectSearch; // 3) Numero di Ricerche di dettaglio: cioè
									 // numero
  // di dati che hanno come tipo funzione = Cerca
  private Long functionObjectView; // 4) Numero delle Viste Tematice rese
								   // disponibili cioè numero di dati che hanno
								   // come tipo funzione = Vista tematica

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

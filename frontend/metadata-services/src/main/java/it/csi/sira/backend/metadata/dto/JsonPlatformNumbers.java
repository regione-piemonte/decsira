package it.csi.sira.backend.metadata.dto;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class JsonPlatformNumbers {

	// 1) Numero dei record gestiti e pubblicati in SIRADEC: quindi somma dei
	// dati nr_oggetti_dataset_calc della tavola sipra_mtd_t_mtd_plus
	private Long siradecObject;

	// 2) Numero dei WMS resi fruibili: ossia numero di dati che hanno come tipo
	// funzione = Mappa
	private Long functionObjectMap;

	// 3) Numero di Ricerche di dettaglio: ossia numero di dati che hanno come
	// tipo funzione = Cerca
	private Long functionObjectSearch;

	// 4) Numero delle Viste Tematice rese disponibili cio� numero di dati che
	// hanno come tipo funzione = Vista tematica
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

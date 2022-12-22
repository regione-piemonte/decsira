package it.csi.sira.frontend.scriva.business.dto;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties
public class AllegatoIstanzaDTO {

	@JsonProperty("id_allegato_istanza")
	public int idAllegatoIstanza;

	@JsonProperty("id_istanza")
	public int idIstanza;

	@JsonProperty("uuid_index")
	public String uuidIndex;

	@JsonProperty("flg_riservato")
	public boolean flgRiservato;

	@JsonProperty("cod_allegato")
	public String codAllegato;

	@JsonProperty("nome_allegato")
	public String nomeAllegato;

	@JsonProperty("dimensione_upload")
	public int dimensioneUpload;

	@JsonProperty("data_upload")
	public String dataUpload;

	@JsonProperty("flg_cancellato")
	public boolean flgCancellato;

	@JsonProperty("ind_firma")
	public int indFirma;

	@JsonProperty("id_istanza_attore")
	public int idIstanzaAttore;

	@JsonProperty("id_funzionario")
	public int idFunzionario;

	@JsonProperty("flg_da_pubblicare")
	public boolean flgDaPubblicare;

	@JsonProperty("data_pubblicazione")
	public String dataPubblicazione;

	@JsonProperty("id_istanza_osservazione")
	public int idIstanzaOsservazione;

	@JsonProperty("tipologia_allegato")
	public TipologiaAllegatoDTO tipologiaAllegato;

	@JsonProperty("classe_allegato")
	public ClasseAllegatoDTO classeAllegato;

	@JsonProperty("url_doc")
	public String urlDoc;

	@JsonProperty("note")
	public String note;

	@JsonProperty("data_atto")
	public String dataAtto;

	@JsonProperty("num_atto")
	public String numAtto;

	@JsonProperty("autore_allegato")
	public String autoreAllegato;

	@JsonProperty("titolo_allegato")
	public String titoloAllegato;

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public int getIdAllegatoIstanza() {
		return idAllegatoIstanza;
	}

	public void setIdAllegatoIstanza(int idAllegatoIstanza) {
		this.idAllegatoIstanza = idAllegatoIstanza;
	}

	public int getIdIstanza() {
		return idIstanza;
	}

	public void setIdIstanza(int idIstanza) {
		this.idIstanza = idIstanza;
	}

	public String getUuidIndex() {
		return uuidIndex;
	}

	public void setUuidIndex(String uuidIndex) {
		this.uuidIndex = uuidIndex;
	}

	public boolean isFlgRiservato() {
		return flgRiservato;
	}

	public void setFlgRiservato(boolean flgRiservato) {
		this.flgRiservato = flgRiservato;
	}

	public String getCodAllegato() {
		return codAllegato;
	}

	public void setCodAllegato(String codAllegato) {
		this.codAllegato = codAllegato;
	}

	public String getNomeAllegato() {
		return nomeAllegato;
	}

	public void setNomeAllegato(String nomeAllegato) {
		this.nomeAllegato = nomeAllegato;
	}

	public int getDimensioneUpload() {
		return dimensioneUpload;
	}

	public void setDimensioneUpload(int dimensioneUpload) {
		this.dimensioneUpload = dimensioneUpload;
	}

	public String getDataUpload() {
		return dataUpload;
	}

	public void setDataUpload(String dataUpload) {
		this.dataUpload = dataUpload;
	}

	public boolean isFlgCancellato() {
		return flgCancellato;
	}

	public void setFlgCancellato(boolean flgCancellato) {
		this.flgCancellato = flgCancellato;
	}

	public int getIndFirma() {
		return indFirma;
	}

	public void setIndFirma(int indFirma) {
		this.indFirma = indFirma;
	}

	public int getIdIstanzaAttore() {
		return idIstanzaAttore;
	}

	public void setIdIstanzaAttore(int idIstanzaAttore) {
		this.idIstanzaAttore = idIstanzaAttore;
	}

	public int getIdFunzionario() {
		return idFunzionario;
	}

	public void setIdFunzionario(int idFunzionario) {
		this.idFunzionario = idFunzionario;
	}

	public boolean isFlgDaPubblicare() {
		return flgDaPubblicare;
	}

	public void setFlgDaPubblicare(boolean flgDaPubblicare) {
		this.flgDaPubblicare = flgDaPubblicare;
	}

	public int getIdIstanzaOsservazione() {
		return idIstanzaOsservazione;
	}

	public void setIdIstanzaOsservazione(int idIstanzaOsservazione) {
		this.idIstanzaOsservazione = idIstanzaOsservazione;
	}

	public TipologiaAllegatoDTO getTipologiaAllegato() {
		return tipologiaAllegato;
	}

	public void setTipologiaAllegato(TipologiaAllegatoDTO tipologiaAllegato) {
		this.tipologiaAllegato = tipologiaAllegato;
	}

	public ClasseAllegatoDTO getClasseAllegato() {
		return classeAllegato;
	}

	public void setClasseAllegato(ClasseAllegatoDTO classeAllegato) {
		this.classeAllegato = classeAllegato;
	}

	public String getUrlDoc() {
		return urlDoc;
	}

	public void setUrlDoc(String urlDoc) {
		this.urlDoc = urlDoc;
	}

	public String getDataPubblicazione() {
		return dataPubblicazione;
	}

	public void setDataPubblicazione(String dataPubblicazione) {
		this.dataPubblicazione = dataPubblicazione;
	}

	public String getDataAtto() {
		return dataAtto;
	}

	public void setDataAtto(String dataAtto) {
		this.dataAtto = dataAtto;
	}

	public String getNumAtto() {
		return numAtto;
	}

	public void setNumAtto(String numAtto) {
		this.numAtto = numAtto;
	}

	public String getAutoreAllegato() {
		return autoreAllegato;
	}

	public void setAutoreAllegato(String autoreAllegato) {
		this.autoreAllegato = autoreAllegato;
	}

	public String getTitoloAllegato() {
		return titoloAllegato;
	}

	public void setTitoloAllegato(String titoloAllegato) {
		this.titoloAllegato = titoloAllegato;
	}

}

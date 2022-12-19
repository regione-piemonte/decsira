package it.csi.sira.frontend.scriva.business.dto;

import org.codehaus.jackson.annotate.JsonProperty;

public class TipologiaAllegatoDTO {
	
	@JsonProperty("id_tipologia_allegato")
	public int idTipologiaAllegato;

	@JsonProperty("cod_tipologia_allegato")
	public String codTipologiaAllegato;

	@JsonProperty("des_tipologia_allegato")
	public String desTipologiaAllegato;

	@JsonProperty("ordinamento_tipologia_allegato")
	public int ordinamentoTipologiaAllegato;

	@JsonProperty("flg_attivo")
	public boolean flgAttivo;

	@JsonProperty("categoria_allegato")
	public CategoriaAllegatoDTO categoriaAllegato;

	public int getIdTipologiaAllegato() {
		return idTipologiaAllegato;
	}

	public void setIdTipologiaAllegato(int idTipologiaAllegato) {
		this.idTipologiaAllegato = idTipologiaAllegato;
	}

	public String getCodTipologiaAllegato() {
		return codTipologiaAllegato;
	}

	public void setCodTipologiaAllegato(String codTipologiaAllegato) {
		this.codTipologiaAllegato = codTipologiaAllegato;
	}

	public String getDesTipologiaAllegato() {
		return desTipologiaAllegato;
	}

	public void setDesTipologiaAllegato(String desTipologiaAllegato) {
		this.desTipologiaAllegato = desTipologiaAllegato;
	}

	public int getOrdinamentoTipologiaAllegato() {
		return ordinamentoTipologiaAllegato;
	}

	public void setOrdinamentoTipologiaAllegato(int ordinamentoTipologiaAllegato) {
		this.ordinamentoTipologiaAllegato = ordinamentoTipologiaAllegato;
	}

	public boolean isFlgAttivo() {
		return flgAttivo;
	}

	public void setFlgAttivo(boolean flgAttivo) {
		this.flgAttivo = flgAttivo;
	}

	public CategoriaAllegatoDTO getCategoriaAllegato() {
		return categoriaAllegato;
	}

	public void setCategoriaAllegato(CategoriaAllegatoDTO categoriaAllegato) {
		this.categoriaAllegato = categoriaAllegato;
	}

}

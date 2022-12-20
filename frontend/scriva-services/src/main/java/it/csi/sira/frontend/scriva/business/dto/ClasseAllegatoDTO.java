package it.csi.sira.frontend.scriva.business.dto;

import org.codehaus.jackson.annotate.JsonProperty;

public class ClasseAllegatoDTO {

	@JsonProperty("id_classe_allegato")
	public int idClasseAllegato;

	@JsonProperty("cod_classe_allegato")
	public String codClasseAllegato;

	@JsonProperty("des_classe_allegato")
	public String desClasseAllegato;

	@JsonProperty("ordinamento_classe_allegato")
	public int ordinamentoClasseAllegato;

	@JsonProperty("flg_attivo")
	public boolean flgAttivo;

	public int getIdClasseAllegato() {
		return idClasseAllegato;
	}

	public void setIdClasseAllegato(int idClasseAllegato) {
		this.idClasseAllegato = idClasseAllegato;
	}

	public String getCodClasseAllegato() {
		return codClasseAllegato;
	}

	public void setCodClasseAllegato(String codClasseAllegato) {
		this.codClasseAllegato = codClasseAllegato;
	}

	public String getDesClasseAllegato() {
		return desClasseAllegato;
	}

	public void setDesClasseAllegato(String desClasseAllegato) {
		this.desClasseAllegato = desClasseAllegato;
	}

	public int getOrdinamentoClasseAllegato() {
		return ordinamentoClasseAllegato;
	}

	public void setOrdinamentoClasseAllegato(int ordinamentoClasseAllegato) {
		this.ordinamentoClasseAllegato = ordinamentoClasseAllegato;
	}

	public boolean isFlgAttivo() {
		return flgAttivo;
	}

	public void setFlgAttivo(boolean flgAttivo) {
		this.flgAttivo = flgAttivo;
	}

}

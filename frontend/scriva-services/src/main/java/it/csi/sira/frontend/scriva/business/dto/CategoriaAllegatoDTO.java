package it.csi.sira.frontend.scriva.business.dto;

import org.codehaus.jackson.annotate.JsonProperty;

public class CategoriaAllegatoDTO {
	
	@JsonProperty("id_categoria_allegato")
	public int idCategoriaAllegato;

	@JsonProperty("cod_categoria_allegato")
	public String codCategoriaAllegato;

	@JsonProperty("des_categoria_allegato")
	public String desCategoriaAllegato;

	@JsonProperty("ordinamento_categoria_allegato")
	public int ordinamentoCategoriaAllegato;

	@JsonProperty("flg_attivo")
	public boolean flgAttivo;

	public int getIdCategoriaAllegato() {
		return idCategoriaAllegato;
	}

	public void setIdCategoriaAllegato(int idCategoriaAllegato) {
		this.idCategoriaAllegato = idCategoriaAllegato;
	}

	public String getCodCategoriaAllegato() {
		return codCategoriaAllegato;
	}

	public void setCodCategoriaAllegato(String codCategoriaAllegato) {
		this.codCategoriaAllegato = codCategoriaAllegato;
	}

	public String getDesCategoriaAllegato() {
		return desCategoriaAllegato;
	}

	public void setDesCategoriaAllegato(String desCategoriaAllegato) {
		this.desCategoriaAllegato = desCategoriaAllegato;
	}

	public int getOrdinamentoCategoriaAllegato() {
		return ordinamentoCategoriaAllegato;
	}

	public void setOrdinamentoCategoriaAllegato(int ordinamentoCategoriaAllegato) {
		this.ordinamentoCategoriaAllegato = ordinamentoCategoriaAllegato;
	}

	public boolean isFlgAttivo() {
		return flgAttivo;
	}

	public void setFlgAttivo(boolean flgAttivo) {
		this.flgAttivo = flgAttivo;
	}

}

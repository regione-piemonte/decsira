package it.csi.sira.frontend.iride.business.dto;

import java.io.Serializable;

public class DecsiraRuoliIrideAttore implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private Integer idRuolo;

	private String ruoloIride;

	private String dominioIride;

	private Integer idAutorita;

	private String istatProvincia;

	private String istatComune;

	private String descrizione;

	private String certifDemo;

	private String userDemo;

	public Integer getIdRuolo() {
		return idRuolo;
	}

	public void setIdRuolo(Integer idRuolo) {
		this.idRuolo = idRuolo;
	}

	public String getRuoloIride() {
		return ruoloIride;
	}

	public void setRuoloIride(String ruoloIride) {
		this.ruoloIride = ruoloIride;
	}

	public String getDominioIride() {
		return dominioIride;
	}

	public void setDominioIride(String dominioIride) {
		this.dominioIride = dominioIride;
	}

	public Integer getIdAutorita() {
		return idAutorita;
	}

	public void setIdAutorita(Integer idAutorita) {
		this.idAutorita = idAutorita;
	}

	public String getIstatProvincia() {
		return istatProvincia;
	}

	public void setIstatProvincia(String istatProvincia) {
		this.istatProvincia = istatProvincia;
	}

	public String getIstatComune() {
		return istatComune;
	}

	public void setIstatComune(String istatComune) {
		this.istatComune = istatComune;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getCertifDemo() {
		return certifDemo;
	}

	public void setCertifDemo(String certifDemo) {
		this.certifDemo = certifDemo;
	}

	public String getUserDemo() {
		return userDemo;
	}

	public void setUserDemo(String userDemo) {
		this.userDemo = userDemo;
	}

	@Override
	public String toString() {
		return "DecsiraRuoliIrideAttore [idRuolo=" + idRuolo + ", ruoloIride=" + ruoloIride + ", dominioIride="
				+ dominioIride + ", idAutorita=" + idAutorita + ", istatProvincia=" + istatProvincia + ", istatComune="
				+ istatComune + ", descrizione=" + descrizione + ", certifDemo=" + certifDemo + ", userDemo=" + userDemo
				+ "]";
	}
}

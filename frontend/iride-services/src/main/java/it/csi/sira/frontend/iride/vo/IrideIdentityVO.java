package it.csi.sira.frontend.iride.vo;

import java.io.Serializable;

public class IrideIdentityVO implements Serializable{
	
	/**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Codice Fiscale' property.
     */
    private String codFiscale;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Nome' property.
     */
    private String nome;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'Cognome' property.
     */
    private String cognome;

    /**
     * <code>IRIDE</code> <code>Digital Identity</code> entity 'IdProvider' property.
     */
    private String idProvider;
    
    public IrideIdentityVO(String cf, String nome, String cognome, String idProvider){
    	this.codFiscale = cf;
    	this.cognome = cognome;
    	this.idProvider = idProvider;
    	this.nome = nome;
    }
    

	 public String getCodFiscale() {
		return codFiscale;
	}

	public void setCodFiscale(String codFiscale) {
		this.codFiscale = codFiscale;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getIdProvider() {
		return idProvider;
	}

	public void setIdProvider(String idProvider) {
		this.idProvider = idProvider;
	}


}

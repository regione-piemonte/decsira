package it.csi.sira.backend.metadata.utils;

import org.springframework.jdbc.support.incrementer.PostgreSQLSequenceMaxValueIncrementer;

public class SequenceManager {

  private PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTMetadato;   
  private PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTFunzione;
  private PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTParolaChiave;  

  public PostgreSQLSequenceMaxValueIncrementer getSeqSipraMtdTMetadato() {
	return seqSipraMtdTMetadato;
  }

  public void setSeqSipraMtdTMetadato(PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTMetadato) {
	this.seqSipraMtdTMetadato = seqSipraMtdTMetadato;
  }

  public PostgreSQLSequenceMaxValueIncrementer getSeqSipraMtdTFunzione() {
    return seqSipraMtdTFunzione;
  }

  public void setSeqSipraMtdTFunzione(PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTFunzione) {
    this.seqSipraMtdTFunzione = seqSipraMtdTFunzione;
  }

  public PostgreSQLSequenceMaxValueIncrementer getSeqSipraMtdTParolaChiave() {
    return seqSipraMtdTParolaChiave;
  }

  public void setSeqSipraMtdTParolaChiave(PostgreSQLSequenceMaxValueIncrementer seqSipraMtdTParolaChiave) {
    this.seqSipraMtdTParolaChiave = seqSipraMtdTParolaChiave;
  }

}

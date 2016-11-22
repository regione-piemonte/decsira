package it.csi.sira.backend.metadata.exception;

public class MetadataManagerException extends Exception {
  /**
   * 
   */
  private static final long serialVersionUID = 3278749887690322301L;

  public MetadataManagerException(String msg) {
	super(msg);
  }

  public MetadataManagerException(Throwable arg0) {
	super(arg0);

  }
}

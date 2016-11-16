package it.csi.sira.backend.metadata.utils;

import java.util.Properties;

public class IntegratioManager {
  private DAOManager daoManager = null;
  private SequenceManager sequenceManager = null;
  private Properties queries = null;

  public DAOManager getDaoManager() {
	return daoManager;
  }

  public void setDaoManager(DAOManager daoManager) {
	this.daoManager = daoManager;
  }

  public SequenceManager getSequenceManager() {
	return sequenceManager;
  }

  public void setSequenceManager(SequenceManager sequenceManager) {
	this.sequenceManager = sequenceManager;
  }

  public Properties getQueries() {
	return queries;
  }

  public void setQueries(Properties queries) {
	this.queries = queries;
  }

}

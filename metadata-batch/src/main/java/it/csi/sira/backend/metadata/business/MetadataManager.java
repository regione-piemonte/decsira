package it.csi.sira.backend.metadata.business;

import it.csi.sira.backend.metadata.dto.MetaObject;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdDFontedati;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdRCategLingua;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdRCategappCategori;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdRCategoriaMtd;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdRParolachiaveMtd;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTCategoriaAppl;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTFunzione;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTMetadato;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTMtdCsw;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTParolaChiave;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTStoricoFunzione;
import it.csi.sira.backend.metadata.integration.dto.SipraMtdTStoricoMtdCsw;
import it.csi.sira.backend.metadata.integration.servizi.csw.CswAdapter;
import it.csi.sira.backend.metadata.integration.servizi.csw.CswService;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswRecord;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswSubject;
import it.csi.sira.backend.metadata.integration.servizi.csw.dto.CswURI;
import it.csi.sira.backend.metadata.utils.Constants;
import it.csi.sira.backend.metadata.utils.IntegratioManager;
import it.csi.sira.backend.metadata.utils.LogFormatter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

public class MetadataManager {

  private static String className = MetadataManager.class.getSimpleName();
  private static Logger logger = Logger.getLogger(Constants.LOGGER_NAME);

  private TransactionTemplate transactionTemplate = null;
  private IntegratioManager integratioManager;
  private CswService cswService = null;
  private CswAdapter cswAdapter = null;

  private MetaObject[] getMetadataTematicViews(int idCategory) throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	logger.debug(LogFormatter.format(className, methodName, "idCategory: " + idCategory));

	String query = null;
	MetaObject[] children = null;
	Map<String, Object> params = new HashMap<String, Object>();
	List<SipraMtdTMtdCsw> metadata = null;

	try {
	  RowMapper<SipraMtdTMtdCsw> rowMapper = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().getRowMapper();

	  params.put("id_categoria", idCategory);
	  query = integratioManager.getQueries().getProperty("GET_METADATA_VIEWS_BY_ID_CATEGORIA");

	  metadata = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().findByGenericCriteria(query, rowMapper, params);

	  if (metadata != null && metadata.size() > 0) {
		children = new MetaObject[metadata.size()];

		for (int i = 0; i < metadata.size(); i++) {

		  MetaObject o = new MetaObject();

		  o.setId(metadata.get(i).getIdMetadato());
		  o.setTitle(metadata.get(i).getTitolo());
		  o.setObjectCounter(null);
		  o.setText(metadata.get(i).getTestoAbstract());
		  o.setObjectCounter(null);
		  o.setTematicViewCounter(null);

		  children[i] = o;
		}
	  }
	} catch (Exception e) {
	  e.printStackTrace();
	  logger.error(LogFormatter.format(className, methodName, "ERROR: " + e.getMessage()));
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));

	return children;
  }

  private MetaObject[] getMetadataObjects(int idCategory) throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));
	logger.debug(LogFormatter.format(className, methodName, "idCategory: " + idCategory));

	String query = null;
	MetaObject[] children = null;
	Map<String, Object> params = null;
	params = new HashMap<String, Object>();
	List<SipraMtdTMtdCsw> metadata = null;

	try {
	  RowMapper<SipraMtdTMtdCsw> rowMapper = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().getRowMapper();

	  params.put("id_categoria", idCategory);

	  query = integratioManager.getQueries().getProperty("GET_METADATA_OBJECTS_BY_ID_CATEGORIA");
	  metadata = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().findByGenericCriteria(query, rowMapper, params);

	  if (metadata != null && metadata.size() > 0) {
		children = new MetaObject[metadata.size()];

		for (int i = 0; i < metadata.size(); i++) {

		  MetaObject o = new MetaObject();

		  o.setId(metadata.get(i).getIdMetadato());
		  o.setTitle(metadata.get(i).getTitolo());
		  o.setText(metadata.get(i).getTestoAbstract());
		  o.setObjectCounter(null);
		  o.setTematicViewCounter(null);

		  children[i] = o;
		}
	  }
	} catch (Exception e) {
	  e.printStackTrace();
	  logger.error(LogFormatter.format(className, methodName, "ERROR: " + e.getMessage()));
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));

	return children;
  }

  private MetaObject[] getMetaCategories(int idCategoria) throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	MetaObject[] children = null;
	Map<String, Object> params = null;

	try {

	  params = new HashMap<String, Object>();
	  params.put("id_categoria_appl", idCategoria);
	  List<SipraMtdRCategappCategori> metaCategories = integratioManager.getDaoManager().getSipraMtdRCategappCategoriDAO().findByCriteria(params);

	  if (metaCategories != null && metaCategories.size() > 0) {

		children = new MetaObject[metaCategories.size()];

		for (int i = 0; i < metaCategories.size(); i++) {

		  SipraMtdRCategappCategori sipraMtdRCategappCategori = metaCategories.get(i);

		  SipraMtdRCategLingua sipraMtdRCategLingua = integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO()
			  .findByPK(sipraMtdRCategappCategori.getIdCategoria(), 1);

		  MetaObject metaCategory = new MetaObject();
		  metaCategory.setTitle(sipraMtdRCategLingua.getDesCategoria());

		  if ("S".equals(sipraMtdRCategLingua.getFlAlias())) {
			metaCategory.setTitle(sipraMtdRCategLingua.getDesAlias());
		  }

		  metaCategory.setObjectCounter(0);
		  metaCategory.setTematicViewCounter(0);

		  MetaObject[] metaObjects = getMetadataObjects(sipraMtdRCategappCategori.getIdCategoria());

		  ArrayList<MetaObject> metaObjectsList = null;

		  if (metaObjects != null) {
			metaCategory.setObjectCounter(metaObjects.length);
			metaObjectsList = new ArrayList<MetaObject>(Arrays.asList(metaObjects));
		  }

		  MetaObject[] metaViews = getMetadataTematicViews(sipraMtdRCategappCategori.getIdCategoria());
		  ArrayList<MetaObject> metaViewsList = null;

		  if (metaViews != null) {
			metaCategory.setTematicViewCounter(metaViews.length);
			metaViewsList = new ArrayList<MetaObject>(Arrays.asList(metaViews));
		  }

		  ArrayList<MetaObject> metadataList = new ArrayList<MetaObject>();

		  if (metaObjectsList != null && metaViewsList != null) {
			metadataList.addAll(metaObjectsList);
			metadataList.addAll(metaViewsList);
		  }

		  if (metaObjectsList != null && metaViewsList == null) {
			metadataList.addAll(metaObjectsList);
		  }

		  if (metaObjectsList == null && metaViewsList != null) {
			metadataList.addAll(metaViewsList);
		  }

		  if (metadataList != null) {
			metaCategory.setMetadata(metadataList.toArray(new MetaObject[metadataList.size()]));
		  }

		  children[i] = metaCategory;
		}
	  }
	} catch (Exception e) {
	  e.printStackTrace();
	  logger.error(LogFormatter.format(className, methodName, "ERROR: " + e.getMessage()));
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));

	return children;
  }

  private MetaObject getAppCategories(Integer idAppCategory) throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = null;
	MetaObject metaObject = null;

	try {
	  SipraMtdTCategoriaAppl appCat = integratioManager.getDaoManager().getSipraMtdTCategoriaApplDAO().findByPK(idAppCategory);

	  if (appCat != null) {
		metaObject = new MetaObject();
		metaObject.setTitle(appCat.getDesCategoria());
	  } else {
		throw new Exception("Category not found in sipra_mtd_t_categoria_appl!!");
	  }

	  params = new HashMap<String, Object>();
	  params.put("fk_padre", appCat.getIdCategoriaAppl());
	  List<SipraMtdTCategoriaAppl> appChildrenCategories = integratioManager.getDaoManager().getSipraMtdTCategoriaApplDAO().findByCriteria(params);

	  if (appChildrenCategories != null && appChildrenCategories.size() > 0) {

		MetaObject[] children = new MetaObject[appChildrenCategories.size()];

		for (int i = 0; i < appChildrenCategories.size(); i++) {
		  children[i] = getAppCategories(appChildrenCategories.get(i).getIdCategoriaAppl());
		}

		metaObject.setCategories(children);

		if (metaObject.getCategories() != null) {
		  for (int c = 0; c < metaObject.getCategories().length; c++) {
			metaObject.setObjectCounter(metaObject.getCategories()[c].getObjectCounter() + metaObject.getObjectCounter());
			metaObject.setTematicViewCounter(metaObject.getCategories()[c].getTematicViewCounter() + metaObject.getTematicViewCounter());
		  }
		}
	  } else {

		// categorie dei metadati ...........
		metaObject.setCategories(getMetaCategories(idAppCategory));

		if (metaObject.getCategories() != null) {
		  for (int i = 0; i < metaObject.getCategories().length; i++) {
			metaObject.setObjectCounter(metaObject.getCategories()[i].getObjectCounter() + metaObject.getObjectCounter());
			metaObject.setTematicViewCounter(metaObject.getCategories()[i].getTematicViewCounter() + metaObject.getTematicViewCounter());
		  }
		}
	  }
	} catch (Exception e) {
	  e.printStackTrace();
	  logger.error(LogFormatter.format(className, methodName, "ERROR: " + e.getMessage()));
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));

	return metaObject;
  }

  public void updateMetadataCounters() throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = null;

	try {
	  params = new HashMap<String, Object>();
	  params.put("livello", 1);
	  List<SipraMtdTCategoriaAppl> allFirstCategories = integratioManager.getDaoManager().getSipraMtdTCategoriaApplDAO().findByCriteria(params);

	  if (allFirstCategories != null && allFirstCategories.size() > 0) {

		for (int i = 0; i < allFirstCategories.size(); i++) {

		  SipraMtdTCategoriaAppl cat = allFirstCategories.get(i);

		  MetaObject rootCategory = this.getAppCategories(allFirstCategories.get(i).getIdCategoriaAppl());

		  cat.setObjectNumber(rootCategory.getObjectCounter());
		  cat.setViewNumber(rootCategory.getTematicViewCounter());

		  integratioManager.getDaoManager().getSipraMtdTCategoriaApplDAO().update(cat);
		}
	  }
	} catch (Exception e) {
	  e.printStackTrace();
	  logger.error(LogFormatter.format(className, methodName, "ERROR: " + e.getMessage()));
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  public void moveOldMetadata() throws Exception {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = null;
	List<SipraMtdTMtdCsw> cswTable = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().findAll();

	PlatformTransactionManager transactionManager = transactionTemplate.getTransactionManager();
	TransactionStatus transactionStatus = transactionManager.getTransaction(new DefaultTransactionDefinition());

	try {

	  params = new HashMap<String, Object>();
	  params.put("fl_attiva", "S");
	  List<SipraMtdDFontedati> elencoFontiDati = integratioManager.getDaoManager().getSipraMtdDFontedatiDAO().findByCriteria(params);

	  for (int fonte = 0; fonte < elencoFontiDati.size(); fonte++) {

		SipraMtdDFontedati fonteDati = elencoFontiDati.get(fonte);
		cswService.setUrlService(fonteDati.getUrlServizio());

		for (SipraMtdTMtdCsw csw : cswTable) {
		  
		  Thread.sleep(100);
		  
		  String xml = cswService.getRecordById(csw.getDcIdentifier());
		  String idCsw = cswAdapter.getCswRecordID(xml);

		  if (idCsw == null) {

			logger.info(LogFormatter.format(className, methodName, "RECORD ID: " + csw.getDcIdentifier() + "(" + csw.getIdMetadato() + ") NON TROVATO SU FONTE " + fonteDati.getDesFontedati()));

			SipraMtdTStoricoMtdCsw cswStorico = integratioManager.getDaoManager().getSipraMtdTStoricoMtdCswDAO().findByPK(csw.getIdMetadato());

			if (cswStorico == null) {

			  cswStorico = new SipraMtdTStoricoMtdCsw();

			  cswStorico.setIdStoricoMetadato(csw.getIdMetadato());
			  cswStorico.setUrlMetadatoCalc(csw.getUrlMetadatoCalc());
			  cswStorico.setTitolo(csw.getTitolo());
			  cswStorico.setTipoMetadato(csw.getTipoMetadato());
			  cswStorico.setTestoAbstract(csw.getTestoAbstract());
			  cswStorico.setDcIdentifier(csw.getDcIdentifier());
			  cswStorico.setBoundBoxUpperCorner(csw.getBoundBoxUpperCorner());
			  cswStorico.setBoundBoxLowerCorner(csw.getBoundBoxLowerCorner());
			  cswStorico.setBoundBoxCrs(csw.getBoundBoxCrs());

			  integratioManager.getDaoManager().getSipraMtdTStoricoMtdCswDAO().insert(cswStorico);
			  integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().deleteByPK(csw.getIdMetadato());

			  params = new HashMap<String, Object>();
			  params.put("fk_metadato", csw.getIdMetadato());
			  List<SipraMtdTFunzione> funzioni = integratioManager.getDaoManager().getSipraMtdTFunzioneDAO().findByCriteria(params);

			  if (funzioni != null) {
				for (SipraMtdTFunzione f : funzioni) {

				  SipraMtdTStoricoFunzione fun = integratioManager.getDaoManager().getSipraMtdTStoricoFunzioneDAO().findByPK(f.getIdFunzione());

				  if (fun == null) {
					fun = new SipraMtdTStoricoFunzione();

					fun.setIdStoricoFunzione(f.getIdFunzione());
					fun.setFkTipoFunzione(f.getFkTipoFunzione());
					fun.setFkMetadato(f.getFkMetadato());
					fun.setRequestUrl(f.getRequestUrl());

					integratioManager.getDaoManager().getSipraMtdTStoricoFunzioneDAO().insert(fun);
					integratioManager.getDaoManager().getSipraMtdTFunzioneDAO().deleteByPK(f.getIdFunzione());
				  }
				}
			  }
			}
		  } else {
			logger.debug(LogFormatter.format(className, methodName, "RECORD ID: " + csw.getDcIdentifier() + "(" + csw.getIdMetadato() + ") TROVATO SU FONTE " + fonteDati.getDesFontedati()));
		  }
		}
	  }
	} catch (Exception e) {
	  transactionManager.rollback(transactionStatus);
	  e.printStackTrace();
	  throw new Exception(e);
	}

	transactionManager.commit(transactionStatus);

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  private void cleanKeyWords() {

	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = new HashMap<String, Object>();

	integratioManager.getDaoManager().getSipraMtdRParolachiaveMtdDAO().delete("delete from sipra_mtd_r_parolachiave_mtd", params);
	integratioManager.getDaoManager().getSipraMtdTParolaChiaveDAO().delete("delete from sipra_mtd_t_parola_chiave", params);

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  /**
   * update categories: update made to delegate to the driver solving the
   * problem of strings that contain an apostrophe. Without this step comparing
   * strings that contain apostrophes do not work properly.
   *
   * @param void
   * 
   * @return void
   */
  private void updateCategories() {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	List<SipraMtdRCategLingua> categorie = integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO().findAll();

	for (int i = 0; i < categorie.size(); i++) {

	  SipraMtdRCategLingua category = categorie.get(i);

	  SipraMtdRCategLingua updatedCategory = new SipraMtdRCategLingua();

	  updatedCategory.setIdCategoria(category.getIdCategoria());
	  updatedCategory.setIdLingua(category.getIdLingua());
	  updatedCategory.setDesCategoria(category.getDesCategoria());
	  updatedCategory.setDesAlias(category.getDesAlias());
	  updatedCategory.setFlAlias(category.getFlAlias());

	  integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO().update(updatedCategory);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  /**
   * update metadata
   *
   * @param url
   *          an absolute URL giving the base location of the image
   * @param name
   *          the location of the image, relative to the url argument
   * @return the image at the specified URL
   * @throws Exception
   */
  public void updateMetadata() throws Exception {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = null;
	String xmlCSW;

	updateCategories();
	cleanKeyWords();

	// *** IL BATCH LAVORA SOLO SULLE CATEGORIE INSPIRE E PSR IMPORTATE DAL CSW
	String query = "select a.* from sipra_mtd_r_categ_lingua a, sipra_mtd_t_categoria b where b.id_categoria = a.id_categoria and b.fk_tipo_categoria in (1, 2)";

	params = new HashMap<String, Object>();
	List<SipraMtdRCategLingua> filterAategories = integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO()
		.findByGenericCriteria(query, integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO().getRowMapper(), params);

	Map<String, Integer> filterAategoriesMap = new HashMap<String, Integer>();

	for (SipraMtdRCategLingua categoria : filterAategories) {
	  filterAategoriesMap.put((String) categoria.getDesCategoria(), (Integer) categoria.getIdCategoria());
	}
	// ***

	params = new HashMap<String, Object>();
	params.put("fl_attiva", "S");
	List<SipraMtdDFontedati> elencoFontiDati = integratioManager.getDaoManager().getSipraMtdDFontedatiDAO().findByCriteria(params);

	for (int f = 0; f < elencoFontiDati.size(); f++) {

	  SipraMtdDFontedati fonteDati = elencoFontiDati.get(f);

	  logger.info(LogFormatter.format(className, methodName, "----------"));
	  logger.info(LogFormatter.format(className, methodName, "URL SERVIZIO: " + fonteDati.getUrlServizio()));
	  logger.info(LogFormatter.format(className, methodName, "----------"));
	  logger.info(LogFormatter.format(className, methodName, "FONTE DATI: " + fonteDati.getDesFontedati() + " (" + fonteDati.getPrefissoFontedati()
		  + ") "));
	  logger.info(LogFormatter.format(className, methodName, "----------"));

	  cswService.setUrlService(fonteDati.getUrlServizio());

	  for (int i = 0; i < filterAategories.size(); i++) {

		SipraMtdRCategLingua categoria = filterAategories.get(i);

		logger.info(LogFormatter.format(className, methodName, "---------: "));
		logger.info(LogFormatter.format(className, methodName, "CATEGORIA: " + categoria.getDesCategoria()));
		logger.info(LogFormatter.format(className, methodName, "---------: "));

		try {
		  xmlCSW = cswService.getRecords(categoria.getDesCategoria(), 1, 100000);
		  List<CswRecord> cswRecords = cswAdapter.getCswRecords(xmlCSW, fonteDati);

		  logger.info(LogFormatter.format(className, methodName, "RECORD ESTRATTI: " + cswRecords.size()));

		  List<CswRecord> cswValidRecords = this.filterOnCategory(cswRecords, filterAategoriesMap);

		  logger.info(LogFormatter.format(className, methodName, "RECORD VALIDI: " + cswValidRecords.size()));

		  if (cswValidRecords.size() > 0) {
			this.saveMetadata(cswValidRecords, fonteDati.getIdFontedati());
		  }
		} catch (Exception e) {
		  e.printStackTrace();
		  throw new Exception(e);
		}
	  }
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  /**
   * filter metadata
   *
   * @param cswRecords
   *          csw metadata records
   * 
   * @return csw metadata records (list of metadata that meet the database
   *         update rules)
   */
  private List<CswRecord> filterOnCategory(List<CswRecord> cswRecords, Map<String, Integer> categorieMap) {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	List<CswRecord> cswRecordsValid = new ArrayList<CswRecord>();

	// cerco i record validi ossia quelli che tra i subject hanno almeno
	// una categoria tra quelle passate in input

	for (int i = 0; i < cswRecords.size(); i++) {

	  CswRecord recordCSW = cswRecords.get(i);

	  boolean isValid = false;

	  for (int s = 0; s < recordCSW.getSubjects().length; s++) {

		if (categorieMap.containsKey(recordCSW.getSubjects()[s].getTesto())) {
		  Integer idCategoria = categorieMap.get(recordCSW.getSubjects()[s].getTesto());
		  recordCSW.getSubjects()[s].setIdCategoria(idCategoria);
		  isValid = true;
		}
	  }

	  if (isValid) {
		cswRecordsValid.add(recordCSW);
	  }
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));

	return cswRecordsValid;
  }

  /**
   * save metadata
   *
   * @param cswRecords
   *          csw metadata records
   * 
   * @return void
   * @throws Exception
   */
  public void saveMetadata(List<CswRecord> cswRecords, int idFonteDati) throws Exception {
	final String methodName = new Object() {
	}.getClass().getEnclosingMethod().getName();

	logger.debug(LogFormatter.format(className, methodName, "BEGIN"));

	Map<String, Object> params = null;
	Map<String, Integer> categorieMap = new HashMap<String, Integer>();

	List<SipraMtdRCategLingua> categorie = integratioManager.getDaoManager().getSipraMtdRCategLinguaDAO().findAll();

	for (SipraMtdRCategLingua categoria : categorie) {
	  categorieMap.put((String) categoria.getDesCategoria(), (Integer) categoria.getIdCategoria());
	}

	PlatformTransactionManager transactionManager = transactionTemplate.getTransactionManager();
	TransactionStatus transactionStatus = transactionManager.getTransaction(new DefaultTransactionDefinition());

	try {

	  for (int i = 0; i < cswRecords.size(); i++) {

		CswRecord cswRecord = cswRecords.get(i);

		params = new HashMap<String, Object>();
		params.put("dc_identifier", cswRecord.getIdentifier());
		List<SipraMtdTMtdCsw> listaMetadatoCSW = integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().findByCriteria(params);

		if (listaMetadatoCSW != null && listaMetadatoCSW.size() > 1) {
		  throw new Exception("ERRORE: non possono esistere due record con lo stesso c_identifier");
		}

		SipraMtdTMtdCsw metadatoCSW = new SipraMtdTMtdCsw();

		if (listaMetadatoCSW != null && listaMetadatoCSW.size() == 1) {

		  mapping(metadatoCSW, cswRecord, listaMetadatoCSW.get(0).getIdMetadato());
		  integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().update(metadatoCSW);

		} else {

		  SipraMtdTMetadato metadato = new SipraMtdTMetadato();
		  metadato.setIdMetadato(integratioManager.getSequenceManager().getSeqSipraMtdTMetadato().nextIntValue());
		  metadato.setFkFontedati(idFonteDati);

		  integratioManager.getDaoManager().getSipraMtdTMetadatoDAO().insert(metadato);

		  mapping(metadatoCSW, cswRecord, metadato.getIdMetadato());
		  integratioManager.getDaoManager().getSipraMtdTMtdCswDAO().insert(metadatoCSW);
		}

		cswRecord.setIdMetadato(metadatoCSW.getIdMetadato());

		params = new HashMap<String, Object>();
		params.put("id_metadato", cswRecord.getIdMetadato());
		integratioManager.getDaoManager().getSipraMtdRCategoriaMtdDAO()
			.delete("delete from sipra_mtd_r_categoria_mtd where id_metadato = :id_metadato", params);

		if (cswRecord.getSubjects() != null) {
		  for (int s = 0; s < cswRecord.getSubjects().length; s++) {

			CswSubject subject = cswRecord.getSubjects()[s];

			// i subject con id categoria valorizzato sono quelli che
			// corrispondono alle categorie configurate!!
			if (subject.getIdCategoria() != null) {

			  SipraMtdRCategoriaMtd categoria = new SipraMtdRCategoriaMtd();

			  categoria.setIdCategoria(subject.getIdCategoria());
			  categoria.setIdMetadato(cswRecord.getIdMetadato());

			  // verifico la presenza di una cetegoria gia' inserita ma
			  // relativa ad
			  // una lingua diversa nell'ambito delle stesso metadato
			  SipraMtdRCategoriaMtd cat = integratioManager.getDaoManager().getSipraMtdRCategoriaMtdDAO()
				  .findByPK(categoria.getIdCategoria(), categoria.getIdMetadato());

			  if (categoria.getIdCategoria() == 55) {
				logger.debug(LogFormatter.format(className, methodName, "BREAK"));
			  }

			  if (cat == null) {
				integratioManager.getDaoManager().getSipraMtdRCategoriaMtdDAO().insert(categoria);
			  }
			} else {
			  // se un subject non ha id categoria vuol dire che non corrisponde
			  // a nessuna delle categorie configurate
			  // quindi lo si scarta

			  String txtSubject = cswRecord.getSubjects()[s].getTesto();

			  params = new HashMap<String, Object>();
			  params.put("des_parola_chiave", txtSubject);
			  List<SipraMtdTParolaChiave> subjectNotFound = integratioManager.getDaoManager().getSipraMtdTParolaChiaveDAO().findByCriteria(params);

			  if (subjectNotFound == null || (subjectNotFound != null && subjectNotFound.size() == 0)) {

				SipraMtdTParolaChiave beanT = new SipraMtdTParolaChiave();
				beanT.setIdParolaChiave(integratioManager.getSequenceManager().getSeqSipraMtdTParolaChiave().nextIntValue());
				beanT.setDesParolaChiave(txtSubject);

				integratioManager.getDaoManager().getSipraMtdTParolaChiaveDAO().insert(beanT);

				SipraMtdRParolachiaveMtd beanR = new SipraMtdRParolachiaveMtd();
				beanR.setIdMetadato(cswRecord.getIdMetadato());
				beanR.setIdParolaChiave(beanT.getIdParolaChiave());

				integratioManager.getDaoManager().getSipraMtdRParolachiaveMtdDAO().insert(beanR);
			  } else {

				SipraMtdRParolachiaveMtd rParolaChiave = integratioManager.getDaoManager().getSipraMtdRParolachiaveMtdDAO()
					.findByPK(cswRecord.getIdMetadato(), subjectNotFound.get(0).getIdParolaChiave());

				if (rParolaChiave == null) {
				  SipraMtdRParolachiaveMtd beanR = new SipraMtdRParolachiaveMtd();
				  beanR.setIdMetadato(cswRecord.getIdMetadato());
				  beanR.setIdParolaChiave(subjectNotFound.get(0).getIdParolaChiave());

				  integratioManager.getDaoManager().getSipraMtdRParolachiaveMtdDAO().insert(beanR);
				}
			  }
			}
		  }
		}

		params = new HashMap<String, Object>();
		params.put("id_metadato", cswRecord.getIdMetadato());
		integratioManager
			.getDaoManager()
			.getSipraMtdRCategoriaMtdDAO()
			.delete(
				"delete from sipra_mtd_t_funzione where fk_metadato = :id_metadato and fk_tipo_funzione in (select id_tipo_funzione from sipra_mtd_d_tipo_funzione where protocollo is not null)",
				params);

		if (cswRecord.getUri() != null) {
		  for (int f = 0; f < cswRecord.getUri().length; f++) {

			CswURI uri = cswRecord.getUri()[f];

			SipraMtdTFunzione funzione = new SipraMtdTFunzione();

			funzione.setIdFunzione(integratioManager.getSequenceManager().getSeqSipraMtdTFunzione().nextIntValue());
			funzione.setFkTipoFunzione(uri.getTipo());
			funzione.setFkMetadato(cswRecord.getIdMetadato());
			funzione.setRequestUrl(uri.getUrl());

			integratioManager.getDaoManager().getSipraMtdTFunzioneDAO().insert(funzione);
		  }
		}
	  }

	  transactionManager.commit(transactionStatus);

	} catch (Exception e) {
	  transactionManager.rollback(transactionStatus);
	  e.printStackTrace();
	  throw new Exception(e);
	}

	logger.debug(LogFormatter.format(className, methodName, "END"));
  }

  private void mapping(SipraMtdTMtdCsw metadatoCSW, CswRecord cswRecord, int idMetadato) {
	metadatoCSW.setIdMetadato(idMetadato);
	metadatoCSW.setDcIdentifier(cswRecord.getIdentifier());
	metadatoCSW.setTitolo(cswRecord.getTitle());
	metadatoCSW.setTestoAbstract(cswRecord.getTextAbstract());

	if (cswRecord.getTypes() != null && cswRecord.getTypes().length > 0) {
	  metadatoCSW.setTipoMetadato(cswRecord.getTypes()[0]);
	}

	metadatoCSW.setUrlMetadatoCalc(cswRecord.getUrlMetadato());

	if (cswRecord.getBoundingBox() != null && cswRecord.getBoundingBox().length > 0) {
	  metadatoCSW.setBoundBoxCrs(cswRecord.getBoundingBox()[0].getCrs());
	  metadatoCSW.setBoundBoxLowerCorner(cswRecord.getBoundingBox()[0].getLowerCorner());
	  metadatoCSW.setBoundBoxUpperCorner(cswRecord.getBoundingBox()[0].getUpperCorner());
	}
  }

  public TransactionTemplate getTransactionTemplate() {
	return transactionTemplate;
  }

  public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
	this.transactionTemplate = transactionTemplate;
  }

  public IntegratioManager getIntegratioManager() {
	return integratioManager;
  }

  public void setIntegratioManager(IntegratioManager integratioManager) {
	this.integratioManager = integratioManager;
  }

  public CswService getCswService() {
	return cswService;
  }

  public void setCswService(CswService cswService) {
	this.cswService = cswService;
  }

  public CswAdapter getCswAdapter() {
	return cswAdapter;
  }

  public void setCswAdapter(CswAdapter cswAdapter) {
	this.cswAdapter = cswAdapter;
  }

}

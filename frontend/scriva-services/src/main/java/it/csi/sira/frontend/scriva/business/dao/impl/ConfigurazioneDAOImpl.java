package it.csi.sira.frontend.scriva.business.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import it.csi.sira.frontend.scriva.business.dao.ConfigurazioneDAO;
import it.csi.sira.frontend.scriva.business.dto.ConfigurazioneDTO;
import it.csi.sira.frontend.scriva.controller.ScrivaServiceConstants;

/**
 * The type Configurazione dao.
 *
 * @author CSI PIEMONTE
 */
public class ConfigurazioneDAOImpl implements ConfigurazioneDAO {

	protected NamedParameterJdbcTemplate template;

	private static final String QUERY_LOAD_CONFIG = "SELECT * FROM decsira_d_configurazione ";

	private static final String QUERY_LOAD_CONFIG_BY_KEY = QUERY_LOAD_CONFIG + "WHERE chiave = :key";

	private static final String QUERY_LOAD_CONFIG_BY_KEY_LIST = QUERY_LOAD_CONFIG
			+ "WHERE TRIM(BOTH FROM chiave) IN (:keys)";

	private static final String QUERY_INSERT_CONFIGURAZIONE = "INSERT INTO decsira_d_configurazione (chiave, valore, note) "
			+ "VALUES( :chiave, :valore, :note)";

	private static final String QUERY_UPDATE_CONFIGURAZIONE = "UPDATE decsira_d_configurazione SET valore =:valore , note =:note "
			+ "WHERE chiave = :chiave;";

	/**
	 * @return List<ConfigurazioneDTO>
	 */
	@Override
	public List<ConfigurazioneDTO> loadConfig() {
		Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfig] BEGIN");
		try {
			Map<String, Object> map = new HashMap<>();
			return template.query(QUERY_LOAD_CONFIG, map, getRowMapper());
		} catch (SQLException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfig] Errore nell'esecuzione della query", e);
			return null;
		} catch (DataAccessException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfig] Errore nell'accesso ai dati", e);
			return null;
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfig] END");
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<ConfigurazioneDTO> loadConfigByKey(String key) {
		Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfigByKey] BEGIN");
		try {
			Map<String, Object> map = new HashMap<>();
			map.put("key", key);
			return template.query(QUERY_LOAD_CONFIG_BY_KEY, map, getRowMapper());
		} catch (SQLException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfigByKey] Errore nell'esecuzione della query", e);
			return null;
		} catch (DataAccessException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfigByKey] Errore nell'accesso ai dati", e);
			return null;
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfigByKey] END");
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Map<String, String> loadConfigByKeyList(List<String> keys) {
		Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfigByKey] BEGIN");
		try {
			Map<String, Object> map = new HashMap<>();
			map.put("keys", keys);
			List<ConfigurazioneDTO> res = template.query(QUERY_LOAD_CONFIG_BY_KEY_LIST, map, getRowMapper());
			Map<String, String> configs = new HashMap<>();
			for (ConfigurazioneDTO dto : res) {
				configs.put(dto.getChiave(), dto.getValore());
			}
			return configs;
		} catch (SQLException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfigByKey] Errore nell'esecuzione della query", e);
			return null;
		} catch (DataAccessException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::loadConfigByKey] Errore nell'accesso ai dati", e);
			return null;
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::loadConfigByKey] END");
		}
	}
	
	@Override
	public ConfigurazioneDTO insertConfigurazioneDTO(ConfigurazioneDTO configurazioneDTO) {

		Logger.getLogger(ScrivaServiceConstants.LOGGER).debug("[ConfigurazioneDAOImpl::insertConfigurazioneDTO] BEGIN");
		try {
			Map<String, Object> map = new HashMap<>();

			map.put("chiave", configurazioneDTO.getChiave());
			map.put("valore", configurazioneDTO.getValore());
			map.put("note", configurazioneDTO.getNote());

			template.update(QUERY_INSERT_CONFIGURAZIONE, map);

		} catch (DataAccessException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::insertConfigurazioneDTO] Errore nell'accesso ai dati", e);
			return null;
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.debug("[ConfigurazioneDAOImpl::insertConfigurazioneDTO] END");
		}
		return configurazioneDTO;
	}

	@Override
	public ConfigurazioneDTO updatetConfigurazioneDTO(ConfigurazioneDTO configurazioneDTO) {
		Logger.getLogger(ScrivaServiceConstants.LOGGER)
				.debug("[ConfigurazioneDAOImpl::updatetConfigurazioneDTO] BEGIN");
		try {
			Map<String, Object> map = new HashMap<>();

			map.put("chiave", configurazioneDTO.getChiave());
			map.put("valore", configurazioneDTO.getValore());
			map.put("note", configurazioneDTO.getNote());

			template.update(QUERY_UPDATE_CONFIGURAZIONE, map);

		} catch (DataAccessException e) {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.error("[ConfigurazioneDAOImpl::updatetConfigurazioneDTO] Errore nell'accesso ai dati", e);
			return null;
		} finally {
			Logger.getLogger(ScrivaServiceConstants.LOGGER)
					.debug("[ConfigurazioneDAOImpl::updatetConfigurazioneDTO] END");
		}
		return configurazioneDTO;
	}

	public NamedParameterJdbcTemplate getTemplate() {
		return template;
	}

	public void setTemplate(NamedParameterJdbcTemplate template) {
		this.template = template;
	}

	public RowMapper<ConfigurazioneDTO> getRowMapper() throws SQLException {
		return new ConfigurazioneRowMapper();
	}

	/**
	 * The type Configurazione row mapper.
	 */
	public static class ConfigurazioneRowMapper implements RowMapper<ConfigurazioneDTO> {

		/**
		 * Instantiates a new Configurazione row mapper.
		 *
		 * @throws SQLException the sql exception
		 */
		public ConfigurazioneRowMapper() throws SQLException {
			// Instantiate class
		}

		/**
		 * Implementations must implement this method to map each row of data in the
		 * ResultSet. This method should not call {@code next()} on the ResultSet; it is
		 * only supposed to map values of the current row.
		 *
		 * @param rs     the ResultSet to map (pre-initialized for the current row)
		 * @param rowNum the number of the current row
		 * @return the result object for the current row (may be {@code null})
		 * @throws SQLException if a SQLException is encountered getting column values
		 *                      (that is, there's no need to catch SQLException)
		 */
		@Override
		public ConfigurazioneDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
			ConfigurazioneDTO bean = new ConfigurazioneDTO();
			populateBean(rs, bean);
			return bean;
		}

		private void populateBean(ResultSet rs, ConfigurazioneDTO bean) throws SQLException {
			bean.setChiave(rs.getString("chiave"));
			bean.setValore(rs.getString("valore"));
			bean.setNote(rs.getString("note"));
		}
	}

}
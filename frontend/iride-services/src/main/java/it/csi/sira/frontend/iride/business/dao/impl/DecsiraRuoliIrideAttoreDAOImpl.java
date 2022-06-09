package it.csi.sira.frontend.iride.business.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import it.csi.frontend.iride.utils.LogFormatter;
import it.csi.sira.frontend.iride.business.dao.DecsiraRuoliIrideAttoreDAO;
import it.csi.sira.frontend.iride.business.dto.DecsiraRuoliIrideAttore;
import it.csi.sira.frontend.iride.controller.IrideServiceConstants;
import it.csi.sira.frontend.iride.controller.IrideServiceController;

public class DecsiraRuoliIrideAttoreDAOImpl implements DecsiraRuoliIrideAttoreDAO {

	protected NamedParameterJdbcTemplate template;

	private final static String SELECT_BY_RUOLO_IRIDE = "select * from decsira_c_ruoli_iride_attore where ruolo_iride = :ruoloIride";

	private static String className = DecsiraRuoliIrideAttoreDAOImpl.class.getSimpleName();
	
	public DecsiraRuoliIrideAttore findByRuoloIride(String ruoloIride) {
		final String methodName = new Object() {}.getClass().getEnclosingMethod().getName();
		Logger.getLogger(IrideServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "ruoloIride = " + ruoloIride));
		java.util.Map<String, Object> map = new java.util.HashMap<String, Object>();
		map.put("ruoloIride", ruoloIride);
		try {
			Logger.getLogger(IrideServiceConstants.LOGGER).info(LogFormatter.format(className, methodName, "executing query = " + SELECT_BY_RUOLO_IRIDE));
			return template.queryForObject(SELECT_BY_RUOLO_IRIDE, map, getRowMapper());
		} catch (DataAccessException e) {
			e.printStackTrace();
			return null;
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}

	public NamedParameterJdbcTemplate getTemplate() {
		return template;
	}

	public void setTemplate(NamedParameterJdbcTemplate template) {
		this.template = template;
	}


	public RowMapper<DecsiraRuoliIrideAttore> getRowMapper() throws SQLException {
		return new DecsiraRuoliIrideAttoreMapper();
	}

	public static class DecsiraRuoliIrideAttoreMapper implements RowMapper<DecsiraRuoliIrideAttore> {

		public DecsiraRuoliIrideAttoreMapper() throws SQLException {
		}

		@Override
		public DecsiraRuoliIrideAttore mapRow(ResultSet rs, int rowNum) throws SQLException {
			DecsiraRuoliIrideAttore bean = new DecsiraRuoliIrideAttore();
			populateBean(rs, bean);
			return bean;
		}

		private void populateBean(ResultSet rs, DecsiraRuoliIrideAttore bean) throws SQLException {
			bean.setIdRuolo(rs.getInt("id_ruolo"));
			bean.setRuoloIride(rs.getString("ruolo_iride"));
			bean.setDominioIride(rs.getString("dominio_iride"));
			bean.setIdAutorita(rs.getInt("id_autorita"));
			bean.setIstatProvincia(rs.getString("istat_provincia"));
			bean.setIstatComune(rs.getString("istat_comune"));
			bean.setDescrizione(rs.getString("descrizione"));
			bean.setCertifDemo(rs.getString("certif_demo"));
			bean.setUserDemo(rs.getString("user_demo"));
		}

	}

}

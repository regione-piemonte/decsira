package it.csi.sira.backend.metadata.integration.custom.dao;

import it.csi.sira.backend.metadata.integration.custom.dto.InfoBoxDTO;


import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.RowMapper;

public interface InfoBoxDAO {

  public <V> List<V> findByGenericCriteria(String query, RowMapper<V> rowMapper, Map<String, Object> params);

  public RowMapper<InfoBoxDTO> getRowMapper();

}

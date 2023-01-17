package it.csi.sira.frontend.scriva.business.dao;

import java.util.List;
import java.util.Map;

import it.csi.sira.frontend.scriva.business.dto.ConfigurazioneDTO;


/**
 * The interface Configurazione dao.
 *
 * @author CSI PIEMONTE
 */
public interface ConfigurazioneDAO {


    /**
     * Load config list.
     *
     * @return List<ConfigurazioneDTO> list
     */
    List<ConfigurazioneDTO> loadConfig();

    /**
     * Load config by key list.
     *
     * @param key chiave
     * @return List<ConfigurazioneDTO> list
     */
    List<ConfigurazioneDTO> loadConfigByKey(String key);

    /**
     * Load config by key list map.
     *
     * @param keys lista di chiavi
     * @return Map<String, String> map
     */
    Map<String, String> loadConfigByKeyList(List<String> keys);
    
    /**
     * insert new config .
     *
     * @param configurazione DTO
     * @return configurazione DTO
     */
    ConfigurazioneDTO insertConfigurazioneDTO(ConfigurazioneDTO configurazioneDTO);
    
    
    /**
     * update new config .
     *
     * @param configurazione DTO
     * @return configurazione DTO
     */
    ConfigurazioneDTO updatetConfigurazioneDTO(ConfigurazioneDTO configurazioneDTO);
    
}

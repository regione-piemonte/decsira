package it.geosolutions.csi.sira.backend.queryform.service;

import it.geosolutions.csi.sira.backend.queryform.model.QueryFormConfig;
import it.geosolutions.csi.sira.backend.queryform.model.QueryFormConfigProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Basic service exposing the query form configuration to HTTP clients.
 * 
 * @author Stefano Costa, GeoSolutions
 *
 */
@Controller
@RequestMapping("/queryformconfig")
public class QueryFormConfigService {

    @Autowired
    private QueryFormConfigProvider provider;

    @RequestMapping(value = "/{featureType}", method = RequestMethod.GET)
    @ResponseBody
    public QueryFormConfig getQueryFormConfig(@PathVariable("featureType") String featureTypeName) {
        return provider.getConfiguration(featureTypeName);
    }

    public QueryFormConfigProvider getProvider() {
        return provider;
    }

    public void setProvider(QueryFormConfigProvider provider) {
        this.provider = provider;
    }

}

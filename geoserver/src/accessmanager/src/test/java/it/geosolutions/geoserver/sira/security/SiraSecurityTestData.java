package it.geosolutions.geoserver.sira.security;

import org.geoserver.test.AbstractAppSchemaMockData;

public class SiraSecurityTestData extends AbstractAppSchemaMockData {

    /**
     * Prefix for sira namespace.
     */
    protected static final String SIRA_PREFIX = "sira";

    /**
     * URI for sira namespace.
     */
    protected static final String SIRA_URI = "http://www.regione.piemonte.it/ambiente/sira/1.0";

    static final String AUA_FEATURE_TYPE = "AutorizzazioneUnicaAmbientale";
    static final String ISTANZA_FEATURE_TYPE = "IstanzaAutorizzativa";

    public SiraSecurityTestData() {
        setSchemaCatalog("sira-catalog.xml");
    }

    @Override
    protected void addContent() {
        putNamespace(SIRA_PREFIX, SIRA_URI);
        addFeatureType(SIRA_PREFIX, AUA_FEATURE_TYPE, "AUA.xml", "aua.properties", "sira-catalog.xml");
        addFeatureType(SIRA_PREFIX, ISTANZA_FEATURE_TYPE, "Istanza.xml", "istanza.properties", "sira-catalog.xml");
    }

}

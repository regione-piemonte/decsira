<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 

 xmlns:decsiraogc_idf_alb_monum="http://www.regione.piemonte.it/ambiente/decsiraogc_idf_alb_monum/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>DECSIRA_AlberiMonumentali</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>DECSIRA_AlberiMonumentali</Title>
      <Abstract>Cerchio</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
	  	  
        <Rule>
          <Name>Rule1</Name>
          <Title>Iscritto in elenco</Title>
          <ogc:Filter>
            <ogc:PropertyIsNotEqualTo>
             <ogc:PropertyName>decsiraogc_idf_alb_monum:descrStato</ogc:PropertyName>
              <ogc:Literal>Rimosso dall`elenco per morte naturale</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
          </ogc:Filter>
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>triangle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#19b041</CssParameter>
                  </Fill>
                  <Stroke>
                    	<CssParameter name="stroke-width">1.3</CssParameter>
                  </Stroke>
				  </Mark>
              <Size>12</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>
		   	  
        <Rule>
          <Name>Rule2</Name>
          <Title>Rimosso dall'elenco per morte naturale</Title>
		  <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>decsiraogc_idf_alb_monum:descrStato</ogc:PropertyName>
              <ogc:Literal>Rimosso dall`elenco per morte naturale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>triangle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#7d32a8</CssParameter>
                  </Fill>
                  <Stroke>
                    	<CssParameter name="stroke-width">1.3</CssParameter>
                  </Stroke>
                </Mark>
              <Size>12</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>			
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 

 xmlns:decsiraogc_idf_ads="http://www.regione.piemonte.it/ambiente/decsiraogc_idf_ads/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>default_circle</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Default Cerchio</Title>
      <Abstract>Cerchio</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
	  
<!-- Aree di saggio a superficie nota   -->    	  
        <Rule>
          <Name>Rule1</Name>
          <Title> Aree di saggio a superficie nota</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>decsiraogc_idf_ads:descrTipoAds</ogc:PropertyName>
              <ogc:Literal>A superficie nota</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>500000</MaxScaleDenominator>       
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#001cd1</CssParameter>
                  </Fill>
				  </Mark>
              <Size>7</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>
		
<!-- Aree di saggio relascopica completa   -->    	  
        <Rule>
          <Name>Rule2</Name>
          <Title> Aree di saggio relascopica completa</Title>
		  <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>decsiraogc_idf_ads:descrTipoAds</ogc:PropertyName>
              <ogc:Literal>Relascopica completa</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>500000</MaxScaleDenominator>  
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#b85300</CssParameter>
                  </Fill>
                </Mark>
              <Size>7</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>		
		
<!-- Aree di saggio relascopica semplice   -->    	  
        <Rule>
          <Name>Rule3</Name>
          <Title> Aree di saggio relascopica semplice</Title>
		  <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>decsiraogc_idf_ads:descrTipoAds</ogc:PropertyName>
              <ogc:Literal>Relascopica semplice</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>500000</MaxScaleDenominator>  
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#00bd4b</CssParameter>
                  </Fill>
                </Mark>
              <Size>7</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>	

<!-- Aree di saggio monitoraggio permanente  -->    	  
        <Rule>
          <Name>Rule4</Name>
          <Title> Aree di saggio monitoraggio permanente</Title>
		  <ogc:Filter>
            <ogc:PropertyIsEqualTo>
             <ogc:PropertyName>decsiraogc_idf_ads:descrTipoAds</ogc:PropertyName>
              <ogc:Literal>Monitoraggio permanente</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
           <MaxScaleDenominator>500000</MaxScaleDenominator>  
	         <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#ff0008</CssParameter>
                  </Fill>
                </Mark>
              <Size>7</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>			
		
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
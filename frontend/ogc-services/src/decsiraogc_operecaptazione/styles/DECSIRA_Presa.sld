<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_operecaptazione="http://www.regione.piemonte.it/ambiente/decsiraogc_operecaptazione/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>default_triangolo</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Presa da corpo idrico superficiale</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
	  
<!-- non definito     -->    	  
        <Rule>
          <Name>R1</Name>
          <Title>non definito</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_operecaptazione:desTipoPresa</ogc:PropertyName>
              <ogc:Literal>Non definito</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	        <MaxScaleDenominator>100000</MaxScaleDenominator>
            <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>triangle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#00ff00</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#3d3d3d</CssParameter>
                    <CssParameter name="stroke-width">1.2</CssParameter>                                      
                  </Stroke>
                </Mark>
              <Size>10</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>

<!-- da corpo idrico naturale     -->    	  
        <Rule>
          <Name>R2</Name>
          <Title>da corpo idrico naturale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_operecaptazione:desTipoPresa</ogc:PropertyName>
              <ogc:Literal>da corpo idrico naturale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	        <MaxScaleDenominator>100000</MaxScaleDenominator>
            <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>triangle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#004da8</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#3d3d3d</CssParameter>
                    <CssParameter name="stroke-width">1.2</CssParameter>                                      
                  </Stroke>
                </Mark>
              <Size>10</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>

<!-- da corpo idrico artificiale     -->    	  
        <Rule>
          <Name>R3</Name>
          <Title>da corpo idrico artificiale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_operecaptazione:desTipoPresa</ogc:PropertyName>
              <ogc:Literal>da corpo idrico artificiale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	        <MaxScaleDenominator>100000</MaxScaleDenominator>
            <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>triangle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#e600a9</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#3d3d3d</CssParameter>
                    <CssParameter name="stroke-width">1.2</CssParameter>                                      
                  </Stroke>
                </Mark>
              <Size>10</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
	  
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_stabilimenti="
 http://www.regione.piemonte.it/ambiente/decsiraogc_stabilimenti/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <NamedLayer>

    <Name> Stabilimenti Stato Sede Operativa </Name>

    <UserStyle>
      <Name>Concentric Circle</Name>
      <Title>Concentric circle</Title>
      <Abstract>A style with two concentric circles</Abstract>
      <FeatureTypeStyle>
	 
	 <Rule>
       
	     <Name>R1</Name>
         <Title> ATTIVO </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_stabilimenti:idStato</ogc:PropertyName>
              <ogc:Literal>101</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                 <Mark>
                <WellKnownName>triangle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#87cff2</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
          </Graphic>
        </PointSymbolizer>
        </Rule>
	  
	   <Rule>
	    <Name>R2</Name>
         <Title>CESSATO</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_stabilimenti:idStato</ogc:PropertyName>
              <ogc:Literal>199</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                 <Mark>
                <WellKnownName>triangle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#a30029</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
          </Graphic>
        </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_areeprotezione_pta="http://www.regione.piemonte.it/ambiente/decsiraogc_areeprotezione_pta/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Aree Ricarica Acquiferi Profondi</Name>
    <UserStyle>
	  <Title>Aree di ricarica degli acquiferi profondi</Title>
      <Abstract>Aree di ricarica degli acquiferi profondi</Abstract>
        <FeatureTypeStyle>
          
<!-- Area ricarica degli acquiferi profondi -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> Area ricarica degli acquiferi profondi</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>tipo_area</ogc:PropertyName>
              <ogc:Literal>1</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fdd880</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			</CssParameter>
			</Stroke>
		 </PolygonSymbolizer>
	</Rule>
		
<!-- Fascia tampone delle aree di ricarica   -->      
	  <Rule>
	    <Name>R2</Name>
         <Title> Fascia tampone delle aree di ricarica</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>tipo_area</ogc:PropertyName>
              <ogc:Literal>3</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fdd880</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			</CssParameter>
			</Stroke>
           </PolygonSymbolizer>  
           <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://times</WellKnownName>
                     <Stroke>
                      <CssParameter name="stroke">#90704c</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>12</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>       
        </Rule>
		
<!-- Aree di potenziale ricarica - anfiteatri morenici -->      
	  <Rule>
	    <Name>R3</Name>
         <Title> Aree di potenziale ricarica - anfiteatri morenici</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>tipo_area</ogc:PropertyName>
              <ogc:Literal>2</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fdd880</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			</CssParameter>
			</Stroke>
		 </PolygonSymbolizer>
	     <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://slash</WellKnownName>
                     <Stroke>
                      <CssParameter name="stroke">#90704c</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>12</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
	</Rule>
	
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
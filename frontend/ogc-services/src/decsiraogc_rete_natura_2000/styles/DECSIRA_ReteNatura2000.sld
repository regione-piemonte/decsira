<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
xmlns:decsiraogc_rete_natura_2000="http://www.regione.piemonte.it/ambiente/decsiraogc_rete_natura_2000/1.0" 
xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Vincoli (Zone Speciali di Conservazione - ZSC e SIC)</Name>
    <UserStyle>
    <Title>Vincoli (Zone Speciali di Conservazione - ZSC e SIC)</Title>
    <Abstract>Vincoli (Zone Speciali di Conservazione - ZSC e SIC)</Abstract>
      <FeatureTypeStyle>
	
	  <Rule>
	    <Name>ZPS</Name>
         <Title>ZPS</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_rete_natura_2000:descrTipoReteNatura2000</ogc:PropertyName>
               <ogc:Literal>ZPS</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#007800</ogc:Literal>
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
                      <CssParameter name="stroke">#007800</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>7</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
		</PolygonSymbolizer>
      </Rule>
        
      <Rule>
	    <Name>ZPS e ZSC/SIC coincidenti</Name>
         <Title>ZPS e ZSC/SIC coincidenti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_rete_natura_2000:descrTipoReteNatura2000</ogc:PropertyName>
               <ogc:Literal>ZPS e ZSC/SIC coincidenti</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#007800</ogc:Literal>
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
                      <CssParameter name="stroke">#007800</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>7</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
		</PolygonSymbolizer>
      </Rule>
        
      <Rule>
	    <Name>ZSC/SIC</Name>
         <Title>ZSC/SIC</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_rete_natura_2000:descrTipoReteNatura2000</ogc:PropertyName>
               <ogc:Literal>ZSC/SIC</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#007800</ogc:Literal>
			</CssParameter>
			</Stroke>
           </PolygonSymbolizer>  
	    <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://backslash</WellKnownName>
                     <Stroke>
                      <CssParameter name="stroke">#007800</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>7</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
		</PolygonSymbolizer>
      </Rule>

   </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
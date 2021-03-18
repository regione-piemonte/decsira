<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_sivia="http://www.regione.piemonte.it/ambiente/decsiraogc_sivia/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <!-- a Named Layer is the basic building block of an SLD document -->
 

  <NamedLayer>
    <Name>VIA TIPO PROCEDURE</Name>
    <UserStyle>
	  <Title>VIA TIPO PROCEDURE</Title>
      <Abstract>VIA TIPO PROCEDURE</Abstract>
        <FeatureTypeStyle>
          
 <!-- VIA REGIONALE - Fase Verifica -->
	  <Rule>
	    <Name>R1</Name>
         <Title>VIA REGIONALE - Fase Verifica</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VER</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
        <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#23f423</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>      
        </Rule>
		
<!-- VIA REGIONALE - Fase Specificazione   -->      
	  <Rule>
	    <Name>R2</Name>
         <Title>VIA REGIONALE - Fase Specificazione</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>SPE</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
         <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#14c95a</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>        
        </Rule>
		
<!-- VIA REGIONALE - FASE VALUTAZIONE -->      
	  <Rule>
	    <Name>R3</Name>
         <Title>VIA REGIONALE - Fase Valutazione</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VAL</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
             <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#40a033</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>        
	</Rule>
	
<!-- VIA NAZIONALE - FASE VERIFICA #f49923 -->     
	  <Rule>
	    <Name>R4</Name>
         <Title>VIA NAZIONALE - Fase Verifica</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VRN</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
        <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#f49923</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>10</Size>
          </Graphic>
        </PointSymbolizer>       
	</Rule>	
	
<!-- VIA NAZIONALE - FASE PARERE #f47a23 -->      
	  <Rule>
	    <Name>R5</Name>
         <Title>VIA NAZIONALE - Fase Parere</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>PAR</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
           <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#f47a23</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>10</Size>
          </Graphic>
        </PointSymbolizer>        
	</Rule>	
	
<!-- VALUTAZIONE D'INCIDENZA - FASE SCREENING #cdda14 -->      
	  <Rule>
	    <Name>R6</Name>
         <Title>VALUTAZIONE D'INCIDENZA - Fase Screening</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>SCR</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#cdda14</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>       
	</Rule>	

	
<!-- VALUTAZIONE INCIDENZA - FASE APPROPRIATA #8eb037-->      
	  <Rule>
	    <Name>R7</Name>
         <Title>VALUTAZIONE D'INCIDENZA - Appropriata</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#8eb037</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>         
	   </Rule>	
	    </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
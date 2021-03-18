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
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#23f423</ogc:Literal>
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
                      <CssParameter name="stroke">#23f423</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>14</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
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
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#14c95a</ogc:Literal>
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
                      <CssParameter name="stroke">#14c95a</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>11</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
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
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#40a033</ogc:Literal>
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
                      <CssParameter name="stroke">#40a033</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>7</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>    
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
	</Rule>
	
<!-- VIA NAZIONALE - FASE VERIFICA -->      
	  <Rule>
	    <Name>R4</Name>
         <Title>VIA NAZIONALE - Fase Verifica</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VRN</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#f49923</ogc:Literal>
			</CssParameter>
			</Stroke>
           </PolygonSymbolizer>  
           <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://vertline</WellKnownName>
                     <Stroke>
                      <CssParameter name="stroke">#f49923</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>12</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>  
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
	</Rule>	
	
<!-- VIA NAZIONALE - FASE PARERE -->      
	  <Rule>
	    <Name>R5</Name>
         <Title>VIA NAZIONALE - Fase Parere</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>PAR</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#f47a23</ogc:Literal>
			</CssParameter>
			</Stroke>
           </PolygonSymbolizer>  
           <PolygonSymbolizer>
            <Fill>
              <GraphicFill>
                <Graphic>
                  <Mark>
                    <WellKnownName>shape://horline</WellKnownName>
                     <Stroke>
                      <CssParameter name="stroke">#f47a23</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>10</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>  
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
	</Rule>	
	
<!-- VALUTAZIONE D'INCIDENZA - FASE SCREENING -->      
	  <Rule>
	    <Name>R6</Name>
         <Title>VALUTAZIONE D'INCIDENZA - Fase Screening</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>SCR</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#cdda14</ogc:Literal>
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
                      <CssParameter name="stroke">#cdda14</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>14</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer> 
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
	</Rule>	

	
<!-- VALUTAZIONE INCIDENZA - FASE APPROPRIATA -->      
	  <Rule>
	    <Name>R7</Name>
         <Title>VALUTAZIONE D'INCIDENZA - Appropriata</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_sivia:tipologiaFase</ogc:PropertyName>
              <ogc:Literal>VI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>             													 
            <Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#8eb037</ogc:Literal>
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
                      <CssParameter name="stroke">#8eb037</CssParameter>
                      <CssParameter name="stroke-width">1</CssParameter>
					</Stroke>
                  </Mark>
                  <Size>8</Size>
                </Graphic>
              </GraphicFill>
            </Fill>
          </PolygonSymbolizer>  
         <TextSymbolizer>
           <Label>
              <ogc:PropertyName>decsiraogc_sivia:codiceFase</ogc:PropertyName>
           </Label>
           <Halo>
            <Radius>3</Radius>
             <Fill>
               <CssParameter name="fill">#FFFFFF</CssParameter>
             </Fill>
           </Halo>
         </TextSymbolizer> 
	   </Rule>	
	    </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
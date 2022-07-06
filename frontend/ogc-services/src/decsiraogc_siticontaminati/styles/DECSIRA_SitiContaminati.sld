<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_siticontaminati="http://www.regione.piemonte.it/ambiente/decsiraogc_siticontaminati/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Anagrafe Siti Contaminati</Name>
    <UserStyle>
	  <Title>Siti Contaminati censiti in Anagrafe (Fonte ASCO))</Title>
      <Abstract>Siti Contaminati censiti in Anagrafe (Fonte ASCO)</Abstract>
        <FeatureTypeStyle>
          

		
<!-- Bonifica e ripristino ambientale   -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> Bonifica e ripristino ambientale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> BONIFICA E RIPRISTINO AMBIENTALE</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#00ff04</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>8</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
		
 <!-- Bonifica e ripristino ambientale con misure di sicurezza   -->           
		<Rule>
		<Name>R2</Name>
           <Title> Bonifica e ripristino ambientale con misure di sicurezza</Title>
           <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal>BONIFICA E RIPRISTINO AMBIENTALE CON MISURE DI SICUREZZA</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
              <Graphic>
           <Mark>
             <WellKnownName>circle</WellKnownName>
             <Fill>
               <CssParameter name="fill">#ffe100</CssParameter>
             </Fill>
             <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
             </Stroke>
              </Mark>
              <Size>8</Size>
         </Graphic>
          </PointSymbolizer>
        </Rule>
          
  <!-- Intervento non necessario   -->          
		<Rule>
		  <Name>R3</Name>
           <Title> Intervento non necessario</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> INTERVENTO NON NECESSARIO</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#2036fc</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>8</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
          
    <!-- Intervento non necessario a seguito analisi di rischio   -->                
		<Rule>
           <Name>R4</Name>
           <Title> Intervento non necessario a seguito analisi di rischio</Title>
            <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> INTERVENTO NON NECESSARIO A SEGUITO ANALISI DI RISCHIO</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#20edfc</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>8</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
          
      <!-- Messa in sicurezza operativa   -->             
		<Rule>
		   <Name>R5</Name>
           <Title> Messa in sicurezza operativa</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> MESSA IN SICUREZZA OPERATIVA</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ea12dc</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>8.5</Size>
            </Graphic>
          </PointSymbolizer>
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ffffff</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>4.5</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
		
        <!-- Messa in sicurezza permanente   -->        
        <Rule>
		   <Name>R6</Name>
           <Title> Messa in sicurezza permanente</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> MESSA IN SICUREZZA PERMANENTE</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>square</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#f98f04</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>8</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
          
              
         <!-- Interventi diversi sullo stesso sito   -->        
        <Rule>
		   <Name>R7</Name>
           <Title> Interventi diversi sullo stesso sito</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> INTERVENTI DIVERSI SULLO STESSO SITO</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>X</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#000000</CssParameter>
                </Fill>
                 </Mark>
              <Size>9</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
          


<!-- Default   -->      
	  <Rule>
	    <Name>R8</Name>
         <Title> Verifica in corso</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_siticontaminati:legenda</ogc:PropertyName>
              <ogc:Literal> n.d.</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>triangle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ff0000</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
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
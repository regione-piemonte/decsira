<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
 xmlns:decsiraogc_geo_biodiversita_piani="http://www.regione.piemonte.it/ambiente/decsiraogc_geo_biodiversita_piani/1.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc"
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 
 
  <!-- a Named Layer is the basic building block of an SLD document -->
  
  
  <NamedLayer>
    <Name>Piani naturalistici: Vincolo</Name>
    <UserStyle>
    <Title>Piani naturalistici: Vincolo</Title>
    <Abstract>Piani naturalistici: Vincolo</Abstract>
	
      <FeatureTypeStyle>
	  
        <!-- WMS piani naturalistici: vincoli - Accesso-->
	 <Rule>
	    <Name>R1</Name>
         <Title>Accesso</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Accesso</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ea586b</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
      <!-- WMS piani naturalistici: vincoli - Acqua-->
	 <Rule>
	    <Name>R2</Name>
         <Title>Acqua</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Acqua</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#55ffff</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
		<!-- WMS piani naturalistici: vincoli - Area archeologica-->
	 <Rule>
	    <Name>R3</Name>
         <Title>Area archeologica</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Area archeologica</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#aa00ff</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
		<!-- WMS piani naturalistici: vincoli - Area attrezzata-->
	 <Rule>
	    <Name>R4</Name>
         <Title>Area attrezzata</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Area attrezzata</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffff7f</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
		<!-- WMS piani naturalistici: vincoli - Aree a prato e pascolo-->
	 <Rule>
	    <Name>R5</Name>
         <Title>Aree a prato e pascolo</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Aree a prato e pascolo</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#868151</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	 <!-- WMS piani naturalistici: vincoli - Aree concentrazione turistica-->
	 <Rule>
	    <Name>R6</Name>
         <Title>Aree concentrazione turistica</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Aree concentrazione turistica</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffaaff</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
		<!-- WMS piani naturalistici: vincoli - Aree di protezione assoluta-->
	 <Rule>
	    <Name>R7</Name>
         <Title>Aree di protezione assoluta</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Aree di protezione assoluta</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f5535e</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
			<!-- WMS piani naturalistici: vincoli - Aree salvaguardia risorse idropotabili-->
	 <Rule>
	    <Name>R8</Name>
         <Title>Aree salvaguardia risorse idropotabili</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Aree salvaguardia risorse idropotabili</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#5555ff</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
		<!-- WMS piani naturalistici: vincoli - Bosco produttivo-->
	  <Rule>
	    <Name>R9</Name>
         <Title>Bosco produttivo</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Bosco produttivo</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#55aa00</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
			<!-- WMS piani naturalistici: vincoli - Condotte pressione-->
	  <Rule>
	    <Name>R10</Name>
         <Title>Condotte pressione</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Condotte pressione</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d6d6d6</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
			<!-- WMS piani naturalistici: vincoli - Frane-->
	  <Rule>
	    <Name>R11</Name>
         <Title>Frane</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Frane</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#c9a675</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	 <!-- WMS piani naturalistici: vincoli - Infrastrutture-->
	  <Rule>
	    <Name>R12</Name>
         <Title>Infrastrutture</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Infrastrutture</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f86230</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	<!-- WMS piani naturalistici: vincoli - Interesse naturalistico-->
	  <Rule>
	    <Name>R13</Name>
         <Title>Interesse naturalistico</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Interesse naturalistico</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00ff00</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	<!-- WMS piani naturalistici: vincoli - Parcheggi-->
	  <Rule>
	    <Name>R14</Name>
         <Title>Parcheggi</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Parcheggi</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#666666</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	  <!-- WMS piani naturalistici: vincoli - Riequilibrio ecologico-->
	  <Rule>
	    <Name>R15</Name>
         <Title>Riequilibrio ecologico</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Riequilibrio ecologico</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#9764bb</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>
		
	<!-- WMS piani naturalistici: vincoli - Viabilita'-->
	  <Rule>
	    <Name>R16</Name>
         <Title>Viabilita'</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>desc_vincolo</ogc:PropertyName>
			  <ogc:Literal>Viabilita'</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#936c96</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
            </CssParameter>
			</Fill>				
           <Stroke>
              <CssParameter name="stroke">>#000001</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
           </PolygonSymbolizer>         
        </Rule>		
		
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
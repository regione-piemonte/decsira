<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" 
  xmlns:decsiraogc_biodiversita_bdn_piano_gest_uso="http://www.regione.piemonte.it/ambiente/decsiraogc_biodiversita_bdn_piano_gest_uso/1.0"    
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <NamedLayer>
    <Name>Piani di Gestione Rete Natura 2000</Name>
    <UserStyle>
    <Title>Piani di Gestione Rete Natura 2000</Title>
    <Abstract>Piani di Gestione Rete Natura 2000</Abstract>
      <FeatureTypeStyle>

        <!-- WMS piani gestione: habitat - cod habitat 3110 -->
	 <Rule>
	    <Name>R1</Name>
         <Title>3110</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3110</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#4205d9</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 3130 -->
	 <Rule>
	    <Name>R2</Name>
         <Title>3130</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#1c5081</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 3140 -->
	 <Rule>
	    <Name>R3</Name>
         <Title>3140</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3140</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#3366ff</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 3150 -->
	 <Rule>
	    <Name>R4</Name>
         <Title>3150</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3150</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00e5a6</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 3220 -->
	 <Rule>
	    <Name>R5</Name>
         <Title>3220</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3220</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00ffff</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 3230 -->
	 <Rule>
	    <Name>R6</Name>
         <Title>3230</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3230</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#33bfff</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 3240 -->
	 <Rule>
	    <Name>R7</Name>
         <Title>3240</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3240</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00c69f</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 3250 -->
	 <Rule>
	    <Name>R8</Name>
         <Title>3250</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3250</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#7498b6</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 3260 -->
	 <Rule>
	    <Name>R9</Name>
         <Title>3260</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3260</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#73d9ff</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 3270 -->
	 <Rule>
	    <Name>R10</Name>
         <Title>3270</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>3270</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b2d4e5</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 4030 -->
	 <Rule>
	    <Name>R11</Name>
         <Title>4030</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>4030</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e66633</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 4060 -->
	 <Rule>
	    <Name>R12</Name>
         <Title>4060</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>4060</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fc5c23</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 4070* -->
	 <Rule>
	    <Name>R13</Name>
         <Title>4070*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>4070*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ebc563</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 4080 -->
	 <Rule>
	    <Name>R14</Name>
         <Title>4080</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>4080</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e0a72a</ogc:Literal>
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
		
   <!-- WMS piani gestione: habitat - cod habitat 1 5130 -->
	 <Rule>
	    <Name>R15</Name>
         <Title>5130</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>5130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffb3bf</ogc:Literal>
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
	
<!-- WMS piani gestione: habitat - cod habitat 1 6110 -->
	 <Rule>
	    <Name>R16</Name>
         <Title>6110</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6110</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ff8a43</ogc:Literal>
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
		
<!-- WMS piani gestione: habitat - cod habitat 1 6110* -->
	 <Rule>
	    <Name>R17</Name>
         <Title>6110*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6110*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ff8a43</ogc:Literal>
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
		
  <!-- WMS piani gestione: habitat - cod habitat 1 6130 -->
	 <Rule>
	    <Name>R18</Name>
         <Title>6130</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f2cc80</ogc:Literal>
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
		
<!-- WMS piani gestione: habitat - cod habitat 1 6150 -->
	 <Rule>
	    <Name>R19</Name>
         <Title>6150</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6150</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f0dc0f</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 6170 -->
	 <Rule>
	    <Name>R20</Name>
         <Title>6170</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6170</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d7c850</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 6210 -->
	 <Rule>
	    <Name>R21</Name>
         <Title>6210</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6210</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffff99</ogc:Literal>
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
		
	 <!-- WMS piani gestione: habitat - cod habitat 1 6230* -->
	 <Rule>
	    <Name>R22</Name>
         <Title>6230*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6230*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffd966</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 6240* -->
	 <Rule>
	    <Name>R23</Name>
         <Title>6240*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6240*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffff07</ogc:Literal>
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
		
	 <!-- WMS piani gestione: habitat - cod habitat 1 6410 -->
	 <Rule>
	    <Name>R24</Name>
         <Title>6410</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6410</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e6e6a6</ogc:Literal>
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
		
		 <!-- WMS piani gestione: habitat - cod habitat 1 6430 -->
	 <Rule>
	    <Name>R25</Name>
         <Title>6430</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6430</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffe51a</ogc:Literal>
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
		
		 <!-- WMS piani gestione: habitat - cod habitat 1 6510 -->
	 <Rule>
	    <Name>R26</Name>
         <Title>6510</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6510</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e6e6a6</ogc:Literal>
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
		
		 <!-- WMS piani gestione: habitat - cod habitat 1 6520 -->
	 <Rule>
	    <Name>R27</Name>
         <Title>6520</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>6520</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e6e6a6</ogc:Literal>
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
		
		 <!-- WMS piani gestione: habitat - cod habitat 1 7110* -->
	 <Rule>
	    <Name>R28</Name>
         <Title>7110*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7110*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e1d0ff</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 7140 -->
	 <Rule>
	    <Name>R29</Name>
         <Title>7140</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7140</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e6cdff</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 7150 -->
	 <Rule>
	    <Name>R30</Name>
         <Title>7150</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7150</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#9543e8</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 7210* -->
	 <Rule>
	    <Name>R31</Name>
         <Title>7210*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7210*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#cc9cf3</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 7220* -->
	 <Rule>
	    <Name>R32</Name>
         <Title>7220*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7220*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#6559aa</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 1 7230 -->
	 <Rule>
	    <Name>R33</Name>
         <Title>7230</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7230</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b5d3ec</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 7240* -->
	 <Rule>
	    <Name>R34</Name>
         <Title>7240*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>7240*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#9eb8cd</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 8110 -->
	 <Rule>
	    <Name>R35</Name>
         <Title>8110</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8110</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 1 8120 -->
	 <Rule>
	    <Name>R36</Name>
         <Title>8120</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8120</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 8130 -->
	 <Rule>
	    <Name>R37</Name>
         <Title>8130</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
				<!-- WMS piani gestione: habitat - cod habitat 1 8210 -->
	 <Rule>
	    <Name>R38</Name>
         <Title>8210</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8210</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 1 8220 -->
	 <Rule>
	    <Name>R39</Name>
         <Title>8220</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8220</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 1 8230 -->
	 <Rule>
	    <Name>R40</Name>
         <Title>8230</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8230</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 8240* -->
	 <Rule>
	    <Name>R41</Name>
         <Title>8240*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8240*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d9d9d9</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 8310 -->
	 <Rule>
	    <Name>R42</Name>
         <Title>8310</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8310</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#689ab6</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 8340 -->
	 <Rule>
	    <Name>R43</Name>
         <Title>8340</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>8340</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#93e9e7</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 9110 -->
	 <Rule>
	    <Name>R44</Name>
         <Title>9110</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9110</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a4ffa7</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9130 -->
	 <Rule>
	    <Name>R45</Name>
         <Title>9130</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9130</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#72b272</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9140 -->
	 <Rule>
	    <Name>R46</Name>
         <Title>9140</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9140</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a9cf00</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9150 -->
	 <Rule>
	    <Name>R47</Name>
         <Title>9150</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9150</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#85b22f</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9160 -->
	 <Rule>
	    <Name>R48</Name>
         <Title>9160</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9160</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#718944</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9180* -->
	 <Rule>
	    <Name>R49</Name>
         <Title>9180*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9180*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#01aca9</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 91E0* -->
	 <Rule>
	    <Name>R50</Name>
         <Title>91E0*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>91E0*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00734d</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 91F0 -->
	 <Rule>
	    <Name>R51</Name>
         <Title>91F0</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>91F0</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#7fff7f</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9210* -->
	 <Rule>
	    <Name>R52</Name>
         <Title>9210*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9210*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b3b867</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9260 -->
	 <Rule>
	    <Name>R53</Name>
         <Title>9260</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9260</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#99d099</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 92A0 -->
	 <Rule>
	    <Name>R54</Name>
         <Title>92A0</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>92A0</ogc:Literal>
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
		
	<!-- WMS piani gestione: habitat - cod habitat 1 9410 -->
	 <Rule>
	    <Name>R55</Name>
         <Title>9410</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9410</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a96755</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9430* -->
	 <Rule>
	    <Name>R57</Name>
         <Title>9430*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9430*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fe80ff</ogc:Literal>
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
		
			<!-- WMS piani gestione: habitat - cod habitat 1 9420 -->
	 <Rule>
	    <Name>R56</Name>
         <Title>9420</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9420</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d7461e</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9540 -->
	 <Rule>
	    <Name>R58</Name>
         <Title>9540</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9540</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#80ddf2</ogc:Literal>
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
		
		<!-- WMS piani gestione: habitat - cod habitat 1 9560* -->
	 <Rule>
	    <Name>R59</Name>
         <Title>9560*</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>9560*</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#809dda</ogc:Literal>
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
        
        	<!-- WMS piani gestione: habitat - cod habitat Ambiente descritto secondo Corine Biotopes, EUNIS o Tipi forestali del Piemonte* -->
	 <Rule>
	    <Name>R60</Name>
         <Title>Ambiente descritto secondo Corine Biotopes, EUNIS o Tipi forestali del Piemonte</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_biodiversita_bdn_piano_gest_uso:h1CodHabitat</ogc:PropertyName>
              <ogc:Literal>n.d.</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
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
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
    <Name>Piani naturalistici: uso suolo</Name>
    <UserStyle>
    <Title>Piani naturalistici: uso suolo</Title>
    <Abstract>Piani naturalistici: uso suolo</Abstract>
	
      <FeatureTypeStyle>
        
     
	  <!-- WMS piani naturalistici: Uso suolo - Boschi di latifoglie -->
	  <Rule>
	    <Name>R1</Name>
         <Title>Boschi di latifoglie</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>1</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b6de85</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Boschi cedui -->
	 <Rule>
	    <Name>R2</Name>
         <Title>Boschi cedui</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>2</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#96ad29</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Canneti e tifeti -->
	 <Rule>
	    <Name>R3</Name>
         <Title>Canneti e tifeti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>3</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00d3de</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Vegetazione erbacea -->
	 <Rule>
	    <Name>R5</Name>
         <Title>Vegetazione erbacea</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>5</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#077c83</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Mantenimento e miglioramento dei pascoli -->
	 <Rule>
	    <Name>R0</Name>
         <Title>Lande secche</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>0</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fd9a50</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Praterie, prati stabili -->
	 <Rule>
	    <Name>R6</Name>
         <Title>Praterie, prati stabili</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>6</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fefbc8</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Colture specializzate -->
	 <Rule>
	    <Name>R7</Name>
         <Title>Colture specializzate</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>7</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e3cf02</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Arboricoltura -->
	 <Rule>
	    <Name>R8</Name>
         <Title>Arboricoltura</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>8</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffff01</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Aree urbanizzate  -->      
	  <Rule>
	    <Name>R9</Name>
         <Title>Aree urbanizzate</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>9</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f6a6ff</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Aree industriali  -->      
	  <Rule>
	    <Name>R10</Name>
         <Title>Aree industriali</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>10</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#cd01de</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Aree ricreative e per attività sportive  -->      
	  <Rule>
	    <Name>R11</Name>
         <Title>Aree ricreative e per attività sportive</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>11</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ff797a</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Acque   -->      
	  <Rule>
	    <Name>R12</Name>
         <Title>Acque</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>12</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Specchi d'acqua   -->      
	  <Rule>
	    <Name>R32</Name>
         <Title>Specchi d'acqua</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>32</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#6e3edd</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Vegetazione delle aree degradate   -->      
	  <Rule>
	    <Name>R13</Name>
         <Title>Vegetazione delle aree degradate</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>13</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a46731</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Vegetazione delle acque   -->      
	  <Rule>
	    <Name>R14</Name>
         <Title>Vegetazione delle acque</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>14</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00829a</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Bacini di cava   -->      
	    <Rule>
	    <Name>R15</Name>
         <Title>Bacini di cava</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>15</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#620063</ogc:Literal>
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
		
			<!-- WMS piani naturalistici: uso suolo - Rimboschimenti   -->      
	    <Rule>
	    <Name>R16</Name>
         <Title>Rimboschimenti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>16</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#bda600</ogc:Literal>
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
		
			<!-- WMS piani naturalistici: uso suolo - Lariceti, abetine e boscaglie di conifere   -->      
	    <Rule>
	    <Name>R17</Name>
         <Title>Lariceti, abetine e boscaglie di conifere</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>17</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#006500</ogc:Literal>
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
		
			<!-- WMS piani naturalistici: uso suolo - Vegetazione ripariale, boscaglie igrofile  -->      
	    <Rule>
	    <Name>R18</Name>
         <Title>Vegetazione ripariale, boscaglie igrofile</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>18</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#00feae</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Arbusteti  -->      
	    <Rule>
	    <Name>R19</Name>
         <Title>Arbusteti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>19</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b6c9a3</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Colture erbacee   -->      
	    <Rule>
	    <Name>R20</Name>
         <Title>Colture erbacee</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>20</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a6ffa3</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Robinieti   -->      
	    <Rule>
	    <Name>R21</Name>
         <Title>Robinieti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>21</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#decf00</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: uso suolo - Protezione e conservazione ambiente alpino d’alta quota   -->      
	    <Rule>
	    <Name>R24</Name>
         <Title>Vegetazione rupicola e macereti</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>24</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#7a7a7a</ogc:Literal>
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
		
			<!-- WMS piani naturalistici: uso suolo - Rupi, rocce, isolotti, frane  -->      
	    <Rule>
	    <Name>R25</Name>
         <Title>Rupi, rocce, isolotti, frane</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>25</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d5d3d6</ogc:Literal>
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
		
			<!-- WMS piani naturalistici: uso suolo - Ghiacciai e nevai  -->      
	    <Rule>
	    <Name>R26</Name>
         <Title>Ghiacciai e nevai</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>26</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#c5ffff</ogc:Literal>
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
		
  	<!-- WMS piani naturalistici: uso suolo - n.d.  -->      
	    <Rule>
	    <Name>R30</Name>
         <Title>n.d.</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>30</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d3d5bc</ogc:Literal>
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
        
          <!-- WMS piani naturalistici: Uso suolo - Boschi di latifoglie -->
	  <Rule>
	    <Name>R0</Name>
         <Title>Non definito</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>0</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#e3d27e</ogc:Literal>
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
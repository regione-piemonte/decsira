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
    <Name>Piani naturalistici: obiettivi</Name>
    <UserStyle>
	  <Title>Piani naturalistici: obiettivi</Title>
      <Abstract>Piani naturalistici: obiettivi</Abstract>
      
    <FeatureTypeStyle>
      
	
	<!-- WMS piani naturalistici: obbiettivi - Trasformazione e riqualificazione delle fustaie naturaliformia -->
	 <Rule>
	    <Name>R1</Name>
         <Title>Trasformazione e riqualificazione delle fustaie naturaliformi</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Mantenimento o arricchimento dell’attuale soprassuolo -->
	 <Rule>
	    <Name>R2</Name>
         <Title>Mantenimento o arricchimento dell’attuale soprassuolo</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Mantenimento o graduale ritorno alla vegetazione palustre -->
	 <Rule>
	    <Name>R3</Name>
         <Title>Mantenimento o graduale ritorno alla vegetazione palustre</Title>
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
		
		
	<!-- WMS piani naturalistici: obbiettivi - Evoluzione naturale della vegetazione -->
	 <Rule>
	    <Name>R5</Name>
         <Title>Evoluzione naturale della vegetazione</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Mantenimento e miglioramento dei pascoli -->
	 <Rule>
	    <Name>R6</Name>
         <Title>Mantenimento e miglioramento dei pascoli</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Promozione turistica -->
	 <Rule>
	    <Name>R7</Name>
         <Title>Promozione turistica</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>7</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#decf02</ogc:Literal>
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
		
	
          
 <!-- WMS piani naturalistici: obbiettivi - Riqualificazione paesaggistica -->
	 <Rule>
	    <Name>R8</Name>
         <Title>Riqualificazione paesaggistica</Title>
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
		
<!-- WMS piani naturalistici: obbiettivi - Riqualificazione aree urbane, storiche e monumentali   -->      
	  <Rule>
	    <Name>R9</Name>
         <Title>Riqualificazione aree urbane, storiche e monumentali</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Mantenimento aree attrezzate e zone destinate alla fruizione   -->      
	  <Rule>
	    <Name>R11</Name>
         <Title>Mantenimento aree attrezzate e zone destinate alla fruizione</Title>
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
		
	<!-- WMS piani naturalistici: obbiettivi - Produttivo   -->      
	  <Rule>
	    <Name>R14</Name>
         <Title>Produttivo</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>14</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#0082fe</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Recupero naturalistico   -->      
	    <Rule>
	    <Name>R15</Name>
         <Title>Recupero naturalistico</Title>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Conservazione del biotopo   -->      
	    <Rule>
	    <Name>R16</Name>
         <Title>Conservazione del biotopo</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>16</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b637eb</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Protezione dell’ambiente   -->      
	    <Rule>
	    <Name>R19</Name>
         <Title>Protezione dell’ambiente</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>19</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b6ffa3</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Miglioramento strutturale, sostituzione di specie alloctone con specie autoctone   -->      
	    <Rule>
	    <Name>R21</Name>
         <Title>Miglioramento strutturale, sostituzione di specie alloctone con specie autoctone</Title>
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
		
		
		<!-- WMS piani naturalistici: obbiettivi - Manutenzione   -->      
	    <Rule>
	    <Name>R23</Name>
         <Title>Manutenzione</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>23</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a58a2f</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Protezione e conservazione ambiente alpino d’alta quota   -->      
	    <Rule>
	    <Name>R24</Name>
         <Title>Protezione e conservazione ambiente alpino d’alta quota</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>24</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ecb5d4</ogc:Literal>
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
		
		
		<!-- WMS piani naturalistici: obbiettivi - Protezione delle pendici   -->      
	    <Rule>
	    <Name>R25</Name>
         <Title>Protezione delle pendici</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>25</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b8b8b8</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Trasformazione e riqualificazione delle fustaie naturaliformi   -->      
	    <Rule>
	    <Name>R27</Name>
         <Title>Trasformazione e riqualificazione delle fustaie naturaliformi</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>27</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffffd6</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Recupero ambientale   -->      
	    <Rule>
	    <Name>R28</Name>
         <Title>Recupero ambientale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>28</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
		  <PolygonSymbolizer>   
             <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#800000</ogc:Literal>
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
		
		<!-- WMS piani naturalistici: obbiettivi - Rinaturalizzazione   -->      
	    <Rule>
	    <Name>R29</Name>
         <Title>Rinaturalizzazione</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>29</ogc:Literal>
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
      
       <!-- WMS piani naturalistici: obbiettivi - lande secche europoee -->
	 <Rule>
	    <Name>R0</Name>
         <Title>Non definito</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_rappresentazione</ogc:PropertyName>
              <ogc:Literal>1</ogc:Literal>
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
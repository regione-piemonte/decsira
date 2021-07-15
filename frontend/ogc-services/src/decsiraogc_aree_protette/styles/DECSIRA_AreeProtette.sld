<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
xmlns:decsiraogc_aree_protette="http://www.regione.piemonte.it/ambiente/decsiraogc_aree_protette/1.0" 
xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Vincoli (Aree protette e Siti della Rete ecologica)</Name>
    <UserStyle>
    <Title>Vincoli (Aree protette e Siti della Rete ecologica)</Title>
    <Abstract>Vincoli (Aree protette e Siti della Rete ecologica)</Abstract>
      <FeatureTypeStyle>
	
	  
	  <Rule>
	    <Name>Parco Nazionale</Name>
         <Title>Parco Nazionale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Parco nazionale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#b7e821</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#55aa00</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
        
       <Rule>
	    <Name>Parco naturale</Name>
         <Title>Parco naturale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Parco naturale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#639e17</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#005500</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
        
       <Rule>
	    <Name>Riserva naturale</Name>
         <Title>Riserva naturale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Riserva naturale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#639e17</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#006200</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
	    
     <Rule>
	    <Name>Riserva speciale</Name>
         <Title>Riserva speciale</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Riserva speciale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#639e17</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#005500</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>   
        
      <Rule>
	    <Name>Aree contigue</Name>
         <Title>Aree contigue</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Area contigua</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#aa853a</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#764e21</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>  
        
      <Rule>
	    <Name>Zone naturali di salvaguardia</Name>
         <Title>Zone naturali di salvaguardia</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_aree_protette:descrTipoAreaProtetta</ogc:PropertyName>
               <ogc:Literal>Zona naturale di salvaguardia</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#c7c349</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#a39f2f</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>   

   </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
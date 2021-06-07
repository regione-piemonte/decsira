<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
xmlns:decsiraogc_idf_pfa="http://www.regione.piemonte.it/ambiente/decsiraogc_idf_pfa/1.0" 
xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Piani Forestali Aziendali</Name>
    <UserStyle>
    <Title>Piani Forestali Aziendali</Title>
    <Abstract>Piani Forestali Aziendali</Abstract>
      <FeatureTypeStyle>
	
	  
	<!-- In corso di validità fkVersione= 1  -->      
	  <Rule>
	    <Name>R1</Name>
         <Title>In corso di validita'</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_idf_pfa:descrVersione</ogc:PropertyName>
               <ogc:Literal>Prima versione</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#007800</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#007800</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
	  	  
       
  <!-- Scaduto versione fkVersione= 5-->      
	  <Rule>
	    <Name>R5</Name>
         <Title>Scaduto</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>decsiraogc_idf_pfa:descrVersione</ogc:PropertyName>
               <ogc:Literal>Scaduto</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#a779d4</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#a779d4</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		 </PolygonSymbolizer>
	</Rule>
   </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
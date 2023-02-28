<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
xmlns:decsiraogc_aree_fito="http://www.regione.piemonte.it/ambiente/decsiraogc_aree_fito/1.0" 
xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Indice di vulnerazione</Name>
    <UserStyle>
    <Title>Aree Specifiche di tutela acque da fitosanitari</Title>
    <Abstract>Aree Fitosanitari</Abstract>
      <FeatureTypeStyle>
	  
	  <Rule>
	    <Name>ALTA</Name>
         <Title>ALTA VULNERAZIONE</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>indice_vulnerazione</ogc:PropertyName>
               <ogc:Literal>ALTA</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#d41207</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			  </CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
	  
	  <Rule>
	    <Name>MEDIA</Name>
         <Title>MEDIA VULNERAZIONE</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>indice_vulnerazione</ogc:PropertyName>
               <ogc:Literal>MEDIA</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ea9e07</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			  </CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
	  
	  <Rule>
	    <Name>BASSA</Name>
         <Title>BASSA VULNERAZIONE</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>indice_vulnerazione</ogc:PropertyName>
               <ogc:Literal>BASSA</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
	    <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ffe95b</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">
			  <ogc:Literal>#6E6E6E</ogc:Literal>
			  </CssParameter>
            </Stroke>
		</PolygonSymbolizer>
      </Rule>
        
   </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
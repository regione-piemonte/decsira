<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_bdn_semaforo_fauna="http://www.regione.piemonte.it/ambiente/decsiraogc_bdn_semaforo_fauna/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>BDN - Mappa semaforica specie Fauna su Griglia 1 km </Name>
    <UserStyle>
	  <Title>BDN - Mappa semaforica specie Fauna su Griglia 1 km </Title>
      <Abstract>BDN - Mappa semaforica specie Fauna su Griglia 1 km </Abstract>
        <FeatureTypeStyle>
		
<!-- interno ricadono osservazioni di specie comuni verde -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> Griglie in cui ricadono osservazioni di specie comuni</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_protezione</ogc:PropertyName>
              <ogc:Literal>1</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#0dc900</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#0dc900</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
		 </PolygonSymbolizer>
	</Rule>
		
<!-- osservazioni di almeno una specie meritevole di attenzione giallo   -->      
	  <Rule>
	    <Name>R2</Name>
         <Title> Griglie in cui ricadono osservazioni di almeno una specie meritevole di attenzione </Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_protezione</ogc:PropertyName>
              <ogc:Literal>2</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#fff200</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#fff200</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
          </PolygonSymbolizer>       
        </Rule>
		
<!-- Aree in cui ricadono osservazioni di almeno una specie protetta legalmente  -->      
	  <Rule>
	    <Name>R3</Name>
         <Title> Griglie in cui ricadono osservazioni di almeno una specie protetta legalmente</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>classe_protezione</ogc:PropertyName>
              <ogc:Literal>3</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#ff0000</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.5</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#ff0000</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
            </Stroke>
         </PolygonSymbolizer>
	</Rule>
	
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_stabilimenti="
 http://www.regione.piemonte.it/ambiente/decsiraogc_stabilimenti/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>ImpiantoDiDepurazione</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>impianti di depurazione per abitanti equivalenti</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
     <FeatureTypeStyle>
	  
	  
<!-- Abitanti equivalenti minori 2000 -->    
	    <Rule>
		  <Name>R1</Name>
          <Title>Impianti con abitanti equivalenti minori di 2000 (a.e.)</Title>
			<ogc:Filter>
				<ogc:PropertyIsLessThan>
				<ogc:PropertyName>decsiraogc_stabilimenti:abitantiEquivalentiTrattati</ogc:PropertyName>
					<ogc:Literal>2000</ogc:Literal>
				</ogc:PropertyIsLessThan>
				</ogc:Filter>
          <MaxScaleDenominator>500000</MaxScaleDenominator> 
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#00ff00</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
            </Graphic>
          </PointSymbolizer>
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#00ff00</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>6.5</Size>
            </Graphic>
          </PointSymbolizer>
		</Rule>	
		
<!-- Abitanti equivalenti Maggiori 2000     --> 
        <Rule>
		  <Name>R2</Name>
          <Title> Impianti con abitanti equivalenti maggiori di 2000 (a.e.)</Title>
			<ogc:Filter>
				<ogc:PropertyIsGreaterThanOrEqualTo>
					<ogc:PropertyName>decsiraogc_stabilimenti:abitantiEquivalentiTrattati</ogc:PropertyName>
					<ogc:Literal>2000</ogc:Literal>
				</ogc:PropertyIsGreaterThanOrEqualTo>
				</ogc:Filter>
          <MaxScaleDenominator>500000</MaxScaleDenominator> 
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#00b200</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>10.5</Size>
            </Graphic>
          </PointSymbolizer>
		  <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#00b200</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                </Stroke>
              </Mark>
              <Size>6.5</Size>
            </Graphic>
          </PointSymbolizer>
		</Rule>
	</FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  
  <NamedLayer>
    <Name>Distribuzione Specie Fauna su Griglia 5 km</Name>
    <UserStyle>
    <Title>Distribuzione Specie Fauna su Griglia 5 km</Title>
    <Abstract>Distribuzione Specie Fauna su Griglia 5 km</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#dc5400</ogc:Literal>
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.1</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#dc5400</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
		 </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
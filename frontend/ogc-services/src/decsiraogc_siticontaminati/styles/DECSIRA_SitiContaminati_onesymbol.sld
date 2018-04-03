<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Anagrafe Siti Contaminati</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Anagrafe Siti Contaminati</Title>
      <Abstract>default</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
        <Rule>
          <Name>rule1</Name>
          <Title>Interventi siti contaminati</Title>
          <Abstract>Interventi siti contaminati</Abstract>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
            <PointSymbolizer>
              <Graphic>
              <Mark>
                <WellKnownName>star</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#ffaa00</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                  <CssParameter name="stroke-width">1</CssParameter> 
                </Stroke>
              </Mark>
              <Size>9</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
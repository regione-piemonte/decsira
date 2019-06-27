<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>default_circle</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Default Cerchio</Title>
      <Abstract>Cerchio</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
        <Rule>
          <Name>Discariche AIA e 208</Name>
          <Title>Discariche (AIA / Ex art. 208 DLgs 152/2006)</Title>
            <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#960f45</CssParameter>
                    <CssParameter name="stroke-width">2.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>14</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
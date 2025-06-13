<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>default_point</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Default Point</Title>
      <Abstract>A sample style that draws a point</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
      <FeatureTypeStyle>
        <Rule>
          <Title>Presa da sorgente</Title>
          <Abstract>Circle</Abstract>
            <MaxScaleDenominator>1000000</MaxScaleDenominator> 
            <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#0035d4</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#3d3d3d</CssParameter>
                    <CssParameter name="stroke-width">1.2</CssParameter>                                
                  </Stroke>
                </Mark>
              <Size>8</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
		<!--etichetta-->
		<Rule>
          <MaxScaleDenominator>50000</MaxScaleDenominator>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>codice_roc</ogc:PropertyName>
            </Label>
           <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-style">Italic</CssParameter>
              <CssParameter name="font-size">12</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>2</AnchorPointY>
                </AnchorPoint>
              
              </PointPlacement>
            </LabelPlacement>
         
              <Fill>
                <CssParameter name="fill">#0035d4</CssParameter>
                <CssParameter name="fill-opacity">1</CssParameter>
              </Fill>
            <VendorOption name="autoWrap">50</VendorOption>
            <VendorOption name="graphic-resize">stretch</VendorOption>
          </TextSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
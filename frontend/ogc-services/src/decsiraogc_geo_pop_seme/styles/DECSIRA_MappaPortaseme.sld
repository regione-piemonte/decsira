<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns:decsiraogc_idf_pop_seme="http://www.regione.piemonte.it/ambiente/decsiraogc_idf_pop_seme/1.0"
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Popolamenti da seme</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Popolamenti da seme</Title>
      <Abstract>A sample style that draws a polygon</Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering polygons -->
      <FeatureTypeStyle>
        <Rule>
          <Name>rule1</Name>
          <Title>Portaseme</Title>
          <MaxScaleDenominator>155625</MaxScaleDenominator>
          <PointSymbolizer>
              <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#095ee6</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>                                                    
                  </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>rule2</Name>
          <Title></Title>
       	  <MaxScaleDenominator>155625</MaxScaleDenominator>
		  <TextSymbolizer>
            <Label>
               <ogc:PropertyName>codice_specie</ogc:PropertyName>
            </Label>
            <Halo>
              <Radius>1</Radius>
              <Fill>
                <CssParameter name="fill">#FFFFFF</CssParameter>
              </Fill>
            </Halo>
            <Font>
             <CssParameter name="font-family">Arial</CssParameter>
             <CssParameter name="font-size">12</CssParameter>
             <CssParameter name="font-style">normal</CssParameter>
             <CssParameter name="font-weight">bold</CssParameter>
           </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>-0.1</AnchorPointY>
                </AnchorPoint>
                <Displacement>
                  <DisplacementX>15</DisplacementX>
                  <DisplacementY>5</DisplacementY>
                </Displacement>
              </PointPlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#095ee6</CssParameter>
            </Fill>
			<VendorOption name="conflictResolution">true</VendorOption>
            <VendorOption name="goodnessOfFit">0</VendorOption>
          </TextSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
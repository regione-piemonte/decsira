<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
   <Name>Aree idrografiche PTA</Name>
    <UserStyle>
    <Title>Aree idrografiche PTA</Title>
    <Abstract>Aree idrografiche PTA</Abstract>
      <FeatureTypeStyle>
 		 <Rule>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">
			  <ogc:Literal>#f10d0d</ogc:Literal>  
			 </CssParameter>
              <CssParameter name="fill-opacity">
                <ogc:Literal>0.0</ogc:Literal>
              </CssParameter>
			</Fill>
			<Stroke>
              <CssParameter name="stroke">#f10d0d</CssParameter>
              <CssParameter name="stroke-width">1.2</CssParameter>
            </Stroke>
		 </PolygonSymbolizer>
        </Rule>
 
  <!-- label -->
        <Rule>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>label</ogc:PropertyName>
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
                  <AnchorPointY>0</AnchorPointY>
                </AnchorPoint>
              
              </PointPlacement>
            </LabelPlacement>
         
              <Fill>
                <CssParameter name="fill">#f10d0d</CssParameter>
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
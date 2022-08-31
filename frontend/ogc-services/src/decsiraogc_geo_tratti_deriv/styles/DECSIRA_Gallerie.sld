<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>DECSIRA_Galleria</Name>
    <UserStyle>
      <Title>blue line dash</Title>
      <FeatureTypeStyle>
        <Rule>
          <Title>Tratti di galleria</Title>
          <MaxScaleDenominator>1000000</MaxScaleDenominator> 
     <LineSymbolizer>
         <Stroke>
           <CssParameter name="stroke">#0000FF</CssParameter>
           <CssParameter name="stroke-width">3</CssParameter>
           <CssParameter name="stroke-dasharray">5 2</CssParameter>
         </Stroke>
      </LineSymbolizer>
     </Rule>
     </FeatureTypeStyle>
    </UserStyle>    
  </NamedLayer>
</StyledLayerDescriptor>
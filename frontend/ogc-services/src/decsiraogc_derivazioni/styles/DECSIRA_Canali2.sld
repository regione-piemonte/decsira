<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  
  <NamedLayer>
    <Name>DECSIRA_Canali</Name>
    <UserStyle>
      <Title>two blue lines with offeset</Title>
      <FeatureTypeStyle>
        <Rule>
          <Name>Single symbol</Name>
          <Title>Tratti di Canale Derivativo</Title>
		  <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#0077e6</CssParameter>
              <CssParameter name="stroke-width">2</CssParameter>
            </Stroke>
            <PerpendicularOffset>3</PerpendicularOffset>
          </LineSymbolizer>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#0077e6</CssParameter>
              <CssParameter name="stroke-width">2</CssParameter>
            </Stroke>
            <PerpendicularOffset>-3</PerpendicularOffset>
          </LineSymbolizer>
        </Rule>
      </FeatureTypeStyle>
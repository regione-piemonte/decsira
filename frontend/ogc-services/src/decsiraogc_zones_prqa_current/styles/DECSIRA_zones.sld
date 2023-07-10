<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_zones_prqa_current="http://www.regione.piemonte.it/ambiente/decsiraogc_zones_prqa_current/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Zonizzazione qualita'' dell''aria vigente</Name>
    <UserStyle>
	  <Title>Zonizzazione qualita'' dell''aria vigente</Title>
      <Abstract>Zonizzazione qualita'' dell''aria vigente</Abstract>
        <FeatureTypeStyle>
            
		<Rule>
			<Name>IT0118 - Agglomerato</Name>
			<Title>IT0118 - Agglomerato</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0118</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#d5d5ea</ogc:Literal>
				 </CssParameter>
				  <CssParameter name="fill-opacity">
					<ogc:Literal>0.5</ogc:Literal>
				  </CssParameter>
				</Fill>
				<Stroke>
				  <CssParameter name="stroke">
				  <ogc:Literal>#000000</ogc:Literal>
				</CssParameter>
				</Stroke>
			</PolygonSymbolizer>
		</Rule>
          
        <Rule>
			<Name>IT0119 - Pianura</Name>
			<Title>IT0119 - Pianura</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0119</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#fffc89</ogc:Literal>
				 </CssParameter>
				  <CssParameter name="fill-opacity">
					<ogc:Literal>0.5</ogc:Literal>
				  </CssParameter>
				</Fill>
				<Stroke>
				  <CssParameter name="stroke">
				  <ogc:Literal>#000000</ogc:Literal>
				</CssParameter>
				</Stroke>
			</PolygonSymbolizer>
		</Rule>
		
		<Rule>
			<Name>IT0120 - Collina</Name>
			<Title>IT0120 - Collina</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0120</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#71d742</ogc:Literal>
				 </CssParameter>
				  <CssParameter name="fill-opacity">
					<ogc:Literal>0.5</ogc:Literal>
				  </CssParameter>
				</Fill>
				<Stroke>
				  <CssParameter name="stroke">
				  <ogc:Literal>#000000</ogc:Literal>
				</CssParameter>
				</Stroke>
			</PolygonSymbolizer>
		</Rule>
		
		<Rule>
			<Name>IT0121 - Montagna</Name>
			<Title>IT0121 - Montagna</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0121</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#198561</ogc:Literal>
				 </CssParameter>
				  <CssParameter name="fill-opacity">
					<ogc:Literal>0.5</ogc:Literal>
				  </CssParameter>
				</Fill>
				<Stroke>
				  <CssParameter name="stroke">
				  <ogc:Literal>#000000</ogc:Literal>
				</CssParameter>
				</Stroke>
			</PolygonSymbolizer>
		</Rule>
		
		<Rule>
			<Name>IT0122 - Piemonte</Name>
			<Title>IT0122 - Piemonte</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0122</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <GraphicFill>
					<Graphic>
					  <Mark>
						<WellKnownName>shape://slash</WellKnownName>
						 <Stroke>
						  <CssParameter name="stroke">#240025</CssParameter>
						  <CssParameter name="stroke-width">1</CssParameter>
						</Stroke>
					  </Mark>
					  <Size>12</Size>
					</Graphic>
				  </GraphicFill>
				</Fill>
            </PolygonSymbolizer>
		</Rule>
	
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
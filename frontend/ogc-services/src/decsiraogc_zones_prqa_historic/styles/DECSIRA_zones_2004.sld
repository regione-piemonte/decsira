<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xmlns:decsiraogc_zones_prqa_historic="http://www.regione.piemonte.it/ambiente/decsiraogc_zones_prqa_historic/1.0"                       
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"  
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>Zonizzazione qualita' dell'aria (DGR n. 19-12878 del 28/06/2004)</Name>
    <UserStyle>
	  <Title>Zonizzazione qualita' dell'aria (DGR n. 19-12878 del 28/06/2004)</Title>
      <Abstract>Zonizzazione qualita' dell'aria (DGR n. 19-12878 del 28/06/2004)</Abstract>
        <FeatureTypeStyle>
            
		<Rule>
			<Name>IT0103 - Zona di Piano di Torino agglomerato</Name>
			<Title>IT0103 - Zona di Piano di Torino agglomerato</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0103</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#534f42</ogc:Literal>
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
			<Name>IT0101 - Zona di Piano di Torino</Name>
			<Title>IT0101 - Zona di Piano di Torino</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0101</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#9a9c93</ogc:Literal>
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
			<Name>IT0102 - Zona di Mantenimento di Torino</Name>
			<Title>IT0102 - Zona di Mantenimento di Torino</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0102</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#d9d5d8</ogc:Literal>
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
			<Name>IT0104 - Zona di Piano di Vercelli</Name>
			<Title>IT0104 - Zona di Piano di Vercelli</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0104</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#a2075c</ogc:Literal>
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
			<Name>IT0105 - Zona di Mantenimento di Vercelli</Name>
			<Title>IT0105 - Zona di Mantenimento di Vercelli</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0105</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#db97dc</ogc:Literal>
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
			<Name>IT0106 - Zona di Piano di Novara</Name>
			<Title>IT0106 - Zona di Piano di Novara</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0106</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#c16706</ogc:Literal>
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
			<Name>IT0107 - Zona di Mantenimento di Novara</Name>
			<Title>IT0107 - Zona di Mantenimento di Novara</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0107</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#e4b969</ogc:Literal>
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
			<Name>IT0108 - Zona di Piano di Cuneo</Name>
			<Title>IT0108 - Zona di Piano di Cuneo</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0108</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#6241a8</ogc:Literal>
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
			<Name>IT0109 - Zona di Mantenimento di Cuneo</Name>
			<Title>IT0109 - Zona di Mantenimento di Cuneo</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0109</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#a599d9</ogc:Literal>
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
			<Name>IT0110 - Zona di Piano di Asti</Name>
			<Title>IT0110 - Zona di Piano di Asti</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0110</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#e23428</ogc:Literal>
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
			<Name>IT0111 - Zona di Mantenimento di Asti</Name>
			<Title>IT0111 - Zona di Mantenimento di Asti</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0111</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#d48e86</ogc:Literal>
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
			<Name>IT0112 - Zona di Piano di Alessandria</Name>
			<Title>IT0112 - Zona di Piano di Alessandria</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0112</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#c2a319</ogc:Literal>
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
			<Name>IT0113 - Zona di Mantenimento di Alessandria</Name>
			<Title>IT0113 - Zona di Mantenimento di Alessandria</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0113</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#d3d54d</ogc:Literal>
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
			<Name>IT0114 - Zona di Piano di Biella</Name>
			<Title>IT0114 - Zona di Piano di Biella</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0114</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#a3dd1b</ogc:Literal>
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
			<Name>IT0115 - Zona di Mantenimento di Biella</Name>
			<Title>IT0115 - Zona di Mantenimento di Biella</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0115</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#809848</ogc:Literal>
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
			<Name>IT0116 - Zona di Piano di Verbania</Name>
			<Title>IT0116 - Zona di Piano di Verbania</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0116</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#23717a</ogc:Literal>
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
			<Name>IT0117 - Zona di Mantenimento di Verbania</Name>
			<Title>IT0117 - Zona di Mantenimento di Verbania</Title>
			 <ogc:Filter>
				<ogc:PropertyIsEqualTo>
				  <ogc:PropertyName>zone_code</ogc:PropertyName>
				  <ogc:Literal>IT0117</ogc:Literal>
				</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<PolygonSymbolizer>
				<Fill>
				  <CssParameter name="fill">
				  <ogc:Literal>#90c9c5</ogc:Literal>
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
	
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
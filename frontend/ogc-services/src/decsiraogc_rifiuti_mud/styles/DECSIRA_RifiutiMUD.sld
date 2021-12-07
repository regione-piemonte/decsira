<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_rifiuti_mud="http://www.regione.piemonte.it/ambiente/decsiraogc_rifiuti_mud/1.0" 
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 
  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>circle</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Default circle</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
	<FeatureTypeStyle>
	  
<!-- MUD - Anno 2012  -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> MUD - Anno 2012</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2012</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#ffa552</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
 
<!-- MUD - Anno 2013  -->      
	  <Rule>
	    <Name>R2</Name>
         <Title> MUD - Anno 2013</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2013</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#ff9838</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>9</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>

<!-- MUD - Anno 2014  -->      
	  <Rule>
	    <Name>R3</Name>
         <Title> MUD - Anno 2014</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2014</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#ff8c21</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                   </Stroke>
                </Mark>
              <Size>10</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	  
<!-- MUD - Anno 2015  -->      
	  <Rule>
	    <Name>R4</Name>
         <Title> MUD - Anno 2015</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2015</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#eb811e</CssParameter>
                    <CssParameter name="stroke-width">1.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>11</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	  
<!-- MUD - Anno 2016  -->      
	  <Rule>
	    <Name>R5</Name>
         <Title> MUD - Anno 2016</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2016</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#d67820</CssParameter>
                    <CssParameter name="stroke-width">1.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>12</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	  
<!-- MUD - Anno 2017  -->      
	  <Rule>
	    <Name>R6</Name>
         <Title> MUD - Anno 2017</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2017</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#b8671c</CssParameter>
                    <CssParameter name="stroke-width">1.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>13</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	  
<!-- MUD - Anno 2018  -->      
	  <Rule>
	    <Name>R7</Name>
         <Title> MUD - Anno 2018</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2018</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#a15b1a</CssParameter>
                    <CssParameter name="stroke-width">2</CssParameter>
                   </Stroke>
                </Mark>
              <Size>14</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	  	  
	  <!-- MUD - da Anno 2019 in avanti  -->      
	  <Rule>
	    <Name>R8</Name>
         <Title> MUD - da Anno 2019 in avanti</Title>
         <MaxScaleDenominator>250000</MaxScaleDenominator> 
          <ogc:Filter>
            <ogc:PropertyIsGreaterThan>
              <ogc:PropertyName>decsiraogc_rifiuti_mud:anno</ogc:PropertyName>
              <ogc:Literal>2018</ogc:Literal>
            </ogc:PropertyIsGreaterThan>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>circle</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#874b16</CssParameter>
                    <CssParameter name="stroke-width">2.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>15</Size>
          </Graphic>
        </PointSymbolizer>
      </Rule>
	 </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_scarichi="http://www.regione.piemonte.it/ambiente/decsiraogc_scarichi/1.0"
 xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
 xmlns="http://www.opengis.net/sld" 
 xmlns:ogc="http://www.opengis.net/ogc" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 

  <!-- a Named Layer is the basic building block of an SLD document -->
  <NamedLayer>
    <Name>square</Name>
    <UserStyle>
    <!-- Styles can have names, titles and abstracts -->
      <Title>Scaricatore di Piena</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
     <FeatureTypeStyle>
       
	  <Rule>
	    <Name>R1</Name>
         <Title>Scaricatore di Piena</Title>      
         <PointSymbolizer>
            <Graphic>
                <Mark>
                  <WellKnownName>cross</WellKnownName>
                  <Fill>
                    <CssParameter name="fill">#ff0d00</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">0.5</CssParameter>
                   </Stroke>
                </Mark>
              <Size>8</Size>
          </Graphic>
        </PointSymbolizer>
       </Rule>                
                
    </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
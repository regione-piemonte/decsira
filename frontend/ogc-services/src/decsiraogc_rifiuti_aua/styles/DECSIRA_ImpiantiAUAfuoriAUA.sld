<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
 xmlns:decsiraogc_rifiuti_aua="http://www.regione.piemonte.it/ambiente/decsiraogc_rifiuti_aua/1.0" 
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
      <Title>Default Quadrati</Title>
      <Abstract></Abstract>
      <!-- FeatureTypeStyles describe how to render different features -->
      <!-- A FeatureTypeStyle for rendering points -->
	<FeatureTypeStyle>
	  
<!-- Impianti rifiuti soggetti a AUA   -->      
	  <Rule>
	    <Name>R1</Name>
         <Title> Autorizzazione Unica Ambientale (A.U.A.)</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_aua:autorizAmbImpRifiutiAUAnoAUA/decsiraogc_rifiuti_aua:AutorizAmbImpRifiutiAUAnoAUA/decsiraogc_rifiuti_aua:tipoProvvedimento</ogc:PropertyName>
              <ogc:Literal>Domanda di Autorizzazione Unica Ambientale (A.U.A.)</ogc:Literal>
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
                    <CssParameter name="stroke">#e55f00</CssParameter>
                    <CssParameter name="stroke-width">2.8</CssParameter>
                   </Stroke>
                </Mark>
              <Size>12</Size>
          </Graphic>
        </PointSymbolizer>
        </Rule>
 

<!-- Recupero di Rifiuti in procedura semplificata (non AUA)    -->      
	  <Rule>
	    <Name>R2</Name>
         <Title> Recupero di Rifiuti in procedura semplificata (fuori AUA)</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>decsiraogc_rifiuti_aua:autorizAmbImpRifiutiAUAnoAUA/decsiraogc_rifiuti_aua:AutorizAmbImpRifiutiAUAnoAUA/decsiraogc_rifiuti_aua:tipoProvvedimento</ogc:PropertyName>
              <ogc:Literal>Recupero di Rifiuti in procedura semplificata (non AUA) ai sensi degli artt. 214 e 216 del D.Lgs. 152/06</ogc:Literal>
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
                    <CssParameter name="stroke">#ffde23</CssParameter>
                    <CssParameter name="stroke-width">2.8</CssParameter>
                   </Stroke>
                </Mark>
              <Size>12</Size>
          </Graphic>
        </PointSymbolizer>
        </Rule>
    </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
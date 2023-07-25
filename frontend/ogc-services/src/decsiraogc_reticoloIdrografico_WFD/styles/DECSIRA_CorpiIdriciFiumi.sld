<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>MON_17_CI_fiumi</Name>
    <UserStyle>
      <Name>MON_17_CI_fiumi</Name>
      <FeatureTypeStyle>
        <Rule>
          <Name>&lt;all other values&gt;</Name>
          <Title>&lt;all other values&gt;</Title>
          <Abstract>&lt;all other values&gt;</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsNull>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
            </ogc:PropertyIsNull>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#000000</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01GH1N345PI</Name>
          <Title>01GH1N345PI</Title>
          <Abstract>01GH1N345PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01GH1N345PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#379178</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01GH1N719PI</Name>
          <Title>01GH1N719PI</Title>
          <Abstract>01GH1N719PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01GH1N719PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad8e5c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01GH4N166PI</Name>
          <Title>01GH4N166PI</Title>
          <Abstract>01GH4N166PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01GH4N166PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f5f556</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N004PI</Name>
          <Title>01SS1N004PI</Title>
          <Abstract>01SS1N004PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N004PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ba84c4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N015PI</Name>
          <Title>01SS1N015PI</Title>
          <Abstract>01SS1N015PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N015PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7281f2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N016PI</Name>
          <Title>01SS1N016PI</Title>
          <Abstract>01SS1N016PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N016PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#46b39b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N019PI</Name>
          <Title>01SS1N019PI</Title>
          <Abstract>01SS1N019PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N019PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5163c9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N025PI</Name>
          <Title>01SS1N025PI</Title>
          <Abstract>01SS1N025PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N025PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cf8351</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N086PI</Name>
          <Title>01SS1N086PI</Title>
          <Abstract>01SS1N086PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N086PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5f9fe3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N104PI</Name>
          <Title>01SS1N104PI</Title>
          <Abstract>01SS1N104PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N104PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#72a85d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N122PI</Name>
          <Title>01SS1N122PI</Title>
          <Abstract>01SS1N122PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N122PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7f2d40</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N125PI</Name>
          <Title>01SS1N125PI</Title>
          <Abstract>01SS1N125PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N125PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b07196</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N156PI</Name>
          <Title>01SS1N156PI</Title>
          <Abstract>01SS1N156PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N156PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#54a18f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N175PI</Name>
          <Title>01SS1N175PI</Title>
          <Abstract>01SS1N175PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N175PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#427196</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N181PI</Name>
          <Title>01SS1N181PI</Title>
          <Abstract>01SS1N181PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N181PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#997e4b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N293PI</Name>
          <Title>01SS1N293PI</Title>
          <Abstract>01SS1N293PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N293PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7c4d91</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N300PI</Name>
          <Title>01SS1N300PI</Title>
          <Abstract>01SS1N300PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N300PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#50a382</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N302PI</Name>
          <Title>01SS1N302PI</Title>
          <Abstract>01SS1N302PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N302PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6f64ed</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N360PI</Name>
          <Title>01SS1N360PI</Title>
          <Abstract>01SS1N360PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N360PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#774d8c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N365PI</Name>
          <Title>01SS1N365PI</Title>
          <Abstract>01SS1N365PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N365PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#638c49</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N391PI</Name>
          <Title>01SS1N391PI</Title>
          <Abstract>01SS1N391PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N391PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b57059</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N410PI</Name>
          <Title>01SS1N410PI</Title>
          <Abstract>01SS1N410PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N410PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#927dba</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N426PI</Name>
          <Title>01SS1N426PI</Title>
          <Abstract>01SS1N426PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N426PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6042ad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N463PI</Name>
          <Title>01SS1N463PI</Title>
          <Abstract>01SS1N463PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N463PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9467f5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N473PI</Name>
          <Title>01SS1N473PI</Title>
          <Abstract>01SS1N473PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N473PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#549684</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N500PI</Name>
          <Title>01SS1N500PI</Title>
          <Abstract>01SS1N500PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N500PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#947456</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N503PI</Name>
          <Title>01SS1N503PI</Title>
          <Abstract>01SS1N503PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N503PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9440ad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N518PI</Name>
          <Title>01SS1N518PI</Title>
          <Abstract>01SS1N518PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N518PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#70ad68</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N541PI</Name>
          <Title>01SS1N541PI</Title>
          <Abstract>01SS1N541PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N541PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3c8070</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N566PI</Name>
          <Title>01SS1N566PI</Title>
          <Abstract>01SS1N566PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N566PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7f7fe3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N588PI</Name>
          <Title>01SS1N588PI</Title>
          <Abstract>01SS1N588PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N588PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#67c3eb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N647PI</Name>
          <Title>01SS1N647PI</Title>
          <Abstract>01SS1N647PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N647PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c4615c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N652PI</Name>
          <Title>01SS1N652PI</Title>
          <Abstract>01SS1N652PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N652PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a1f0b8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N715PI</Name>
          <Title>01SS1N715PI</Title>
          <Abstract>01SS1N715PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N715PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#426796</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N716PI</Name>
          <Title>01SS1N716PI</Title>
          <Abstract>01SS1N716PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N716PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b27e6d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N725PI</Name>
          <Title>01SS1N725PI</Title>
          <Abstract>01SS1N725PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N725PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#35857e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N742PI</Name>
          <Title>01SS1N742PI</Title>
          <Abstract>01SS1N742PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N742PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6d4fa1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N743PI</Name>
          <Title>01SS1N743PI</Title>
          <Abstract>01SS1N743PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N743PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d9d477</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N764PI</Name>
          <Title>01SS1N764PI</Title>
          <Abstract>01SS1N764PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N764PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a85adb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N776PI</Name>
          <Title>01SS1N776PI</Title>
          <Abstract>01SS1N776PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N776PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c771a3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N840PI</Name>
          <Title>01SS1N840PI</Title>
          <Abstract>01SS1N840PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N840PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c87ecc</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N858PI</Name>
          <Title>01SS1N858PI</Title>
          <Abstract>01SS1N858PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N858PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#68963c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N862PI</Name>
          <Title>01SS1N862PI</Title>
          <Abstract>01SS1N862PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N862PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78f080</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N925PI</Name>
          <Title>01SS1N925PI</Title>
          <Abstract>01SS1N925PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N925PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#344a82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N940PI</Name>
          <Title>01SS1N940PI</Title>
          <Abstract>01SS1N940PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N940PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#43994f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N960PI</Name>
          <Title>01SS1N960PI</Title>
          <Abstract>01SS1N960PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N960PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#73babd</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N963PI</Name>
          <Title>01SS1N963PI</Title>
          <Abstract>01SS1N963PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N963PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8a3754</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS1N966PI</Name>
          <Title>01SS1N966PI</Title>
          <Abstract>01SS1N966PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS1N966PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#61a345</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N005PI</Name>
          <Title>01SS2N005PI</Title>
          <Abstract>01SS2N005PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N005PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9668bd</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N017PI</Name>
          <Title>01SS2N017PI</Title>
          <Abstract>01SS2N017PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N017PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#919e44</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N026PI</Name>
          <Title>01SS2N026PI</Title>
          <Abstract>01SS2N026PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N026PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c95e53</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N081PI</Name>
          <Title>01SS2N081PI</Title>
          <Abstract>01SS2N081PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N081PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#da8ee8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N082PI</Name>
          <Title>01SS2N082PI</Title>
          <Abstract>01SS2N082PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N082PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#946bd1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N087PI</Name>
          <Title>01SS2N087PI</Title>
          <Abstract>01SS2N087PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N087PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b0ba57</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N088PI</Name>
          <Title>01SS2N088PI</Title>
          <Abstract>01SS2N088PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N088PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#619642</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N105PI</Name>
          <Title>01SS2N105PI</Title>
          <Abstract>01SS2N105PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N105PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6871f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N106PI</Name>
          <Title>01SS2N106PI</Title>
          <Abstract>01SS2N106PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N106PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#866ec2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N123PI</Name>
          <Title>01SS2N123PI</Title>
          <Abstract>01SS2N123PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N123PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab7273</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N162PI</Name>
          <Title>01SS2N162PI</Title>
          <Abstract>01SS2N162PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N162PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6cb4eb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N163PI</Name>
          <Title>01SS2N163PI</Title>
          <Abstract>01SS2N163PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N163PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#466e80</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N176PI</Name>
          <Title>01SS2N176PI</Title>
          <Abstract>01SS2N176PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N176PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#51c46c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N182PI</Name>
          <Title>01SS2N182PI</Title>
          <Abstract>01SS2N182PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N182PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f704a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N185PI</Name>
          <Title>01SS2N185PI</Title>
          <Abstract>01SS2N185PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N185PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#455eb0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N188PI</Name>
          <Title>01SS2N188PI</Title>
          <Abstract>01SS2N188PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N188PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6d93ab</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N197PI</Name>
          <Title>01SS2N197PI</Title>
          <Abstract>01SS2N197PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N197PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b8ab63</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N200PI</Name>
          <Title>01SS2N200PI</Title>
          <Abstract>01SS2N200PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N200PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#48468a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N210PI</Name>
          <Title>01SS2N210PI</Title>
          <Abstract>01SS2N210PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N210PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#baf078</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N262PI</Name>
          <Title>01SS2N262PI</Title>
          <Abstract>01SS2N262PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N262PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7cd663</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N265PI</Name>
          <Title>01SS2N265PI</Title>
          <Abstract>01SS2N265PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N265PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e39697</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N282PI</Name>
          <Title>01SS2N282PI</Title>
          <Abstract>01SS2N282PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N282PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e59f87</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N294PI</Name>
          <Title>01SS2N294PI</Title>
          <Abstract>01SS2N294PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N294PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a79ded</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N303PI</Name>
          <Title>01SS2N303PI</Title>
          <Abstract>01SS2N303PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N303PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#608552</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N308PI</Name>
          <Title>01SS2N308PI</Title>
          <Abstract>01SS2N308PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N308PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a9fa98</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N309PI</Name>
          <Title>01SS2N309PI</Title>
          <Abstract>01SS2N309PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N309PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ac74d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N340PI</Name>
          <Title>01SS2N340PI</Title>
          <Abstract>01SS2N340PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N340PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#579478</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N346PI</Name>
          <Title>01SS2N346PI</Title>
          <Abstract>01SS2N346PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N346PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#59eb8c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N352PI</Name>
          <Title>01SS2N352PI</Title>
          <Abstract>01SS2N352PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N352PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#42478f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N356PI</Name>
          <Title>01SS2N356PI</Title>
          <Abstract>01SS2N356PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N356PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5b73b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N367PI</Name>
          <Title>01SS2N367PI</Title>
          <Abstract>01SS2N367PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N367PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#51859c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N374PI</Name>
          <Title>01SS2N374PI</Title>
          <Abstract>01SS2N374PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N374PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8675e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N462PI</Name>
          <Title>01SS2N462PI</Title>
          <Abstract>01SS2N462PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N462PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#63945f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N504PI</Name>
          <Title>01SS2N504PI</Title>
          <Abstract>01SS2N504PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N504PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f426f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N563PI</Name>
          <Title>01SS2N563PI</Title>
          <Abstract>01SS2N563PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N563PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c77b9d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N690PI</Name>
          <Title>01SS2N690PI</Title>
          <Abstract>01SS2N690PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N690PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#43ab4f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N691PI</Name>
          <Title>01SS2N691PI</Title>
          <Abstract>01SS2N691PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N691PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5fa395</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N710PI</Name>
          <Title>01SS2N710PI</Title>
          <Abstract>01SS2N710PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N710PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9cf3f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N718PI</Name>
          <Title>01SS2N718PI</Title>
          <Abstract>01SS2N718PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N718PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a79ded</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N720PI</Name>
          <Title>01SS2N720PI</Title>
          <Abstract>01SS2N720PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N720PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c7de54</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N726PI</Name>
          <Title>01SS2N726PI</Title>
          <Abstract>01SS2N726PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N726PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d1828a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N732PI</Name>
          <Title>01SS2N732PI</Title>
          <Abstract>01SS2N732PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N732PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f5b85</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N734PI</Name>
          <Title>01SS2N734PI</Title>
          <Abstract>01SS2N734PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N734PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#dbb84d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N744PI</Name>
          <Title>01SS2N744PI</Title>
          <Abstract>01SS2N744PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N744PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#77aac9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N746PI</Name>
          <Title>01SS2N746PI</Title>
          <Abstract>01SS2N746PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N746PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#63f7be</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N747PI</Name>
          <Title>01SS2N747PI</Title>
          <Abstract>01SS2N747PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N747PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e89f6b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N752PI</Name>
          <Title>01SS2N752PI</Title>
          <Abstract>01SS2N752PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N752PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#77b888</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N763PI</Name>
          <Title>01SS2N763PI</Title>
          <Abstract>01SS2N763PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N763PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6ba3db</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N765PI</Name>
          <Title>01SS2N765PI</Title>
          <Abstract>01SS2N765PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N765PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#76b393</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N777PI</Name>
          <Title>01SS2N777PI</Title>
          <Abstract>01SS2N777PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N777PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad3d9e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N785PI</Name>
          <Title>01SS2N785PI</Title>
          <Abstract>01SS2N785PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N785PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e3a586</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N817PI</Name>
          <Title>01SS2N817PI</Title>
          <Abstract>01SS2N817PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N817PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#70ab63</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N827PI</Name>
          <Title>01SS2N827PI</Title>
          <Abstract>01SS2N827PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N827PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad9345</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N838PI</Name>
          <Title>01SS2N838PI</Title>
          <Abstract>01SS2N838PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N838PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3b8764</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N868PI</Name>
          <Title>01SS2N868PI</Title>
          <Abstract>01SS2N868PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N868PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78a164</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N869PI</Name>
          <Title>01SS2N869PI</Title>
          <Abstract>01SS2N869PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N869PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6df26b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N932PI</Name>
          <Title>01SS2N932PI</Title>
          <Abstract>01SS2N932PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N932PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5b92f0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N933PI</Name>
          <Title>01SS2N933PI</Title>
          <Abstract>01SS2N933PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N933PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cbd966</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N934PI</Name>
          <Title>01SS2N934PI</Title>
          <Abstract>01SS2N934PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N934PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6a8748</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS2N936PI</Name>
          <Title>01SS2N936PI</Title>
          <Abstract>01SS2N936PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS2N936PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#aef25a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N018PI</Name>
          <Title>01SS3N018PI</Title>
          <Abstract>01SS3N018PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N018PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e3a878</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N164PI</Name>
          <Title>01SS3N164PI</Title>
          <Abstract>01SS3N164PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N164PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cd96e3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N347PI</Name>
          <Title>01SS3N347PI</Title>
          <Abstract>01SS3N347PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N347PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6a55ad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N721PI</Name>
          <Title>01SS3N721PI</Title>
          <Abstract>01SS3N721PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N721PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8376c4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N727PI</Name>
          <Title>01SS3N727PI</Title>
          <Abstract>01SS3N727PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N727PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#853c4b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N745PI</Name>
          <Title>01SS3N745PI</Title>
          <Abstract>01SS3N745PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N745PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#97e8aa</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N758PI</Name>
          <Title>01SS3N758PI</Title>
          <Abstract>01SS3N758PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N758PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#75c9eb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS3N828PI</Name>
          <Title>01SS3N828PI</Title>
          <Abstract>01SS3N828PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS3N828PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c6c38</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS4N829PI</Name>
          <Title>01SS4N829PI</Title>
          <Abstract>01SS4N829PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS4N829PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#93bd66</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>01SS4N830PI</Name>
          <Title>01SS4N830PI</Title>
          <Abstract>01SS4N830PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>01SS4N830PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4ca345</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N030PI</Name>
          <Title>04SS1N030PI</Title>
          <Abstract>04SS1N030PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N030PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#945987</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N041PI</Name>
          <Title>04SS1N041PI</Title>
          <Abstract>04SS1N041PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N041PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ed66ac</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N042PI</Name>
          <Title>04SS1N042PI</Title>
          <Abstract>04SS1N042PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N042PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#448782</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N089PI</Name>
          <Title>04SS1N089PI</Title>
          <Abstract>04SS1N089PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N089PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4747b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N115PI</Name>
          <Title>04SS1N115PI</Title>
          <Abstract>04SS1N115PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N115PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7d4f9e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N118PI</Name>
          <Title>04SS1N118PI</Title>
          <Abstract>04SS1N118PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N118PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#fa6969</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N127PI</Name>
          <Title>04SS1N127PI</Title>
          <Abstract>04SS1N127PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N127PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b0cc7e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N129PI</Name>
          <Title>04SS1N129PI</Title>
          <Abstract>04SS1N129PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N129PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8b9943</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N133PI</Name>
          <Title>04SS1N133PI</Title>
          <Abstract>04SS1N133PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N133PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f5a082</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N143PI</Name>
          <Title>04SS1N143PI</Title>
          <Abstract>04SS1N143PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N143PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7746c2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N146PI</Name>
          <Title>04SS1N146PI</Title>
          <Abstract>04SS1N146PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N146PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f0aa5b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N153PI</Name>
          <Title>04SS1N153PI</Title>
          <Abstract>04SS1N153PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N153PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#725a91</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N177PI</Name>
          <Title>04SS1N177PI</Title>
          <Abstract>04SS1N177PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N177PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a7eb88</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N184PI</Name>
          <Title>04SS1N184PI</Title>
          <Abstract>04SS1N184PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N184PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#913c79</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N199PI</Name>
          <Title>04SS1N199PI</Title>
          <Abstract>04SS1N199PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N199PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#639678</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N217PI</Name>
          <Title>04SS1N217PI</Title>
          <Abstract>04SS1N217PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N217PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e8de95</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N230PI</Name>
          <Title>04SS1N230PI</Title>
          <Abstract>04SS1N230PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N230PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#74b3a7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N245PI</Name>
          <Title>04SS1N245PI</Title>
          <Abstract>04SS1N245PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N245PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f5a39d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N272PI</Name>
          <Title>04SS1N272PI</Title>
          <Abstract>04SS1N272PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N272PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7ab0d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N273PI</Name>
          <Title>04SS1N273PI</Title>
          <Abstract>04SS1N273PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N273PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd6155</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N310PI</Name>
          <Title>04SS1N310PI</Title>
          <Abstract>04SS1N310PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N310PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8acf8d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N314PI</Name>
          <Title>04SS1N314PI</Title>
          <Abstract>04SS1N314PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N314PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#93dbd3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N320PI</Name>
          <Title>04SS1N320PI</Title>
          <Abstract>04SS1N320PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N320PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b54c61</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N330PI</Name>
          <Title>04SS1N330PI</Title>
          <Abstract>04SS1N330PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N330PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#86db9d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N332PI</Name>
          <Title>04SS1N332PI</Title>
          <Abstract>04SS1N332PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N332PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d6c878</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N361PI</Name>
          <Title>04SS1N361PI</Title>
          <Abstract>04SS1N361PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N361PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f285e9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N368PI</Name>
          <Title>04SS1N368PI</Title>
          <Abstract>04SS1N368PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N368PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#626996</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N375PI</Name>
          <Title>04SS1N375PI</Title>
          <Abstract>04SS1N375PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N375PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b3d689</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N377PI</Name>
          <Title>04SS1N377PI</Title>
          <Abstract>04SS1N377PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N377PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#71f5a1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N379PI</Name>
          <Title>04SS1N379PI</Title>
          <Abstract>04SS1N379PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N379PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5f79ed</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N408PI</Name>
          <Title>04SS1N408PI</Title>
          <Abstract>04SS1N408PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N408PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#59408f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N413PI</Name>
          <Title>04SS1N413PI</Title>
          <Abstract>04SS1N413PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N413PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9c49b3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N442PI</Name>
          <Title>04SS1N442PI</Title>
          <Abstract>04SS1N442PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N442PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#554ca6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N443PI</Name>
          <Title>04SS1N443PI</Title>
          <Abstract>04SS1N443PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N443PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bdbf49</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N444PI</Name>
          <Title>04SS1N444PI</Title>
          <Abstract>04SS1N444PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N444PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#618af2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N447PI</Name>
          <Title>04SS1N447PI</Title>
          <Abstract>04SS1N447PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N447PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#558a62</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N448PI</Name>
          <Title>04SS1N448PI</Title>
          <Abstract>04SS1N448PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N448PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#76ab52</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N456PI</Name>
          <Title>04SS1N456PI</Title>
          <Abstract>04SS1N456PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N456PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d188a9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N535PI</Name>
          <Title>04SS1N535PI</Title>
          <Abstract>04SS1N535PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N535PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8516c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N560PI</Name>
          <Title>04SS1N560PI</Title>
          <Abstract>04SS1N560PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N560PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6659ba</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N597PI</Name>
          <Title>04SS1N597PI</Title>
          <Abstract>04SS1N597PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N597PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f58edd</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N598PI</Name>
          <Title>04SS1N598PI</Title>
          <Abstract>04SS1N598PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N598PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7cbfaf</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N601PI</Name>
          <Title>04SS1N601PI</Title>
          <Abstract>04SS1N601PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N601PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#58943d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N648PI</Name>
          <Title>04SS1N648PI</Title>
          <Abstract>04SS1N648PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N648PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad6372</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N663PI</Name>
          <Title>04SS1N663PI</Title>
          <Abstract>04SS1N663PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N663PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#959c62</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N674PI</Name>
          <Title>04SS1N674PI</Title>
          <Abstract>04SS1N674PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N674PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#754796</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N676PI</Name>
          <Title>04SS1N676PI</Title>
          <Abstract>04SS1N676PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N676PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#875077</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N703PI</Name>
          <Title>04SS1N703PI</Title>
          <Abstract>04SS1N703PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N703PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9464e8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N753PI</Name>
          <Title>04SS1N753PI</Title>
          <Abstract>04SS1N753PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N753PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cc835c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N771PI</Name>
          <Title>04SS1N771PI</Title>
          <Abstract>04SS1N771PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N771PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9c7f64</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N809PI</Name>
          <Title>04SS1N809PI</Title>
          <Abstract>04SS1N809PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N809PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#99c468</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N860PI</Name>
          <Title>04SS1N860PI</Title>
          <Abstract>04SS1N860PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N860PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#995c90</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N905PI</Name>
          <Title>04SS1N905PI</Title>
          <Abstract>04SS1N905PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N905PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#60458c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS1N911PI</Name>
          <Title>04SS1N911PI</Title>
          <Abstract>04SS1N911PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS1N911PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c466c0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N013PI</Name>
          <Title>04SS2N013PI</Title>
          <Abstract>04SS2N013PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N013PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#73facb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N039PI</Name>
          <Title>04SS2N039PI</Title>
          <Abstract>04SS2N039PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N039PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#89f5b1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N075PI</Name>
          <Title>04SS2N075PI</Title>
          <Abstract>04SS2N075PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N075PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6084a1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N076PI</Name>
          <Title>04SS2N076PI</Title>
          <Abstract>04SS2N076PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N076PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ba6199</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N095PI</Name>
          <Title>04SS2N095PI</Title>
          <Abstract>04SS2N095PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N095PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#96b2e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N102PI</Name>
          <Title>04SS2N102PI</Title>
          <Abstract>04SS2N102PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N102PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6e8f4a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N119PI</Name>
          <Title>04SS2N119PI</Title>
          <Abstract>04SS2N119PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N119PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#39917e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N130PI</Name>
          <Title>04SS2N130PI</Title>
          <Abstract>04SS2N130PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N130PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c44ecf</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N147PI</Name>
          <Title>04SS2N147PI</Title>
          <Abstract>04SS2N147PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N147PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#599e5d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N169PI</Name>
          <Title>04SS2N169PI</Title>
          <Abstract>04SS2N169PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N169PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7f6be3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N178PI</Name>
          <Title>04SS2N178PI</Title>
          <Abstract>04SS2N178PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N178PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c3845</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N218PI</Name>
          <Title>04SS2N218PI</Title>
          <Abstract>04SS2N218PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N218PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ccd96f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N219PI</Name>
          <Title>04SS2N219PI</Title>
          <Abstract>04SS2N219PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N219PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad7b55</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N222PI</Name>
          <Title>04SS2N222PI</Title>
          <Abstract>04SS2N222PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N222PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a3ad58</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N223PI</Name>
          <Title>04SS2N223PI</Title>
          <Abstract>04SS2N223PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N223PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#df94e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N224PI</Name>
          <Title>04SS2N224PI</Title>
          <Abstract>04SS2N224PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N224PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5059ad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N234PI</Name>
          <Title>04SS2N234PI</Title>
          <Abstract>04SS2N234PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N234PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#689cb3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N239PI</Name>
          <Title>04SS2N239PI</Title>
          <Abstract>04SS2N239PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N239PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a2f794</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N246PI</Name>
          <Title>04SS2N246PI</Title>
          <Abstract>04SS2N246PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N246PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cc9c81</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N249PI</Name>
          <Title>04SS2N249PI</Title>
          <Abstract>04SS2N249PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N249PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e09f70</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N250PI</Name>
          <Title>04SS2N250PI</Title>
          <Abstract>04SS2N250PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N250PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5aa353</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N284PI</Name>
          <Title>04SS2N284PI</Title>
          <Abstract>04SS2N284PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N284PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#50995d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N285PI</Name>
          <Title>04SS2N285PI</Title>
          <Abstract>04SS2N285PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N285PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#91d6d9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N287PI</Name>
          <Title>04SS2N287PI</Title>
          <Abstract>04SS2N287PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N287PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e58e83</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N301PI</Name>
          <Title>04SS2N301PI</Title>
          <Abstract>04SS2N301PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N301PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7be88b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N304PI</Name>
          <Title>04SS2N304PI</Title>
          <Abstract>04SS2N304PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N304PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9ac74c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N316PI</Name>
          <Title>04SS2N316PI</Title>
          <Abstract>04SS2N316PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N316PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#915c78</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N321PI</Name>
          <Title>04SS2N321PI</Title>
          <Abstract>04SS2N321PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N321PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#90bf67</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N328PI</Name>
          <Title>04SS2N328PI</Title>
          <Abstract>04SS2N328PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N328PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b8769f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N362PI</Name>
          <Title>04SS2N362PI</Title>
          <Abstract>04SS2N362PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N362PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#76d67f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N369PI</Name>
          <Title>04SS2N369PI</Title>
          <Abstract>04SS2N369PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N369PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e884d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N380PI</Name>
          <Title>04SS2N380PI</Title>
          <Abstract>04SS2N380PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N380PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4bb346</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N395PI</Name>
          <Title>04SS2N395PI</Title>
          <Abstract>04SS2N395PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N395PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#76c464</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N618PI</Name>
          <Title>04SS2N618PI</Title>
          <Abstract>04SS2N618PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N618PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#60917f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N619PI</Name>
          <Title>04SS2N619PI</Title>
          <Abstract>04SS2N619PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N619PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#664bab</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N646PI</Name>
          <Title>04SS2N646PI</Title>
          <Abstract>04SS2N646PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N646PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#eb8f57</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N661PI</Name>
          <Title>04SS2N661PI</Title>
          <Abstract>04SS2N661PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N661PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9ce087</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N673PI</Name>
          <Title>04SS2N673PI</Title>
          <Abstract>04SS2N673PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N673PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7c824a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N678PI</Name>
          <Title>04SS2N678PI</Title>
          <Abstract>04SS2N678PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N678PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b5e089</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N689PI</Name>
          <Title>04SS2N689PI</Title>
          <Abstract>04SS2N689PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N689PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c97794</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N704PI</Name>
          <Title>04SS2N704PI</Title>
          <Abstract>04SS2N704PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N704PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8d965d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N728PI</Name>
          <Title>04SS2N728PI</Title>
          <Abstract>04SS2N728PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N728PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6ad481</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N754PI</Name>
          <Title>04SS2N754PI</Title>
          <Abstract>04SS2N754PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N754PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7adceb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N772PI</Name>
          <Title>04SS2N772PI</Title>
          <Abstract>04SS2N772PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N772PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c5641</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N781PI</Name>
          <Title>04SS2N781PI</Title>
          <Abstract>04SS2N781PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N781PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#573aa1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N798PI</Name>
          <Title>04SS2N798PI</Title>
          <Abstract>04SS2N798PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N798PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#699c43</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N799PI</Name>
          <Title>04SS2N799PI</Title>
          <Abstract>04SS2N799PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N799PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bfde76</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N819PI</Name>
          <Title>04SS2N819PI</Title>
          <Abstract>04SS2N819PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N819PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f5a70</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N889PI</Name>
          <Title>04SS2N889PI</Title>
          <Abstract>04SS2N889PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N889PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a685c7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N902PI</Name>
          <Title>04SS2N902PI</Title>
          <Abstract>04SS2N902PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N902PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#428b8c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N906PI</Name>
          <Title>04SS2N906PI</Title>
          <Abstract>04SS2N906PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N906PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8b56b0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N909PI</Name>
          <Title>04SS2N909PI</Title>
          <Abstract>04SS2N909PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N909PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a067e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N912PI</Name>
          <Title>04SS2N912PI</Title>
          <Abstract>04SS2N912PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N912PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a360d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N918PI</Name>
          <Title>04SS2N918PI</Title>
          <Abstract>04SS2N918PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N918PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#735782</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N919PI</Name>
          <Title>04SS2N919PI</Title>
          <Abstract>04SS2N919PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N919PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#35855d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N920PI</Name>
          <Title>04SS2N920PI</Title>
          <Abstract>04SS2N920PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N920PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad7247</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N921PI</Name>
          <Title>04SS2N921PI</Title>
          <Abstract>04SS2N921PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N921PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8ade52</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS2N927PI</Name>
          <Title>04SS2N927PI</Title>
          <Abstract>04SS2N927PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS2N927PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#76e854</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N120PI</Name>
          <Title>04SS3N120PI</Title>
          <Abstract>04SS3N120PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N120PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab57c9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N148PI</Name>
          <Title>04SS3N148PI</Title>
          <Abstract>04SS3N148PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N148PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#944e61</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N170PI</Name>
          <Title>04SS3N170PI</Title>
          <Abstract>04SS3N170PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N170PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd797e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N171PI</Name>
          <Title>04SS3N171PI</Title>
          <Abstract>04SS3N171PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N171PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#468532</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N172PI</Name>
          <Title>04SS3N172PI</Title>
          <Abstract>04SS3N172PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N172PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7d7acf</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N179PI</Name>
          <Title>04SS3N179PI</Title>
          <Abstract>04SS3N179PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N179PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#aefaa2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N225PI</Name>
          <Title>04SS3N225PI</Title>
          <Abstract>04SS3N225PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N225PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#877b55</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N226PI</Name>
          <Title>04SS3N226PI</Title>
          <Abstract>04SS3N226PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N226PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#483f8f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N288PI</Name>
          <Title>04SS3N288PI</Title>
          <Abstract>04SS3N288PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N288PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8a994c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N289PI</Name>
          <Title>04SS3N289PI</Title>
          <Abstract>04SS3N289PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N289PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9dedc6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N755PI</Name>
          <Title>04SS3N755PI</Title>
          <Abstract>04SS3N755PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N755PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#81e39a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N756PI</Name>
          <Title>04SS3N756PI</Title>
          <Abstract>04SS3N756PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N756PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#915052</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N922PI</Name>
          <Title>04SS3N922PI</Title>
          <Abstract>04SS3N922PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N922PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6367b8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>04SS3N975PI</Name>
          <Title>04SS3N975PI</Title>
          <Abstract>04SS3N975PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>04SS3N975PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6db1d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N057PI</Name>
          <Title>05SS1N057PI</Title>
          <Abstract>05SS1N057PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N057PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d6d289</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N213PI</Name>
          <Title>05SS1N213PI</Title>
          <Abstract>05SS1N213PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N213PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#933a9c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N242PI</Name>
          <Title>05SS1N242PI</Title>
          <Abstract>05SS1N242PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N242PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f5c67f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N286PI</Name>
          <Title>05SS1N286PI</Title>
          <Abstract>05SS1N286PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N286PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4f5680</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N306PI</Name>
          <Title>05SS1N306PI</Title>
          <Abstract>05SS1N306PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N306PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#84a2db</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N416PI</Name>
          <Title>05SS1N416PI</Title>
          <Abstract>05SS1N416PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N416PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#85464f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N427PI</Name>
          <Title>05SS1N427PI</Title>
          <Abstract>05SS1N427PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N427PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#74a7b3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N429PI</Name>
          <Title>05SS1N429PI</Title>
          <Abstract>05SS1N429PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N429PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#734391</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N439PI</Name>
          <Title>05SS1N439PI</Title>
          <Abstract>05SS1N439PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N439PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a84774</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N441PI</Name>
          <Title>05SS1N441PI</Title>
          <Abstract>05SS1N441PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N441PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b6e65e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N458PI</Name>
          <Title>05SS1N458PI</Title>
          <Abstract>05SS1N458PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N458PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#948053</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N464PI</Name>
          <Title>05SS1N464PI</Title>
          <Abstract>05SS1N464PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N464PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78f0c4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N482PI</Name>
          <Title>05SS1N482PI</Title>
          <Abstract>05SS1N482PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N482PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3ea852</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N520PI</Name>
          <Title>05SS1N520PI</Title>
          <Abstract>05SS1N520PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N520PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d9e04f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N569PI</Name>
          <Title>05SS1N569PI</Title>
          <Abstract>05SS1N569PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N569PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#829ac4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N586PI</Name>
          <Title>05SS1N586PI</Title>
          <Abstract>05SS1N586PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N586PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6765b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N609PI</Name>
          <Title>05SS1N609PI</Title>
          <Abstract>05SS1N609PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N609PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e575e6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N650PI</Name>
          <Title>05SS1N650PI</Title>
          <Abstract>05SS1N650PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N650PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a7bf69</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N685PI</Name>
          <Title>05SS1N685PI</Title>
          <Abstract>05SS1N685PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N685PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#53e6b2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N749PI</Name>
          <Title>05SS1N749PI</Title>
          <Abstract>05SS1N749PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N749PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#80b6e8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N823PI</Name>
          <Title>05SS1N823PI</Title>
          <Abstract>05SS1N823PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N823PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9bab71</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N851PI</Name>
          <Title>05SS1N851PI</Title>
          <Abstract>05SS1N851PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N851PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8fc2db</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N853PI</Name>
          <Title>05SS1N853PI</Title>
          <Abstract>05SS1N853PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N853PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3b5596</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N880PI</Name>
          <Title>05SS1N880PI</Title>
          <Abstract>05SS1N880PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N880PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#507585</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N914PI</Name>
          <Title>05SS1N914PI</Title>
          <Abstract>05SS1N914PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N914PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e0c255</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS1N928PI</Name>
          <Title>05SS1N928PI</Title>
          <Abstract>05SS1N928PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS1N928PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd4470</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N058PI</Name>
          <Title>05SS2N058PI</Title>
          <Abstract>05SS2N058PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N058PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7980f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N131PI</Name>
          <Title>05SS2N131PI</Title>
          <Abstract>05SS2N131PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N131PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d457b7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N243PI</Name>
          <Title>05SS2N243PI</Title>
          <Abstract>05SS2N243PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N243PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7b65f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N279PI</Name>
          <Title>05SS2N279PI</Title>
          <Abstract>05SS2N279PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N279PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3d2f82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N311PI</Name>
          <Title>05SS2N311PI</Title>
          <Abstract>05SS2N311PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N311PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd8b4d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N318PI</Name>
          <Title>05SS2N318PI</Title>
          <Abstract>05SS2N318PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N318PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6b92d1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N333PI</Name>
          <Title>05SS2N333PI</Title>
          <Abstract>05SS2N333PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N333PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78469c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N397PI</Name>
          <Title>05SS2N397PI</Title>
          <Abstract>05SS2N397PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N397PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7492c2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N399PI</Name>
          <Title>05SS2N399PI</Title>
          <Abstract>05SS2N399PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N399PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#49baa3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N422PI</Name>
          <Title>05SS2N422PI</Title>
          <Abstract>05SS2N422PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N422PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#945cc4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N451PI</Name>
          <Title>05SS2N451PI</Title>
          <Abstract>05SS2N451PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N451PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9c794e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N455PI</Name>
          <Title>05SS2N455PI</Title>
          <Abstract>05SS2N455PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N455PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6e56b0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N490PI</Name>
          <Title>05SS2N490PI</Title>
          <Abstract>05SS2N490PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N490PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#65f7d8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N506PI</Name>
          <Title>05SS2N506PI</Title>
          <Abstract>05SS2N506PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N506PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6280b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N509PI</Name>
          <Title>05SS2N509PI</Title>
          <Abstract>05SS2N509PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N509PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c6e653</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N582PI</Name>
          <Title>05SS2N582PI</Title>
          <Abstract>05SS2N582PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N582PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c96453</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N617PI</Name>
          <Title>05SS2N617PI</Title>
          <Abstract>05SS2N617PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N617PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a2d672</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N655PI</Name>
          <Title>05SS2N655PI</Title>
          <Abstract>05SS2N655PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N655PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c48c78</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N736PI</Name>
          <Title>05SS2N736PI</Title>
          <Abstract>05SS2N736PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N736PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c7ad5d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N750PI</Name>
          <Title>05SS2N750PI</Title>
          <Abstract>05SS2N750PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N750PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#536fdb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N824PI</Name>
          <Title>05SS2N824PI</Title>
          <Abstract>05SS2N824PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N824PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cee055</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N845PI</Name>
          <Title>05SS2N845PI</Title>
          <Abstract>05SS2N845PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N845PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e8829f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N884PI</Name>
          <Title>05SS2N884PI</Title>
          <Abstract>05SS2N884PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N884PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#fa8993</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N892PI</Name>
          <Title>05SS2N892PI</Title>
          <Abstract>05SS2N892PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N892PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d272e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N900PI</Name>
          <Title>05SS2N900PI</Title>
          <Abstract>05SS2N900PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N900PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#89aff5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS2N929PI</Name>
          <Title>05SS2N929PI</Title>
          <Abstract>05SS2N929PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS2N929PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bbf291</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS3N059PI</Name>
          <Title>05SS3N059PI</Title>
          <Abstract>05SS3N059PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS3N059PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#418282</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS3N751PI</Name>
          <Title>05SS3N751PI</Title>
          <Abstract>05SS3N751PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS3N751PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ebb471</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS3N847PI</Name>
          <Title>05SS3N847PI</Title>
          <Abstract>05SS3N847PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS3N847PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#67b9bf</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS3N930PI</Name>
          <Title>05SS3N930PI</Title>
          <Abstract>05SS3N930PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS3N930PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab7c46</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS3T046PI</Name>
          <Title>05SS3T046PI</Title>
          <Abstract>05SS3T046PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS3T046PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#689e5a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS4N803PI</Name>
          <Title>05SS4N803PI</Title>
          <Abstract>05SS4N803PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS4N803PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#87c1ed</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS4N804PI</Name>
          <Title>05SS4N804PI</Title>
          <Abstract>05SS4N804PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS4N804PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7662f5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>05SS4N805PI</Name>
          <Title>05SS4N805PI</Title>
          <Abstract>05SS4N805PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>05SS4N805PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8fa16c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06GH4F167PI</Name>
          <Title>06GH4F167PI</Title>
          <Abstract>06GH4F167PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06GH4F167PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#67a679</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06GH4F168PI</Name>
          <Title>06GH4F168PI</Title>
          <Abstract>06GH4F168PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06GH4F168PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#47a85d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T033PI</Name>
          <Title>06SS1T033PI</Title>
          <Abstract>06SS1T033PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T033PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#82e8b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T035PI</Name>
          <Title>06SS1T035PI</Title>
          <Abstract>06SS1T035PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T035PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#66b37e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T036PI</Name>
          <Title>06SS1T036PI</Title>
          <Abstract>06SS1T036PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T036PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#70d95b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T189PI</Name>
          <Title>06SS1T189PI</Title>
          <Abstract>06SS1T189PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T189PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#de58e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T190PI</Name>
          <Title>06SS1T190PI</Title>
          <Abstract>06SS1T190PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T190PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#60c253</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T192PI</Name>
          <Title>06SS1T192PI</Title>
          <Abstract>06SS1T192PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T192PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bf677c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T194PI</Name>
          <Title>06SS1T194PI</Title>
          <Abstract>06SS1T194PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T194PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#333182</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T201PI</Name>
          <Title>06SS1T201PI</Title>
          <Abstract>06SS1T201PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T201PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bf5867</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T203PI</Name>
          <Title>06SS1T203PI</Title>
          <Abstract>06SS1T203PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T203PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e5d291</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T216PI</Name>
          <Title>06SS1T216PI</Title>
          <Abstract>06SS1T216PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T216PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f7ed57</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T232PI</Name>
          <Title>06SS1T232PI</Title>
          <Abstract>06SS1T232PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T232PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7df5b3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T269PI</Name>
          <Title>06SS1T269PI</Title>
          <Abstract>06SS1T269PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T269PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9e9746</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T296PI</Name>
          <Title>06SS1T296PI</Title>
          <Abstract>06SS1T296PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T296PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6f9939</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T317PI</Name>
          <Title>06SS1T317PI</Title>
          <Abstract>06SS1T317PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T317PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7a8c54</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T355PI</Name>
          <Title>06SS1T355PI</Title>
          <Abstract>06SS1T355PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T355PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9ac97b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T378PI</Name>
          <Title>06SS1T378PI</Title>
          <Abstract>06SS1T378PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T378PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#73bf50</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T407PI</Name>
          <Title>06SS1T407PI</Title>
          <Abstract>06SS1T407PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T407PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7a548a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T421PI</Name>
          <Title>06SS1T421PI</Title>
          <Abstract>06SS1T421PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T421PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78ed6d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T431PI</Name>
          <Title>06SS1T431PI</Title>
          <Abstract>06SS1T431PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T431PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#71ad80</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T436PI</Name>
          <Title>06SS1T436PI</Title>
          <Abstract>06SS1T436PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T436PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#51a5c9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T466PI</Name>
          <Title>06SS1T466PI</Title>
          <Abstract>06SS1T466PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T466PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab4b4e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T471PI</Name>
          <Title>06SS1T471PI</Title>
          <Abstract>06SS1T471PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T471PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a86145</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T475PI</Name>
          <Title>06SS1T475PI</Title>
          <Abstract>06SS1T475PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T475PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cc8c89</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T481PI</Name>
          <Title>06SS1T481PI</Title>
          <Abstract>06SS1T481PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T481PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c44d84</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T492PI</Name>
          <Title>06SS1T492PI</Title>
          <Abstract>06SS1T492PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T492PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7a4db0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T496PI</Name>
          <Title>06SS1T496PI</Title>
          <Abstract>06SS1T496PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T496PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5aa662</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T517PI</Name>
          <Title>06SS1T517PI</Title>
          <Abstract>06SS1T517PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T517PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7afa92</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T524PI</Name>
          <Title>06SS1T524PI</Title>
          <Abstract>06SS1T524PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T524PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#588da1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T526PI</Name>
          <Title>06SS1T526PI</Title>
          <Abstract>06SS1T526PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T526PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d973de</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T555PI</Name>
          <Title>06SS1T555PI</Title>
          <Abstract>06SS1T555PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T555PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a16f5c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T565PI</Name>
          <Title>06SS1T565PI</Title>
          <Abstract>06SS1T565PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T565PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8252b3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T596PI</Name>
          <Title>06SS1T596PI</Title>
          <Abstract>06SS1T596PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T596PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c1ed95</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T606PI</Name>
          <Title>06SS1T606PI</Title>
          <Abstract>06SS1T606PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T606PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab465a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T636PI</Name>
          <Title>06SS1T636PI</Title>
          <Abstract>06SS1T636PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T636PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#72d4cc</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T645PI</Name>
          <Title>06SS1T645PI</Title>
          <Abstract>06SS1T645PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T645PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ce66e3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T654PI</Name>
          <Title>06SS1T654PI</Title>
          <Abstract>06SS1T654PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T654PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9dde7c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T665PI</Name>
          <Title>06SS1T665PI</Title>
          <Abstract>06SS1T665PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T665PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#468741</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T675PI</Name>
          <Title>06SS1T675PI</Title>
          <Abstract>06SS1T675PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T675PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#64479e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T814PI</Name>
          <Title>06SS1T814PI</Title>
          <Abstract>06SS1T814PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T814PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a89765</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T894PI</Name>
          <Title>06SS1T894PI</Title>
          <Abstract>06SS1T894PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T894PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#43a859</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T913PI</Name>
          <Title>06SS1T913PI</Title>
          <Abstract>06SS1T913PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T913PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a37d5d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T924PI</Name>
          <Title>06SS1T924PI</Title>
          <Abstract>06SS1T924PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T924PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#57948d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T945PI</Name>
          <Title>06SS1T945PI</Title>
          <Abstract>06SS1T945PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T945PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c49b5c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T948PI</Name>
          <Title>06SS1T948PI</Title>
          <Abstract>06SS1T948PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T948PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#569446</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T952PI</Name>
          <Title>06SS1T952PI</Title>
          <Abstract>06SS1T952PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T952PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f5d09d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS1T957PI</Name>
          <Title>06SS1T957PI</Title>
          <Abstract>06SS1T957PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS1T957PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5c9396</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2D116PI</Name>
          <Title>06SS2D116PI</Title>
          <Abstract>06SS2D116PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2D116PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b8cc49</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2D255PI</Name>
          <Title>06SS2D255PI</Title>
          <Abstract>06SS2D255PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2D255PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7ecf98</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2D748PI</Name>
          <Title>06SS2D748PI</Title>
          <Abstract>06SS2D748PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2D748PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6ac4a2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2F006PI</Name>
          <Title>06SS2F006PI</Title>
          <Abstract>06SS2F006PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2F006PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8ab4eb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2F351PI</Name>
          <Title>06SS2F351PI</Title>
          <Abstract>06SS2F351PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2F351PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#53b053</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2F738PI</Name>
          <Title>06SS2F738PI</Title>
          <Abstract>06SS2F738PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2F738PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4abdad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N982PI</Name>
          <Title>06SS2N982PI</Title>
          <Abstract>06SS2N982PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N982PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#aff75c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N984PI</Name>
          <Title>06SS2N984PI</Title>
          <Abstract>06SS2N984PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N984PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#834691</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N985PI</Name>
          <Title>06SS2N985PI</Title>
          <Abstract>06SS2N985PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N985PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e57f53</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N986PI</Name>
          <Title>06SS2N986PI</Title>
          <Abstract>06SS2N986PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N986PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b8e66a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N987PI</Name>
          <Title>06SS2N987PI</Title>
          <Abstract>06SS2N987PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N987PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d1b577</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N989PI</Name>
          <Title>06SS2N989PI</Title>
          <Abstract>06SS2N989PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N989PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d6a785</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N991PI</Name>
          <Title>06SS2N991PI</Title>
          <Abstract>06SS2N991PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N991PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8074b0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N992PI</Name>
          <Title>06SS2N992PI</Title>
          <Abstract>06SS2N992PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N992PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5ad192</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N993PI</Name>
          <Title>06SS2N993PI</Title>
          <Abstract>06SS2N993PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N993PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#384f8a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N994PI</Name>
          <Title>06SS2N994PI</Title>
          <Abstract>06SS2N994PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N994PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#eea3f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N995PI</Name>
          <Title>06SS2N995PI</Title>
          <Abstract>06SS2N995PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N995PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6bd66b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2N996PI</Name>
          <Title>06SS2N996PI</Title>
          <Abstract>06SS2N996PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2N996PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#365f99</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T001PI</Name>
          <Title>06SS2T001PI</Title>
          <Abstract>06SS2T001PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T001PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#496f85</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T012PI</Name>
          <Title>06SS2T012PI</Title>
          <Abstract>06SS2T012PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T012PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab5c89</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T021PI</Name>
          <Title>06SS2T021PI</Title>
          <Abstract>06SS2T021PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T021PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e396ae</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T034PI</Name>
          <Title>06SS2T034PI</Title>
          <Abstract>06SS2T034PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T034PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8cbd75</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T048PI</Name>
          <Title>06SS2T048PI</Title>
          <Abstract>06SS2T048PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T048PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9e9242</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T072PI</Name>
          <Title>06SS2T072PI</Title>
          <Abstract>06SS2T072PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T072PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6dc26d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T083PI</Name>
          <Title>06SS2T083PI</Title>
          <Abstract>06SS2T083PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T083PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7fe393</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T090PI</Name>
          <Title>06SS2T090PI</Title>
          <Abstract>06SS2T090PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T090PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#619cd4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T098PI</Name>
          <Title>06SS2T098PI</Title>
          <Abstract>06SS2T098PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T098PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#73bf87</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T103PI</Name>
          <Title>06SS2T103PI</Title>
          <Abstract>06SS2T103PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T103PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a66a5d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T112PI</Name>
          <Title>06SS2T112PI</Title>
          <Abstract>06SS2T112PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T112PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#55c8f2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T114PI</Name>
          <Title>06SS2T114PI</Title>
          <Abstract>06SS2T114PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T114PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f76dd0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T191PI</Name>
          <Title>06SS2T191PI</Title>
          <Abstract>06SS2T191PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T191PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d479b4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T193PI</Name>
          <Title>06SS2T193PI</Title>
          <Abstract>06SS2T193PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T193PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#719456</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T196PI</Name>
          <Title>06SS2T196PI</Title>
          <Abstract>06SS2T196PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T196PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7cb0bf</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T205PI</Name>
          <Title>06SS2T205PI</Title>
          <Abstract>06SS2T205PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T205PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8f089</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T214PI</Name>
          <Title>06SS2T214PI</Title>
          <Abstract>06SS2T214PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T214PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#643f8c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T228PI</Name>
          <Title>06SS2T228PI</Title>
          <Abstract>06SS2T228PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T228PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f4970</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T229PI</Name>
          <Title>06SS2T229PI</Title>
          <Abstract>06SS2T229PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T229PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#87485d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T231PI</Name>
          <Title>06SS2T231PI</Title>
          <Abstract>06SS2T231PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T231PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7b8251</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T240PI</Name>
          <Title>06SS2T240PI</Title>
          <Abstract>06SS2T240PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T240PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bf7c82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T256PI</Name>
          <Title>06SS2T256PI</Title>
          <Abstract>06SS2T256PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T256PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a5e354</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T266PI</Name>
          <Title>06SS2T266PI</Title>
          <Abstract>06SS2T266PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T266PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#85b054</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T267PI</Name>
          <Title>06SS2T267PI</Title>
          <Abstract>06SS2T267PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T267PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8da85e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T268PI</Name>
          <Title>06SS2T268PI</Title>
          <Abstract>06SS2T268PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T268PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c76b99</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T274PI</Name>
          <Title>06SS2T274PI</Title>
          <Abstract>06SS2T274PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T274PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7dd488</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T280PI</Name>
          <Title>06SS2T280PI</Title>
          <Abstract>06SS2T280PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T280PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#449483</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T297PI</Name>
          <Title>06SS2T297PI</Title>
          <Abstract>06SS2T297PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T297PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#83cc89</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T298PI</Name>
          <Title>06SS2T298PI</Title>
          <Abstract>06SS2T298PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T298PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4c7087</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T307PI</Name>
          <Title>06SS2T307PI</Title>
          <Abstract>06SS2T307PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T307PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8e5496</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T315PI</Name>
          <Title>06SS2T315PI</Title>
          <Abstract>06SS2T315PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T315PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d149b8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T319PI</Name>
          <Title>06SS2T319PI</Title>
          <Abstract>06SS2T319PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T319PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a34da2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T335PI</Name>
          <Title>06SS2T335PI</Title>
          <Abstract>06SS2T335PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T335PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#90e0dc</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T337PI</Name>
          <Title>06SS2T337PI</Title>
          <Abstract>06SS2T337PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T337PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c4d68</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T339PI</Name>
          <Title>06SS2T339PI</Title>
          <Abstract>06SS2T339PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T339PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#818558</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T390PI</Name>
          <Title>06SS2T390PI</Title>
          <Abstract>06SS2T390PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T390PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7744ad</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T417PI</Name>
          <Title>06SS2T417PI</Title>
          <Abstract>06SS2T417PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T417PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#82c29b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T450PI</Name>
          <Title>06SS2T450PI</Title>
          <Abstract>06SS2T450PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T450PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f797c4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T468PI</Name>
          <Title>06SS2T468PI</Title>
          <Abstract>06SS2T468PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T468PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6a7aa3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T489PI</Name>
          <Title>06SS2T489PI</Title>
          <Abstract>06SS2T489PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T489PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#548f68</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T501PI</Name>
          <Title>06SS2T501PI</Title>
          <Abstract>06SS2T501PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T501PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#649db0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T527PI</Name>
          <Title>06SS2T527PI</Title>
          <Abstract>06SS2T527PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T527PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3d6385</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T532PI</Name>
          <Title>06SS2T532PI</Title>
          <Abstract>06SS2T532PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T532PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9959c9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T551PI</Name>
          <Title>06SS2T551PI</Title>
          <Abstract>06SS2T551PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T551PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e297f0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T556PI</Name>
          <Title>06SS2T556PI</Title>
          <Abstract>06SS2T556PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T556PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#62899e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T561PI</Name>
          <Title>06SS2T561PI</Title>
          <Abstract>06SS2T561PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T561PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a277f7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T587PI</Name>
          <Title>06SS2T587PI</Title>
          <Abstract>06SS2T587PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T587PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bbd663</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T607PI</Name>
          <Title>06SS2T607PI</Title>
          <Abstract>06SS2T607PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T607PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4cb571</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T608PI</Name>
          <Title>06SS2T608PI</Title>
          <Abstract>06SS2T608PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T608PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#444fab</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T620PI</Name>
          <Title>06SS2T620PI</Title>
          <Abstract>06SS2T620PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T620PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a58ed4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T621PI</Name>
          <Title>06SS2T621PI</Title>
          <Abstract>06SS2T621PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T621PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd806f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T653PI</Name>
          <Title>06SS2T653PI</Title>
          <Abstract>06SS2T653PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T653PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ed919a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T659PI</Name>
          <Title>06SS2T659PI</Title>
          <Abstract>06SS2T659PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T659PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b262b1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T664PI</Name>
          <Title>06SS2T664PI</Title>
          <Abstract>06SS2T664PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T664PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#873169</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T679PI</Name>
          <Title>06SS2T679PI</Title>
          <Abstract>06SS2T679PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T679PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9df5a4</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T680PI</Name>
          <Title>06SS2T680PI</Title>
          <Abstract>06SS2T680PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T680PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#59993c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T681PI</Name>
          <Title>06SS2T681PI</Title>
          <Abstract>06SS2T681PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T681PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c74ea5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T686PI</Name>
          <Title>06SS2T686PI</Title>
          <Abstract>06SS2T686PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T686PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6a7bb8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T687PI</Name>
          <Title>06SS2T687PI</Title>
          <Abstract>06SS2T687PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T687PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#50b3a7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T701PI</Name>
          <Title>06SS2T701PI</Title>
          <Abstract>06SS2T701PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T701PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#dec08a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T730PI</Name>
          <Title>06SS2T730PI</Title>
          <Abstract>06SS2T730PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T730PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f0d067</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T739PI</Name>
          <Title>06SS2T739PI</Title>
          <Abstract>06SS2T739PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T739PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f995f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T740PI</Name>
          <Title>06SS2T740PI</Title>
          <Abstract>06SS2T740PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T740PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#619165</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T741PI</Name>
          <Title>06SS2T741PI</Title>
          <Abstract>06SS2T741PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T741PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a6f7cc</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T779PI</Name>
          <Title>06SS2T779PI</Title>
          <Abstract>06SS2T779PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T779PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#61cfba</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T783PI</Name>
          <Title>06SS2T783PI</Title>
          <Abstract>06SS2T783PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T783PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#818f4a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T788PI</Name>
          <Title>06SS2T788PI</Title>
          <Abstract>06SS2T788PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T788PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9195e3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T812PI</Name>
          <Title>06SS2T812PI</Title>
          <Abstract>06SS2T812PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T812PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9ec244</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T813PI</Name>
          <Title>06SS2T813PI</Title>
          <Abstract>06SS2T813PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T813PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9d9ff2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T815PI</Name>
          <Title>06SS2T815PI</Title>
          <Abstract>06SS2T815PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T815PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#55c2a1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T841PI</Name>
          <Title>06SS2T841PI</Title>
          <Abstract>06SS2T841PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T841PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8ab378</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T842PI</Name>
          <Title>06SS2T842PI</Title>
          <Abstract>06SS2T842PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T842PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9680e8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T843PI</Name>
          <Title>06SS2T843PI</Title>
          <Abstract>06SS2T843PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T843PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4893b0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T944PI</Name>
          <Title>06SS2T944PI</Title>
          <Abstract>06SS2T944PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T944PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7ba840</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS2T976PI</Name>
          <Title>06SS2T976PI</Title>
          <Abstract>06SS2T976PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS2T976PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#87e6c3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D007PI</Name>
          <Title>06SS3D007PI</Title>
          <Abstract>06SS3D007PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D007PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7b83ba</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D008PI</Name>
          <Title>06SS3D008PI</Title>
          <Abstract>06SS3D008PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D008PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f7ad8b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D107PI</Name>
          <Title>06SS3D107PI</Title>
          <Abstract>06SS3D107PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D107PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c74a6b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D108PI</Name>
          <Title>06SS3D108PI</Title>
          <Abstract>06SS3D108PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D108PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#779444</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D117PI</Name>
          <Title>06SS3D117PI</Title>
          <Abstract>06SS3D117PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D117PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#70ab49</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D183PI</Name>
          <Title>06SS3D183PI</Title>
          <Abstract>06SS3D183PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D183PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9280e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3D295PI</Name>
          <Title>06SS3D295PI</Title>
          <Abstract>06SS3D295PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3D295PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c4589f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F121PI</Name>
          <Title>06SS3F121PI</Title>
          <Abstract>06SS3F121PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F121PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f6b4f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F124PI</Name>
          <Title>06SS3F124PI</Title>
          <Abstract>06SS3F124PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F124PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#648dd9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F159PI</Name>
          <Title>06SS3F159PI</Title>
          <Abstract>06SS3F159PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F159PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5a995a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F180PI</Name>
          <Title>06SS3F180PI</Title>
          <Abstract>06SS3F180PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F180PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a7ad55</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F241PI</Name>
          <Title>06SS3F241PI</Title>
          <Abstract>06SS3F241PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F241PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#54b370</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F247PI</Name>
          <Title>06SS3F247PI</Title>
          <Abstract>06SS3F247PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F247PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ba66de</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F277PI</Name>
          <Title>06SS3F277PI</Title>
          <Abstract>06SS3F277PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F277PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c8f79e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F290PI</Name>
          <Title>06SS3F290PI</Title>
          <Abstract>06SS3F290PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F290PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8479ba</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F291PI</Name>
          <Title>06SS3F291PI</Title>
          <Abstract>06SS3F291PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F291PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#69fa75</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F344PI</Name>
          <Title>06SS3F344PI</Title>
          <Abstract>06SS3F344PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F344PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9e504a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F348PI</Name>
          <Title>06SS3F348PI</Title>
          <Abstract>06SS3F348PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F348PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#613a87</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F363PI</Name>
          <Title>06SS3F363PI</Title>
          <Abstract>06SS3F363PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F363PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c546f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F364PI</Name>
          <Title>06SS3F364PI</Title>
          <Abstract>06SS3F364PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F364PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#cc6483</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F370PI</Name>
          <Title>06SS3F370PI</Title>
          <Abstract>06SS3F370PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F370PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8547e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F381PI</Name>
          <Title>06SS3F381PI</Title>
          <Abstract>06SS3F381PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F381PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a58ae3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F705PI</Name>
          <Title>06SS3F705PI</Title>
          <Abstract>06SS3F705PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F705PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7a62a6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F713PI</Name>
          <Title>06SS3F713PI</Title>
          <Abstract>06SS3F713PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F713PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ade68c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F722PI</Name>
          <Title>06SS3F722PI</Title>
          <Abstract>06SS3F722PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F722PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#935f9c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F723PI</Name>
          <Title>06SS3F723PI</Title>
          <Abstract>06SS3F723PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F723PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#36918e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F760PI</Name>
          <Title>06SS3F760PI</Title>
          <Abstract>06SS3F760PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F760PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9e7fc9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F923PI</Name>
          <Title>06SS3F923PI</Title>
          <Abstract>06SS3F923PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F923PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b85170</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3F974PI</Name>
          <Title>06SS3F974PI</Title>
          <Abstract>06SS3F974PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3F974PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9dfaef</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3N980PI</Name>
          <Title>06SS3N980PI</Title>
          <Abstract>06SS3N980PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3N980PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#944e7f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3N981PI</Name>
          <Title>06SS3N981PI</Title>
          <Abstract>06SS3N981PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3N981PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#74ad97</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3N983PI</Name>
          <Title>06SS3N983PI</Title>
          <Abstract>06SS3N983PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3N983PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#db7070</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3N988PI</Name>
          <Title>06SS3N988PI</Title>
          <Abstract>06SS3N988PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3N988PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#69c5fa</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3N990PI</Name>
          <Title>06SS3N990PI</Title>
          <Abstract>06SS3N990PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3N990PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6cf569</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3T047PI</Name>
          <Title>06SS3T047PI</Title>
          <Abstract>06SS3T047PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3T047PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#993999</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3T244PI</Name>
          <Title>06SS3T244PI</Title>
          <Abstract>06SS3T244PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3T244PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#825564</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3T816PI</Name>
          <Title>06SS3T816PI</Title>
          <Abstract>06SS3T816PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3T816PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#378094</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS3T973PI</Name>
          <Title>06SS3T973PI</Title>
          <Abstract>06SS3T973PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS3T973PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#765087</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4D382PI</Name>
          <Title>06SS4D382PI</Title>
          <Abstract>06SS4D382PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4D382PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4e84a6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4D383PI</Name>
          <Title>06SS4D383PI</Title>
          <Abstract>06SS4D383PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4D383PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8bf792</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4D384PI</Name>
          <Title>06SS4D384PI</Title>
          <Abstract>06SS4D384PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4D384PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6a99a3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4D724PI</Name>
          <Title>06SS4D724PI</Title>
          <Abstract>06SS4D724PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4D724PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c6554</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4D999PI</Name>
          <Title>06SS4D999PI</Title>
          <Abstract>06SS4D999PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4D999PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#46824a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F173PI</Name>
          <Title>06SS4F173PI</Title>
          <Abstract>06SS4F173PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F173PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#677aa6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F292PI</Name>
          <Title>06SS4F292PI</Title>
          <Abstract>06SS4F292PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F292PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7bbd55</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F349PI</Name>
          <Title>06SS4F349PI</Title>
          <Abstract>06SS4F349PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F349PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#66579c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F714PI</Name>
          <Title>06SS4F714PI</Title>
          <Abstract>06SS4F714PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F714PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#554fb3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F757PI</Name>
          <Title>06SS4F757PI</Title>
          <Abstract>06SS4F757PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F757PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#74b374</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4F802PI</Name>
          <Title>06SS4F802PI</Title>
          <Abstract>06SS4F802PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4F802PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a87065</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4T067PI</Name>
          <Title>06SS4T067PI</Title>
          <Abstract>06SS4T067PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4T067PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a25ba3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4T068PI</Name>
          <Title>06SS4T068PI</Title>
          <Abstract>06SS4T068PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4T068PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8b5e8c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4T385PI</Name>
          <Title>06SS4T385PI</Title>
          <Abstract>06SS4T385PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4T385PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a38552</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS4T386PI</Name>
          <Title>06SS4T386PI</Title>
          <Abstract>06SS4T386PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS4T386PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#916157</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS5T387PI</Name>
          <Title>06SS5T387PI</Title>
          <Abstract>06SS5T387PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS5T387PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ad4b6c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS5T388PI</Name>
          <Title>06SS5T388PI</Title>
          <Abstract>06SS5T388PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS5T388PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e36dd3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS5T806PI</Name>
          <Title>06SS5T806PI</Title>
          <Abstract>06SS5T806PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS5T806PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5977bd</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS5T807PI</Name>
          <Title>06SS5T807PI</Title>
          <Abstract>06SS5T807PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS5T807PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#829662</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>06SS5T808PI</Name>
          <Title>06SS5T808PI</Title>
          <Abstract>06SS5T808PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>06SS5T808PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#51bd7e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N043PI</Name>
          <Title>08SS1N043PI</Title>
          <Abstract>08SS1N043PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N043PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#53ad9d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N049PI</Name>
          <Title>08SS1N049PI</Title>
          <Abstract>08SS1N049PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N049PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#73f5f3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N052PI</Name>
          <Title>08SS1N052PI</Title>
          <Abstract>08SS1N052PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N052PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c61ab</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N085PI</Name>
          <Title>08SS1N085PI</Title>
          <Abstract>08SS1N085PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N085PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4cba90</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N227PI</Name>
          <Title>08SS1N227PI</Title>
          <Abstract>08SS1N227PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N227PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e3827f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N305PI</Name>
          <Title>08SS1N305PI</Title>
          <Abstract>08SS1N305PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N305PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5d91de</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N324PI</Name>
          <Title>08SS1N324PI</Title>
          <Abstract>08SS1N324PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N324PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b3ed79</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N357PI</Name>
          <Title>08SS1N357PI</Title>
          <Abstract>08SS1N357PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N357PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b5e079</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N403PI</Name>
          <Title>08SS1N403PI</Title>
          <Abstract>08SS1N403PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N403PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f7c36</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N428PI</Name>
          <Title>08SS1N428PI</Title>
          <Abstract>08SS1N428PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N428PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ba579b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N446PI</Name>
          <Title>08SS1N446PI</Title>
          <Abstract>08SS1N446PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N446PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c4582</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N454PI</Name>
          <Title>08SS1N454PI</Title>
          <Abstract>08SS1N454PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N454PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#63b86a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N531PI</Name>
          <Title>08SS1N531PI</Title>
          <Abstract>08SS1N531PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N531PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bdf58c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N543PI</Name>
          <Title>08SS1N543PI</Title>
          <Abstract>08SS1N543PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N543PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7b5a94</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N603PI</Name>
          <Title>08SS1N603PI</Title>
          <Abstract>08SS1N603PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N603PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b997f0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N672PI</Name>
          <Title>08SS1N672PI</Title>
          <Abstract>08SS1N672PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N672PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#42b8a8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N717PI</Name>
          <Title>08SS1N717PI</Title>
          <Abstract>08SS1N717PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N717PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3eb386</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N794PI</Name>
          <Title>08SS1N794PI</Title>
          <Abstract>08SS1N794PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N794PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#58bf91</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N810PI</Name>
          <Title>08SS1N810PI</Title>
          <Abstract>08SS1N810PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N810PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#69c270</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N825PI</Name>
          <Title>08SS1N825PI</Title>
          <Abstract>08SS1N825PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N825PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#62b584</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N882PI</Name>
          <Title>08SS1N882PI</Title>
          <Abstract>08SS1N882PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N882PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#995849</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS1N931PI</Name>
          <Title>08SS1N931PI</Title>
          <Abstract>08SS1N931PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS1N931PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#79b8b0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N027PI</Name>
          <Title>08SS2N027PI</Title>
          <Abstract>08SS2N027PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N027PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#5351c2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N044PI</Name>
          <Title>08SS2N044PI</Title>
          <Abstract>08SS2N044PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N044PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#855bc9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N071PI</Name>
          <Title>08SS2N071PI</Title>
          <Abstract>08SS2N071PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N071PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#344a82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N109PI</Name>
          <Title>08SS2N109PI</Title>
          <Abstract>08SS2N109PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N109PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4ba67e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N110PI</Name>
          <Title>08SS2N110PI</Title>
          <Abstract>08SS2N110PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N110PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#51a6a3</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N495PI</Name>
          <Title>08SS2N495PI</Title>
          <Abstract>08SS2N495PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N495PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#598a34</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N502PI</Name>
          <Title>08SS2N502PI</Title>
          <Abstract>08SS2N502PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N502PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#769e52</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N573PI</Name>
          <Title>08SS2N573PI</Title>
          <Abstract>08SS2N573PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N573PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#82535d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N577PI</Name>
          <Title>08SS2N577PI</Title>
          <Abstract>08SS2N577PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N577PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c482e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N733PI</Name>
          <Title>08SS2N733PI</Title>
          <Abstract>08SS2N733PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N733PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bd5392</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N796PI</Name>
          <Title>08SS2N796PI</Title>
          <Abstract>08SS2N796PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N796PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#947738</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N797PI</Name>
          <Title>08SS2N797PI</Title>
          <Abstract>08SS2N797PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N797PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a16471</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N811PI</Name>
          <Title>08SS2N811PI</Title>
          <Abstract>08SS2N811PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N811PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b488db</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N826PI</Name>
          <Title>08SS2N826PI</Title>
          <Abstract>08SS2N826PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N826PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#2f4b82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N850PI</Name>
          <Title>08SS2N850PI</Title>
          <Abstract>08SS2N850PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N850PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#e8ab82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS2N871PI</Name>
          <Title>08SS2N871PI</Title>
          <Abstract>08SS2N871PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS2N871PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#857439</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N045PI</Name>
          <Title>08SS3N045PI</Title>
          <Abstract>08SS3N045PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N045PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#875b40</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N061PI</Name>
          <Title>08SS3N061PI</Title>
          <Abstract>08SS3N061PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N061PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#716bd1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N063PI</Name>
          <Title>08SS3N063PI</Title>
          <Abstract>08SS3N063PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N063PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7bbda8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N064PI</Name>
          <Title>08SS3N064PI</Title>
          <Abstract>08SS3N064PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N064PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#b490e0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N065PI</Name>
          <Title>08SS3N065PI</Title>
          <Abstract>08SS3N065PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N065PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#877149</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS3N187PI</Name>
          <Title>08SS3N187PI</Title>
          <Abstract>08SS3N187PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS3N187PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8d683</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS4N062PI</Name>
          <Title>08SS4N062PI</Title>
          <Abstract>08SS4N062PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS4N062PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#d469d6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>08SS4N066PI</Name>
          <Title>08SS4N066PI</Title>
          <Abstract>08SS4N066PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>08SS4N066PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c9756d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>09SS2N800PI</Name>
          <Title>09SS2N800PI</Title>
          <Abstract>09SS2N800PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>09SS2N800PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a659b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>09SS3N801PI</Name>
          <Title>09SS3N801PI</Title>
          <Abstract>09SS3N801PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>09SS3N801PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#bf946b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N028PI</Name>
          <Title>10SS1N028PI</Title>
          <Abstract>10SS1N028PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N028PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#63c29c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N050PI</Name>
          <Title>10SS1N050PI</Title>
          <Abstract>10SS1N050PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N050PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3d849c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N151PI</Name>
          <Title>10SS1N151PI</Title>
          <Abstract>10SS1N151PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N151PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8d52d9</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N157PI</Name>
          <Title>10SS1N157PI</Title>
          <Abstract>10SS1N157PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N157PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ed688c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N253PI</Name>
          <Title>10SS1N253PI</Title>
          <Abstract>10SS1N253PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N253PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#52699e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N275PI</Name>
          <Title>10SS1N275PI</Title>
          <Abstract>10SS1N275PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N275PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#408774</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N312PI</Name>
          <Title>10SS1N312PI</Title>
          <Abstract>10SS1N312PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N312PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f7c6a1</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N449PI</Name>
          <Title>10SS1N449PI</Title>
          <Abstract>10SS1N449PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N449PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7a2e80</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N467PI</Name>
          <Title>10SS1N467PI</Title>
          <Abstract>10SS1N467PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N467PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#874dab</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N476PI</Name>
          <Title>10SS1N476PI</Title>
          <Abstract>10SS1N476PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N476PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#854ca8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N525PI</Name>
          <Title>10SS1N525PI</Title>
          <Abstract>10SS1N525PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N525PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8f964a</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N610PI</Name>
          <Title>10SS1N610PI</Title>
          <Abstract>10SS1N610PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N610PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#78e856</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N657PI</Name>
          <Title>10SS1N657PI</Title>
          <Abstract>10SS1N657PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N657PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#de7e8d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N737PI</Name>
          <Title>10SS1N737PI</Title>
          <Abstract>10SS1N737PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N737PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4fbd7d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N766PI</Name>
          <Title>10SS1N766PI</Title>
          <Abstract>10SS1N766PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N766PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#438f57</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS1N768PI</Name>
          <Title>10SS1N768PI</Title>
          <Abstract>10SS1N768PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS1N768PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#81deb7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N003PI</Name>
          <Title>10SS2N003PI</Title>
          <Abstract>10SS2N003PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N003PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#996c46</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N009PI</Name>
          <Title>10SS2N009PI</Title>
          <Abstract>10SS2N009PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N009PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#6b7edb</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N055PI</Name>
          <Title>10SS2N055PI</Title>
          <Abstract>10SS2N055PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N055PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7463c2</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N079PI</Name>
          <Title>10SS2N079PI</Title>
          <Abstract>10SS2N079PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N079PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#85cf57</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N091PI</Name>
          <Title>10SS2N091PI</Title>
          <Abstract>10SS2N091PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N091PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ab9343</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N096PI</Name>
          <Title>10SS2N096PI</Title>
          <Abstract>10SS2N096PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N096PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#8c8445</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N150PI</Name>
          <Title>10SS2N150PI</Title>
          <Abstract>10SS2N150PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N150PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7f4664</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N158PI</Name>
          <Title>10SS2N158PI</Title>
          <Abstract>10SS2N158PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N158PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#66bd9d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N237PI</Name>
          <Title>10SS2N237PI</Title>
          <Abstract>10SS2N237PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N237PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#748248</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N254PI</Name>
          <Title>10SS2N254PI</Title>
          <Abstract>10SS2N254PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N254PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#67a19e</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N276PI</Name>
          <Title>10SS2N276PI</Title>
          <Abstract>10SS2N276PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N276PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#a8a847</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N329PI</Name>
          <Title>10SS2N329PI</Title>
          <Abstract>10SS2N329PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N329PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c758a0</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N353PI</Name>
          <Title>10SS2N353PI</Title>
          <Abstract>10SS2N353PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N353PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#538f82</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N376PI</Name>
          <Title>10SS2N376PI</Title>
          <Abstract>10SS2N376PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N376PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#3b8c8b</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N394PI</Name>
          <Title>10SS2N394PI</Title>
          <Abstract>10SS2N394PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N394PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9e3945</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N457PI</Name>
          <Title>10SS2N457PI</Title>
          <Abstract>10SS2N457PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N457PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#86f084</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N729PI</Name>
          <Title>10SS2N729PI</Title>
          <Abstract>10SS2N729PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N729PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#875231</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N735PI</Name>
          <Title>10SS2N735PI</Title>
          <Abstract>10SS2N735PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N735PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#fa7af8</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N761PI</Name>
          <Title>10SS2N761PI</Title>
          <Abstract>10SS2N761PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N761PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#7cab4d</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N787PI</Name>
          <Title>10SS2N787PI</Title>
          <Abstract>10SS2N787PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N787PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#89faf6</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS2N935PI</Name>
          <Title>10SS2N935PI</Title>
          <Abstract>10SS2N935PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS2N935PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#97dcf7</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS3N056PI</Name>
          <Title>10SS3N056PI</Title>
          <Abstract>10SS3N056PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS3N056PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#9d76b5</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS3N186PI</Name>
          <Title>10SS3N186PI</Title>
          <Abstract>10SS3N186PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS3N186PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#de5281</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS3N343PI</Name>
          <Title>10SS3N343PI</Title>
          <Abstract>10SS3N343PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS3N343PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#50ab68</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS3N711PI</Name>
          <Title>10SS3N711PI</Title>
          <Abstract>10SS3N711PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS3N711PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#4c578f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>10SS3N712PI</Name>
          <Title>10SS3N712PI</Title>
          <Abstract>10SS3N712PI</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>10SS3N712PI</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c7d186</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>N0080982ir</Name>
          <Title>N0080982ir</Title>
          <Abstract>N0080982ir</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>N0080982ir</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#c2664f</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>N0080983ir</Name>
          <Title>N0080983ir</Title>
          <Abstract>N0080983ir</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>N0080983ir</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#f0e36c</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>N0080984ir</Name>
          <Title>N0080984ir</Title>
          <Abstract>N0080984ir</Abstract>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>cod_ci</ogc:PropertyName>
              <ogc:Literal>N0080984ir</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <LineSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#58db72</CssParameter>
              <CssParameter name="stroke-width">3</CssParameter>
              <CssParameter name="stroke-linejoin">round</CssParameter>
              <CssParameter name="stroke-linecap">round</CssParameter>
            </Stroke>
          </LineSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </Label>
            <LabelPlacement>
              <LinePlacement><PerpendicularOffset>10</PerpendicularOffset></LinePlacement>
            </LabelPlacement>
            <Fill>
              <CssParameter name="fill">#000000</CssParameter>
            </Fill>
            <VendorOption name="followLine">true</VendorOption><VendorOption name="maxAngleDelta">90</VendorOption><VendorOption name="maxDisplacement">400</VendorOption><VendorOption name="repeat">300</VendorOption>
          </TextSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
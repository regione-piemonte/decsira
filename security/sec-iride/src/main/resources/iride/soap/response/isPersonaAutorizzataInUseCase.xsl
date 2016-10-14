<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    exclude-result-prefixes="xsl xsi"
    version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <xsl:template match="//isPersonaAutorizzataInUseCaseReturn[@xsi:type='xsd:boolean']">
        <boolean><xsl:value-of select="text()" /></boolean>
    </xsl:template>

</xsl:stylesheet>
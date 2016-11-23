<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="text" />

    <xsl:strip-space elements="*" />

    <xsl:template match="//getInfoPersonaInUseCaseReturn/text()">
        <xsl:value-of select="." disable-output-escaping="yes" />
    </xsl:template>

</xsl:stylesheet>
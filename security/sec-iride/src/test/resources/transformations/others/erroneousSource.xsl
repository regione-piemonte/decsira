<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <xsl:param name="a" />
    <xsl:param name="b" />
    <xsl:param name="c" />

    <!-- identity transform -->
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
    </xsl:template>

    <xsl:template match="a">
        <xsl:copy><xsl:value-of select="$a" /></xsl:copy>
    </xsl:template>

    <xsl:template match="b">
        <xsl:copy><xsl:value-of select="$b" /></xsl:copy>
    </xsl:template>

    <xsl:template match="c">
        <xsl:copy><xsl:value-of select="$c" /></xsl:copy>
    </xsl:template>

</xsl:stylesheet>
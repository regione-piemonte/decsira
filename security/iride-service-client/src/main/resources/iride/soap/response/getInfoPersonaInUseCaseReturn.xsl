<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <xsl:template match="info-persona-group">
        <list>
            <xsl:apply-templates select="info-persona" />
        </list>
    </xsl:template>

    <xsl:template match="info-persona">
        <infoPersona>
            <role><xsl:value-of select="@ruolo" /></role>
            <properties>
                <xsl:apply-templates select="./*" />
            </properties>
        </infoPersona>
    </xsl:template>

    <xsl:template match="info-persona/*">
        <property name="{local-name(.)}" value="{text()}" />
    </xsl:template>

</xsl:stylesheet>
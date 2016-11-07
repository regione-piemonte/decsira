<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <xsl:template match="/">
        <list>
            <xsl:apply-templates />
        </list>
    </xsl:template>

    <xsl:template match="*[local-name()='findUseCasesForPersonaInApplicationReturn']">
        <useCase>
            <xsl:apply-templates />
        </useCase>
    </xsl:template>

    <xsl:template match="*[local-name()='appId']">
        <appId>
            <xsl:apply-templates />
        </appId>
    </xsl:template>

    <xsl:template match="*[local-name()='id']">
        <id>
            <xsl:copy-of select="text()" />
        </id>
    </xsl:template>

</xsl:stylesheet>
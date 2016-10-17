<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <!-- http://forum.spring.io/forum/spring-projects/web-services/723656-solution-for-working-with-multiref-messages-aka-axis-1-rpc-encoded-style -->
    <xsl:key name="multiref-by-id" match="multiRef" use="@id"/>

    <xsl:template match="/">
        <list>
            <xsl:apply-templates select="//findUseCasesForPersonaInApplicationReturn"/>
        </list>
    </xsl:template>

    <xsl:template match="*[starts-with(@href, '#')]">
        <xsl:choose>
            <xsl:when test="local-name(.) = 'item'">
                <useCase>
                    <xsl:apply-templates select="key('multiref-by-id', substring-after(@href, '#'))/node()"/>
                </useCase>
            </xsl:when>
            <xsl:when test="local-name(.) = 'appId'">
                <appId>
                    <xsl:apply-templates select="key('multiref-by-id', substring-after(@href, '#'))/node()"/>
                </appId>
            </xsl:when>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="id">
        <id>
            <xsl:value-of select="."/>
        </id>
    </xsl:template>

</xsl:stylesheet>
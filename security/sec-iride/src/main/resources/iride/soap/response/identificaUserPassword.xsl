<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:strip-space elements="*" />

    <xsl:template match="*[local-name()='identificaUserPasswordReturn']">
        <identity><xsl:value-of select="./*[local-name()='rappresentazioneInterna']" />/<xsl:value-of select="./*[local-name()='mac']" /></identity>
    </xsl:template>

</xsl:stylesheet>
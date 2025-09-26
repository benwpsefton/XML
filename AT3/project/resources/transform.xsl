<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
    <xsl:for-each select="studio-one/entry">
        <tr>
            <td class="album"><xsl:value-of select="album"/></td>
            <td class="artist"><xsl:value-of select="artist"/></td>
            <td class="country"><xsl:value-of select="country"/></td>
            <td class="company"><xsl:value-of select="company"/></td>
            <td class="song"><xsl:value-of select="song"/></td>
            <td class="media"><xsl:value-of select="media"/></td>
            <td class="price"> 
                <xsl:variable name="p" select="number(price)"/>
                <xsl:choose>
                    <!-- >$10 -->
                    <xsl:when test="$p &gt; 10">
                        <span class="price price-high">
                            <xsl:value-of select="price"/>
                        </span>
                    </xsl:when>

                    <!-- >$9 but <$10-->
                    <xsl:when test="$p &gt; 9">
                        <span class="price price-mid">
                            <xsl:value-of select="price"/>
                        </span>
                    </xsl:when>

                    <!-- neither -->
                    <xsl:otherwise>
                        <span class="price">
                            <xsl:value-of select="price"/>
                        </span>
                    </xsl:otherwise>
                </xsl:choose>
            </td>
            <td class="year"><xsl:value-of select="year"/></td>
        </tr>
    </xsl:for-each>
</xsl:template>
</xsl:stylesheet>
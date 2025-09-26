<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:so="http://example.com/studio-one"
    exclude-result-prefixes="so">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
    <html>
    <body>
        <table>
            <thead>
            <tr>
                <th>Album</th>
                <th>Artist</th>
                <th>Country</th>
                <th>Company</th>
                <th>Song</th>
                <th>Media</th>
                <th>Price</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
                <xsl:for-each select="so:studio-one/so:entry">
                    <tr>
                        <td class="album"><xsl:value-of select="so:album"/></td>
                        <td class="artist"><xsl:value-of select="so:artist"/></td>
                        <td class="country"><xsl:value-of select="so:country"/></td>
                        <td class="company"><xsl:value-of select="so:company"/></td>
                        <td class="song"><xsl:value-of select="so:song"/></td>
                        <td class="media"><xsl:value-of select="so:media"/></td>
                        <td class="price"> 
                            <xsl:variable name="p" select="number(so:price)"/>
                            <xsl:choose>
                                <xsl:when test="$p &gt; 10">
                                    <span class="price price-high">
                                        <xsl:value-of select="so:price"/>
                                    </span>
                                </xsl:when>
                                <xsl:when test="$p &gt; 9">
                                    <span class="price price-mid">
                                        <xsl:value-of select="so:price"/>
                                    </span>
                                </xsl:when>
                                <xsl:otherwise>
                                    <span class="price">
                                        <xsl:value-of select="so:price"/>
                                    </span>
                                </xsl:otherwise>
                            </xsl:choose>
                        </td>
                        <td class="year"><xsl:value-of select="so:year"/></td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>

        <p>Prices highlighted: <span class="price-high">over $10.00</span> and <span class="price-mid">over $9.00</span>.</p>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>
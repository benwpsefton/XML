function loadXMLData(filename) {
    'use strict';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filename, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status !== 200) {
            console.error("error loading XML data:", xhr.statusText);
        }
    };

    xhr.send();
    return xhr.responseXML;
}

function displayResult() {
    xml = loadXMLDoc("resources/studio-one.xml");
    xsl = loadXMLDoc("resources/transform.xsl");
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        ex = xml.transformNode(xsl);
        document.getElementById("xsltResult").innerHTML = ex;
    }
    else if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("xsltResult").appendChild(resultDocument);
    }
}


document.addEventListener("DOMContentLoaded", displayResult);
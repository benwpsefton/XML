function loadXMLData() {
    'use strict';
    const xmlUrl = "resources/studio-one.xml";
    const xslUrl = "resources/style.xsl";
    const outputDiv = document.getElementById("xsltResult");

    const xslRequest = new XMLHttpRequest();
    xslRequest.open("GET", xslUrl, true);

    xslRequest.onreadystatechange = function() {
        if (xslRequest.readyState === 4) {
            if (xslRequest.status === 200) {
                const xslDoc = xslRequest.responseXML;

                const xmlRequest = new XMLHttpRequest();
                xmlRequest.open("GET", xmlUrl, true);

                xmlRequest.onreadystatechange = function() {
                    if (xmlRequest.readyState === 4) {
                        if (xmlRequest.status === 200) {
                            const xmlDoc = xmlRequest.responseXML;

                            if (window.ActiveXObject || "ActiveXObject" in window) { // IE Support
                                const xslTransform = xmlDoc.transformNode(xslDoc);
                                outputDiv.innerHTML = xslTransform;
                            } else if (document.implementation && document.implementation.createDocument) {
                                const processor = new XSLTProcessor();
                                processor.importStylesheet(xslDoc);

                                const fragment = processor.transformToFragment(xmlDoc, document);

                                // Clear table contents
                                outputDiv.innerHTML = "";
                                //Append table contents
                                outputDiv.appendChild(fragment);
                            } else {
                                outputDiv.innerHTML = "<tr><td>XSLT not supported in this browser.</td></tr>";
                            }

                        } else {
                            console.error("Error loading XML:", xmlRequest.statusText);
                        }
                    }
                };

                xmlRequest.send();
            } else {
                console.error("Error loading XSLT:", xslRequest.statusText);
            }
        }
    };
    xslRequest.send();
}

document.addEventListener("DOMContentLoaded", loadXMLData);
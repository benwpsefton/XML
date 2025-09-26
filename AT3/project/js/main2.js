function loadXMLData() {
        'use strict';
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "resources/classics.xml", true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const xmlDoc = xhr.responseXML;
                const cars = xmlDoc.getElementsByTagName("car");
                const carTableBody = document.getElementById("carTableBody");

                // clears previous content
                carTableBody.innerHTML = "";

                for (let i = 0; i < cars.length; i++) {
                    const car = cars[i];
                    const name = car.getElementsByTagName("name")[0].textContent;
                    const model = car.getElementsByTagName("model")[0].textContent;
                    const country = car.getElementsByTagName("country")[0].textContent;
                    const company = car.getElementsByTagName("company")[0].textContent;
                    const price = car.getElementsByTagName("price")[0].textContent;
                    const year = car.getElementsByTagName("year")[0].textContent;

                    const row = carTableBody.insertRow();
                    const nameCell = row.insertCell();
                    const modelCell = row.insertCell();
                    const countryCell = row.insertCell();
                    const companyCell = row.insertCell();
                    const priceCell = row.insertCell();
                    const yearCell = row.insertCell();

                    nameCell.textContent = name;
                    modelCell.textContent = model;
                    countryCell.textContent = country;
                    companyCell.textContent = company;
                    priceCell.textContent = price;
                    yearCell.textContent = year;
                }
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                console.error("error loading XML data:", xhr.statusText);
            }
        };

        xhr.send();
    }

    document.addEventListener("DOMContentLoaded", loadXMLData);
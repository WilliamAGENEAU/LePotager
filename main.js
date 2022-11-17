/**
 * read the csv file
 *
 * @param {*} input
 */
function read_csv(input) {
    let file = input.files[0];
    //let file = "utils/INR_GR491-Plus-Automaton-11-2021.xlsx";
    let fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function () {
        alert(fileReader.result);
    };

    fileReader.onerror = function () {
        alert(fileReader.error);
    };
}

function init() {
    var map = L.map('map').setView([48.856614, 2.352221], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    Object.entries(json).forEach(objet => {
        var marker = L.marker([objet[1].Longitude,objet[1].Latitude]).addTo(map);
        marker.bindPopup(objet[1].NOM);
    })
}
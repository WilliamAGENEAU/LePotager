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
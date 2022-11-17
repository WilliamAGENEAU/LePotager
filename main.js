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

var panier = [];

var myjson = [];

fetch("utils/Fichier_csv.json")
                .then(response => response.json())
                .then(data =>{
                    let text = "<table cellpadding='0' cellspacing='0' border='0'>"
                    text += "<tbody>";
                    for(var r=0;r<data.length;r++)
                        {
                            text += "<tr><td>" + data[r].Formation_Continue_initiale + "</td><td>" 
                            + data[r].Type_organisme + "</td><td>"+ data[r].NOM + "</td><td>"+ data[r].Intitule_de_la_formation + 
                            "</td><td>"+ data[r].Localisation_de_la_structure + "</td><td>"+ data[r].Duree_de_la_formation +
                            "</td><td>"+ data[r].Modalites + "</td><td><button onclick='addPanier("+r+")'>Ajouter au panier</button></td></tr>"; 
                            myjson.push(data[r]);
                        }
                        text += "</tbody>"
                        text += "</table>"
                        document.getElementById("data-output").innerHTML = text;
                })

function printDiv() {
    var divContents = document.getElementById("panier").innerHTML;
    var a = window.open('', '', 'height=800, width=800');
    a.document.write('<html>');
    a.document.write(
        '<head><link rel="stylesheet" href="./../css/style.css" type="text/css"><link rel="stylesheet" href="./../utils/lib/bootstrap.min.css" /></head>'
    );
    a.document.write('<body>');
    a.document.write('<h1>Devis</h1>');
    a.document.write('<p>Liste des formations sélectionnées :</p>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

function addPanier(r){
    if(panier.length<3){
        panier.push(myjson[r]);
    }
    console.log(panier);
}

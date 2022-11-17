function init() {
    var map = L.map('map').setView([48.856614, 2.352221], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    
    
    L.control.scale({ position: 'bottomleft' }).addTo(map);
    var markersLayer = new L.LayerGroup();
    map.addLayer(markersLayer);
    var controlSearch = new L.Control.Search({
		position:'topright',		
		layer: markersLayer,
		initial: false,
		zoom: 12,
		marker: false
	});
    map.addControl( controlSearch );
    console.log(markersLayer);
    /*L.Control.geocoder().addTo(map);*/

    Object.entries(json).forEach(objet => {
        var marker = L.marker([objet[1].Longitude,objet[1].Latitude], {title: objet[1].NOM}).addTo(map);
        marker.bindPopup(objet[1].NOM);
        markersLayer.addLayer(marker);
        
    });
    console.log(markersLayer);

    

    
}

function recherche() {
	var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
    /*
    var map = document.getElementById("map");
    console.log(map);*/
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
    }else{
        alert('Votre panier est déja plein');
    }
    console.log(panier);
}

function afficherPanier(){
    let text = "";
    for(var i = 0; i<panier.length; i++){
        text += "<li>"+ panier[i] +"</li>";
    }
    document.getElementById("panier").innerHTML = text;
}

function supprPanier(r){

}

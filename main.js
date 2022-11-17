var panier = [];

var json = []

fetch("utils/data.geojson")
                .then(response => response.json())
                .then(data =>{
                    let text = "<table cellpadding='0' cellspacing='0' border='0'>"
                    text += "<tbody>";
                    for(var r=0;r<data.features.length;r++)
                        {
                            text += "<tr><td>" + data.features[r].properties["Formation_Continue_initiale"] + "</td><td>" 
                            + data.features[r].properties["Type_organisme"] + "</td><td>"+ data.features[r].properties["NOM_de_l'organisme"] + "</td><td>"+ data.features[r].properties["Intitule_de_la_formation"] + 
                            "</td><td>"+ data.features[r].properties["Localisation_de_la_structure"] + "</td><td>"+ data.features[r].properties["Duree_de_la_formation"] +
                            "</td><td>"+ data.features[r].properties["Modalites"] + "</td><td><button onclick='addPanier("+r+")'>Ajouter au panier</button></td></tr>"; 
                            json.push(data.features[r].properties);
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
        panier.push(json[r]);
    }
    console.log(panier);
}

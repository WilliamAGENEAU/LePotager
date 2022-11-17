<!DOCTYPE html>
<html lang="fr">

<head>
    <title>D4G grp 14</title>
	<link rel="icon" href="images\favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="D4G">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>
    <script src="main.js"></script>
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>
</head>

<nav role='navigation'>
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
		<div id="panier">
    		<li>-----</li>
      		<li>-----</li>
      		<li>-----</li>
		</div>
	  <div id="outer">
  		<div class="inner">
		  <button type="submit" onclick="printDiv()"><i ></i> Print</button>
	  </div>
	  <div class="inner">
	  <form action="https://formspree.io/f/mwkzywdl" method="POST"><br>
                <input type="email" name="_replyto" placeholder="Email"><br>
                <button type="submit">Devis</button>
            </form>
	  </div>
	  </div>
    </ul>
  </div>
</nav>
<body  onload="init()">

	<div class="titre">
	<img src="images\DESIGN4GREEN_logo_vecto_Blanc.png" width="40%" weight="40%">
	</div>
	<h1> Formations Green IT / Eco-Design / Eco-Conception</h1>


	<div id="map"></div>

	<input type="text" id="myInput" onkeyup="recherche()" placeholder="Recherche formations ..." title="Rechercher">

	<section>
            <?php
                $data = file_get_contents("utils/data.geojson");  
                $data = json_decode($data, true);
            ?>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0" >
                    <thead>
                        <tr>
                            <th> Formation Continue / initiale : </th>
                            <th> Type d'organisme : </th>
                            
                            <th> Nom de l'organisme : </th>
                        
                            <th> Intitulé de la formation : </th>
                            <th> Localisation de la structure (ville) : </th>
                            <th> Durée de la formation / intervention (en j) : </th>
                            <th> Modalités d’accès à la formation (présentiel / distanciel / hybride) : </th>
                            <th> Panier : </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0" id="myTable">
                    <tbody>
                            <?php
                            for($i=0; $i<95;$i++){
                            ?> 
                            <tr>
                                <td><?php echo $data['features'][$i]['properties']["Formation_Continue_initiale"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["Type_organisme"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["NOM_de_l'organisme"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["Intitule_de_la_formation"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["Localisation_de_la_structure"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["Duree_de_la_formation"]; ?> </td>
                                <td><?php echo $data['features'][$i]['properties']["Modalites"]; ?> </td>
								<td><button onclick=''>Ajouter au Panier</button></td>
                            </tr>
                            <?php
                            }
                            ?>
                    </tbody>



                </table>
            </div>
        </section>

</body>
<script>
    function printDiv() {
        var divContents = document.getElementById("panier").innerHTML;
        var a = window.open('', '', 'height=800, width=800');
        a.document.write('<html>');
        a.document.write(
            '<head><link rel="stylesheet" href="./../css/style.css" type="text/css"><link rel="stylesheet" href="./../utils/lib/bootstrap.min.css" /></head>'
        );
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
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
	}




	/*
	function addPanier(){
        for(int i = 0; i<3; i++){
            
        }
    }*/
</script>
</html>

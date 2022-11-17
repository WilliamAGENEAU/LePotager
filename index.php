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
        <script src="main.js"></script>
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
    <body>
        <?php
        $panier = array();
        $panier = array_fill(0, 3, null);
        var_dump($panier);
        ?>
        <div class="titre">
        <img src="images\DESIGN4GREEN_logo_vecto_Blanc.png" width="40%" weight="40%">
        </div>
        <h1> Formations Green IT / Eco-Design / Eco-Conception - TEAM 14</h1>
        <div id='carte'>
            <iframe src="https://api.jawg.io/maps/c111bdcc-60ac-4d6b-9713-81ca5d705f0e/b0b3057a-7554-4d39-b93a-af8b7a11184f.html?access-token=mSx8rWaBLl4TKFIAND6r9V8or0NfCPwyPr5QgPVCt4lLcHCAmxzZbawvhGuq9yMD" width="1200px" height="800px"></iframe>
        </div>
        <section>
                <?php
                    $data = file_get_contents("utils/data.geojson");  
                    $data = json_decode($data, true);
                ?>
                <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th> Formation Continue / initiale : </th>
                                <th> Type d'organisme : </th>
                                
                                <th> Nom de l'organisme : </th>
                            
                                <th> Intitulé de la formation : </th>
                                <th> Localisation de la structure (ville) : </th>
                                <th> Durée de la formation / intervention (en j) : </th>
                                <th> Modalités d’accès à la formation (présentiel / distanciel / hybride) : </th>
                                <th></th>
                                
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
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
                                    <td><button type="submit" onclick="addPanier(<?php echo $i;?>)">Ajouter au panier</button></td>
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
        function addPanier(i){
            <?php

            ?>
            console.log(i);
        }
    </script>    
</html>

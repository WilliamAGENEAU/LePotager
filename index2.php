<html>
    <head>
        <title>Test2json</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

 
        Ouaip

    <body>
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
                            </tr>
                            <?php
                            }
                            ?>
                    </tbody>

                    
                    <!--<tbody id='data-output'>



                    </tbody>-->


                </table>
            </div>
        </section>


        <div id='data2'></div>
        <div id='data3'></div>
        <script type="module" src='script.js'></script> 

    </body>    
        












</html>
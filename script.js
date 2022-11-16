fetch("utils/data.geojson")
                .then(response => response.json())
                .then(data =>{

                    for(var r=0;r<data.features.length;r++)
                        {
                        var x=document.getElementById('data-output').insertRow(r);
                            var y=  x.insertCell(0);
                            y.innerHTML= data.features[r].properties["Formation_Continue_initiale"]
                            var y=  x.insertCell(1);
                            y.innerHTML= data.features[r].properties["Type_organisme"]
                            var y=  x.insertCell(2);
                            y.innerHTML= data.features[r].properties["NOM_de_l'organisme"]
                            var y=  x.insertCell(3);
                            y.innerHTML= data.features[r].properties["Intitule_de_la_formation"]
                            var y=  x.insertCell(4);
                            y.innerHTML= data.features[r].properties["Localisation_de_la_structure"]
                            var y=  x.insertCell(5);
                            y.innerHTML= data.features[r].properties["Duree_de_la_formation"]
                            var y=  x.insertCell(6);
                            y.innerHTML= data.features[r].properties["Modalites"]
                            
                        }
                        
                        
                        

                    
                    
                })
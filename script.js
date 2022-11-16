fetch("utils/data.geojson")
                .then(response => response.json())
                .then(data =>{

                    for(var r=0;r<data.features.length;r++)
                        {
                        var x=document.getElementById('data-output').insertRow(r);
                        /*for(var c=0;c<14;c++)  
                            {
                               */ 
                            var y=  x.insertCell(0);
                            y.innerHTML= data.features[r].properties["Formation_Continue_initiale"]
                            var y=  x.insertCell(1);
                            y.innerHTML= data.features[r].properties["Vous_êtes_une_structure"]
                            var y=  x.insertCell(2);
                            y.innerHTML= data.features[r].properties["Courte_description_du_programme_Contenu"]
                            var y=  x.insertCell(3);
                            y.innerHTML= data.features[r].properties["Localisation_de_la_structure"]
                            //}
                        }
                        
                        
                        

                    
                    
                })
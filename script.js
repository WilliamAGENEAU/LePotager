fetch("Fichier_csv.json")
                .then(response => response.json())
                .then(data =>{
                    for(let i=0; i<80; i++){
                        document.querySelector("#data-output").innerText = data.FR[i].Formation_Continue_initiale
                        i
                    }
                    
                })
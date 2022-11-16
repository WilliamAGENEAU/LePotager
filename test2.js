fetch("test.json")
                .then(response => response.json())
                .then(data =>{
                    document.querySelector("#data-output").innerText = data.
                    //document.querySelector("#data2").innerText = data.Vous_êtes_une_structure
                })
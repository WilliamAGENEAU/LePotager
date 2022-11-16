var json = require('Fichier_csv.json');

for (var i = 0; i < json.length; i++){
    document.write("<br><br>array index: " + i);
    var obj = json[i];
    for (var key in obj){
      var value = obj[key];
      document.write("<br> - " + key + ": " + value);
    }
  }
"use strict";
//So wird ein leeres Element erstellt 
let div = document.createElement("div"); 
console.log(div); 

//So erstellen wir ein Attribut  
let attr = document.createAttribute("id"); 
attr.value = "meine_id"
console.log(attr);

// Attribute einem Elemen hinzufügen
div.setAttributeNode(attr); 
console.log(div); 

// dieser weg ist etwas komploiiert 

// leichter geht es mit serAttribute 
//Attribute erstellen und hinzufügenb 
div.setAttribute("class", "meine_klasse"); 
console.log(div); 

// TExtknoten erstellen 
let text = document.createTextNode("halllo welt"); 
console.log(text);
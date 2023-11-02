"use strict";
// ''//So wird ein leeres Element erstellt 
// let div = document.createElement("div"); 
// console.log(div); 

// //So erstellen wir ein Attribut  
// let attr = document.createAttribute("id"); 
// attr.value = "meine_id"
// console.log(attr);

// // Attribute einem Elemen hinzufügen
// div.setAttributeNode(attr); 
// console.log(div); 

// // dieser weg ist etwas komploiiert 

// // leichter geht es mit serAttribute 
// //Attribute erstellen und hinzufügenb 
// div.setAttribute("class", "meine_klasse"); 
// console.log(div); 

// // TExtknoten erstellen 
// let text = document.createTextNode("halllo welt"); 
// console.log(text);''

let div = document.createElement("div"); 
div.setAttribute("id", "meine_id"); 
div.setAttribute("class", "meine_klasse"); 
console.log(div); 
let text = document.createTextNode("Lorem ipsum hallo welt"); 
console.log(text);

// Appendmethode appendChild erwartet ein parameter 
//append fügt es an die letze seie ein 
div.appendChild(text); 
console.log(div); 

// wir fügen jetzt etwas in unsere org HTML "jumbotron" ein  
/*
<article class="jumbotron">
<header>
<h2>Vaporware kinfolk snackwave</h2>
<p>
    Raclette tattooed poutine tofu hexagon selvage four dollar toast.
</p>
<hr>
</header>
<section>
<p>
    Scenester edison bulb banh mi deep v ramps tattooed intelligentsia 
    biodiesel aesthetic woke sartorial. Organic church-key austin meh semiotics 
    occupy flannel trust fund pickled hot chicken. Quinoa glossier godard kinfolk 
    sriracha flexitarian literally pabst microdosing disrupt woke. Literally shaman 
    kickstarter, gastropub banh mi keytar gluten-free. Hammock everyday carry venmo 
    live-edge. Flexitarian quinoa cronut cornhole banjo, coloring book fixie echo 
    park offal. Activated charcoal banjo hashtag sriracha.
</p>
</section>
</article>
*/
// append Child schaut ob es vorhanden ist und wenn ja 
// fügt es appandChild an letzte stelle hinzu
let jumbo = document.querySelector(".jumbotron > section"); 
jumbo.appendChild(div); 

let li = document.querySelector("#navigation > ul> li"); 
console.log(li); 
let ul = document.querySelector("#navigation > ul")
ul.appendChild(li); 
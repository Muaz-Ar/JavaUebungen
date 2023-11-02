"use strict";

// innerHTML , innerText, und textConect

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo);

// gibt eine string zurück eine dom 
console.log(jumbo.innerHTML); 

// innerText gibt uns einenstring in gerenderten Text /dargesellten Text 
console.log(jumbo.innerText)

// gibt uns einText ähnelt innerHTML ohne html elemente <s> 
console.log(jumbo.textContent);

let str1 = ""; 
let str2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>";
let str3 = "<p>Lorem ipsum dolor sit amet</p>";
let str4 = "Lorem ipsum dolor sit amet";


/*  Eigenschaft setzen indem man referenziert 

* jumbo.innerHTML = str1;      text wird geloscht 
* jumbo.innerHTML = str2;      inhalt wird gelöscht und mit str2 ersetzt
* jumbo.innerHTML += str3       Etwas anhänhen macht man 

* jumbo.innerText = str1;       text wird geloscht 
* jumbo.innerText = str2;       Text wird als text string  gesetzt kein Dom 
* jumbo.innerText += str3       es wird nur text angehangen 

* jumbol.textContent = str1;    text wird geloscht 
* jumbol.textContent = str2;    Text wird als text string gesetzt kein Dom 
* jumbol.textContent += str3;   es wird nur text angehangen unschön nur text
*/

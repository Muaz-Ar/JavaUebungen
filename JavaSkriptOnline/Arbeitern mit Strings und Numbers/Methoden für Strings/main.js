"use strict";

let s = " lorem ipsum dolor sit amet ipsum.     "; 

// mit length die länge von dem sting 
console.log(s.length);  //35 

// indexof nach einem bestimmten string im string suchen 
// gibt das ereste aufkommen poisition an 7 
// beide methoden case sensitiv heist groß/kleinschreibung beachten 
// toLowerCase convertiert alles  in kleinschreibung 
// toUpperCase alles großgeschrieben 
console.log(s.indexOf("ipsum",));
console.log(s.indexOf("ipsum", 20)); // so startet die suche ab 20 
console.log(s.lastIndexOf("ipsum",)); // fängt von hinten an zu suchen 
console.log(s.indexOf("ipsum",10)); // dann vierd ab 10 von hinten gesucht 
console.log(s.includes("sit")) // es wird nur true oder false ausgegeben 
console.log(s.includes("sit", 28)) // b 28 wird angefangen zu suchen 
console.log(s.toLowerCase()); 
console.log(s.toUpperCase()); 
console.log(s.trim()); // es werden alle unnötigen leerzeichen entfernt wichtig
console.log(s.repeat(2)); // so wird der sting 2 X wiederholt 

// so definiert man Regex in Java 
let regex = /i\w{4}/gm;

// search Methode 
console.log(s.search(regex)); // ausgabe 7 
console.log(s.replace(regex, "opsum"))
// replace ersetzt die brefiffe hier wurde nur das erste ersetzt.
console.log(s.match(regex)) // 


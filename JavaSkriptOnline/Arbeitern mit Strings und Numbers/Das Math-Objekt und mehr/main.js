"use strict";
console.log(Math)

// Kreisfäche berechnen für Radius 
// A = PI * r^2  Math.pow(zahl, hochzahl) hoch 

let a = Math.PI * Math.pow(12, 2); 
console.log(a);

// Runden 
// Math.round nach den regeln runden runden 
let a_round = Math.round(a);
console.log(a_round);

let abrunden = Math.floor(a); // abrunden 
console.log(abrunden);

let aufgerundet = Math.ceil(a);   // aufrunden 
console.log(aufgerundet);

let a_nachkommerstellen = a.toFixed(3); // jedoch wird hier das ergebnis in eine 
console.log(a_nachkommerstellen); // str umgewandelt 
console.log(a_nachkommerstellen + 30) // == 30452.389 wurde nur konkatiniert  

// wie kann man str in interger umwandeln 

let a_interger = parseInt(a_nachkommerstellen);
console.log(a_interger); 

let a_float = parseFloat(a_nachkommerstellen); 
console.log(a_float); 

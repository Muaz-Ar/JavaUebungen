
"use strict";

// Eine Funktion, die die Fläche eines Rechtecks berechnet

const rechteck = function(laenge, breite) {
   let flaeche = laenge * breite
   let umfang = 2 * (laenge + breite)
   
   return {
    flaeche: flaeche,
    umfang: umfang
   }
}

let laenge = 5
let  breite = 2

let ergebnis = rechteck(laenge, breite)
console.log(`Die Fläche des Rechtecks beträgt ${ergebnis.flaeche}cm².`)
console.log(`Der Umfang des Rechtecks beträgt ${ergebnis.umfang}cm.`)
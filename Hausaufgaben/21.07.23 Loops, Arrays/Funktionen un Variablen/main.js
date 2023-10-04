"use strict";

function Rechteck(a, b) {

    let flaeche = a * b;
    let umfang = 2 * (a + b); 
    
    console.log(`Die Fläche des Rechtecks beträgt ${flaeche}cm²`)
    console.log(`Der Umfang eines Rechtecks beträgt ${umfang}cm`)
    return {
        flaeche: flaeche, 
        umfang: umfang
    }
}

let laenge = 5
let breite = 3



Rechteck(laenge, breite);
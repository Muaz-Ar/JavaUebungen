"use strict";

// Das ist das grungdgerüst einer if (wenn) Funktion 

// if (Bedingung) {
// Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist 
// }

// wenn die Bedingung wahr ist wird die Bedingung ausgeführt 
if (10 > 5) {
    console.log("If wurde ausgeführt")
}

if (10 < 20 && 10 < 30) {
    console.log("If wurde ausgeführt")

}

const mindestalter = 18 

let benutzer_1 = parseInt(prompt("Wie alt bist du:", "min 18 Jahre"))

if (benutzer_1 >= mindestAlter) {
    console.log("Du bist alt genug")
}

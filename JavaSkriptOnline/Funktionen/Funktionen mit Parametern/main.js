"use strict";
/* Um werte der Funktion übergeben zu können schreibt man diese in die Klammer



const meine_Funktion = function(parameter_1, parameter_2) {

    auszuführender Code 
}
meine_Funktion(p_1, p_2)   // = p_1 wird == gesetzt wie parameter_1 und p_2 == parameter_2

*/
const log_die_zahl = function(a) {

    console.log(a)
}

log_die_zahl(42)

const begrüsung = function(vorname, y) {   // die parameter sind nur für die Funktion
    console.log(`Hallo ${vorname} ${y}!`)  // wie sie heisen interessiert uns nicht 
}
let vor = prompt("Wie heißt du mit Vornamen")
let nach = prompt("Wie heißt du mit Nachnamen")

begrüsung(vor, nach)  // hier werden die parameter an die Funktion übergeben 


let zahl_1 = 15
let zahl_2 = 22
let zahl_3 = 5
let zahl_4 = 2
let zahl_5 = 50

const rechenAuf_1 = function(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}

rechenAuf_1(zahl_5, zahl_3)
rechenAuf_1(zahl_2, zahl_4)
rechenAuf_1(zahl_1, zahl_3)
rechenAuf_1(zahl_3, zahl_4)
rechenAuf_1(zahl_4, zahl_2)
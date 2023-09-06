"use strict";

// in der realität gibt man werte nicht in der console aus sonder gibt sie in variablen wieder 

const multipli = function(a, b){
    return a * b
    // code was hinter dem return in der Funktion eingegeben wurde, wird nicht durchgeführt  
}
// return gibt uns den rückgabe wert 
let x1  = 5
let x2 = 50

// hier speichert man den rückgabewert in die Variable 

let ergebnis = multipli(x1, x2)

console.log(ergebnis)  // in der console kann dies überprüft werden ergebniss = 50 

// somit könnte man das ergibniss wieder in die funktion übergeben heist 

let ergebnis_2 = multipli(ergebnis, ergebnis)
console.log(ergebnis_2) // ergebniss_2 = 62500

// Die funktion muss nicht unbedingt in eine variable referenziert werden 
console.log(multipli(ergebnis, ergebnis), multipli(x1, x2)) // oder ergebnis_2 u. ergebnis_1 
console.log(multipli(multipli(x1, x2), multipli(x1, x2)))  // selbe wie ergebinis_2 62500




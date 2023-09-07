"use strict";


let konto_1 = {
    iban: "DE656654354856",
    bic: "WWEDS54SD",
    inhaber: {
        vor: "Max",
        nach: "Mustermann",
        geschlecht: "männlich",
        alter: 29
    },
    kontostand: 5000,
    aktive: true
};

let konto_2 = {
    iban: "DE65666654856",
    bic: "WWEDS54SD",
    inhaber: {
        vor: "Nina",
        nach: "Musterfrau",
        geschlecht: "weiblich",
        alter: 25
    },
    kontostand: 4000,
    aktive: false
};
// wie kann man Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban
console.log(wert_1)

// in diesem fall wird der Inhaber als Objekt ausgegeben
let wert_2 = konto_2.inhaber 
console.log(wert_2)
// wenn man auch das nächste Objekt auslesen möchte gibt man folgendes ein
let wert_3 = konto_2.inhaber.geschlecht
console.log(wert_3)

console.log(`${konto_1.inhaber.vor} ${konto_1.inhaber.nach} hat ${konto_1.kontostand}€ auf seinem Konto`)

// Eigenschaften mit (Dot-Notation) setzen 

konto_1.abhebelimit = 1000 
console.log(konto_1)

// Werte setzen bzw. verändern (Dot-Notation)
konto_1.kontostand = 3000 

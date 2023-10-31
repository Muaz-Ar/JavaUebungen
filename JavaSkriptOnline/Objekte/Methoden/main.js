"use strict";

let konto = {
    iban: "DE656654354856",
    bic: "WWEDS54SD",
    inhaber: {
        vor: "Max",
        nach: "Mustermann",
        geschlecht: "männlich",
        alter: 29 },
    kontostand: 5000,
    // in einer Methode kann man einfach function weglassen siehe bsp. abheben

    einzahlen: function(e) {  // Ein Objekt kann auch als Eigenschaft  
        this.kontostand += e       // eine Funktion erhalten dies wird Methoden genannt
    },
    abheben(a) {   //wenn man in einer Funktion auf eine eigenschaft des Objekteszugreifen
                                // möchte sollte man diese mit this machen geht nur im Objekt #+
        this.kontostand -= a
    },
    aktive: true
};

konto.einzahlen(500);
console.log(konto.kontostand)

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    verarbeiten(p){
        return {
            n: `${p.vorname} ${p.nachname}`,
            z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
            b: `Hallo ${p.vorname} ${p.nachname}`
    }   
}
console.log
// Challenge Metthode in Objekt einbauen 

// const person_verarbeiten = function(p) {

 
//     return {
//         n: `${p.vorname} ${p.nachname}`,
//         z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
//         b: `Hallo ${p.vorname} ${p.nachname}`
//     }
// }


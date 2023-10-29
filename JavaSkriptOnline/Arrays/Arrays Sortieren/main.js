"use strict";
// methode sort sortiert ein array und gibts zurück 

// let zahlen = [1, 20, 2000, 1000000, 50]

// let neu_sortiert = zahlen.sort() 

// console.log(neu_sortiert)  
// // ausgabe = 1 100000 20 2000 50  

let wort = ["Zahl", "Wahnisnn","MAngel","Absoann" ]
let wort_neu = wort.sort()

console.log(wort) // wird Alphabetisch sortiert 

let zahlen = [1, 20, 2000, 1000000, 50]

let zahlen_neu = zahlen.sort(function(a, b) {
    return a - b  // die funktion ist eine vergleichsfunktion "comparefunktion"
                // dadurch wird die aufsteigende reinfolge festgelegt 
})    //return b - a würde absteigende reinfolge machen 

// Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
// Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedrigeren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
// return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge


console.log(zahlen_neu)
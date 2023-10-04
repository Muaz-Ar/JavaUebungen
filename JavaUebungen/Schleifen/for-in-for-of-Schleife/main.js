"use strict";

let mein_array = [
    "Peter",
    "Mark",
    "Mia",
    "Marek"
]

let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 29
}
// die for-in Schleife durchläuft die Eigenschaften in willkürlicher reinfolge eines Objektes 
// die for-of Schleife durchläuft die Werte der Arrays die werte eines Objekts nicht durchlaufen 

// -------------------- fOR     IN 
for (let e in mein_array) { // ausgafbe 0 1 2 3
    console.log(e)
}

for (let e in mein_objekt) { // ausgabe name Vorname alter
    console.log(e)
}

// ---------------For Of
for (let w of mein_array) {
    console.log(w)
}

for(let w of mein_objekt) {         // geht nicht 
    console.log(w)
}
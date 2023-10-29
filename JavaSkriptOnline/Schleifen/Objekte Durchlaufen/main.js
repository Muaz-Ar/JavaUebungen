"use strict";

let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 29
}
/*
for (let e in mein_objekt ){        // Das funktioniert aber kann ungewünschte eigenschaften noch erhaleten
    console.log(mein_objekt[e])     // kann eigenschaften von protos erben
}
*/

  // entries ist eine Methode von Object ist 
    // gibt die Arrayrepresentation von Objects zurück 

for (let e of Object.entries(mein_objekt)) {
    console.log(e)
    for (let w of e){
        console.log(w)
    }
}

// eine weitere Methode Keys gibt nur die eigenschaften des objektes 
let eigenschaften = Object.keys(mein_objekt)
console.log(eigenschaften)

for (let s of eigenschaften) {
    console.log(s)
}

// für die Werte brauchen wir die Methode valuse so kann man auf werte von Objekts zugreifen 

let werte = Object.values(mein_objekt)
for (let e of werte) {
    console.log(e)
}
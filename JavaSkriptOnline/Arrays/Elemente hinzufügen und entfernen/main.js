"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"

]
// so ändern wir den wert in einem 'Array 
personen[1] = "Pia"
console.log(personen[1])

// neue methode hinzufügen oder entfärnen 
// push(): Fügt ein Element am ENDE des Arrays hinzu (und gibt die neue Größe des Arrays zurück) 
// destruktiv

personen.push("Max")
console.log(personen)

// pop(): Entfernt das letzte Elemen aus dem Array (und gibt es zurück)
//destruktiv

personen.pop()
console.log(personen)

// unshift(): Fügt ein Element am Anfang des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
//destruktiv

personen.unshift("Max")
console.log(personen)

// shift(): Entfernt das erste Elemen aus dem Array (und gibt es zurück)
//destruktiv

personen.shift()
console.log(personen)
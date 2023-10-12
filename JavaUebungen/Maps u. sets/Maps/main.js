"use strict";
// map sind besondere Objekte 
// einfache schlüsselwert zuordnung 
//map jeder wert als eigenschaft sowohl eigenschaft als auch wert können beliebiger datentyp sein

let meine_map = new Map();

// wie fügt man elemente in eine map mit set(eigenschaft, zugewiesener wert)
// string string zuweisung
meine_map.set("Test", "Wert zur Eigenschaft Test")
meine_map.set(13, "Wert zur Eigenschaft 13")
meine_map.set([], "Wert zur Eigenschaft []")
meine_map.set(function() {}, "Wert zur Eigenschaft Funktion")
meine_map.set({}, "Wert zur Eigenschaft {}")

console.log(meine_map)
// Mit .get können wir auf die elemente der Map zugreifen  

console.log(meine_map.get("Test"))          //"Wert zur Eigenschaft Test"
console.log(meine_map.get(13))              //"Wert zur Eigenschaft 13"
console.log(meine_map.get([]))              // undifined   leere Array , function Objekte 
console.log(meine_map.get(function() {}))   // undifined    sind ja eigentlich Objekte 
console.log(meine_map.get({}))              // undifined   

// has fragt ab ob ein gewisses elemen in unserer Map enthalten ist 
console.log(meine_map.has(13))      // true bei 15 false boolean

// delete um sachen eu entfärnen 

meine_map.delete("Test") // Test mit dem zugehörigen wert

// .size gib die größe anzahl der elemente der map zurück 

console.log(meine_map.size)

// mit clear ist die map complett leer 
meine_map.clear()
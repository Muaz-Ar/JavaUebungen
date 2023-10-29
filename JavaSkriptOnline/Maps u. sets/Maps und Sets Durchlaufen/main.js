"use strict";

// mit der forEach Methode 

let meine_map = new Map(); 

meine_map.set("Test", "Wert zur Eigenschaft Test")
meine_map.set(13, "Wert zur Eigenschaft 13")
meine_map.set([], "Wert zur Eigenschaft []")
meine_map.set(function() {}, "Wert zur Eigenschaft Funktion")
meine_map.set({}, "Wert zur Eigenschaft {}")


let mein_set = new Set(); 

mein_set.add("Test")
mein_set.add(13)
mein_set.add(function() {})
mein_set.add([])          
mein_set.add({})        
mein_set.add({})        
mein_set.add("Test")

// Der callbackfunktion können mehr werte übergeben werden 
// so können wir über die map iterieren 

meine_map.forEach(function(wert, eigenschaft, map) {
    console.log(wert)
    console.log(eigenschaft)
    console.log(map)

})

mein_set.forEach(function(wert, NULL, set ) {
    console.log(wert)
    console.log(set) // könnte man nutzen 

})

// for of schleife kann man auch nutzen
// ganze als Array bekommen
for (let paar of meine_map) {
    console.log(paar)
}

//[eigenschaft, wert
// Arrays nur eigenschaft und wert 

for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft)
    console.log(wert)
}

for (let wert of mein_set) {
    console.log(wert)
}
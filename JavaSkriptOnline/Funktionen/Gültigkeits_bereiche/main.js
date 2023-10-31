"use strict";
// Gültigkeitsbereich : Bereich in dem man Zugriff auf eine Variable hat 

// Globale Variablen : wird außerhalb aller Codeblöcke definiert und ist von überall zugänlich 
//Lokale Variablen: wird innerhalb eines Codeblocks definiert und ist nur in diesem und in den
//Codeblöcken die darin enthalten sind verfügbar

// Globalen Gültigkeitsbereich: var1
    // Lokaler Gültigkeitsbereich 1: var2 
        //lokaler Gültigkeitsbereich 1.1: var 3
    // Lokaler Gültigkeitbereich 2: var4    

let var1 = "Variable 1"

const meine_funktion = function() {
    let var2 = "Variable2"    
   if (true) {
    let var3 = "Variable 3"
    console.log(var3)
    console.log(var2)           // funktioniert weil im selben Codeblock ist 
   }
   
    console.log(var1)
    console.log(var2)
    console.log(var3)               // geht nich weil var3 Lokal ist 
}

meine_funktion()

console.log(var1)
// console.log(var2) // geht nich weil var 2 Lokal ist 

if (true){
    let var4 = "Variable4 "
console.log(var4)}

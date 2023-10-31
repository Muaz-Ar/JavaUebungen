"use strict";

// logische "und" &&
// logische "oder" ||
// logische "nicht" !

console.log(1 > 0 && 4 < 6)         // true
console.log(1 > 0 && 6 < 4)         // false

console.log(1 > 0 || 4 < 6)         // true
console.log(1 > 0 || 6 < 4)         // true   

console.log(1 > 0 && !(6 < 4))       // true 
console.log(!true)                  //  fales

console.log(1 > 0 && 4 < 6 && 10 < 20)      // true
console.log(1 > 0 && 4 < 6 && 10 > 20)     // falese

console.log(1 > 0 && 4 < 6 || 10 > 20)      // true
console.log(1 > 0 && 4 > 6 || 10 < 20)      // true

// mit Klammer die reinfolge der prüfung ändern einfache Mathematische Regeln

console.log(1 < 0 && 10 < 20 || 6 > 4)       //true
console.log(1 < 0 && (10 < 20 || 6 > 4))       //false



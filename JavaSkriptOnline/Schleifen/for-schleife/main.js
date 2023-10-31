"use strict";
// Aufbau einer while Schleife

let x = 0 //Zählervariable

while (x < 5) { //Bedingnung
    console.log(x) // Code
    x++   // Anweisung für die Zählervariable
} 

/* Aufbau einer for-Schleife 

for (Zählvariable; Bedingung; Anweisungfür die Zählvariable) {
    Code 
} 
*/
// unterschiede While und For schleife: while schleife ist eher ein Schalter bedingingen abprüfen 

for (let y = 0; y < 10; y++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(y)
}
// das ist eine Endlosschleife nicht verwenden 
for (let j = 0; j >= 0; j++) {
    ...
}
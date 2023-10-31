"use strict";
/*
while (Bedingung) {
    // Anweisung 
}
 während die Bedingung erfüllt ist führe diesen Code aus 
 */

let x = 0 // Zählvariable
while (x < 5) {
    //x++  in dem fall beginnt x bei 1 und geht bis 5
    console.log(`While: ${x}`)
    x++ // in dem fall beginnt x bei 0 und geht bis 4
}
// x = 1 
// x = 2
// x = 3 
// x = 4 
// x = 5 wird nicht mehr ausgeführt  

// Endlosschleifen vermeiden 
let y = 0 
while (y >= 0) {
    console.log("Test")
    y++
}

let z = 0 

while (z < 10) {
    z++
    if (z == 5 ) {
        continue //Weitermachen heist z=5 wird nicht ausgegeben  
                //es wird der schleifenfdurchlauf abgebrochen nicht alles
    }   else if (z ==7) {
        break       // die schleife wird bei 7 abgebrochen 1-6 wenden ausgegeben 
    }
    console.log(z)
}

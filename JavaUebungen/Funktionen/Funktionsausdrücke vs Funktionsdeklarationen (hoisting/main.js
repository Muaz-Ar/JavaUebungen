"use strict";
// ---------- Funktionsausdrücke ----------
const fuk_1 = function() {
    console.log(fuk_1)
}

fuk_1()


let fuk_2 = function() {
    console.log(fuk_2)
}

fuk_2()

//  es fuktioniert auch mit let bei let kann man die funktion pberschreiben 
//doch const kann man nicht überschreiben bsp. 

fuk_2 = function() {
    console.log("Funktion 2 (NEU)")
}
fuk_2()

// ----------------- Funktionsdeklarationen -----------------(werden gehoistet)
function fuk_3 () {
    console.log(fuk_3)

}
fuk_3();

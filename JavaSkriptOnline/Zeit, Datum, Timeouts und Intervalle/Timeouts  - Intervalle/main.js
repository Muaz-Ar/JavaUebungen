"use strict";
// Zeitverzögerung == Timeout 
// Intervall alle paar sic durchführen 

// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

console.log("Los!");
setTimeout(function(){
    console.log("Fertig")
}, 2000)
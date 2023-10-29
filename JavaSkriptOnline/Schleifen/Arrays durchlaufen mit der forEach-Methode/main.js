"use strict";

let zahlen = [5, 56, 47, 8, 49, 35, 3, 67, 90]

console.log(zahlen)  // wenn man eine Funktion in eine Funktionübergibt handelt es sich um eine 
                    // callback Funktion
                    // callback(currentValue, [index, [array]])
/*
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i])
    
}


let meine_funktion = function(e) {
    console.log(e)
}
zahlen.forEach(meine_funktion) // Die forEach durchläuft jetz unser Array element für elemen 
                                //für jedes der elemente führt es die funktion e durch 

*/

zahlen.forEach(function(e){         //Arrays haben eine Methodi die forEach heißt 
    console.log(e)                  //funktioniert wie eine Forschleife die ein Array von 
})                                  //vorne bis hinten durchläuft braucht eine anweisung in form 
                                    //einer Funktion forEach stellt das Element zur verfügung
"use strict";

let auto_1 = { 
    marke: "BMW",
    modell: "i8"
}
let auto_2 = { 
    marke: "Tesla",
    modell: "Model X"
}
let auto_3 = { 
    marke: "Tesla",
    modell: "Model X"
}
// im javaSkript sind Objekte immer unterschiedlich aus es wird das selbe Objekt mit sich verglichen
console.log(auto_1 == auto_2)           //false
console.log(auto_2 == auto_3)           //false
console.log(auto_3 == auto_3)           //true
console.log({} == {})                   //false

// es ist nur möglich die einzelnen Eigenschaften miteinander zu vergleichen
// dies macht man mit funktionen 

let vergleich = function(k, e) {
     if (k.marke == e.marke && k.modell == e.modell) {
        return true
     }
     else {
        return false
     }
}
console.log(vergleich(auto_1, auto_2))  //false
console.log(vergleich(auto_2, auto_3))  //true
console.log(vergleich(auto_3, auto_3))  //true
console.log(vergleich(auto_1, auto_3))  //false
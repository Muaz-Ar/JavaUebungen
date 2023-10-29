"use strict";
let zahlen = [12, 5, 34, 77, 2, 32, 9, 55, 46, 11, 1]

// Arrays durchlaufen filter 
// z.B. Dokumentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de

let kleinerGleichZwanzig = zahlen.filter(function(e) {
    if (e <=20) {
        return true
    } else {
        return false
    }

})
console.log(kleinerGleichZwanzig)
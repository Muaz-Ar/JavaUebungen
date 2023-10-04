"use strict";
let meine_variable = "Muhammed"
let mein_objekt = {
    zahl: 500
}

const meine_funktion = function (v, o) {
    v = "Dennis"
    o.zahl = 2500
}
meine_funktion(meine_variable, mein_objekt)

console.log(meine_variable)
console.log(mein_objekt.zahl)

/* call-by-value (dt.: Übergabe als Wert): gilt für primitibe Datentypen (String, Number, Boolean)
 nur der wert wird übergeben sobald diese übergeben werden besteht kein zusammenhang mehr zur 
ursprünlichen variable
call-by-reference (dt.: Übergabe als Verweis/Rückverweis): gilt fürkomplexere Datentypen 
(Objekte, Funktionen, Arrays) der zusammenhang besteht noch zur ursprünglichen varibel dur rückverweis
*/
let konto = {
    iban: "DE656654354856",
    bic: "WWEDS54SD",
    inhaber: {
        vor: "Max",
        nach: "Mustermann",
        geschlecht: "männlich",
        alter: 29
    },
    kontostand: 5000,
    aktive: true
};
// einfachere screibweise stadt (k.kontostand = k.kontostand + e)      ===          (k.kontostand (+-*/)= e) 
const einzahlen = function(k, e) {
    k.kontostand += e
}
let aus = einzahlen(konto, 500)
console.log(konto.kontostand)

const abheben = function(k, a) {
    k.kontostand -= a
}
abheben(konto, 500)
console.log(konto.kontostand)

"use strict";

function fussschleife(x) {
    let summ = 0
    let aktuelleZahl = 1 

    do{
        summ += aktuelleZahl 
        aktuelleZahl++
    } 
    while (aktuelleZahl <= x)
        return summ;
    
    }

let eingabe = prompt("Geben sie eine gerade Zahl ein")
console.log(`Sie Summer aller zahlen beträgt ${fussschleife(eingabe)}`)
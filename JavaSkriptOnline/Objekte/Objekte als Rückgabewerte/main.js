"use strict";
let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
}
// Logische und einfache schreibweise 
const person_verarbeiten = function(p) {

    // let name = `${p.vorname} ${p.nachname}`
    // let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`
    // let begrussung = `Hallo ${p.vorname} ${p.nachname}`
    
    // let rueckgaeb_objekt = {
    //     n: name,
    //     z:zusammenfassung,
    //     b: begrussung

    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}`
    }
}
console.log(person_verarbeiten(person))
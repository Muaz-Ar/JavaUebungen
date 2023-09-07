"use strict";

// warum brauchen wir Objekte: muss Eigenschafen u. Werte hat 
// - darin kann man alles bündeln 

// das sind z.B eingenschafen eines Kontos u. die werte 

let iban = "DE656654354856"
let bic = "WWEDS54SD"
let kontostand = 5000
let aktive = true 

// bsp eines Objekts 

let inhaber_2 = {
    vor: "Maria",
    nach: "Musterfrau",
    geschlecht: "Weiblich",
    alter: 30
}
console.log(inhaber_2)

// es ist möglich direkt in einem objektern ein weiteren Inhaber einzufügen siehe Inhaber
let konto_1 = {
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
// es ist aucfh möglich eine Objekt als Variable in ein Ojekt hinzuzufügen 
console.log(konto_1)

let konto_2 = {
    iban: "DE656654555856",
    bic: "WWEDS54SD",
    inhaber: inhaber_2,
    kontostand: 3000,
    aktive: true
};
console.log(konto_2)

/* Aufgabe: Erstelle einen Objekt für ein Auto 
-Marke, -Modell, -Kraftstoffart, -Kilometerstand, 
-Ausstattung,
    -Navigation, -Klimaanlage, -Sitzheizung, -Tempomat, -Panoramadach
-Zustand, -Preis
*/

let auto = {
    marke: "Mercedes-Benz",
    modell: "C63 AMG",
    kraftsoffart: "Benziner",
    kilometerstand: 40000,
    ausstattung: {
        navigation: true,
        klimaanlage: true,
        sitzheitzung: false,
        tempomat: false,
        panoramadach: true
    },
    zustand: "gebraucht",
    preis: 25000
}
console.log(auto)

auto.ps = 300
auto.modell = "E63 AMG"
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps}PS.`)

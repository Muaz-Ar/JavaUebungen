"use strict";

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

let konto_2 = {
    iban: "DE65666654856",
    bic: "WWEDS54SD",
    inhaber: {
        vor: "Nina",
        nach: "Musterfrau",
        geschlecht: "weiblich",
        alter: 25
    },
    kontostand: 4000,
    aktive: false
};

const kontostand_ausgeben = function (konto) {
console.log(`${konto.inhaber.vor} ${konto.inhaber.nacg} hat ${konto.kontostand}€ auf dem Konto`)
}
kontostand_ausgeben(konto_1)
kontostand_ausgeben(konto_2)
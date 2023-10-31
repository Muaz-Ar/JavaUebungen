"use strict";

// warum brauchen wir Objekte: muss Eigenschafen u. Werte hat 
// - darin kann man alles bündeln 

// das sind z.B eingenschafen eines Kontos u. die werte 

let iban = "DE656654354856"
let bic = "WWEDS54SD"
let kontostand = 5000
let aktive = true 

// bsp eines Objekts 
let konto_1 = {
    iban: "DE656654354856",
    bic: "WWEDS54SD",
    kontostand: 5000,
    aktive: true
};

console.log(konto_1)

let konto_2 = {
    iban: "DE656654555856",
    bic: "WWEDS54SD",
    kontostand: 3000,
    aktive: true
};
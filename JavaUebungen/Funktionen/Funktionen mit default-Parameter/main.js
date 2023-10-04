"use strict";
// Defaultparameter (standartparameter) können übergeben werden falls beim 2 parameter 
// nicht angegeben wereden 
const multipli = function (a, b = 10) {
    console.log(a * b)
}
let x_1 = 20 
let x_2 = 46

multipli(x_1,x_2)

const begruessung = function(vor = "Max", nach = "Mustermann", alter = 24){
    console.log(`Hallo mein Name ist ${vor} ${nach} und ich bin ${alter} Jahtre alt.`)
}

let vor = "Muhammed"
let nach = "Arslan"
let alter = 29

begruessung(vor, nach, alter) //aushabe = Hallo mein Name ist Muhammed Arslan und ich bin 29 Jahtre alt.
begruessung() // ausgabe = Hallo mein Name ist Max Mustermann und ich bin 24 Jahtre alt.

// wenn ich bei multipli nur ein parameter gebe heist multipli(x_1,) eindgebe kommt NaN

// was wenn man bei funktionen nur 2 paramater übergeben werden

begruessung(nach, alter) // ausgabe = Hallo mein Name ist Arslan 29 und ich bin 24 Jahtre alt.

// wenn kein parameter nicht geben wollwn muss man undefined mitgeben 
// das geht nur mit Defaultparameter
begruessung(undefined, nach, alter) // ausgabe = Hallo mein Name ist Max Arslan und ich bin 29 Jahtre alt.
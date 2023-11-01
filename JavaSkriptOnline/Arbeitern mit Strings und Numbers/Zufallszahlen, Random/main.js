"use strict";

console.log(Math.random()); // 0 - 0,99999- null ink. 1 nicht 

// wenn man die zahl mit der gewünschten zahl mult. bekommt man 0 - die zahl die man mult.


// mit float haben wir dafür gesorgt, 
// das wir nicht über 12 kommen 

console.log(Math.random() * 12 );   // hier ist es 0 - 11,99999999
console.log(
    Math.floor(Math.random() * (12 + 1)));
// hier bekommen wir ganzezahlen von 0 - 12 mit floor wird abgerundet 

//wie man minimum und maximum bei random setzt 

/* Da Math.random() immer zwischen 0-0,9999999 ist können wir durch addieren das 
 * bis definieren und wenn es sich zwischen einer zahl befinden soll dann 
 * nehemen wier die diferenz 60 - 40 +1 also die 20 * random was nur zahlen zwischen 
 * 0 und 20 geben kann da wir mitt Math.foor() abrunden und am ende das min 
 * addieren. Dadurch können wir nur zahlen zwischen 40-60 erhalten 
 */ 

let minimum = 40;
let maximum = 60; 


console.log(
    Math.floor(Math.random() * (maximum - minimum +1) + minimum)
);

const zufallzahl = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}

console.log(zufallzahl(minimum, maximum))
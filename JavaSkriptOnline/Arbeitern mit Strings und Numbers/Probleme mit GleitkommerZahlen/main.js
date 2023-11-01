"use strict";

console.log(14.23 + 354.97) // ergebnis sollte sein 369.2 
                            // doch ergebnis in console ist 369.20000000000005

//umgang mit gleitkommerzahlen und sehr großen zahlen sind problematisch 
console.log(9332654929891549);  //9332654929891548 von der 9 wurde eine 8 

// um das zu umgehen in 100 sritten heist kommerzahlen vermeiden 

console.log((99.93 * 100 + 354.97 * 100) / 100); 
// so können wir die für die darstellung die 0 am ende ausgeben 
console.log(((99.93 * 100 + 354.97 * 100) / 100).toFixed(2)); 


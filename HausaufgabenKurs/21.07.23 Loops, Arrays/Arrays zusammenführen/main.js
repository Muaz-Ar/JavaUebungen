"use strict";

"use strict";


function array (Zahl_1, Zahl_2) { 
    let uniqset = new Set([...Zahl_1, ...Zahl_2])  
    // new Set entfährnt doppelte werte und erstellt von beiden Arrays ein set
    let uniqarray = Array.from(uniqset)
    return uniqarray;
}
let Zahl_1 = [1,2,3,5,2,5,8,4,3]

let Zahl_2 = [5,7,9,1,5,4,7] 


console.log(array(Zahl_1, Zahl_2))
"use strict";

/*switch (ausdruck) {                  im swich führen wir verschiedene case = Fallä aus 
    case wert_1:                    danach kommt ein Wert 
          auszuführender Code      im switch wird der Ausdruck mit den werten der case streng === verglichen
        break;
    case wert_2:
        auszuführender Code                 
    case wert_3:
        auszuführender Code       falls kein case ausgeführt wird 
        break;
    default:                       tritt default in kraft und dieser wert wird ausgeführt 
        auszuführender Code         optional
        break;                              
    }
Für den fall dass "ausdruk dem Wert entspricht wird der code ausgeführt und break beendet den switch break ist auch optional "
wenn kein break gesetzt ist, wird der folgende code dennoch ausgeführt die bedingnung muss nicht passen 

unterschied if und swich 

sehr variabel vergleiche 
switch vergleicht 2 sachen strickt und wird vom programm schneller durchgeführt 
*/
            // ---- Beispiel 

let name1 = "David"

switch (name1) {                 
    case "Martin":
        console.log("Hallo Martin!")
        break; 
    case "David":
        console.log("Hallo David")      
        break; 
    case "Sebastian": 
        console.log("hallo Sebastian!")
        break; 
    default: 
        console.log("Hallo! Wie heißt du?")
        break;                         
                               
}   // Console ausgebe : Hallo David

let name2 = "David"

switch (name2) {                 
    case "Martin":
        console.log("Hallo Martin!")
        break; 
    case "David":
        console.log("Hallo David!")      
       
    case "Sebastian": 
        console.log("Hallo Sebastian!")
        break; 
    default: 
        console.log("Hallo! Wie heißt du?")
        break;                         
                               
}   // Console ausgebe : Hallo David!
    //                   Hallo Sebastian            Das break nach david wurde entfärnt

    let name3 = "Burak"

switch (name3) {                 
    case "Martin":
        console.log("Hallo Martin!")
        break; 
    case "David":
        console.log("Hallo David!")      
       break
    case "Sebastian": 
        console.log("Hallo Sebastian!")
        break; 
    default: 
        console.log("Hallo! Wie heißt du?")
        break;                         
                               
}   // Console ausgebe : Hallo! Wie heißt du?           keines der bedingungen trifft zu 

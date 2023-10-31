"use strict";

let vorname = "Muhammed" 
let nachname = "Arslan"
let alter  = 24 

        /* dies nennt man Konkatinierung heißt 2 vafriablen aneinander reien
        man muss auch an die leerzeichen denken mit " " */

let name = vorname + " " + nachname
console.log(name)

let begruessung = "Hallo " + name + "!"
console.log(begruessung)

let zusammenfallung = name + " (" + alter + " Jahre)"

let einzeiliger_string = " Das ist ein einzeiliger 'String!"

// mit dem + kann man einzeilige Strings im code auf mehreren zeilen schreiben 
// Mit \n wird an der Stelle ein Zeilenumbruch erstellt
// Mit \t wird ein tab erstellt 
let mehrzeiliger_string =   "Ich will diesen String" + 
                            "in der nächsten Zeile fortsetzen! " +
                            "\n\tUnd wenn ich will, " + 
                            "kann es auch noch weitergehen." 

console.log(mehrzeiliger_string)

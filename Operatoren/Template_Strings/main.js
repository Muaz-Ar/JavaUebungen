"use strict";

let vorname = "Muhammed"
let nachname = "Arslan"
let alter = 29

let name = vorname + " " + nachname
console.log(name)

// Hier machen Wir Templatestrings mit `${}`

let begrussung = `Hallo ${name}!`

let Zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`

// Bei mehrzeiligen Template Strings einfach kein + sondern einfach in dies `` wenn man enter drückt 

            // hier wird die ausgabe auch in 3 Zeilen ausgegeben   

let mehrzeiliger_template_String = `hallo ${name}!
Du bist ${alter} Jahre alt. 
Wie geht es dir?`
console.log(mehrzeiliger_template_String)   

        // hier wird die ausgabe auch in 1 Zeilen ausgegeben  
        
let mehrzeiliger_template_String_1 = `hallo ${name}!` +
`Du bist ${alter} Jahre alt.` + 
`Wie geht es dir?`
console.log(mehrzeiliger_template_String_1) 



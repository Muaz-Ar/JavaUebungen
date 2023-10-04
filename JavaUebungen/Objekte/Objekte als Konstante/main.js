"use strict";

// trotz constante kann man Eigenschaften von Objekten verändern

const person = {
    alter: 18,
    vor : "Max",
    nach: "Mustermann", 
    beruf: "Schreiner",
    hobby: "Programieren",
    ersparnis: 2000
}

person.vor = "Peter"
person.führerschein = true
delete person.führerschein 

// jedoch ist es nicht möglich die constante person zu löschen etwas anderes zuzuweisen es bleibt ein Objekt 
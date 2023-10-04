"use strict";

// einer Funktion eine einere Funktionen mitgeben 

// let funkion1 = function(){
//     console.log("Ich bin Funktion 1")
// }

let funkion2 = function(f)
{
    console.log("Ich bin Funktion 2")^
    f()
}
// funkion2(funkion1)

funkion2(function() 
{
    console.log("Ich bin Funktion1!")
})
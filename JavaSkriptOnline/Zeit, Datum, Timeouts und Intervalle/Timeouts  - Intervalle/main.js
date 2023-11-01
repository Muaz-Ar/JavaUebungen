"use strict";
// Zeitverzögerung == Timeout 
// Intervall alle paar sic durchführen 

// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

console.log("Los!");
setTimeout(function(){
    console.log("Fertig")
}, 2000)

// Weitere Syntax  setTimeout(code-string, Zeitspanne)

console.log("Los!"); 
setTimeout("console.log('Fertig!');",2000)  // oder die selben "" dann muss man im console.log(\"TExt"\)

// um die id vom Timeout herauszufinden den Timeout 
//console.log(setTimeout("console.log('Fertig!');",2000))

// dann kann man mit clearTimeout(ID) den Timeout deaktivieren 



// setInterval(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterN])

console.log("Los!");
setInterval(function(){
    console.log("Fertig")
}, 2000)


// Weitere Syntax  setInterval(code-string, Zeitspanne)

console.log("Los!"); 
setinterval("console.log('Fertig!');",2000) 
// um die id vom Interval herauszufinden den Timeout 
//console.log(setinterval("console.log('Fertig!');",2000))

// dann kann man mit clearInterval(ID) den Interval deaktivieren 
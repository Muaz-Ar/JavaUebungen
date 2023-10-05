"use strict";

for (let i = 0; i < 10; i++) {
    
    console.log("Hallo World")
}
// Gibt 10 x "Hallo World" in der Konsole aus

for (let j= 0; j <= 100; j++) {
    
    console.log(j)
}

// Gibt Zahlen 0 - 100 in der Konsole aus

for (let z = 100; z >= 0; z--) {
   
    console.log(z)
}

// Gibt Zahlen 100 - 0 in der Konsole aus

for (let x = 0; x <= 100; x += 2) {
   
    console.log(x)
}

// Zählt in 2 er schritten bis 100

function division(n) {
  
    const re = Math.floor(n / 2)
  return re;
}
console.log(division(23)) // Ausgabe: 11
console.log(division(14)) // Ausgabe: 7

// Berechnet die Zahl teil die Zahlendurch 2

let line = "";

for (let i = 1; i <= 9; i++) {

    line += i;
    console.log(line);
}

/* Gibt in der console in jeder zeile eine ausgabe fängt mit 1 an nimmt diese Zahl multipliiert diese, 
und gibt dass ergebnis der zweitenzeile mit dem ersten ergebnist wieder 
heist Z1 = 1 Z2 = 12 Z3 = 123 und das bis 9 */

let i = 1
let lines = "";

while (i <= 9) {
  lines += "*";
  console.log(lines);
  i++;
}

// macht das selbe wie die aufgabe davor nur nicht mit zahlen sondern zeichen 

function sumWordLengths(wordList) {
    // Verwende map, um die Länge jedes Wortes zu berechnen
    const wordLengths = wordList.map(word => word.length)
    
    // Verwende reduce, um die Längen zu summieren
    const totalLength = wordLengths.reduce((accumulator, currentLength) => accumulator + currentLength, 0)
    
    return totalLength
  }
  
  // Beispielaufruf
  const inputWords = ['Apfel', 'Banane', 'Kirsche']
  const result = sumWordLengths(inputWords)
  console.log(result) // Ausgabe: 18
  
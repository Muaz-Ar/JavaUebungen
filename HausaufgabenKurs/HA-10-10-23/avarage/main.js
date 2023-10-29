"use strict";
let zahl = [1, 3, 5, 7, 8, 3, 20, 24, 12, 17]
let sum = 0


 zahl.forEach(function(zahlen) {
    sum += zahlen
 })

let avarage = sum / zahl.length
console.log(avarage)

// weitere möglichkeit mit reduce habs net ganz kapiert 
// const zahl = [1, 2, 3, 4];


// let sum = 0;
// let avarage = (zahl.reduce((accumulator, 
//     currentValue) => accumulator + currentValue, sum)/zahl.length);

// console.log(avarage);
// Ausgabe: 2,5

function average(numbers) {
    if (numbers.length === 0) {
      return 0; // Um Division durch 0 zu verhindern, geben wir 0 zurück, wenn das Array leer ist.
    }
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const avg = sum / numbers.length;
    return avg;
  }
  
  function diffFromAvg(array) {
    const avg = average(array); // Verwenden der zuvor definierten average-Funktion, um den Durchschnitt zu berechnen.
    const differences = array.map(number => number - avg);
    return differences;
  }
  
  const numbers = [2, 4, 6, 8];
  const differences = diffFromAvg(numbers);
  console.log("Unterschiede zum Durchschnitt:", differences);
  
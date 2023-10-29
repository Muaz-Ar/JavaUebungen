"use strict";
function berechneSumme() {
    // Konvertiere die Argumente in ein Array
    let zahlen = Array.from(arguments);
  
    // Überprüfe, ob mindestens eine Zahl übergeben wurde
    if (zahlen.length === 0) {
      console.log("Keine Zahlen übergeben.");
      return;
    }
  
    // Berechne die Summe der Zahlen
    let summe = 0;
    for (let i = 0; i < zahlen.length; i++) {
      summe += zahlen[i];
    }
  
    console.log("Die Summe der Zahlen ist: " + summe);
  }
  
  // Beispielaufruf der Funktion mit Argumenten
  berechneSumme(1, 2, 3, 4, 5); // Ausgabe: Die Summe der Zahlen ist: 15
  berechneSumme(10, 20, 30);     // Ausgabe: Die Summe der Zahlen ist: 60
  berechneSumme();               // Ausgabe: Keine Zahlen übergeben.
  
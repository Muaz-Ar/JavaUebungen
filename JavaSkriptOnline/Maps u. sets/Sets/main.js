"use strict";

// set ähnlich wie arrays maps objektähnlich 
// in sets können nur werte nur einmal enthalten werden
// es gibt nur werte keine eigenschaften u werte 

let mein_set = new Set(); 
// mit add fügen wir werte zu unserem set hinzu 
mein_set.add("Test")
mein_set.add(13)
mein_set.add(function() {})
mein_set.add([])          // [] === [] false da Arrays Objekte sind 
mein_set.add({})        // es geht weil {} === {}  false 
mein_set.add({})        // bis auf string int und booleans sind alles Objekte in Java 
mein_set.add("Test")

mein_set.has("Test")    // true 
mein_set.has({})        // false 
mein_set.has(13)        // true 
mein_set.has(7+6)       // true 

mein_set.delete("Test")     // Test wird entfärnt 
mein_set.clear()            // alles wird entfärnt 

mein_set.size()             // inhalt anzahl
console.log(mein_set)


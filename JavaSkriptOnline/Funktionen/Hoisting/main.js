"use strict";
/*
let a
a = 5 
console.log(a)

// so wird b undifiniert ausgegeben 
constb 
console.log(b)
b = 10
// Uncaught ReferenceError: c is not defined
c = 15 
console.log(c)
let c 
*/

var a 
a = 5 
console.log(a)

var b 
console.log(b)
b = 10 

c = 15 
console.log(c)
var = c

if (true) {
    var d = 20 
}
console.log(d) // ausgabe d 
// mit var wird die variable nicht lokal erstellet sondern immer global 
// die variable e wird ausgegeben weil wir einmal e in dem Codeblock das mache 
//java schaut erst in seinem eigenen Codeblock

let e = 20 
if (true) {
    let e = 30
    console.log(e)    
}
    console.log(e)
"use strict";
/*
let obst = [
    "Äpfel",
    "Birne",
    "Bananen"
]

let gemuese = [
    "Möhren",
    "Sellerie",
    "Köhl"
]

let brot = [
    "Graubrot",
    "Schwarzbrot",
    "Vollkorn",
    "Dinkelbrot"
]

let waren = [
    brot,
    gemuese,
    obst
]*/

let waren = [
    [                                           // vereinfachte Schreibweise 
    "Äpfel",                                    
    "Birne",
    "Bananen"
],
    ["Graubrot","Schwarzbrot","Vollkorn","Dinkelbrot"],
    ["Möhren","Sellerie","Köhl"]
]
console.log(waren)
console.log(waren[2][2]);            //Köhl
console.log(waren[1][0]);            //Graubrot
console.log(waren[1][3]);            //Dinkelbrot
console.log(waren[0][2]);            //Bananen
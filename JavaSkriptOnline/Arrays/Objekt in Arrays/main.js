"use strict";
/*
let auto_1 = {
    marke: "Hyundai",
    modell: "i30 N",
    farbe: "rot"
}

let auto_2 = {
    marke: "BMW",
    modell: "X5",
    farbe: "Blau"
}

let auto_3 = {
    marke: "Ferrari",
    modell: "F50",
    farbe: "rot"
}

let autos = [
    auto_1,
    auto_2,
    auto_3
]

Objekte in Arrays zugriff funktioniert genau so 
*/

let autos = [
    {
        marke: "Hyundai",
        modell: "i30 N",
        farbe: "rot"
    },
    {
        marke: "BMW",
        modell: "X5",
        farbe: "Blau"
    },
    {
        marke: "Ferrari",
        modell: "F50",
        farbe: "rot"
    }

]
console.log(autos)

console.log(autos[0])
console.log(autos[1])
console.log(autos[2])

console.log(autos[0].marke)
console.log(autos[1].modell)
console.log(autos[2].["farbe"])

//Arrays in Objekt 

let waren = {
    obst: [
        "Äpfel",
        "Birnen",
        "Banane"
    ],
    gemuese: [
        "Möhren",
        "Sellerie",
        "Köhl"
    ],
    brot: [
        "Graubrot",
        "Schwarzbrot",
        "Vollkorn",
        "Dinkelbrot"
    ]
}

console.log(waren.obst[0])
console.log(waren.brot[1])
console.log(waren.gemuese[2])

"use strict";

let waren = [
    [                                           // vereinfachte Schreibweise 
        "Äpfel",                                    
        "Birne",
        "Bananen"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkorn",
        "Dinkelbrot"]
    ,
    [
        "Möhren",
        "Sellerie",
        "Köhl"
    ]
]

for (let i = 0; i < waren.length; i++) {    // greift auf die äuseren arrays zu 
    // console.log(waren[i])
    for (let j = 0; j < waren.length; j++) {// greift auf die inneren arrays zu 
        console.log(waren[i][j])
    }
}
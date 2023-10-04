"use strict";
function one_to_ten () {
    for (let i = 1; i <= 10; i++) {
    console.log(i)
    }
}
one_to_ten()

function evens_to_twenty() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i)
        
    }
};

evens_to_twenty();

function from_to(x, y) {
    if (y < x) {
        for (let num = x; num >= y; num--) {
            console.log(num);
        }
    } else {
        for (let num = x; num <= y; num++) {
            console.log(num);
        }
    }
}

from_to(11, 1); 
 
function from_to_by(x, y, z) {
    if (z === 0 || (z < y && x < 0) || (x > y && z > 0)) {
        console.log("Ungültige Eingabe");
        return;
      }

    if (y < x) {
        for (let num = x; num >= y; num += z) {
            console.log(num);
        }
    } else {
        for (let num = x; num <= y; num += z) {
            console.log(num);
        }
    }
}

from_to_by(1, 10, 3); 
from_to_by(10, 1, -2); 
from_to_by(3, 20, 0)


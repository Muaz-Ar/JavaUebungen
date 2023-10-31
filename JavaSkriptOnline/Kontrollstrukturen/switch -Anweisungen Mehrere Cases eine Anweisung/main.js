"use strict";

/*
let essen = "Pizza"

switch (essen) {
    case "Nudeln":
        console.log("Das mag ich!")
        break
    case "Fische":
        console.log("Das mag ich nicht!")
        break
    case "Pizza":
        console.log("Das mag ich!")
        break
    case "Hummer":
        console.log("Das mag ich nicht!")
        break
    case "Steak":
        console.log("Das mag ich!")
        break
    case "Kaviar":
            console.log("Das mag ich nicht!")
            break
    default:
            console.log(`Ich kenne "${essen}" nicht! Was ist das?`)
            break

            Kürzere schreibweise = 
}*/ 

let essen = "Pizza"

switch (essen) {
    case "Nudeln":
    case "Fische":
    case "Pizza":
        console.log("Das mag ich!")
        break
    case "Hummer":
    case "Steak":
        case "Kaviar":
        console.log("Das mag ich nicht!")
        break
        default:
            console.log(`Ich kenne "${essen}" nicht! Was ist das?`)
            break
}
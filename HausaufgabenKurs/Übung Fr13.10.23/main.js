// Lösung mit einem FOR_LOOP
// Ist Element 'x' in einem array 'xs' -> boolean
// howoften x in xs 
// indiceseOF() An welchen Indizes von xs ist x return arry 
let arr = [1, 2, 3, 4]

let xs = []
function isIn (x, xs) {
    for (let element of xs){
        if (element === x){
            return true
        } // wenn man hier ein else return false steht würde es nicht 
        //alle elemente der arrays anschauen
    }  return false
}

function howoften(x, xs) {
    let count = 0 
    for (let element of xs) {
        if ( element === x ) {
            count++
        }

    }
    return count
}
function indiceseOF (x, xs) {
    let indizes = []
    for (let i = 0; i < xs.length; i++) {
        if (xs[i] === x) {
            indizes.push[i]
       
    }return indizes
}}

// Map und Filter

// Funktion: Multipliziere jeses Elemen in xs mit 2 
function multByTwo(xs){
        for (let i = 0 ; i = xs.length; i++) {
        xs[i] = xs[i] * 2
        }
    }
    arr.map((x) => x * 2)

// Funktion: Ist x größer als 10 [0,80, 2, 11] -> [false, true, false, true]

function biggerThan(xs) {
    for (let i = 0 ; i = xs.length; i++) {
        xs[i] = xs[i] > 10
        }
    }

    arr.map((x) => x * 2)

    let personen = [
        {name: "Muhammed", age:27},
        {name: "Dimi", age:26},
        {name: "Lukas", age:29},
        {name: "Hallo", age:27}
    ]

    function person(xs) {
        for (let i = 0 ; i = xs.length; i++) {
            xs[i] = xs[i].name
            }
        }
        person.map((x) => x.name) // map funktion 



        function filterBiggerThan10(xs){
            let solution = []
            for (let i = 0; i < xs.length; i++){
                if (xs[i] > 10){
                    solution.push(xs[i])
                }
            } return solution
        }
       
        arr = filterBiggerThan10(arr) // map funktion 
        
        console.log(arr)

        arr.filter((x) => x > 10)    // filter funktion 

           // filtert einträge : Behalte nur die Personen , die 27 jahre alt sind 

        function filterBiggefilter27YearsOld(xs){
            let solution = []
            for (let i = 0; i < xs.length; i++){
                if (xs[i].age === 27){
                    solution.push(xs[i])
                }
            } return solution
        }
        person = filterBiggefilter27YearsOld(person)
        console.log(person)

        person.filter((x) => x.age === 27)   // Filterfunktion 
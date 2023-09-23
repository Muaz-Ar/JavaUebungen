"use strict";

let personen = [
    "peter",
    "Anna",
    "Mia",
    "Maximilian",
    "Marc"
]
// wenn man nicht weis wie lange das Array ist kann man lenght benutzen
for (let i = 0; i < personen.length; i++){
    console.log(`Hallo ${personen[i]}!`)
}
// das -1 mus sein, weil die lenght ist bis 5 doch es wird bei 0  gezählt 
// so wirds rückwärts abgelaufen mit >= wird au die 0 position auch gezählt
for(let i = personen.length -1; i >= 0; i--){
    console.log(`Tschüss ${personen[i]} !`)
}
/*
Das wird in der Console ausgegeben 
Hallo peter
 Hallo Anna
 Hallo Mia
 Hallo Maximilian
 Hallo Marc

 */
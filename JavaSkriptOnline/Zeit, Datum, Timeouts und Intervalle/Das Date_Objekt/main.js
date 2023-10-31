"use strict";
let d = new Date();
console.log(d); 
// so erstellen Wir ein aktuelles datum Tue Oct 31 2023 22:09:25 GMT+0100 

// belibiges datum unikszeit seit 01.01.1970 wird bis in milisec gezeigt 
// unikszeit ausgeben 
console.log(Date.now()); //1698786565887

let e = new Date(1698786494011); //Hier die Unixzeit eingeben
console.log(e);    // ausgabe in der Console Tue Oct 31 2023 22:08:14 GMT+0100 

// menschenlesbar DAtum str
// hier muss man amerikanisches datummodell nehmen MO/Tag/Jahr HH:mm:sc

let f = new Date("Oct 31 2022 22:08:14 GMT+0100")
console.log(f);

// weitere format  
// newDate(jahr, monats-index[,tag[,stunde[,minute[, sekunde[,milisec]]]]])

let g = new Date(2020, 5); 
let h = new Date(2012, 5, 23, 15, 5);
console.log(g);   //Mon Jun 01 2020 00:00:00 GMT+0200
console.log(h);     //Sat Jun 23 2012 15:05:00 GMT+0200

// auf Zeiten zugreifen mit get u. Set 

let a = new Date();
a.setFullYear(1993); // so kann man das Jahr ändern
d.setMonth(0); 
d.setDate(16);
d.setHours(9);
d.setMinutes(32);
d.setSeconds(50);
d.setMilliseconds(111);

console.log(a)

a.getFullYear(); // Auf die zeit zugreifen 
d.getMonth(); 
d.getDate();
d.getDay();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();

// um auf die Weltzeit zuzugreifen muss man UTC hinzufügen 
d.setUTCMilliseconds(111);

d.getUTCDate();

// auf unixzeit zugreifen 

let d_unix = new Date(); 
d_unix.setTime(1568557000000); 
console.log(d_unix);
console.log(d_unix.getTime())

// DAte part 3 was machen wir wenn wir Deutsche zeitausgobe geben möchte sprach und 
// ausgabeformat sprachformat 

let w = new Date(); 
console.log(w);

// d.toLocaleString([schema [,optionen]])
// optionen googlen in der documentation 

let de_DE = d.toLocaleDateString("de-DE"); //16.1.2023
let en_US = d.toLocaleDateString("EN-US"); //1/16/2023
console.log(de_DE);
console.log(en_US);

let optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
}

let de_DE_2 = d.toLocaleString("de-DE", optionen); 
console.log(de_DE_2);

// d.toLocaleDateString("de-DE") nur für datum 
// d.toLocaleTimeString("de-DE") nur für Zeit
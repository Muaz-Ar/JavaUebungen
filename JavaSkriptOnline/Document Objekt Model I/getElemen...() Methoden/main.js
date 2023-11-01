"use strict";

// to learn three Methods of getElement 

// first Method is getElementByID() works only wiht a ID

let el_by_id_1 = document.getElementById("navigation")
console.log(el_by_id_1); 

// if we try the same Method with no exist id we get null
let el_by_id_2 = document.getElementById("test"); 
console.log(el_by_id_2); 

// second Method ist getElementsByClassName 
//the reason for get elements is, that Id can exist only for one time
// but class can be exist moretimes 

let els_by_class_name = document.getElementsByClassName("jumbotron")
console.log(els_by_class_name);
// here we get an HTMLcollection 
// if the class dose not exist we get an empty HTML collection back

console.log(els_by_class_name.length == 0);  // true or false

// The therts Methode is getElementsByTagName()
let search_tag = document.getElementsByTagName("p"); 
console.log(search_tag); 
// // here we get an HTMLcollection 
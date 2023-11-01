"use strict";
// The first ist querySelevtor ("CSS selector")
let qs_1 = document.querySelector("body > #navigation > ul");
console.log(qs_1);

// we have 2 jumbotron class but quary givs us only the first class
let qs_2 = document.querySelector(".jumbotron"); 
console.log(qs_2);

// if qs find nothing,we get null  
let qs_3 = document.querySelector(".test"); 
console.log(qs_3); 

// if qs is not valide we get Uncaught Dome error
// let qs_4 = document.querySelector("$%/DF")
// console.log(qs_4); 

// with querySelectorAll() we get nodeList back 
let qsa_4 = document.querySelectorAll("body > #navigation > ul > li > a ")
console.log(qsa_4); 

let qsa_5 = document.querySelectorAll("test")
console.log(qsa_5); 
// or 
console.log(qsa_5.length == 0); // is true that meens "test" is not exist

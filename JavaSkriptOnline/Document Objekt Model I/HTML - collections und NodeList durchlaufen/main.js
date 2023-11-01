"use strict";

let html_1 = document.getElementsByClassName("jumbotron")
let html_2 = document.getElementsByTagName("li")
console.log(html_1); 

// HTML Collections are similar Objects Arrays
// we can use for loop
// iterating through the HTML Collection
for (let i = 0; i < html_1.length; i++) {
    console.log(html_1[i]);
}


for (let i = 0; i < html_2.length; i++){
    console.log(html_2[i]); 
} 

// we can do the same with the for of loop
for (let e of html_1){
    console.log(e);
}

// node_Lists 
let node_list = document.querySelectorAll("p"); 
console.log(node_list); 

for (let i = 0; i < node_list.length; i++) {
    console.log(node_list[i]); 
}

for (let i of node_list) {
    console.log(i); 
}

node_list.forEach(function(e) {
    console.log(e); 
});
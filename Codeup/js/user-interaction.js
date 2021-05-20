"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var userName = "";

while (userName === "") {
         userName = prompt ("May, I have your name?")
       }
// TODO: Show an alert message that welcomes the user based on their input.
alert ("Hola, " + userName + "!");

// TODO: Ask the user if they like pizza.

var response = confirm ("Do you like pizza, " + userName + "?");

if (response) {
     alert ("Perfect, I do like pizza!");
    } else {
    alert ("It's one of my favorite..");
    }
    
//       Based on their answer show a creative alert message.

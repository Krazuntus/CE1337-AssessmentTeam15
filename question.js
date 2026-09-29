const prompt = require("readline-sync")
let score = 0;
let lives = 3;

function displayQuestion (question){
    console.log(question[0]);
    console.log("A: " + question[1]);
    console.log("B: " + question[2]);
    console.log("C: " + question[3]);
    console.log("D: " + question[4]);
}

displayQuestion()

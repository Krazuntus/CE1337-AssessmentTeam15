const prompt = require("readline-sync");
let score = 0;
let lives = 3;
function welcomePlayer(){
    let playerName = prompt.question("What is your name? ");
    console.log("Welcome to Trivia Game " + playerName + "! Have fun!");
}

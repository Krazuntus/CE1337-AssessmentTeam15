const prompt = require("readline-sync");
function welcomePlayer(){
    let playerName = prompt.question("What is your name? ");
    console.log("Welcome to Trivia Game " + playerName + "! Have fun!");
}
welcomePlayer();
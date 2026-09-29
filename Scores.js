const promt = require("readline-sync");

let Score = 0; //declared now work adapted from Gamesdevelopment NC Course
let wrongAnswer = "Wrong Answer";
let correctAnswer = "Right Answer"


function checkscore() {

//when answer is incorrect
if (correctAnswer == "Right Answer") {
    Score++; 
}
    
else if (wrongAnswer == "Wrong Answer") {
    Score = Score; //stay same
}
    console.log("Your current score is: " + Score);
    return Score;
}

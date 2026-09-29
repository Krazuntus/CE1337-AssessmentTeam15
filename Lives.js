const promt = require("readline-sync");

//adapted from my work the NC in Cyber Security course
let Lives = 3;
let wrongAnswer = "Wrong Answer"; //not final variable, will check when merge happens
let correctAnswer = "Right Answer"

function checklives() { //moved function above with opening bracket
//When answer not correct
Lives--; //fixed capital 
if (wrongAnswer !== correctAnswer)
    {console.log("Wrong answer, you have lost a life:" );
    
    if  (Lives == 0) { 
    console.log("You've lost all your lives game over, " + Score)
    }
    console.log("Your current lives are: " + Lives)
    return Lives; //console needed to be above return 

    }
}

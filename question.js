const prompt = require("readline-sync")
let score = 0;
let lives = 3;

function displayQuestion (question){
    console.log(question[0]);
    console.log(question[1]);
    console.log(question[2]);
    console.log(question[3]);
    console.log(question[4]);
}


function getAnswer(){
    let answer;

    do {
        answer = prompt.question("Choose right answer A, B, C or D.").toUpperCase(); // toUpperCase helps with a b c d answers 
    }while (answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D");

    if(answer === "B")// "B" is just to test will be taken from 2array
        {
        console.log("Correct answer!");
        score= score + 100;

    } else {
        console.log("wrong answer");
        lives --;
    }
}
displayQuestion()
getAnswer();
console.log("Score " + score);
console.log("Lives" + lives);
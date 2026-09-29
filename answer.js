const prompt = require("readline-sync")
let score = 0;
let lives = 3;
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
getAnswer();
console.log("Score " + score);
console.log("Lives" + lives);

if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
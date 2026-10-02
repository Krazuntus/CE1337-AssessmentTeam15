// answer.js
const prompt = require("readline-sync")
let score = 0;
let lives = 3;
function getAnswer(question){
    let answer;
//keps asking until a b c d is choosen toUpperCase helps with lower case input to still be considered
    do {
        answer = prompt.question("Choose right answer A, B, C or D.").toUpperCase(); // toUpperCase helps with a b c d answers 
    }while (answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D");
//checking for correct answer that is 5th position in array of objects
    if(answer === question[5])// "B" is just to test will be taken from 2array
        {
        console.log("Correct answer!");
        score= score + 100;// adding scores if answer was correct

    } else {
        console.log("wrong answer");
        lives --;// handles lives loos when inncorrect answer
    }
//shows current score and lives status
console.log("Score " + score);
console.log("Lives" + lives);
//checks if player still has lives to play if not ends game
if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
}

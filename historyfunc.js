function history(){
    console.log("Here is the questions for history");
    console.log(questions[5][0]);
    console.log("1 =  ",questions[5][1]);
    console.log("2 =  ",questions[5][2]);
    console.log("3 =  ",questions[5][3]);
    console.log("4 =  ",questions[5][4]);
    let answerH1 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerH1){
case "A":
console.log("incorrect");
break;
case "B":
console.log("correct");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("incorrect");
break;
default:
console.log("Invalid input!");
break;
}if (answerH1 == "B"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
console.log("Here is the second questions for history");
    console.log(questions[6][0]);
    console.log("1 =  ",questions[6][1]);
    console.log("2 =  ",questions[6][2]);
    console.log("3 =  ",questions[6][3]);
    console.log("4 =  ",questions[6][4]);
    let answerH2 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerH2){
case "A":
console.log("Correct");
break;
case "B":
console.log("Incorrect");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("incorrect");
break;
default:
console.log("Invalid input!");
break;
}if (answerH2 == "A"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
console.log("Here is the third questions for history");
    console.log(questions[7][0]);
    console.log("1 =  ",questions[7][1]);
    console.log("2 =  ",questions[7][2]);
    console.log("3 =  ",questions[7][3]);
    console.log("4 =  ",questions[7][4]);
    let answerH3 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerH3){
case "A":
console.log("Incorrect");
break;
case "B":
console.log("Correct");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("incorrect");
break;
default:
console.log("Invalid input!");
break;
}if (answerH3 == "B"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
console.log("Here is the fourth questions for history");
    console.log(questions[8][0]);
    console.log("1 =  ",questions[8][1]);
    console.log("2 =  ",questions[8][2]);
    console.log("3 =  ",questions[8][3]);
    console.log("4 =  ",questions[8][4]);
    let answerH4 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerH4){
case "A":
console.log("Incorrect");
break;
case "B":
console.log("Correct");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("incorrect");
break;
default:
console.log("Invalid input!");
break;
}if (answerH4 == "B"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
console.log("Here is the fifth questions for history");
    console.log(questions[9][0]);
    console.log("1 =  ",questions[9][1]);
    console.log("2 =  ",questions[9][2]);
    console.log("3 =  ",questions[9][3]);
    console.log("4 =  ",questions[9][4]);
    let answerH5 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerH5){
case "A":
console.log("Incorrect");
break;
case "B":
console.log("incorrect");
break;
case "C":
console.log("Correct");
break;
case "D":
console.log("incorrect");
break;
default:
console.log("Invalid input!");
break;
}if (answerH5 == "C"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
    
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
}

console.log(history());
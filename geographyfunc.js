function geography(){
    console.log("Here is the questions for geography");
    console.log(questions[0][0]);
    console.log("1 =  ",questions[0][1]);
    console.log("2 =  ",questions[0][2]);
    console.log("3 =  ",questions[0][3]);
    console.log("4 =  ",questions[0][4]);
    let answerG1 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerG1){
case "A":
console.log("incorrect");
break;
case "B":
console.log("Incorrect");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("Correct");
break;
default:
console.log("Invalid input!");
break;
}if (answerG1 == "D"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
    return;
}
console.log("Here is the second questions for geography");
    console.log(questions[1][0]);
    console.log("1 =  ",questions[1][1]);
    console.log("2 =  ",questions[1][2]);
    console.log("3 =  ",questions[1][3]);
    console.log("4 =  ",questions[1][4]);
    let answerG2 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerG2){
case "A":
console.log("Incorrect");
break;
case "B":
console.log("Incorrect");
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
}if (answerG2 == "C"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
    return;
}
console.log("Here is the third questions for geography");
    console.log(questions[2][0]);
    console.log("1 =  ",questions[2][1]);
    console.log("2 =  ",questions[2][2]);
    console.log("3 =  ",questions[2][3]);
    console.log("4 =  ",questions[2][4]);
    let answerG3 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerG3){
case "A":
console.log("Incorrect");
break;
case "B":
console.log("Incorrect");
break;
case "C":
console.log("incorrect");
break;
case "D":
console.log("Correct");
break;
default:
console.log("Invalid input!");
break;
}if (answerG3 == "D"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
    return;
}
console.log("Here is the fourth questions for geography");
    console.log(questions[3][0]);
    console.log("1 =  ",questions[3][1]);
    console.log("2 =  ",questions[3][2]);
    console.log("3 =  ",questions[3][3]);
    console.log("4 =  ",questions[3][4]);
    let answerG4 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerG4){
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
}if (answerG4 == "A"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
    return;
}
console.log("Here is the fifth questions for geography");
    console.log(questions[4][0]);
    console.log("1 =  ",questions[4][1]);
    console.log("2 =  ",questions[4][2]);
    console.log("3 =  ",questions[4][3]);
    console.log("4 =  ",questions[4][4]);
    let answerG5 = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answerG5){
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
}if (answerG5 == "C"){
    points = points + 100;
    console.log("you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
    
}if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
    return;
}
}

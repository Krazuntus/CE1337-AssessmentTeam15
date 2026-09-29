function history(){
    console.log("Here is the questions for history");
    console.log(questions[5][0]);
    console.log("1 =  ",questions[5][1]);
    console.log("2 =  ",questions[5][2]);
    console.log("3 =  ",questions[5][3]);
    console.log("4 =  ",questions[5][4]);
    let answer = prompt.question("please enter your answer from A-D:  ");
    //answer = Number(answer);
switch(answer){
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
}if (answer == "B"){
    points = points + 100;
    console.log("you got it correct, you now have", points, "points &", lives, "lives left");
}else{
    lives = lives - 1;
    console.log("you got it wrong, you now have", lives, "lives left");
}
}

console.log(history());
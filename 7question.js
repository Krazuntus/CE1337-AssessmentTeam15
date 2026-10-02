//displays questions and all answers to each question
function displayQuestion (question){
    console.log(question[0]);
    console.log("A: " + question[1]);
    console.log("B: " + question[2]);
    console.log("C: " + question[3]);
    console.log("D: " + question[4]);
}
//for.js to go over categories and questions
//this part mainly goes over full game using added befor functions
welcomePlayer();
showMenu();
// outer loop helps playing all 4 categories 
for (let category=0; category<4; category++)
    {


chooseCategory();
//questions go after each other without asking 
for (let i=startQuestion; i<startQuestion + 5; i++)
    {
    displayQuestion(questions[i]);
    getAnswer(questions[i]);
//important remeber to check for lives left first if after each question and secon one after full category. 
    if (lives === 0)
        {break;
    }
}
        if (lives === 0)
        {break;
    }
    }
    

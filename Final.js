// Function to welcome the player and get their name 
const prompt = require("readline-sync");
let score = 0;
let lives = 3;
function welcomePlayer(){
    let playerName = prompt.question("What is your name? ");
    console.log("Welcome to Trivia Game " + playerName + "! Have fun!");
}
//Functions to display the game rules aswell as the main menu
function showMenu(){
    console.log("\n=== MAIN MENU===");
    console.log("1.START GEME");
    console.log("2.SEE GAME RULES");

    let menuChoice = prompt.question("Choose option 1 or 2: ");

    switch(menuChoice){
        case "1":
            console.log("Starting your game!");
            //welcomePlayer() // function added by me in different js
            break;
        
        case "2":
            showRules(); // function added by me in different js  
            showMenu();  
            break;

        default: 
        console.log("Invalid option. Choose 1 or 2.");    

    }
}
// Function showRules()
// Function to display the game rules to the user 
function showRules(){
    console.log("\n=== GAME RULES ===");
    console.log("You start the game with 3 lives");
    console.log("You choose category (1-4) and answer all 5 question ");
    console.log("Correct answer gives you 100$");
    console.log("wrong answer means you loose 1 life");
    console.log("Answer using capital letters A, B, C, D");
    console.log("Have fun and stay alive!");
}

//the array for the questions in the geography category
let questions = Array() 
questions [0] = ["what is the capital of Australia","Melbourn", "Perth", "Sydney", "cannebra", "D"];//cannebra
questions [1] = ["In what country is mount Everest in?", "Japan", "Mongolia", "Nepal", "Argentina", "C"];//nepal
questions [2] = ["What are the primary colours of the flag of Bahrain?", "green & red", "orange % yellow", "green & white", "red & white", "D"];//red and white 
questions [3] = ["In what country would you find the kremlin?","Russia", "Ukraine", "Belarus", "Georgia", "A"];//russia
questions [4] = ["what country has the largest population in the world?", "China", "India", "Pakistan", "USA","B"];//india
//the array for the questions for the history category
questions [5] = ["in what year did WW2 start?", 1938, 1939, 1940, 1935, "B"];//1939
questions [6] = ["Who was the fist woman to win the Nobel piece prize?"," Bertha von Suttner ","Jane Addams ", "Emily Greene Balch ", "Mother Teresa ", "A"];//bertha
questions [7] = ["What year was the great fire of london?", 1664, 1666, 1777, 1888, "B" ];//1666
questions [8] = ["Where was the first olympic games held?", "Italy", "Greece", "England", "Mexico", "B"];//greece
questions [9] = ["What year was the moon landing?", 1955, 1984, 1969, 1990, "C"];//1969
//the array for the tv/movies category
questions [10] = ["In what year was Harry Potter and the Philosopher's Stone released?", 2001, 2007, 2013, 2005, "A"];//2001
questions [11] = ["How many Back to the Future movies were made?", 2, 3, 4, 5, "B"];//3
questions [12] = ["Who played the character Rose in the movie,Titanic?","Kate Winslet","Gloria Stuart","Kirsten Dunst","Matt Damon", "A" ];//kate winslet 
questions [13] = ["How many oscars did the movie Oppenheimer get at the 2024 Oscars", 5, 7, 10, 11, "B"];//7
questions [14] = ["What movie has made the most money of all time in sales?", "Avatar", "Avengers Endgame", "Titanic", "Star Wars: The Force Awakens ", "A"];//avatar
//the array for sports category
questions [15] = ["Who is the current F1 champion?",  "George Russel", "Lando Norris", "Lewis Hamilton","Max Verstappen", "B"];//Lanod norris 
questions [16] = ["What year was the first world cup",1938, 1890, 1930, 1940, "C" ];//1930
questions [17] = ["How many point is a bullseye worth in darts?", 45, 55, 100, 50, "D"];//50
questions [18] = ["How many minutes long is a game of ice hockey?", 40, 90, 60, 80, "C"];//60
questions [19] = ["Who won the first ballon d'or?"," Denis Law", " Lev Yashin", " Stanley Matthews", " Johan Cruyff ", "C" ]; //stanley matthews
// each row is a question and each collumn is an answer 

//1Darray

let categories = [
    "Geography", // will have to add category names later
    "History",
    "Films/TV",
    "Sports",
];

let startQuestion;

let usedCategories = [false, false, false, false];// used to stop player from choosing same category second time, do-while

function chooseCategory(){
    console.log("\n=== CHOOSE CATEGORY ===");
    console.log("1. " + categories [0]); // remember to add names to categories
    console.log("2. " + categories [1]);
    console.log("3. " + categories [2]);
    console.log("4. " + categories [3]);

let categoryChoice;
// do-while keeps asking player to choose a category until valid and unused category is choosen
do 
{ 
 categoryChoice = prompt.question("Choose chategory (1-4)  ");

 if(categoryChoice !== "1" && categoryChoice !== "2" && categoryChoice !== "3" && categoryChoice !== "4")// validation if number entered is 1-4
 {
    console.log("Invalid category. Please choose number between 1 and 4");
 }
 else if (usedCategories[categoryChoice -1] === true)//checking if category was already pleyed
 {
    console.log("Category was already played. Please choose different one.");
 }
}while (categoryChoice !== "1" && categoryChoice !== "2" && categoryChoice !== "3" && categoryChoice !== "4" || usedCategories[categoryChoice -1] === true);//repet if not valid or used category


switch(categoryChoice)// switch used to choose categories clearly
{
    case "1":
        console.log("Your choice is " + categories[0]);
        startQuestion = 0;// sets the starting question 
        usedCategories[0] = true;// marking used categoie so code knows not to play it again
        break;
    case "2":
        console.log("Your choice is " + categories[1]);
        startQuestion = 5;
        usedCategories[1] = true;
        break;
    case "3":
        console.log("Your choice is " + categories[2]);
        startQuestion = 10;
        usedCategories[2] = true;
        break;
    case "4":
        console.log("Your choice is " + categories[3]);
        startQuestion = 15;
        usedCategories[3] = true;
        break;   
        //default handles wrong cat choices
        default:
            console.log("Invalid category. Choose 1-4.");
        
    }
}

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
        lives --;// handles lives lost when incorrect answer
    }
//shows current score and lives status
console.log("Score " + score);
console.log("Lives " + lives);
//checks if player still has lives to play if not ends game
if (lives === 0 ){
    console.log("XXX GAME OVER XXX");
}
}

// added right answers at the end for easier checking with players answers


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
    
console.log("Well done you completed the quiz!", "\n Your score is ", + score ,"\nThe amount of lives you had left is", + lives);
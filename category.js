const prompt = require("readline-sync");

//1Darray

let categories = [
    "1.Geography", // will have to add category names later
    "2.History",
    "3.Films/TV",
    "4.Sports",
];

function chooseCategory(){
    console.log("\n=== CHOOSE CATEGORY ===");
    console.log("1.Geography " + categories [0]); // remember to add names to categories
    console.log("2.History " + categories [1]);
    console.log("3.Films/TV " + categories [2]);
    console.log("4.Sports " + categories [3]);

let categoryChoice = prompt.question("Choose chategory (1-4)");

switch(categoryChoice){
    case "1":
        console.log("Your choice is " + categories[0]);
        break;
    case "2":
        console.log("Your choice is " + categories[1]);
        break;
    case "3":
        console.log("Your choice is " + categories[2]);
        break;
    case "4":
        console.log("Your choice is " + categories[3]);
        break;   
        
        default:
            console.log("Invalid category. Choose 1-4.");
        
    }
}

chooseCategory();
const prompt = require("readline-sync");

//1Darray

let categories = [
    "1.", // will have to add category names later
    "2.",
    "3.",
    "4.",
];

function chooseCategory(){
    console.log("\n=== CHOOSE CATEGORY ===");
    console.log("1. " + categories [0]); // remember to add names to categories
    console.log("2. " + categories [1]);
    console.log("3. " + categories [2]);
    console.log("4. " + categories [3]);

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
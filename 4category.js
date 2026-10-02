//category.js

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
 categoryChoice = prompt.question("Choose chategory (1-4)");

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

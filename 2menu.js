
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

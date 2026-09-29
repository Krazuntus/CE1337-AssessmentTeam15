// input validation function

let userInput = ""

function validateInput(){
    userInput = String(userInput) // convert userInput to string incase type different
    userInput = userInput.toLocaleLowerCase(); // convert userInput to lowercase to not throw off the if statement
    if(userInput == "a" || userInput == "b" || userInput == "c" || userInput == "d"){
        return userInput;
    }else{ // if input isnt recognised in the if statement above the input is invalid
        console.log("Input invalid.");
    }
}
validateInput()
// input validation function

let userInput = ""

function validateInput(){
    userInput = String(userInput)
    userInput = userInput.toLocaleLowerCase();
    if(userInput == "a" || userInput == "b" || userInput == "c" || userInput == "d"){
        return userInput;
    }else{
        console.log("Input invalid.");
    }
}
validateInput()
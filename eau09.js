//FUNCTIONS
function isError (commandLineInput) {
    if (commandLineInput==="" || commandLineInput===undefined ) {
        return true;
    }
}

function numberOfLetter (arrayInput) {
    let count = 0
    for (let i = 0; i < arrayInput.length; i++) {
        if (isNaN(arrayInput[i])) {
            count += 1;
        }
    } return count
}

function isOnlyNumber (value) {
    if (value===0) {
        return true;
    } 
    else {
        return false;
    }
}

//ERROR HANDLING
const commandLineInput = process.argv[2];
if (isError(commandLineInput)===true) {
    console.log("error");
    process.exit(0);
}

//PARSING
const inputSplited = commandLineInput.split("");

//RESOLUTION
const sumOfLetters = numberOfLetter(inputSplited);
const result = isOnlyNumber(sumOfLetters);

//DIPLAY
console.log(result);
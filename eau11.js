//FUNCTION
function isError (input){
    if (input==="" || input===undefined) {
        return true;
    }
    return false;
} 

function indexWanted (sentence,argumentWanted) {
    let index = -1;
    for (let i = sentence.length; i >= 0; i--) {
        if (sentence[i]===argumentWanted.join()) {
            index = i;
        }
    } return index;
}

//ERROR HANDLING
const argument1Input = process.argv[2];
const argument2Input = process.argv[3];

if (isError(argument1Input) || isError(argument2Input)) {
    console.log("error");
    process.exit(0);
}

//PARSING
const sentenceInput = process.argv.slice(2,-1);
const elementWanted = process.argv.slice(-1);

//RESOLUTION
const indexOfElementWanted = indexWanted(sentenceInput,elementWanted);

//DISPLAY
console.log(indexOfElementWanted);
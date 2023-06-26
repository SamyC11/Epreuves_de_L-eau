//FUNCTIONS
 function isError (commandLineInput) {
    if (commandLineInput==="" || commandLineInput===undefined || !isNaN(parseInt(commandLineInput))) {
        return true;
    }
 }

function caseTransformation (array) {
    newArray = array
    for (let i = 0; i < array.length; i++) {
        array[i].toLowerCase();
        array[i] = array[i].split("")
    
        for (let j = 0; j < 1; j++) {
            array[i][j] = array[i][j].toUpperCase();
        }  
    } return array;
}

function joinArrayElements (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].join("");
    }return array;
}

//ERROR HANDLING
const commandLineInput = process.argv[2];
if (isError(commandLineInput)===true) {
    console.log("error");
    process.exit(0);
}

//PARSING
const splitedArray = commandLineInput.split(" ");

//RESOLUTION
const arrayCased = caseTransformation(splitedArray);
const finalArray = joinArrayElements(arrayCased);

//DISPLAY
console.log(finalArray.join(" "));

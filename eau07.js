//FUNCTION
function isError (userInput) {
    if (userInput==="" || userInput===undefined || !isNaN(parseInt(userInput)))
    return false;
}

function conversionToArray (charInput) {
    newArray = charInput.split("");
    return newArray;
}

function upperCaseOverTwo (array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array[i]=array[i].toUpperCase();
        }
        else
        {
            array[i]= array[i].toLowerCase();
        }
    } return array.join("");
}


//GESTION DES ERREURS
const commandLineInput=process.argv[2]
if (isError(commandLineInput)===false) {
    console.log("error");
    process.exit(0);
}

//PARSING
;
const commandLineArray = conversionToArray(commandLineInput);
//RESOLUTION
const upperCaseOverTwoInput= upperCaseOverTwo(commandLineArray);

//AFFICHAGE
console.log(upperCaseOverTwoInput);
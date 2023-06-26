//FUNCTIONS
function isError (array) {
    for (let i = 0; i < array.length; i++) {
        if (array.length<2 || array[i]==="" || isNaN(array[i]) ) {
            return true;
        }
    } return false;
}
 function differenceMin (array) {
    let arrayDifference = parseInt(array[array.length-1]);
    for (let i = array.length; i>=0 ; i--) {
        let difference = parseInt(array[i])-parseInt(array[i-1]);
        if (difference<arrayDifference) {
            arrayDifference = difference;
        }
    } return arrayDifference;
 }

//ERROR HANDLING
const commandLineInput = process.argv.slice(2);
if (isError(commandLineInput)) {
    console.log("error");
    process.exit(0);
}

//PARSING
const sortedArray = commandLineInput.map(Number).sort((a, b)=> a-b);
console.log(sortedArray);

//RESOLUTION
const differenceMinimumOfArray = differenceMin(sortedArray);

//DISPLAY
console.log(Math.abs(differenceMinimumOfArray));

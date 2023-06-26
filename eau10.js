//FUNCTIONS
function isError (commandLineInput) {
    if (commandLineInput==="" || commandLineInput===undefined || isNaN(commandLineInput)) {
        return true
    }   return false
}
function isSamesInput(value1,value2) {
    if (value1===value2) {
        return true;
    }
    return false;
}


function wichInputMin (value1, value2) {
    if (value1 < value2) {
        return value1
    } return value2

}function wichInputMax (value1, value2) {
    if (value1 > value2) {
        return value1
    } return value2
}


function arrayCreation (valueMin,valueMax) {
    const difference = valueMax-valueMin;
    newArray = Array(difference+1);
    newArray[0] = valueMin;
    newArray[difference] = valueMax;
    for (let i = 1; i < newArray.length-1; i++) {
        newArray[i]=newArray[i-1]+1;
    } return newArray;
}


//ERROR HANDLING
const input1 = parseInt(process.argv[2]);
const input2 = parseInt(process.argv[3]);
if (isError(input1)) {
    console.log("error");
    process.exit(0);
}
if (isError(input2)) {
    console.log("error");
    process.exit(0);
}
if (isSamesInput(input1,input2)===true){
    console.log("error");
    process.exit(0);
}

//PARSING
const inputMin = wichInputMin(input1,input2);
const inputMax = wichInputMax(input1,input2);

//RESOLUTION
const finalArray = arrayCreation(inputMin,inputMax).slice(0,-1);
//DISPLAY
console.log(finalArray.join(" "));
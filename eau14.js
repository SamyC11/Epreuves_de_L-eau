//FUNCTIONS
function isError (array) {
    for (let i = 0; i < array.length; i++) {
        if (array.length<2 || array[i]==="" || isNaN(array[i]) ) {
            return true;
        }
    } return false;
}

function my_selection_sort (array) {
    for (let i =0 ; i<newArray.length-1 ; i++) {
        let min = array[i];
        let iMin = i;
        for (let j = i+1; j < newArray.length; j++) {
            if (array[j]<min) {
                min = array[j];
                iMin = j;
            }
        let switcher = array[i];
        array[i] = array[iMin];
        array[iMin] = switcher;
        }
    } return array;
}

//ERROR HANDLING
const commandLineInput = process.argv.slice(2);
if (isError(commandLineInput)) {
    console.log("error");
    process.exit(0);
}
//PARSING
const myArray=commandLineInput.map(Number);

//RESOLUTION
const finalArray = my_selection_sort(myArray);

//DISPLAY
console.log(finalArray);
//FUNCTIONS
function isError (array) {
    for (let i = 0; i < array.length; i++) {
        if (array.length<2 || array[i]==="" || isNaN(array[i]) ) {
            return true;
        }
    } return false;
}

function my_bubble_sort (array) {
    for (let i = array.length ; i>=1 ; i--) {
        for (let j = 0; j < i-1; j++) {
            if (array[j+1]<array[j]) {
                let switcher = array[j];
                array[j] = array[j+1];
                array[j+1] = switcher ;
            }
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
const finalArray = my_bubble_sort(myArray);

//DISPLAY
console.log(finalArray);

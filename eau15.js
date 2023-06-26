//FUNCTIONS
function isError (array) {
    for (let i = 0; i < array.length; i++) {
        if (array.length<2 || array[i]==="" || !isNaN(array[i])) {
            return true;
        }
    } return false;
}


function my_ascii_sort (array) {
    for (let i = array.length ; i>=0; i--) {
           for (let j=0 ; j<i-1; j++) {
                if (array[j+1].charCodeAt(0)<array[j].charCodeAt(0)) {
                let switcher = array[j];
                array[j]= array[j+1];
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

//RESOLUTION
const finalArray = my_ascii_sort(commandLineInput);

//DISPLAY
console.log(finalArray);

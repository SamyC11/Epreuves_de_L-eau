//FONCTIONS
function argumentProblem (array){
    if (array[0]===undefined) {
        console.log("Error");
        process.exit(0);
    }
}

//GESTION DES ERREURS D'ARGUMENT
argumentProblem(process.argv.slice(2));


//PARSING
let myArray = printLineByLine (process.argv.slice(2));


//RESOLUTION

function printLineByLine (array) {
    for (let i = array.length-1; i >=0 ; i--) {
        console.log(array[i]);
    }
}

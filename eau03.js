//FONCTIONS
// Création d'un tableau de longueur N

function isError (number) {
    if (number===undefined || number==="" || isNaN(number)===true || number<0) {
    console.log("-1"); 
    process.exit(0);
    }
   ;
}

function initiateArray (index) {
    let array = Array(index);
    return array;
}

function fibonacciImplementation (array) {
    array[0]= 0
    array[1]= 1
    array[2]= 1
for (let i = 3; i <= number; i++) {
    array[i]= array[i-1]+array[i-2];
}
return array;
}


//GESTION DES ERREURS
isError(parseInt(process.argv[2]));


//PARSING
let number = parseInt(process.argv[2]);


//RESOLUTION
let firstArray = initiateArray(number);
let finalArray = fibonacciImplementation(firstArray);

//AFFICHAGE

console.log(finalArray[number]);
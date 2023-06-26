//FONCTIONS
function isError (value) {
    if (isNaN(value)===true || value===undefined || value<0) {
    console.log("-1");
    process.exit(0);
    }
}

 function isPrime(arg){
    for (let i = 2; i <= Math.sqrt(arg); i++) {
        if (arg % i === 0) {
            return false;
        }
      }
    return true;
}
function followingPrime (number) {
    for (let i = number+1; ; i++) {
        if (isPrime(i)) {
            return i;
        }
    }
}

//GESTION DES ERREURS
isError(parseInt(process.argv[2]));

//PARSING
let number=parseInt(process.argv[2]);

//RESOLUTION
let finalNumber=followingPrime(number);

//AFFICHAGE
console.log(finalNumber);
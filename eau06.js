//FUNCTIONS
function isError (input) {
    if (input===undefined || input==="") {
        return true;
    }
}

function isPresent (string1,string2) {
   string1 = string1.split("");
    for (let i = 0; i < string1.length; i++) {
        partOfString1 = string1.slice(i,i+string2.length).join("");
        if (partOfString1===string2) {
            return true;
        }
        return false;
    }
}

//PARSING
const firstInput = process.argv[2];
const secondInput = process.argv[3];

//GESTION DES ERREURS
if (isError(firstInput)===true) {
    console.log("error");
    process.exit(0);
}
if (isError(secondInput)===true) {
    console.log("error");
    process.exit(0);
}

//RESOLUTION & AFFICHAGE
isPresent(firstInput,secondInput)===true? console.log("true"): console.log("false");
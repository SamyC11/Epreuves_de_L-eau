// FONCTIONS UTILISEES

//Création des tableaux
function arrayCreation () {
let array = [];
for (let i = 0; i <= 99; i++) {
    array.push(i.toString().padStart(2, 0));
}
return array;
}

// Croisement des tableaux initiaux => création tableau final
function arrayCrossing (firstArray, secondArray) {
let thirdArray = [];
for (let i = 0; i <= firstArray.length-1; i++) {
    for (let j = i+1; j <= secondArray.length-1; j++) {
        thirdArray.push((`${firstArray[i]} ${secondArray[j]}`));
    }
}
return thirdArray 
}



// RESOLUTION

let array1 = arrayCreation();
let array2 = arrayCreation();

let finalArray = arrayCrossing(array1,array2)




// AFFICHAGE RESULTATS

console.log(finalArray);
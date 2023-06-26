//Création du tableau initial avec toutes les valeurs
let tableau1 = [];
for (let i = 1; i <= 987; i++) {
    tableau1.push(i);
}
//Insertion de 0 dans les index < 100
for (let i = 0; i < tableau1.length; i++) {
    tableau1[i] = tableau1[i].toString().padStart(3, 0);
}

// Suppression des index dans des valeurs sont en doublon
for (let i = tableau1.length - 1; i >= 0; i--) {
    if (tableau1[i][0] === tableau1[i][1] || tableau1[i][0] === tableau1[i][2] || tableau1[i][1] === tableau1[i][2]) {
        tableau1.splice(i, 1);
    }
}

//Suppression des valeurs les plus grandes avec les mêmes chifres

for (let i = 0; i < tableau1.length; i++) {
    let combinaison1 = [tableau1[i][1], tableau1[i][2], tableau1[i][0]].toString().replaceAll(',', "");
    let combinaison2 = [tableau1[i][2], tableau1[i][1], tableau1[i][0]].toString().replaceAll(',', "");
    let combinaison3 = [tableau1[i][0], tableau1[i][2], tableau1[i][1]].toString().replaceAll(',', "");
    let combinaison4 = [tableau1[i][1], tableau1[i][0], tableau1[i][2]].toString().replaceAll(',', "");
    let combinaison5 = [tableau1[i][2], tableau1[i][0], tableau1[i][1]].toString().replaceAll(',', "");
    for (let j = i; j < tableau1.length; j++) {
        if (tableau1[j] === combinaison1 || tableau1[j] === combinaison2 || tableau1[j] === combinaison3 || tableau1[j] === combinaison4 || tableau1[j] === combinaison5) {
            tableau1.splice(j, 1);
        }
    }
}

//Affichage résultat

console.log(tableau1);
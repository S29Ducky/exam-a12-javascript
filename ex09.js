function compterMots(chaine) {
return chaine.split(" ").length
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4
console.log(compterMots("Bonjour tout le monde gg bg")); // Résultat attendu : 6
console.log(compterMots("Bonjour tout le monde il faut ce cover la tete bg")); // Résultat attendu : 11
console.log(compterMots("Bonjour tout le monde il faut eco mat bg")); // Résultat attendu : 9
console.log(compterMots("Bonjour tout le")); // Résultat attendu : 3

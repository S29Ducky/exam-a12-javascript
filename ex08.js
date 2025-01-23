function sommePairs(tab) {
	let somme = 0;

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 == 0) {
			somme = somme + tab[i];
		}
	}

	return somme;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
console.log(sommePairs([0, 5, 3, 7])); // Résultat attendu : 0
console.log(sommePairs([5, 24, 0, -4])); // Résultat attendu : 20
console.log(sommePairs([])); // Résultat attendu : 0
console.log(sommePairs([-6, -5, 0, 0])); // Résultat attendu : -6

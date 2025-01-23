function doublons(tab) {
	let newTab = [];
	for (let i = 0; i < tab.length; i++) {
		newTab.push(tab[i] * 2);
	}

	return newTab;
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
console.log(doublons([-1, 0, 10])); // [-2, 0, 20]
console.log(doublons([])); // []
console.log(doublons([-12, 0, -10])); // [-24, 0, -20]
console.log(doublons([10, -10, 0])); // [20, -20, 0]

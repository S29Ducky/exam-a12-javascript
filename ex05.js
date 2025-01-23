function compterVoyelles(chaine) {
	let nbdevoyelle = 0;
	for (let i of chaine){
		if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == "y") {
            nbdevoyelle++
		}
    }
    return nbdevoyelle
}

console.log(compterVoyelles("bonjouroutyue")); // Résultat attendu : 8

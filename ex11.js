function premiereLettreMajuscule(chaine) {
    let one = (chaine.substr(0, 1));
	return one.toUpperCase() + ("onjour tout le monde");
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"

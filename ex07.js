function moyenne(tab) {
    let moy = 0
    for (let i = 0; i < tab.length; i++) {
        moy = moy + tab[i]
	}
    moy = moy / tab.length
    if (tab.length == 0){
        return 0
    }
	return moy;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
console.log(moyenne([0, -5, 35])); // Résultat attendu : 10
console.log(moyenne([])); // Résultat attendu : 
console.log(moyenne([-5, 0, 8])); // Résultat attendu : 1
console.log(moyenne([0, 0, 0])); // Résultat attendu : 0
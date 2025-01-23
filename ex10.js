function filtrerNegatifs(tab) {
	let newTab = [];
	for (let i = 0; i < tab.length; i++) {
        if (tab[i] >= 0){
            newTab.push(tab[i]);
        }
	}

	return newTab;
}
  
  console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
  console.log(filtrerNegatifs([3, 4, 1, 6])); // Résultat attendu : [3, 4 ,1 ,6]
  console.log(filtrerNegatifs([])); // Résultat attendu : []
  console.log(filtrerNegatifs([-10, 0, 0, -6])); // Résultat attendu : [0, 0]
  console.log(filtrerNegatifs([0, -0, -0, 0])); // Résultat attendu : [0, -0, -0, 0]
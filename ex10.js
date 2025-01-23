function filtrerNegatifs(tab) {
    let x = [0]
    if (x < 0){
        x = x + 1;
    }else{
        return x
    }
}
  
  console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
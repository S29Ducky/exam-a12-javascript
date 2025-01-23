function isString(myString) {
    let tp = typeof myString
    if (tp == "string"){
        return true;
    }else{
        return false;
    }
}
  
  console.log(isString("Marc")); // Résultat attendu : true
  console.log(isString(2)); // Résultat attendu : false
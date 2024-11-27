// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

console.log("\n");
console.log("---------------------");
console.log("DIVERS FILE");

function positionBiggest(tab) {
  let max = tab[0];
  let index;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] >= max) {
      max = tab[i];
      index = i;
    }
  }
  return index;
}
let tab = [4, -1, -7, -5, 5, -6, 3, 5];
console.log(positionBiggest(tab));
// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sumAll(tab) {
  let result = 0;
  for (let i = 0; i < tab.length; i++) {
    result += tab[i];
  }
  return result;
}
console.log(sumAll(tab));
// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
function sumAllPositive(tab) {
  let result = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] >= 0) {
      result += tab[i];
    }
  }
  return result;
}
console.log(sumAllPositive(tab));
// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
function sumAllNegative(tab) {
  return sumAll(tab) - sumAllPositive(tab);
}
console.log(sumAllNegative(tab));
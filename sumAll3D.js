/* Ecrivez un programme qui affiche la somme de tous les nombres 
présents dans ce tableau (qui contient des tableaux)
*/


let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],]

let sum = 0

for(let i = 0; i < tab.length; i++) 
 {
  for(let j = 0; j < tab[i].length; j++){
    tab[i][j].forEach((nb) => {
      sum += nb})
  }  
}

console.log(sum)

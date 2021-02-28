/* Ecrivez un programme qui affiche la somme de tous les nombres 
présents dans ce tableau (qui contient des tableaux)
*/

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13],]
  
let sum = 0

for (let i = 0; i < tab.length; i++)
{tab[i].forEach((nb) => {sum += nb})
}
console.log(sum)
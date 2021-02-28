/* En vous inspirant de l'un des exemple du cours d'aujourd'hui 
sur les boucles, écrire un programme qui n'affiche que les 
multiples de 3 et 7 entre 1 et 1000. L'opérateur % peut vous 
aider à trouver si un nombre est multiple d'un autre.
*/


let list = 1000;
// multiples de 3
for(let i = 0; i < list; i++) {
  if(i % 3 === 0) {
    console.log(i)
  }
}
// multiples de 7
for(let i = 0; i < list; i++) {
  if(i % 7 === 0) {
    console.log(i)
  }
}
// multiples communs à 3 et 7
for (let i = 0; i < list; i++) {
if (i % 3 === 0 && i % 7 === 0) {
    console.log(i)
  }
}
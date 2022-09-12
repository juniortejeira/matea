/* 
  1-Cree una función que reciba un String y muestre en consola si está vacía.
  ¿Qué pasa si tenemos el siguiente string “ “ (con un espacio)? (Quizá el método trim te sea de ayuda…)
*/

const isEmpty = string => {
  string = string.trim()
  if (string == "") console.log("Esta vacío")
  else console.log("No está vacío")
}
/*
  2-Cree una función que reciba un String y separe la misma en palabras, almacenarlas en un array y mostrarlo en consola.
*/
const splitString = string => console.log(string.trim().split(" "))

/*
   3-Crea una función que reciba un String y cuente cuántas veces aparece la letra ‘a’. Ten en cuenta que debe de contar tanto mayúsculas como minúsculas.
 */
const aCounter = string => console.log(`se repite ${[...string.matchAll(/a/gim)].length} veces la letra A`)
/* 
  Crea una función que reciba un string y retorne el número de vocales que tiene en total.
*/

const vowelCounter = string => console.log(`hay ${[...string.matchAll(/[aeiou]/gim)].length} vocales`)

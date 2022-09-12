/* 
  1- Dado un objeto con datos de un usuario al azar, crea una copia del mismo y modifica una propiedad del primero. Loguea ambos y asegúrate de modificar sólo el original.
*/
const user = {
  name: "Pablo",
  surname: "Peña"
}
const userCopy = { ...user }

user.name = "Jose"

console.log(user)
console.log(userCopy)
/* 
  2- Dado una array (con datos a elección) crea una copia del mismo. Modifica el valor de uno de los elementos de la copia, y al loguear ambos asegúrate de no haber modificado el primero.
*/
const array = ["Pizza", "Hamburguesa"]
const arrayCopy = [...array]
arrayCopy.push("Tortilla")

console.log(array)
console.log(arrayCopy)
/* 
  3- Escribe en un breve comentario en el código aquello que hayas comprendido sobre la diferencia entre valores de referencia vs primitivos.
*/

/* 
  Los variables de tipo array u objetos guardan una dirección de memoria,
  por lo tanto, suponiendo que tenemos un objeto y para duplicarlo hacemos "obj2 = obj1",
  lo que sucederá es que en lugar de duplicarse, se genera un alias, dos punteros a la misma dirección de memoria.
  Como consecuencia, al tratar de hacer modificaciones sobre obj1, se accede a la dirección que guarda y se modifica, el problema
  es que obj2 tiene la misma dirección, entonces también sufrirá los cambios.

  Por otro lado, las variables primitivas guardan un valor, entonces al tratar de duplicarlas "var2 = var1",
  en lugar de generarse un alias, se generan dos variables que valen lo mismo pero son independientes una de la otra.
*/
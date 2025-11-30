/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Este es un comentario de una linea

// 2. Escribe un comentario en varias líneas

/*
Este
es
un
comentario
de
varias
lineas
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let variableString= "cadena de texto"
let variableNumber= 22
let variableBooleana= true
let variableIndefinida
let variableNula= null
let variableBigInt= BigInt(3456896789)



// 4. Imprime por consola el valor de todas las variables

console.log(variableString)
console.log(variableNumber)
console.log(variableBooleana)
console.log(variableIndefinida)
console.log(variableNula)
console.log(variableBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log("/////////////////////")
console.log(typeof variableString)
console.log(typeof variableNumber)
console.log(typeof variableBooleana)
console.log(typeof variableIndefinida)
console.log(typeof variableNula)
console.log(typeof variableBigInt)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

variableString= "nueva cadena de texto"
variableNumber= 23
variableBooleana= false
variableBigInt= BigInt('09876543456789')

console.log("/////////////////")
console.log("/////////////////")
console.log(variableString)
console.log(variableNumber)
console.log(variableBooleana)
console.log(variableIndefinida)
console.log(variableNula)
console.log(variableBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

variableString= 44
variableNumber= "no va a funcionar (creo)"
variableBooleana= 22

console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")
console.log(variableString)
console.log(variableNumber)
console.log(variableBooleana)


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const variableStringConst= "cadena de texto constante"
const variableNumberConst= 22
const variableBooleanaConst= true
//const variableIndefinidaConst
const variableNulaConst= null
const variableBigIntConst= BigInt(3456896789)

console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")

console.log(variableStringConst)
console.log(variableNumberConst)
console.log(variableBooleanaConst)
console.log(variableNulaConst)
console.log(variableBigIntConst)

// 9. A continuación, modifica los valores de las constantes

//NO DEJA NINGUNA PORQUE SON CONSTANTES :))
//variableStringConst= "intento de cambiar la cadena constante"
//variableNumberConst= 44
//variableBooleanaConst= false
//variableBigIntConst= BigInt(677889348990832)

console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")
console.log("/////////////////")


console.log(variableStringConst)
console.log(variableNumberConst)
console.log(variableBooleanaConst)
console.log(variableBigIntConst)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//YA
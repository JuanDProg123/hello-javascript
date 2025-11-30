/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto


let cadena1 = "tengo "
let cadena2= "hambre"

let cadenaCompleta= cadena1+cadena2

console.log(cadenaCompleta)

// 2. Muestra la longitud de una cadena de texto

console.log(cadenaCompleta.length)

// 3. Muestra el primer y último carácter de un string

console.log(cadenaCompleta[0])
console.log(cadenaCompleta[11])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadenaCompleta.toUpperCase())
console.log(cadenaCompleta.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let mensaje= `este
es 
un
mensaje
de
varias
lineas`

console.log(mensaje)

// 6. Interpola el valor de una variable en un string


let edad =22
let nombre= "juan"

let mensajeInterpotlado= `hola, mi nombre es ${nombre} y mi edad es ${edad}`
console.log(mensajeInterpotlado)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let mensajeCambiarStrings ="y tu te vas jugando a enamorar"

console.log(mensajeCambiarStrings.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(mensajeCambiarStrings.includes("enamorar"))

// 9. Comprueba si dos strings son iguales

let mensajeCambiarStringsIgual ="y tu te vas jugando a enamorar"

console.log(mensajeCambiarStrings==mensajeCambiarStringsIgual)



// 10. Comprueba si dos strings tienen la misma longitud

console.log(mensajeCambiarStrings.length==mensajeCambiarStringsIgual.length)
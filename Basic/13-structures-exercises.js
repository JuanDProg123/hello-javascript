/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let array = []

array= ["gato","perro","serpiente", "elefante", "pajaro"  ]

console.log(array)

// 2. Añade dos más. Uno al principio y otro al final

array[0]="caballo"
array[5]="jirafa"

console.log(array)


// 3. Elimina el que se encuentra en tercera posición

let array = []

array= ["gato","perro","serpiente", "elefante", "pajaro"  ]

array.splice(3,1)

console.log(array)


// 4. Crea un set que almacene cinco libros

let setPrueba= new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])

console.log(setPrueba)

// 5. Añade dos más. Uno de ellos repetido


setPrueba.add("libro6")
setPrueba.add("libro4")




console.log(setPrueba)







// 6. Elimina uno concreto a tu elección

setPrueba.delete("libro6")

// 7. Crea un mapa que asocie el número del mes a su nombre


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
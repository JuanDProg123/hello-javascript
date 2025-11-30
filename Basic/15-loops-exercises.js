/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i=0; i<=10; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let j=0

for(let i=0; i<=100;i++){
    j +=i

}

  console.log(j)



// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


for(let i=0; i<=50; i++){

    if(i%2==0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola



for(let i=0; i< array.length;i++){
    console.log(array[i])
}

let array=["juan", "diego", "pedro", "paco"]


let i=0
while(i<array.length){
    console.log(array[i])
    i++
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let palabra= "frase con vocales"

const vocales= "aeiou"

let contador=0



for(let i=0; i<=palabra.length;i++){
    if(palabra[i].con(vocales)){
        contador++
    }
}

console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros= [5,10,14,20]
let acumulador=0

for(let i =0; i<arrayNumeros.length;i++){
    acumulador+=arrayNumeros[i]

}

console.log(acumulador)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
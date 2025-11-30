/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let age= 22

if (age==22){
    console.log("Juan Diego")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario= "juan"
let contraseña= 12345

if (usuario=="juan" && contraseña==12345){
    console.log("Ingreso exitoso")
}else{
    console.log("Datos no validos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 10

if(numero==0){
    console.log("El numero es 0")

}else if(numero>0){
    console.log("El numero es positivo")
}else if(numero<0){
    console.log("El numero es negativo")
}else{
    console.log("Numero no valido")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan


let edad= 15
let limite= 18

if (edad>=18){
    console.log("Edad valida, puede votar")

}else{
    let falta= 18-edad
    console.log("Edad no valida, le faltan "+falta+ " años para votar")
    
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 


let clasificacion=18

const clasificacionEdad= clasificacion>=18 ?"clasificacion adulto" :"clasificacion menor"
console.log(clasificacionEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "agosto"
let estacion

switch(mes){
    case "enero":
        estacion="invierno"
        break
    case "abril":
        estacion="primavera"
        break
    case "agosto":
        estacion="verano"
        break
    case "octubre":
        estacion= "invierno"
        break
    default:
        estacion= "alguna otra"
}

console.log(estacion)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
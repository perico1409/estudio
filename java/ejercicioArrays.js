const array = [1,6,54,3,2,61,12]

let suma = 0

for (numero of array) {  // recordar que el forOf es para arrays
    suma += numero
}

console.log(suma)

// manera alterna de hacer el ejercicio

let suma1 = 0

for (let i = 0; i < array.length; i++) { // los metodos no llevan parentesis
    suma1 += array[i]
} 

console.log(suma1)
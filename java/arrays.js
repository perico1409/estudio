array = [1,2,4,5,6,3]
ultimoElemento = array.length -1
console.log(array[array.length-1])

// como usar de manera adecuada el metodo de sort con numeros

const array1 = [13,2,45,64,23,3,43,52]
array1.sort((a,b)=>a-b)
console.log(array1)

// metodo map

let arrayCuadrado = array.map(i => 2 * i)

console.log(arrayCuadrado)

// ejercicio temperaturas

const farenheit = [63, 50, 70, 72.2, 71]

function farenheitCelsious (lista) {
    celsious = lista.map(i => (5/9) * (i-32))
    return celsious
}

console.log(farenheitCelsious(farenheit))

// metodo filter()

let numerosPares = array.filter(number => number%2 === 0) // si cunmple la condicion se queda

console.log(numerosPares)

// metodo reduce()

let suma = array.reduce((contador, valor) => contador + valor, 0) // el cero hace referencia a que numero arranca el contador
console.log(suma)

// ejercicio contar palabras de un array con reduce()

const palabras = ["banana", "manzana", "adios", "adios", "banana", "pera", "pera", "adios"]

let contadorPalabras = palabras.reduce((objeto, elemento) => {
    if (objeto[elemento]) {
        objeto[elemento]++
    } else {
        objeto[elemento] = 1
    }
    return objeto
},{})

console.log(contadorPalabras) 

// Spreed operator 

function combineMorseMessages (mensaje1, mensaje2) {
    return [...mensaje1, ...mensaje2]
}
// se puede utilizar para realizar copias

const original = [1,2,3,4]
const copia = [...original]

// metodo every 

const ages = [23, 24, 19, 20]

const sonMayores = ages.every(age => age > 18)

// metodo some 

const alMenos = ages.some(age => age >= 24) 



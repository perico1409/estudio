const entero = 4
const decimal = 3.14

console.log(typeof entero, typeof decimal)

// En Javascript el tipo de dato de los numeros es uno solo, se "number" a diferencia de python

// Notacion cientifica

const cientifica = 5e3 // igual a python 

const infinito = Infinity // infinito
const noNumero = NaN // no numero

// Imprecisiones matematicas

const resultado = 0.1 + 0.2
console.log(resultado) // retorna 0.30000000000000004
// Para solucionar esto se hace lo siguiente

console.log(resultado.toFixed(1)) // Funciona como el round de python

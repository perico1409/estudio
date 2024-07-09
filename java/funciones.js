// estructura de funciones JavaScript

function suma (a,b) {
    return a + b
}

console.log(suma(3,2))

// funciones puras: no producen efectos secundarios

// side effects
// 1. modificar variables globales
// 2. modificar parametros
// 3. solicitudes HTTP
// 4. imprimir mensajes en pantalla o consola
// 5. manipulacion del DOM
// 6. obtener la hora actual

// estructura

function sum (a, b) {   // funcion pura
    console.log("A: ", a) // con esta linea pasa a ser impura
    return a + b
}
 
// idintificador 

//enlace implicito
const house = {
    dogName: "fido",
    dogGreeting: function () {
        console.log(`hola, mi nombre es ${this.dogName}`) // this hace analogia al objeto que está asociado
    }
}

//enlace explicito
const newHouse = {
    dogName: "Pedro",
    age: 5
}

function dogGreeting () {
    console.log(`hola, soy ${this.dogName}`)
}

dogGreeting.call(newHouse)

function presentasion (owner, address) {
    console.log(`hola, soy ${this.name} y vivo con ${owner} en la dirección ${address}`)
}

const owner = "Daniel"
const address = "avenida 26 con caracas"
const House1 = {
    name: "Coco"
}

presentasion.call(House1, owner, address)

const valoresNecesarios = [owner, address]

presentasion.apply(House1, valoresNecesarios) // se usa apply debido a que se esta usando como valor  
// de entrada un array (que metodo tan raro)

// crea objetos con funciones

function generarCohete (nombre,mensaje) {
    this.name = nombre              //se tiene que usar this para generar el objeto
    this.mensajeLanzamiento = function () {
        console.log(mensaje)
    }
}

const falcon9 = new generarCohete(`Falcon 9`,`soy Falcon 9
    saliendo de la atmosfera`) // se tiene que usar new para generar el cohete
const aguila = new generarCohete(`Aguila`, "Aguila reportandose")
console.log(aguila.name)
console.log(aguila.mensajeLanzamiento())

function prueba (a) {
    console.log(a.name)
}

const personaje = {
    name: "Batman",
    age: 23
}

prueba(personaje)


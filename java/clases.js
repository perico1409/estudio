class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo
            ${this.edad} años.`)
    }
}

const persona1 = new Persona("Mariana", 25) /*
La palabra new hace que la clase se remita a la funcion constructor
*/

// clases y sus herencias

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido() {
        console.log("el animal emite un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo)  //el super replica el codigo de la clase padre
        this.raza = raza
    }
}


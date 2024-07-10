// chicas super poderosas objetos

function chicaPoderosa (nombre,color,poder) {
    this.nombre = nombre
    this.color = color
    this.poder = poder
    this.lider = false

    this.mostrarInformacion = function () {
        console.log(`Información de la chica super poderosa: \n
            Su nombre es ${this.nombre}, su ropa y su cabello tienen el color ${color} y 
            su poder más caracteristico es que tiene ${this.poder}.\n
            ${this.lider ? `Es la lider del grupo.` : `No es la lider del grupo.`}`) 
            // En la anterior linea pudimos ver como funcionan los condicionales 
            // para atributos de objetos.
    }

    this.volverLider = function () {
        this.lider = true
        console.log(`La chica super poderosa ${this.nombre} se ha vuelto la 
            lider del grupo`)
    }
}

const Bombon = new chicaPoderosa(`Bombón`,`rojo`,`Aliento de hielo`)
const Burbuja = new chicaPoderosa(`Burbuja`,`azul`,`Super fuerza`)
const Bellota = new chicaPoderosa(`Bellota`,`verde`,`Super vista`)

Bombon.volverLider()

Bombon.mostrarInformacion()
Burbuja.mostrarInformacion()
Bellota.mostrarInformacion()

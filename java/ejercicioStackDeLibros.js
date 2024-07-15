function stackLibros() {
    let iniciador = true 
    let stack = []
    console.log(`Bienvenido al simulador de 
        stack de libros, tiene que elegir una de las
        siguientes acciones.`)
    while (iniciador === true) {
        
        console.log("1. Digite uno para agregar un libro.")
        console.log("2. Digite dos para eliminar un libro.")
        console.log("3. Digite tres para salir de la simulacíon.")
        console.log("4. Digite cuatro para ver el stack de libros.")


        let eleccion = parseInt(prompt("Digite su elección: "))

        if (eleccion === 1) {
            let libro = prompt("Escriba el nombre del libro: ")
            stack.push(libro)
        } else if (eleccion === 2) {
            console.log(`Se eliminara ${stack[stack.length-1]} del stack.`)
            stack.pop()
        } else if (eleccion === 3){
            console.log("Simulación finalizada.")
            iniciador = false
        } else if (eleccion === 4) {
            console.log(stack)
        } else {
            console.log("Opción ingresada invalidad, elija un número valido.")
        }

    }
}

stackLibros()
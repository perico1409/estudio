const palabra = "queso"
let intentos = 3

while (intentos > 0) {
    let palabraUsuario = prompt("Elige tu palabra: ")
    intentos--
    if (palabraUsuario === palabra){
        console.log("Ganaste!")
    } else {
        if (intentos === 0) {
            console.log("Perdiste, te quedaste sin intentos.")
        } else {
            console.log(`Perdiste, te quedan ${intentos} intentos`)
            if (intentos === 1) {
                console.log("La palabra es un producto derivado de la leche")
            }
        }
    }
}

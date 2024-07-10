const numeroSecreto = Math.floor(Math.random()*10+1)

const numeroJugador = parseInt(prompt("Adivina el número entre el 1 y el 10: "))

// el prompt solo funciona cuando hay variable global window, es decir en el navegador

if (numeroJugador === numeroSecreto){
    console.log("Ganaste!")
} else {
    console.log("Perdiste!")
}


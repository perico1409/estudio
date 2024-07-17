let mazo = [
    "1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ac",
    "1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","Jp","Qp","Kp","Ap",
    "1t","2t","3t","4t","5t","6t","7t","8t","9t","10t","Jt","Qt","Kt","At",
    "1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ad"
]

function mezclar (mazo) {
    mazo.sort(()=>Math.random()-0.5)
}


function repartir (mazo, numeroJugadores) {
    const cantidadCartas = mazo.length/numeroJugadores
    let jugadores = {}
    let Jugador = 1
    if (mazo.length%numeroJugadores === 0) {
        let instructor = true
        while (instructor === true){
            if (mazo.length === 0) {
                instructor = false
            } else {
                let cartas = mazo.splice(0,cantidadCartas)
                jugadores[`Jugador ${Jugador}`] = cartas
            }
            Jugador += 1 
        }
    } else {
        console.log("cantidad de jugadores no valida.")
    }
    return jugadores
}

mezclar(mazo)
const mazos = repartir(mazo,4)
console.log(mazos) 
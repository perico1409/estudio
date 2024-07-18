const listaParticipantes = [
    {id: 1, name: "Pedro", numeroTicket: "001"},
    {id: 15, name: "Michael", numeroTicket: "015"},
    {id: 13, name: "Laura", numeroTicket: "013"},
    {id: 45, name: "Maria", numeroTicket:"045"},
    {id: 76, name: "Leon", numeroTicket: "076"}, 
]

function encontrarNombre (nombre, lista) {
    const ganador = lista.find(participante => participante.name === nombre)
    return ganador || "ganador no encontrador" // si returna undefined los tubos señalan que se hara la otra orden
}

console.log(encontrarNombre("Lau",listaParticipantes))

function encontrarTicket (numero, lista) {
    const ganador = lista.find(participante => participante.numeroTicket == numero)
    return ganador || "ganador no encontrador" 
}

console.log(encontrarTicket(1,listaParticipantes))

const competitions=[
    ['JavaScript','C#'],
    ['C#','Python'],
    ['Python','JavaScript']
]

const results=[0,0,1]

function determinarGanador (competicion, resultados) {
    let competidores = {}
    for (let i = 0; i < resultados.length; i++){
        if (resultados[i] === 1){
            if (competidores[competicion[i][0]]) {
                competidores[competicion[i][0]] ++
            } else {
                competidores[competicion[i][0]] = 1
            }
        } else {
            if (competidores[competicion[i][1]]) {
                competidores[competicion[i][1]] ++
            } else {
                competidores[competicion[i][1]] = 1
            }
        }
    }
    return competidores    
}

console.log(determinarGanador(competitions,results))
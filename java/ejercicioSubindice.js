const stringArray = ['apple','banana','orange','grape','banana','kiwi']
const target = 'banana'

function ocurrencia (lista, palabra) {
    if (lista.includes(palabra) === true) {
        respuesta = {
            primeraAparacion: lista.indexOf(palabra),
            segundaAparacion: lista.lastIndexOf(palabra)
        }
    } else {
        respuesta = -1
    }
    return respuesta
}

console.log(ocurrencia(stringArray,target))
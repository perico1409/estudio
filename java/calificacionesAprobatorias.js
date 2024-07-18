const calificaciones = [76,23,67,54,79,98,97,93,23,24,76,99]

function promedioAprobadas (calificaciones){
    let notasAprobadas = calificaciones.filter(nota => nota >= 70)
    let suma = notasAprobadas.reduce((contador, nota) => contador += nota,0)
    const promedio = suma/notasAprobadas.length 
    return promedio
}

console.log(promedioAprobadas(calificaciones))

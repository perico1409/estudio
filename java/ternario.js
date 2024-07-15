let mensaje 

const edad = 20;

if (edad >= 18) {
    mensaje = "es mayor de edad, puede pasar"
} else {
    mensaje = "no es mayor de edad, no puede pasar"
}

console.log(mensaje)

// condición ternaria
// condición ? true : false

const edad1 = 17

const mensaje1 = edad1 >= 18 ? "Es mayor de edad puede pasar" : "no es mayor no puede pasar"
console.log(mensaje1)

// switch

let expresion = "Pera"

switch(expresion) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break
    case "Manzanas":
        console.log("Las manzanas cuestan $10 el kilo")
        break
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos el kilo")
        break
    default:
        console.log(`lo siento, no contamos con ${expresion}`)
}

console.log("Desea algo más?")

// for 

let list = ["eat","sleep","code","repeat"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

// forEach  

list.forEach((item) => {
    console.log(item)
})

// for of

let canasta = ["manzana", "pera", "naranja", "uva"]

for (fruta of canasta){
    console.log(fruta)
}

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

// while

let contador = 0

while(contador < 10) {
    console.log(contador)
    contador++
}

// do while

let contador1 = 0

do  {
    console.log(contador)
    contador++
} while(contador < 10)


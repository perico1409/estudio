// paso por valor 

let x = 1
let y = "hola"
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12 
b = "Platzi"
c = undefined
 

// paso por referencia 

let frutas =["manzana"]
let copia_frutas = frutas 
frutas.push("pera")
console.log(copia_frutas)


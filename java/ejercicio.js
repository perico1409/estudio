// Social media Profile

// 1. user information

const userName = "xdpoderoso"
const nombreCompleto = "Santiago Serrano"
let age = 20
const isStudent = true

// 2. adrres 
const addres = {
    street: "1409 Manhattan",
    city: "New york",             // Importante recordar que para acudir a una caracteristica de
    state: "Florida",             // un objto se usa la siguiente notacion: "objeto.caracterista"
    zipCode: 10045,

}

// 3. hobbies

const hobbies = ["read","dance","run"]

// 4. generating  bio

const bio = `hola mucho gusto! \n
Mi nombre es ${nombreCompleto}, tengo ${age} años y vivo en la ciudad de ${addres.city}. \n
Mis hobbies favoritos son ${hobbies[0]}, ${hobbies[1]}, y ${hobbies[2]}.\n
Es pero que nos llevemos bien`

console.log(bio)

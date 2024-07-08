const stringPrimitivo = "soy string primitivo"
console.log(typeof stringPrimitivo)

const stringObjeto = new String("soy un string objeto")
console.log(typeof stringObjeto)

// acceder a los caracteres

const saludo = "hola, como estas"

console.log(saludo[2])
console.log(saludo.indexOf("o"))
console.log(saludo.indexOf("Como"))

// para extraer se usa el metodo slice
// para contar el tamaño del string se usa el metodo lenght
// tambien existe el metodo split
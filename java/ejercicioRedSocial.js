const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "caro",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "mariana",
        timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
        username: "andres",
        timeline: "Yo hoy no quiero trabajar",
    },
]

function validarSesion (usersTimeline, usersDatabase, usuario, clave) {
    for (user of usersDatabase) {
        if (user.username === usuario) {
            if (user.password === clave) {
                for (u of usersTimeline) {
                    if (u.username === user.username) {
                        respuesta = `Bienvenido! \n
                        Ingreso exitoso a su cuenta. \n
                        Su time line es "${u.timeline}".`
                    }
                } 
                break
            } else {
                respuesta = "Inicio de sesión incorrecto."
            }
        } else {
            respuesta = "Inicio de sesión incorrecto."
        }
    }
    console.log(respuesta)
}

const usuario = prompt("Digite su nombre de usuario")
const clave = prompt("digite su clave")

validarSesion(usersTimeline, usersDatabase, usuario, clave)
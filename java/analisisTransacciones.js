const transactions = [
    {id:1,description:'Grocery Shopping',amount:-50},
    {id:2,description:'Salary Deposit',amount:2000},
    {id:3,description:'Utility Bill Payment',amount:-100},
    {id:4,description:'Online Purchase',amount:-30}
]

const saldoTotal = transactions.reduce((saldo,cliente) => saldo += cliente.amount,0)

const MayorTransaccion = transactions.reduce((mayorTransaccion, cliente) => {
    if (Math.abs(cliente.amount) > mayorTransaccion){
        mayorTransaccion = Math.abs(cliente.amount)
    }
    return mayorTransaccion
},0)

const transaccionesCompra = transactions.filter(cliente => cliente.amount < 0)

function encontrarDescripcion (description,transactions) {
    const transaccion = transactions.find(cliente => cliente.description === description)
    return transaccion || "transaccion no encontrada"
}

function indexMonto (monto, transactions) {
    const index = transactions.findIndex(cliente => cliente.amount === monto)
    return index 
}

function editar (transactions){
    transactions.forEach(element => {
        if (element.amount > 0){
            element.description = `Income: ${element.description}`
        } else {
            element.description = `Expense: ${element.description}`

        }
    });
}


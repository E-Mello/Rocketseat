// Operador Condicionaal (Ternario)

// Dependedndo da condicao, nos receberemos valores diferentes


// Condicao entao valor  1 se nao valor 2
// condition ? value1 : value2


// Exemplos
// Cafe da manha top
let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'Cafe top' : 'Cafe ruim'

console.log(niceBreakfast);


// Maior de 18

let age = 16
    // se age for maior ou igual a 18, entao, can drive, senao, can't drive
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive);
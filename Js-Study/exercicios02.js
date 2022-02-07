/*  ### Sistema de gastos familiar



Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie  uma função que irá calcular o total de receitas 
e despesas e irá mostrar uma mensagem se a família está com
saldo possitivo ou negativo, seguido do valor do saldo

*/

/* Resposta */

// let financeiroCasa = {
//     receitas: [2500.00],
//     despesas: [1750.00]
// }

// function calculaFinanceiro(financeiroCasa) {
//     let calculoDoFinanceiro = financeiroCasa[0] - financeiroCasa[1];
//     return calculoDoFinanceiro
// }

// console.log(calculaFinanceiro());

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 5450.00]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;

    }

    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses;

    const positiveBalance = total >= 0

    let balanceText = "negativo";

    if (positiveBalance) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);

}

calculateBalance();
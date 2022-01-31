// criar um aplicativo de frases motivacionais
// console.log('Estudar é muito bom');
// console.log('Paciência e persistência');
// console.log('Revisão é mãe do aprendizado');


// declaration - declaração da função
// function statement
function createPhrases() {
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é mãe do aprendizado');
}

// executar a função ( execute, run, call, invoke)
createPhrases();
createPhrases();

console.log('Fim do Programa');

// function expression
// function anonymous

// parâmetros (parameters)
// const sum = function(number1, number2) {
//     console.log(number1 + number2)
// }
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2)

// console.log(`o número 1 é ${number1}`);
// console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);
console.log(total);

sum(2, 3); // arguments - argumentos
sum(5, 6);
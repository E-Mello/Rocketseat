/*

Vamos fortalecer e aplicar os conhecimentos,
além de aprender truques e dicas para resolver
os desafios e avançar para o próximo nível

*/

/* ### Transformar notas escolares

crie um algoritmo que transforme as notas do
sistema número para ssistema de notas em caracteres tipo A B C
* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

/* Resposta */
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        console.log('Nota inválida');
    }

    return scoreFinal

}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))



// let score = 50

// if (score > 90) {
//     console.log('A');
// } else if (score >= 80 && nota < 90) {
//     consolescore('B');
// } else if (score >= 70 && nota < 80) {
//     consolescore('C');
// } else if (score >= 60 && nota < 70) {
//     consolescore('D');
// } else if (score < 60) {
//     console.log('F');
// }
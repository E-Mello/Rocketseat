// process.stdout.write("Alguma coisa \n\n\n")

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + "\nR: ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    // process.stdout.write(data.toString().trim() + '\n') // a função trim() remove espaço vazio no começo e no final da string
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        // console.log(answers); // Aqui o programa iria nos mostrar as respostas
        process.exit()
    }
    // process.exit(); // essa função vai fechar o processo , dessa forma ele não fica em um loop infinito
})

process.on('exit', () => {
    console.log(`
     Bacana Mello!

     O que você aprendeu hoje foi:
     ${answers[0]}

     O que te aborreceu e você poderia melhorar foi:
     ${answers[1]}

     O que te deixou feliz hoje:
     ${answers[2]}

     Voce ajudou ${answers[3]} pessoas hoje !!

     Volte amanha para novas reflexoes !!
    
    `);

})
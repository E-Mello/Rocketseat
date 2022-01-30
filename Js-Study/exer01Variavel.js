// 1. Declare uma variável de nome weight
let weight;
// 2. Que tipo de dado é a variável acima?
//undefined
console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada
    um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let people = {
    name: 'Mello',
    age: 21,
    stars: 9.9,
    isSubscribed: false
}

console.log(people);

/*
    4. A variável student abaixo é de que tipo de dados?
        R: Objeto
    4.1 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitui <name> <age> e <weight> pelos
        valores de cadaa propriedade do objeto
*/
let student = {
    name: 'Pedrito',
    age: 21,
    weight: 75
};

console.log(typeof student);
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/*
    5. Declare uma variável do tipo Array, de nome
    students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio.
*/
let arrayEmpty = [];
console.log(arrayEmpty);

/*
    6. Reatribua valor para a variável acima, colocando
    dentro dela o objeto student da questão 4. (Não
        copiar e colar o objeto, mas usar o objeto criado e
        inserir ele no array)
*/

arrayEmpty = [
    student,
    2
]
console.log(arrayEmpty);

/*
        7. Coloque no console o valor da posição zero do
        Array acima
*/

console.log(arrayEmpty[0]);

/*
    8. Crie um novo student e coloque na posição 1 do
    Array students
*/

let studentTwo = {
    name: 'Lucas',
    age: 22,
    weight: 80
}

// arrayEmpty = [
//     student,
//     studentTwo,
//     3
// ]´
arrayEmpty[1] = 'Pedro';

console.log(arrayEmpty[1]);

/*
    9. Sem rodar o código responda qual é a resposta do 
    código abaixo porque? Após sua resposta, rode o 
    código e veja se você acertou.

    console.log(a)
    var a = 1

    #Errei
*/
// var a = 1
console.log(a)
var a = 1
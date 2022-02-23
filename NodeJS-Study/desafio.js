/* Crie 2 arquivos JavaScript
 * O primeiro, irá exportar uma função chamada getFlag()
 * que receber´um argumento do tipo String.
 * Essa função deverá buscar dentro do array process.argv a flag 
 * desejada, que é a String e retornar o valor da flag.
 * 
 * O segundo irá importar a função e passar a flag desejada.
 * 
 * Iremos rodar no terminal o segundo arquivo passando as flags
 * --name e --greeting para que seja impresso no terminal a
 * saudação e o nome da pessoa.
 */


/**   
    Pode sempre fazer require do arquivo em questão para poder utilizar o que ele tem, desde que tenha feito as exportações necessárias nele.

No Somar.js poderia fazer a exportação da função inteira, utilizando module.exports:

module.exports = (a, b) => a + b;
Depois no bot.js faria require para utilizar:

const somar = require('./Somar');
console.log(somar(10, 20)); //30
Note que no require tem de indicar o caminho onde se encontra o arquivo. Como se encontram na mesma pasta basta prefixar com ./. É também importante mencionar que o require não leva a extensão do arquivo.

Também pode exportar mais do que uma função, se alterar a forma como exporta. A titulo de exemplo vamos assumir que no Call.js queria exportar duas funções.

Call.js

module.exports = {
    funcao1(){
        console.log("f1");
    },
    funcao2(){
        console.log("f2");
    }
}
Agora para utilizar estas funções também no bot.js faria assim:

const somar = require('./Somar');
console.log(somar(10, 20)); //30

const call = require('./Call');
call.funcao1(); //f1
call.funcao2(); //f2

Neste ultimo exemplo como a exportação é um objeto, tem de 
chamar as funções fazendo call.funcao1().

*/
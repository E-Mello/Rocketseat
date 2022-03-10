let fs = require('fs');
let listaCompleta = fs.readFileSync("./bruna02.txt", 'utf-8');
let ncmParaRetiraDaLista = fs.readFileSync("./bruna03.txt", 'utf-8');
let arrayAllNCM = listaCompleta.split('\n')
let arrayNCMRetirar = ncmParaRetiraDaLista.split('\n')

// console.log(arrayAllNCM);
// console.log(arrayNCMRetirar);

function validarNCMDiferente(obj) { 
    if (condition) {
        
    }
}

// const listaFinal = arrayAllNCM.filter(ncm => !arrayNCMRetirar.includes(ncm))
const listaFinal = arrayAllNCM.filter(ncm => !arrayNCMRetirar.includes(ncm, 0))

console.log(listaFinal);

// fs.writeFileSync('./resultado.txt', String(listaFinal).replace(',',''))

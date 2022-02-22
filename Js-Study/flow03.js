// throw
function sayMyName(name = '') {
    if (name === '') {
        // throw new Error("Nome e necessario")
        throw 'Nome e obrigatorio'
    }
    console.log('depois do erro');
}


// try...catch
try {
    sayMyName()
} catch (error) {
    console.log(error);
}
console.log('Apos a funcao de erro');
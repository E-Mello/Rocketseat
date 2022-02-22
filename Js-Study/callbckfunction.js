// callback function

function sayMyName(name) {
    console.log('antes de executar a funcao callback');
    name()
    console.log('Depois de executar a funcao callback');
}

// sayMyName({ name: 'Mayk' });

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
);
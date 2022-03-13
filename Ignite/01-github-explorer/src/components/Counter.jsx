import {useState} from 'react';

// imutabilidade - não altera diretamente o valor da variavel
// apenas atribui novos valores

// ['diego', 'mello', 'peixe']
// usuario.push('rafa')

// novoUsuarios = [...usuarios, 'rafa']

export function Counter() {
    const [counter,setCounter] = useState(0);



    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment Number
            </button>
        </div>
    );
}
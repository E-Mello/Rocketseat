const Modal = {
    // toggle()
    open() {
        // Open modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        // Fechar o modal
        // remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
},
{
    id: 2,
    description: 'Criação de Website',
    amount: 500000,
    date: '23/01/2021',
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
},
]

// Eu preciso somar as entradas
// Depois eu preciso somar as saídas
// Preciso também remover das entradas o valor das saídas (total)

const Transaction = {
    incomes() {
        // Somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

/* Substituir os dados do HTML com os dados do JS */

const DOM = {
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        console.log(tr.innerHTML);
    },
    innerHTMLTransaction(transaction) {
        
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `

        return html
    }
}

DOM.addTransaction(transactions[1])
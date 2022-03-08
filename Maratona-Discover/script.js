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
// Eu preciso somar as entradas
// Depois eu preciso somar as saídas
// Preciso também remover das entradas o valor das saídas (total)

const Transaction = {
    // Abaixo serve para refletir o que tem na constante transactions
    all: [{
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        description: 'Criação de Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        description: 'Criação de Website',
        amount: 700000,
        date: '23/01/2021',
    },
    ],

    add(transaction) {
        Transaction.all.push(transaction)
        // o push e um atributo de arrays

        App.reload();
    },

    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes() {
        //pegar todas as transacoes
        let income = 0;

        // para cada transacao
        Transaction.all.forEach(transaction => {
            // se ela for maior que zero 
            if (transaction.amount > 0)
                // somar a variavel 
                income += transaction.amount;
        })

        // retornar a variavel
        return income;
    },

    expenses() {
        //pegar todas as transacoes
        let expense = 0;

        // para cada transacao
        Transaction.all.forEach(transaction => {
            // se ela for maior que zero 
            if (transaction.amount < 0)
                // somar a variavel 
                expense += transaction.amount;
        })

        // retornar a variavel
        return expense;
    },

    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
}

/* Substituir os dados do HTML com os dados do JS */

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expenses"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `

        return html
    },

    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")
        // a expressao /\D/g vai procurar de maneira global, tudo que nao for numero
        // diferente de /D/g que procuraria de maneira global tudo que e D maiusculo

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

const Form = {
    // Abaixo ele captura inteiro cada input
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    // Aqui ele pega somente o value de cada input
    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    formatData() {
        
    },

    validateFields() {
        // A ideia abaixo e para desestruturar, ou seja, retirar de dentro do objeto o que eu quero 
        const {description, amount, date } = Form.getValues()
        
        //Verificar se os campos estao vazios ou nao
        // o trim() faz uma limpeza nos campos
        if (description.trim() === "" ||
                amount.trim() === "" ||
                 date.trim() === "") {
                    throw new Error("Por favor, preencha todos os campos")
        }
    },
    submit(event) {
        // Remove o comportamento padrao de enviar para a url os dados
        event.preventDefault()

        // O try{} cath{} abaixo serve para tratar erros
        try {
            
        // verificar se todas as informacoes foram preenchidas
        Form.validateFields()
        // formatar os dados para salvar
        // Form.formatData()
        // salvar
        // apagar os dados do formulario
        // modal feche
        // atualizar a aplicacao
        } catch (error){
            alert(error.message)
        }


    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })

        DOM.updateBalance();

    },
    reload() {
        DOM.clearTransactions()
        // Antes de recarregar os arquivos(para receber as atualizacoes)
        // a funcao DOM.clearTransactions() serve para limpar o #data-table
        App.init()
    },
}

App.init()

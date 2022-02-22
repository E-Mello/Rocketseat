/*
    Buscando e contando dados em Arrays
    
    Baseado no Array de Livros por Categoría abaixo, faça os
    seguintes desafios:

        - Contar o número de categorías e o número de livros em cada
        categoria.
        - Contar o número de autores.
        - Mostrar livros do autor Augusto Cury.
        - Trannsformar a função acima em uma função que irá receber
        o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [{
        category: "Riqueza",
        books: [{
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [{
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
const totalCategories = booksByCategory.length
console.log(`O numero de categorias é: ${booksByCategory.length}`);
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category);
    console.log(category.books.length);
}
// console.log(`O numero de categorias é: ${booksByCategory.length}`);
// console.log(`O numero de livres de Riqueza é : ${booksByCategory[01].books.length}`);
function countAuthors() {
    let authors = [];


    for (let category of booksByCategory) {
        for (let book of category.books) {
            // console.log('Total de autor da categoria: ', book.author);
            // console.log(book.author.length);
            // authors = book.author
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length);
}

countAuthors();

// function countBookAugusto() {
//     let augustoBook = [];


//     for (let category of booksByCategory) {
//         for (let book of category.books) {
//             if (augustoBook.indexOf(book.author) && book.author == "Augusto Cury") {
//                 augustoBook.push(book.title)
//             }
//         }
//     }
//     console.log("Total de livros de Augustu Cury: ", augustoBook.length);
// }

// countBookAugusto();
// function booksOfAugustoCury() {
//     let books = [];


//     for (let category of booksByCategory) {
//         for (let book of category.books) {
//             if (book.author === 'Augusto Cury') {
//                 books.push(book.title)
//             }
//         }
//     }
//     console.log("Lvros de Augustu Cury: ", books);
// }

// booksOfAugustoCury();
function booksOfAuthor(author) {
    let books = [];


    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Os livros do author ${author} são: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury');
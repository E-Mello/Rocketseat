// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
// Depois disso, transforme o array em um texto e onde eram espaços, coloque _



/* Os comandos abaixos é para tratar os espaçamentos de uma frase */
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
    // console.log(myArray);
    // let phraseWithUnderscore = myArray.join("")
let phraseWithUnderscore = myArray.join("_")
    // console.log(phraseWithUnderscore);
console.log(phraseWithUnderscore.toLowerCase());
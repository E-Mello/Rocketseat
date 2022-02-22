/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em cielsius ou
    fahrenheit e faça a transformação de uma unida para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/


// function transformaUM() {
//     let C = 50;
//     let F = 60;
//     let temp = F;
//     let tempF = 0;
//     let tempC = 0;
//     switch (temp) {
//         case C:
//             tempF = C * 9 / 5 + 32
//             console.log(`A temperatura em graus Fahrenheit é ${tempF.toFixed(2)}F`);
//             break;
//         case F:
//             tempC = (F - 32) * 5 / 9
//             console.log(`A temperatura em graus Celsius é ${tempC.toFixed(2)}C`);
//             break;
//         default:
//             console.log('Valor inválido');
//             break;
//     }
// }

// transformaUM();

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não idedntificado')
    }

    // fluxo ideal , F -> C ( F para C)
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    //arrow function
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    // console.log(celsiusExists);

    //Fluxo alternativo C -> F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        //arrow function
        formula = celsius => celsius * 9 / 5 + 32
        degreeSign = 'F'

    }


    return formula(updateDegree) + degreeSign

}

try {
    //expressão regular
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))

} catch (error) {
    console.log(error.message);
    // console.log(error);

}
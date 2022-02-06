// if....else


let temperature = 38.0
let highTemperature = temperature >= 37.55
let mediumTemperature = temperature < 37.5 && temperature

// if (temperature >= 37.0) {
//     console.log('Ela esta com febre');
// } else {
//     console.log('Ela nao esta com febre');
// }

if (highTemperature) {
    console.log('Febre alta');
} else if (mediumTemperature) {
    console.log('Febre Moderada');
} else {
    console.log('Saudavel');
}
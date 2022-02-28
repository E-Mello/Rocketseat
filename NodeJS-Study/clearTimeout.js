// setTimeout -> Cancel a timeOut
const timeOut = 3000;
const finished = () => console.log('done!')

// console.log(setTimeout(finished, timeOut));

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
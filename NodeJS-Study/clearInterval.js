// clearInterval will cancel aa registered SetInterval
const timeOut = 1000
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut)


setTimeout(() => clearInterval(interval), 4000)
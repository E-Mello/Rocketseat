// const events = require('events')
// console.log(events);

const { EventEmitter } = require('events')
    // console.log(EventEmitter);
const ev = new EventEmitter()
    // console.log(ev);

// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi voce', message);
// })
ev.once('saySomething', (message) => {
    console.log('Eu ouvi voce', message);
})
ev.emit('saySomething', "Mello")
ev.emit('saySomething', "Jubileu")
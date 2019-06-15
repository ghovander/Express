//event = A signal that something has happened
//class is a container for methods and properties

const events = require('events');
const emitter = new events.EventEmitter();

//Register a listener
emitter.on('messageLogged', () => {
    console.log('Listener called');
})

//Making a noise, produce - signalling
//Raise an event
emitter.emit('messageLogged');
//event = A signal that something has happened
//class is a container for methods and properties

const events = require('events');
const emitter = new events.EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => { //e, eventArg
    console.log(`Listener called ${arg.id} ${arg.url}`);
})

//Making a noise, produce - signalling
//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

//Raise: logging(data: message)
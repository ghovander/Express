const events = require('events');

const Logger = require('./extendingEventEmitter_11');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');
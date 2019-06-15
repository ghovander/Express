const events = require('events');

var url = 'http://mylogger.io/log';

class Logger extends events.EventEmitter {
    log(message){
        //Send an http request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;
const operatingSystem = require('os');

var totalMemory = operatingSystem.totalmem();
var freeMemory = operatingSystem.freemem();

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
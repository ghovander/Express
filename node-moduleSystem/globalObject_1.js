//Javascript global objects
//console.log(); //console is a global object

//setTimeout(); //call function after a delay
//clearTimeout(); //stop timeout

//setInterval(); //call function after interval delay
//clearInterval(); //stop timeout

//Browser global objects
//window.console.log();

//Node global objects
//All global objects can be accessed through global
var message =''; //scope to file and not global object
global.console.log(global.message); //returns undefined
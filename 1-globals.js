/**
 * Globals  - No Window
 * __dirname - path to current directory
 * __filename - filename
 * require - function to use modules (CommonJS)
 * module - info about current module (file)
 * process - info about env where the program is being executed
 * 
 */

console.log(__filename); // current file
console.log(__dirname); // current directory 

//set Interval
setInterval(()=>{
    console.log("Running it is...");
},1000)

//set Timeout
setTimeout(()=>{
    console.log("Time is over...");
},2000)
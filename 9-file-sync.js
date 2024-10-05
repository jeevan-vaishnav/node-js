// File System - Built-in Module
const {readFileSync, writeFileSync} = require('fs');

const first  = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');
console.log(first);
console.log(second)

//wrtie to file
writeFileSync('./content/subfolder/result-sync.txt',
`Here is the result new : ${first}, ${second} `, {flag:'a'})
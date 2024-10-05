// Path - Built-in Module
const path = require('path');

// console.log(path.sep);

//path join method

const filePath = path.join('/content', 'subfolder', 'test.text');
console.log(filePath);
// how to access last portion of the path 
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.text');
console.log(absolute);
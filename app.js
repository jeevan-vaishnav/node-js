const { readFile, writeFile } = require('fs');

//readFile
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const firstResult = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
        console.log(err);

            return
        }
        console.log('First:' + result)
        const secondResult = result
        const both = `${firstResult} ${secondResult}`
        console.log("Reading File: " + both)
        //write file
        writeFile('./content/subfolder/result-async.txt', both, (err, result) => {
            return result
        })
    })
})





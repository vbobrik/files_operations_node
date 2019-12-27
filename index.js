const fs = require('fs');
const testFile = 'testFileCreated.txt';
const newFileName = 'File_after_changes';

function fileHandlerForCreating(fileName) {
    return new Promise((resolve, reject) => {
        fs.open(fileName, 'w', (err) => {
            console.log('File has created');
            if (err) { return reject; }
            else return resolve();
        });
    })
}

function fileHandlerForReading(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err) => {
            console.log('------[Data about File]------------');
            if (err) { return reject; }
            else return resolve();
        });
    })
}

function fileHandlerForWritinig(fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, 'The first line in the file', (err) => {
            console.log('We has writing selected file');
            if (err) { return reject; }
            else return resolve();
        })
    })
}

function fileHandlerForAddingITheFinalOfTheFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, '\n one more line in the file', (err) => {
            console.log('We has appened a new line to the selected file');
            if (err) { return reject; }
            else return resolve();
        })
    });
}

function fileHandlerRename(filename, newFileName) {
    return new Promise((resolve, reject) => {
        fs.rename(filename, newFileName, (err) => {
            console.log('Filename has edited');
            if (err) { return reject; }
            else return resolve();
        })
    });
}

function deleteFile(filename) {
    return new Promise((resolve, reject) => {
        fs.unlink(filename, (err) => {
            console.log('File has deleted');
            if (err) { return reject; }
            else return resolve();
        })
    });
}

(async function () {
    try {
        await fileHandlerForCreating(testFile);
        await fileHandlerForReading(testFile);
        await fileHandlerForWritinig(testFile);
        await fileHandlerForReading(testFile);
        await fileHandlerForAddingITheFinalOfTheFile(testFile);
        await fileHandlerForReading(testFile);
        await fileHandlerRename(testFile, newFileName);
        await fileHandlerForReading(newFileName);
        // await deleteFile(newFileName);
    }
    catch (err) {
        console.error(err);
        return err;
    }
})();

// -------------функция на промисах-------------

// fileHandlerForCreating(testFile)
// .then (result => {
//     console.log();
//     fileHandlerForReading(testFile);
//     return result;
// })
// .then (result => {
//     console.log();
//     fileHandlerForWritinig(testFile);
//     return result;
// })
// .catch (err => {
//     console.log(err);
//     return err;
// })
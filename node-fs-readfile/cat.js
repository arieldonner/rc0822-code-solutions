const fs = require('fs');

let currentFile = 2;
const totalFiles = process.argv.length;

fs.readFile(process.argv[currentFile], 'utf8', handleLoop);

function handleLoop(err, data) {
  if (err) throw err;
  console.log(data);
  currentFile++;
  if (currentFile < totalFiles) {
    fs.readFile(process.argv[currentFile], 'utf8', handleLoop);
  }
}

const fs = require('fs');

const fileName = process.argv[2];
let copyOf = '';
const copyTo = process.argv[3];
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  copyOf = data;
  fs.writeFile(copyTo, copyOf, err => {
    if (err) throw err;
  });
});

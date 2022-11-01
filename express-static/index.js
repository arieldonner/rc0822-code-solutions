const express = require('express');
const app = express();

const path = require('node:path');

const join = path.join(__dirname, 'public');
console.log(join);

app.use(express.static('public'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

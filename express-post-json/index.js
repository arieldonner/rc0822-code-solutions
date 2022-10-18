const express = require('express');
const app = express();

let nextId = 1;

const grades = [];

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades.push(req.body);
  grades[grades.length - 1].id = nextId;
  nextId++;
  res.sendStatus(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

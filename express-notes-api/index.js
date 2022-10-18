const data = require('./data.json');
const fs = require('fs');

const express = require('express');
const app = express();

const errorPos = { error: 'id must be a positive integer' };
const errorCont = { error: 'content is a required field' };
const errorFail = { error: 'An unexpected error occurred.' };

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in data.notes) {
    notesArr.push(data.notes[id]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const hasKey = id in data.notes;
  const errorNone = { error: 'cannot find note with id ' + id };
  if (id < 1 || Number.isInteger(id) === false) {
    res.status(400).json(errorPos);
  } else if (hasKey) {
    res.json(data.notes[id]);
  } else {
    res.status(404).json(errorNone);
  }
  res.sendStatus(204);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const hasCont = 'content' in newNote;
  if (hasCont === false) {
    res.status(400).json(errorCont);
  } else if (hasCont === true) {
    const newId = data.nextId;
    newNote.id = newId;
    data.notes[newId] = newNote;
    data.nextId++;
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', json, error => {
      if (error) {
        console.error(error);
        res.status(500).json(errorFail);
      }
      res.status(201).json(newNote);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const hasKey = id in data.notes;
  if (id < 1 || Number.isInteger(id) === false) {
    res.status(400).json(errorPos);
  } else if (hasKey === false) {
    const errorNone = { error: 'cannot find note with id ' + id };
    res.status(404).json(errorNone);
  } else if (hasKey === true) {
    delete data.notes[id];
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', json, error => {
      if (error) {
        console.error(error);
        res.status(500).json(errorFail);
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const hasKey = id in data.notes;
  const newNote = req.body;
  const hasCont = 'content' in newNote;
  const errorNone = { error: 'cannot find note with id ' + id };
  if (id < 1 || Number.isInteger(id) === false) {
    res.status(400).json(errorPos);
  } else if (hasCont === false) {
    res.status(400).json(errorCont);
  } else if (hasKey === false) {
    res.status(404).json(errorNone);
  } else if (hasKey === true && hasCont === true) {
    newNote.id = id;
    data.notes[id] = newNote;
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', json, error => {
      if (error) {
        console.error(error);
        res.status(500).json(errorFail);
      }
      res.json(newNote);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

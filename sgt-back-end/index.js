const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades";`;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const hasName = 'name' in newGrade;
  const hasCourse = 'course' in newGrade;
  const hasScore = 'score' in newGrade;
  if (hasName === false || hasCourse === false || hasScore === false) {
    res.status(400).json({ error: 'Invalid grade. Name, course, and score are all required fields' });
    return;
  } else if (!Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({ error: 'Invalid score. Must be an integer from 0 to 100.' });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;
  const params = [newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const newGrade = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  } else if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined) {
    res.status(400).json({ error: 'Invalid grade. Name, course, and score are all required fields' });
    return;
  } else if (!Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({ error: 'Invalid score. Must be an integer from 0 to 100.' });
    return;
  }
  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
      `;
  const params = [newGrade.name, newGrade.course, newGrade.score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  const sql = `
      delete
        from "grades"
      where "gradeId" = $1
      returning *
      `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

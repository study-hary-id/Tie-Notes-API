const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

// Express configuration section
const app = express();
const port = 3001;

// Database configuration section
const url = 'mongodb://localhost:27017';
const dbName = 'DinoTesDB';

// body-parser works as middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB with MongoClient
MongoClient.connect(url, (err, client) => {
  const db = client.db(dbName);
  const notesCollection = db.collection('notes');

  app.locals.notesCollection = notesCollection;
});

// Route handler for RESTful API
app.post('/api/notes', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.insertOne(req.body).then((result) => {
    console.log(result);
  });

  res.status(200).json('Data successfully saved');
});

app.get('/api/notes', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection
    .find()
    .toArray()
    .then((result) => {
      res.status(200).json(result);
    });
});

app.get('/api/notes/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.findOne({ _id: ObjectId(req.params.id) }).then((result) => {
    res.status(200).json(result);
  });
});

app.put('/api/notes/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: { title: req.body.title, note: req.body.note } })
    .then((result) => console.log(result));

  res.status(200).json('Data successfully updated');
});

app.delete('/api/notes/:id', (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
    console.log(result);
  });

  res.status(200).json('Data successfully deleted');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

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

// Route handler for RESTful API
app.post('/api/notes', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const notesCollection = db.collection('notes');

    notesCollection.insertOne(req.body).then((result) => {
      console.log(result);
    });

    client.close();
  });

  res.status(200).json('Data successfully saved');
});

app.get('/api/notes', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const notesCollection = db.collection('notes');

    notesCollection
      .find()
      .toArray()
      .then((result) => {
        res.status(200).json(result);
      });

    client.close();
  });
});

app.get('/api/notes/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const notesCollection = db.collection('notes');

    notesCollection.findOne({ _id: ObjectId(req.params.id) }).then((result) => {
      res.status(200).json(result);
    });

    client.close();
  });
});

app.put('/api/notes/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const notesCollection = db.collection('notes');

    notesCollection
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: { title: req.body.title, note: req.body.note } })
      .then((result) => console.log(result));

    client.close();
  });

  res.status(200).json('Data successfully updated');
});

app.delete('/api/notes/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const notesCollection = db.collection('notes');

    notesCollection.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
      console.log(result);
    });

    client.close();
  });

  res.status(200).json('Data successfully deleted');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

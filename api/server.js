/*
  The main file from the server which is responsible for
  loading middleware, import modules and packages,
  managing the connection to the database
  and running the http server.
*/

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const routes = require('./routes');

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

// Route handler for express
app.use('/', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening at http://localhost:${port}`);
});

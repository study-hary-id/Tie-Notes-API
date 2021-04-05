const express = require('express');
const { MongoClient } = require('mongodb');

// Express configuration section
const app = express();
const port = 3001;

// Database configuration section
const url = 'mongodb://localhost:27017';
const dbName = 'dinotesDB';

MongoClient.connect(url, (err, client) => {
  console.log('Connected sucessfully to server');

  // eslint-disable-next-line no-unused-vars
  const db = client.dbName(dbName);

  client.close();
});

// Route handler for RESTful API
app.post('/api/notes', (req, res) => {
  res.send('Receive POST request');
});

app.get('/api/notes', (req, res) => {
  res.send('Receive GET request');
});

app.get('/api/notes/:id', (req, res) => {
  res.send('Receive GET request with parameter');
});

app.put('/api/notes/:id', (req, res) => {
  res.send('Receive PUT request');
});

app.delete('/api/notes/:id', (req, res) => {
  res.send('Receive DELETE request');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

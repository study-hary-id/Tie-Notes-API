/*
  This file is used to configure and handle all routes 
  in express RESTful API
*/

const express = require('express');
const { addNote, getNotes, getNote, updateNote, deleteNote } = require('./handler');

// Initialization route in express
const router = express.Router();

router.post('/api/notes', addNote);

router.get('/api/notes', getNotes);

router.get('/api/notes/:id', getNote);

router.put('/api/notes/:id', updateNote);

router.delete('/api/notes/:id', deleteNote);

module.exports = router;

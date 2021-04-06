/* eslint-disable no-console */
/*
  This file is used to configure all handler
  which is used in 'routes.js'
*/

const { ObjectId } = require('mongodb');

exports.addNote = (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.insertOne(req.body).then((result) => {
    console.log(result);
  });

  res.status(200).json('Data successfully saved');
};

exports.getNotes = (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection
    .find()
    .toArray()
    .then((result) => {
      res.status(200).json(result);
    });
};

exports.getNote = (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.findOne({ _id: ObjectId(req.params.id) }).then((result) => {
    res.status(200).json(result);
  });
};

exports.updateNote = (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: { title: req.body.title, note: req.body.note } })
    .then((result) => console.log(result));

  res.status(200).json('Data successfully updated');
};

exports.deleteNote = (req, res) => {
  const { notesCollection } = req.app.locals;

  notesCollection.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
    console.log(result);
  });

  res.status(200).json('Data successfully deleted');
};

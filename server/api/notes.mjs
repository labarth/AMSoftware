import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
const API_KEY = '/notes';

const notesSchema = new mongoose.Schema({
  id: String,
  date: Number,
  price: Number,
  description: String,
  isNeedBuy: Boolean,
});

const Notes = mongoose.model('notes', notesSchema);

router.get(API_KEY, function (req, res) {
  Notes.find((err, notes) => {
    res.send(notes);
  });
});

router.patch(API_KEY, function (req, res) {
  const note = new Notes(req.body);

  note.save((err) => {
    if (err) throw err;
    res.sendStatus(200);
  })

});

router.delete(API_KEY, (req, res) => {
  Notes.deleteOne({ _id: req.query.id }, (err, arg) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

export default router;

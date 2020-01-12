import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { notesData, updateDataBaseNotes } from './utils.mjs';

const router = express.Router();
const API_KEY = '/notes';

const notesSchema = new mongoose.Schema({
  id: String,
  date: Number,
  price: Number,
  isNeedByu: Boolean,
  description: String,
});

const Notes = mongoose.model('notes', notesSchema);

let notes = JSON.parse(notesData);

router.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

router.get(`${API_KEY}db`, function (req, res) {
  Notes.find((err, notes) => {
    res.send(notes);
  });
});

router.patch(API_KEY, function (req, res) {
  const note = req.body;
  notes.push(note);
  updateDataBaseNotes(notes);
  res.sendStatus(200);
});

router.delete(API_KEY, (req, res) => {
  const noteId = req.query.id;
  notes = notes.filter((item) => item.id !== noteId);
  updateDataBaseNotes(notes);
  res.sendStatus(200);
});

export default router;

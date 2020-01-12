import express from 'express';
import path from 'path';
import { notesData, updateDataBaseNotes } from './utils.js';

const router = express.Router();
const API_KEY = '/notes';

let notes = JSON.parse(notesData);

router.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

router.get(API_KEY, function (req, res) {
  res.send(JSON.stringify(notes));
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

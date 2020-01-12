import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

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

router.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

router.get(API_KEY, function (req, res) {
  Notes.find((err, notes) => {
    res.send(notes);
  });
});

router.patch(API_KEY, function (req, res) {
  const note = new Notes({...JSON.stringify(req.body)});

  note.save((err) => {
    if (err) throw err;
    res.sendStatus(200);
  })

});

router.delete(API_KEY, (req, res) => {
  Notes.remove({ _id: req.body.id }, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

export default router;

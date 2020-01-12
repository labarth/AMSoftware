import express from 'express';
import mongoose from 'mongoose';
import process from 'process';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api.mjs';


const app = express();
//mongodb://heroku_zk9xt1nk:o5qfgpq3j2kan1pjgbh2geenrk@ds361968.mlab.com:61968/heroku_zk9xt1nk
//mongodb://localhost:27017/my_database
const dbUrl =  process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/my_database';

mongoose.connect(dbUrl, { useNewUrlParser: true }, (error) => {
   if (error) throw error;
  console.log('successfully connection');
});

const notesSchema = new mongoose.Schema({
  id: String,
  date: Number,
  price: Number,
  isNeedByu: Boolean,
  description: String,
});

const Notes = mongoose.model('notes', notesSchema);



app.get('/api/notesdb', function(req,res) {
  Notes.find((err, notes) => {
    res.send(notes);
  });
});

app
  .use(cors())
  .use(bodyParser.json())
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);


app.listen(process.env.PORT || 8080);

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api.js';


const app = express();
const dbUrl =  process.env.MONGODB_URI ? `${process.env.MONGODB_URI}/heroku_zk9xt1nk` : 'mongodb://localhost:27017/my_database';
mongoose.connect(dbUrl, { useNewUrlParser: true }, (error) => {
   if (error) throw error;
  console.log('successfully connection');
});

const db = mongoose.connection;
console.log(db);
const notesSchema = new mongoose.Schema({
  id: String,
  date: Number,
  price: Number,
  isNeedByu: Boolean,
  description: String,
});

const Notes = mongoose.model('notes', notesSchema);

Notes.find((err, zalupa) => {
  console.log(zalupa, '@@@@@@@@@@@@@@@');

  app.get('/zalupa/konya', function(req,res) {
    res.send(zalupa);
  });
});



app
  .use(cors())
  .use(bodyParser.json())
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);


app.listen(process.env.PORT || 8080);

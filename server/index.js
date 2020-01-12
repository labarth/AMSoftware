import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api.js';


const app = express();
const dbUrl =  `${process.env.MONGODB_URI}/heroku_zk9xt1nk` || 'mongodb://localhost:27017/usersdb';
mongoose.connect(dbUrl, { useNewUrlParser: true }, (error) => {
   if (error) throw error;

  console.log('successfully connection');
});

app
  .use(cors())
  .use(bodyParser.json())
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);


app.listen(process.env.PORT || 8080);

import mongoose from 'mongoose';
import process from 'process';


//mongodb://heroku_zk9xt1nk:o5qfgpq3j2kan1pjgbh2geenrk@ds361968.mlab.com:61968/heroku_zk9xt1nk
//mongodb://localhost:27017/my_database
const dbUrl =  process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/my_database';

mongoose.connect(dbUrl, { useNewUrlParser: true }, (error) => {
  if (error) throw error;
  console.log('successfully connection');
});

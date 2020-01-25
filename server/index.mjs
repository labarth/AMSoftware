import express from 'express';
import process from 'process';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import './connect.mjs';
import notesApi from './api/notes.mjs';
import usersApi from './api/users.mjs';

const API_KEY = '/api';
const app = express();

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static('./dist/AMSoftware'))
  .use(API_KEY, notesApi)
  .use(API_KEY, usersApi);

app.get('/*' , (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/AMSoftware/index.html'));
})

app.listen(process.env.PORT || 8080);

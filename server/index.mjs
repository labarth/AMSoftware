import express from 'express';
import process from 'process';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import './connect.mjs';
import api from './api.mjs';

const app = express();

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);

app.get('/*' , (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/AMSoftware/index.html'));
})

app.listen(process.env.PORT || 8080);

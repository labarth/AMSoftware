import express from 'express';
import process from 'process';
import bodyParser from 'body-parser';
import cors from 'cors';
import './connect.mjs';
import api from './api.mjs';

const app = express();

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);


app.listen(process.env.PORT || 8080);

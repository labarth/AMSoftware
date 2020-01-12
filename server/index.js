import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api.js';

const app = express();


// Serve only the static files form the dist directory
app
  .use(cors())
  .use(bodyParser.json())
  .use(express.static('./dist/AMSoftware'))
  .use('/api', api);



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

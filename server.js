//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');


const app = express();
const API_KEY = '/api';

const notes = fs.readFileSync('./src/database/notes.txt', 'utf-8');

// Serve only the static files form the dist directory
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./dist/AMSoftware'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

app.get(`${API_KEY}/notes`, function (req, res) {
  res.send(notes);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');


const app = express();
const API_KEY = '/api';

// Serve only the static files form the dist directory
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./dist/AMSoftware'));

const updateDataBaseNotes = (notes) => {
  fs.writeFileSync('./server/database/notes.txt', JSON.stringify(notes));
};

const notesData = fs.readFileSync('./server/database/notes.txt', 'utf-8');
let notes = JSON.parse(notesData);

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

app.get(`${API_KEY}/notes`, function (req, res) {
  res.send(JSON.stringify(notes));
});

app.patch(`${API_KEY}/notes`, function (req, res) {
  const note = req.body;
  const newNotes = notes.push(note);
  updateDataBaseNotes(notes);
  res.sendStatus(200);
});


app.delete(`${API_KEY}/notes`, (req, res) => {
  const noteId = req.query.id;
  notes = notes.filter((item) => item.id !== noteId);
  updateDataBaseNotes(notes);
  res.sendStatus(200);
});

class Api {
  constructor() {}


}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

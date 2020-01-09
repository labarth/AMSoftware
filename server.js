//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const notes = [
  {
    date: new Date(),
    id: 'fake-id-v4',
    description: 'lorem',
    price: 250,
    isNeedBuy: false,
  },
  {
    date: new Date(),
    id: 'fake-id-v4',
    description: 'lorem dolor amet',
    price: 100,
    isNeedBuy: true,
  },
  {
    date: new Date(),
    id: 'fake-id-v4',
    description: 'lorem',
    price: 2000,
    isNeedBuy: false,
  },
  {
    date: new Date(),
    id: 'fake-id-v4',
    description: 'lorem ispum',
    price: 330,
    isNeedBuy: true,
  },
]

// Serve only the static files form the dist directory
app.use(bodyParser.json());
app.use(express.static('./dist/AMSoftware'));

app.get('/', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/AMSoftware/index.html'));
});

app.get('/notes', function (req, res) {
  res.send(JSON.stringify(notes));
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

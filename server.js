// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();



// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');
// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/', (req, res) => {
  res.render('../views/index');
});

app.get('/api/whoami', (req, res) => {
  const header = req.headers;

  // res.json({
  //   ipaddress: header['x-forwarded-for'],
  //   language: header['accept-language'],
  //   software: header['user-agent'],
  // });


  res.render('../views/who', { header });
});

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

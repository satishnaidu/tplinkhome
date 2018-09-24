var express = require('express');
var app = express();
var router = express.Router();

// reply to request with "Hello World!"
router.get('/', function (req, res) {
  res.send("Hello World, I'm a tplink container running on resinOS!");
});

// reply to request with "Hello World!"
router.get('/api/', function (req, res) {
  res.send("Hello World, I'm a container running on resinOS!");
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log("Hey… I’m a node.js server running in a container and listening on port: ", port);
});
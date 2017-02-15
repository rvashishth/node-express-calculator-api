'use strict';
// grab the packages we need
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// routes will go here
app.get('/api/add', function(req, res) {
  let a = parseInt(req.param('a'),10);
  let b = parseInt(req.param('b'),10);
  res.status(200).json(a+b);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
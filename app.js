var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(express.static('node_modules'));


var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express app listening at http://%s:%s', host, port);
});


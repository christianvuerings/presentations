var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);

/**
 * Set public folder
 */
app.use(express.static(__dirname));

/**
 * Start the server
 */
var port = process.env.PORT || 3000;
server.listen(port);

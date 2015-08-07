var staticModule = require('./httpserver/app.js');
var restServer = require('./server/app.js');

var express = require('express');
var serveStatic = require('serve-static');
var app = express();

staticModule.start();
restServer.start();

app.use(serveStatic(__dirname + "/client"));

var server = app.listen(3002, function () {
    var host = 'localhost';
    var port = server.address().port;

    console.log('Client server listening at http://%s:%s', host, port);
});


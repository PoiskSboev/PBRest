module.exports.start = function () {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));


    var server = app.listen(3001, function () {
        var host = 'localhost';
        var port = server.address().port;

        console.log('Server for static resource listening at http://%s:%s', host, port);
    });
};


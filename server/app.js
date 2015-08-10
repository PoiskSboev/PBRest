module.exports.start = function () {
    var express = require('express');
    var fs = require('fs');
    var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/api/flight/:flightNo/:date/allocation/', function (req, res) {
    var raw = fs.readFileSync(__dirname + "/allocation.json", {encoding: 'UTF8'});
    res.send(raw);
});


    var server = app.listen(3000, function () {
        var host = 'localhost';
        var port = server.address().port;

        console.log('Server listening at http://%s:%s', host, port);
    });
};


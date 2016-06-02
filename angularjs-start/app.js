var express = require('express');
var app = express();
var path = require('path');

//Include static files
// app.use(express.static('/css'));
// app.use(express.static('/js'));
// app.use(express.static('/bower_components'));
// app.use(express.static('/data'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/external.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/external.html'));
});

app.get('/map.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/map.html'));
});


// app.get('/js/app.js',function(req,res){
//     res.sendFile(path.join(__dirname + '/js/app.js'));
//Express Middleware for serving static files
app.use('/public', express.static(path.join(__dirname, '/public')));
// viewed at http://localhost:8080






app.listen(8080);

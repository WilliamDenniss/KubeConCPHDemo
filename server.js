var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
process.on('SIGINT', function() { console.log('exiting'); process.exit(); });

// dynamic index route
app.get('/', function(req, res) { 
    res.header("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.render('index');
});

// static assets
app.use('/', express.static(__dirname + '/public'));

// listen for HTTP requests on port 80
app.listen(80, function() { console.log('listening'); });


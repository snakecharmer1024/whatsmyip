var express = require('express');
var geoip = require('geoip-lite');

var app = express();

app.get('/', function(req, res){
	var geo = geoip.lookup(req.ip) || {};
	geo.ip = req.ip;
	res.send(geo);
});

app.listen(8080);

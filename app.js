var express = require('express'),
app = express(),
request = require('request'),
api_key = require('./api-key.js'),
fs = require('fs');

var Halo = {
	url: 'https://www.haloapi.com/profile/h5/profiles/EL Raphiki/spartan',
	method: 'GET',
	headers: {
		'Ocp-Apim-Subscription-Key': api_key,
		'Content-Type': 'image/png'
	}
}

request(Halo, function(err, res, body) {
	if(err) throw err;
}).pipe(fs.createWriteStream('spartan.png'));
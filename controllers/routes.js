var express = require('express');
var router = express.Router(),
api_key = require('../api-key.js');
request = require('request'),
fs = require('fs');

router.get('/',function(req,res) {
	// request(spartanPayload).pipe(fs.createWriteStream('public/emblem.png'));
	// request(emblemPayload).pipe(fs.createWriteStream('public/spartan.png'));
	res.render('pages/index')
});

var emblemPayload = {
	url: 'https://www.haloapi.com/profile/h5/profiles/EL Raphiki/emblem',
	method: 'GET',
	headers: {
		'Ocp-Apim-Subscription-Key': api_key,
		'Content-Type': 'image/png'
	}
}

var spartanPayload = {
	url: 'https://www.haloapi.com/profile/h5/profiles/EL Raphiki/spartan',
	method: 'GET',
	headers: {
		'Ocp-Apim-Subscription-Key': api_key,
		'Content-Type': 'image/png'
	}
}

module.exports = router;

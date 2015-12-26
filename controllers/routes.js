var express = require('express');
var router = express.Router(),
api_key = require('../api-key.js');
request = require('request'),
fs = require('fs');

router.get('/',function(req,res) {
	res.render('pages/index');
});

router.post('/',function(req,res) {
	var tag = req.body.GamerTag;
	var emblemPayload = {
		url: 'https://www.haloapi.com/profile/h5/profiles/'+tag+'/emblem',
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': api_key,
			'Content-Type': 'image/png'
		}
	}
	var spartanPayload = {
		url: 'https://www.haloapi.com/profile/h5/profiles/'+tag+'/spartan',
		method: 'GET',
		headers: {
			'Ocp-Apim-Subscription-Key': api_key,
			'Content-Type': 'image/png'
		}
	}

	p1 = new Promise(function(reject, resolve) {
		request(spartanPayload, function(err, res, body) {
			if(err) reject(err);
			fs.writeFileSync('public/spartan.png', body);
		});
	});

	p2 = new Promise(function(resolve, reject){
		request(emblemPayload, function(err,res,body){
			if(err) reject(err);
			fs.writeFileSync('public/emblem.png', body);
		})
	})

	Promise.all([p1,p2]).then(function(data) {
		console.log(data)
		res.redirect('/');
	}).catch(function(data) {
		console.log(data);
	});
})


module.exports = router;

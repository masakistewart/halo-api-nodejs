var express = require('express'),
app = express(),
routes = require('./controllers/routes'),
morgan = require('morgan');

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
app.use(morgan('combined'));

app.get('/', function(req,res) {
	res.redirect('/halo');
})
app.use('/halo', routes)
app.listen(3000)

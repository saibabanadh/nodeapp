var express = require('express'),
	bodyParser = require('body-parser'),
	helmet  = require('helmet'),
	sanitizer = require('sanitizer');

var app = express(),
	port = process.env.PORT || 3000;

app.use(express.static('.'));

app.use(helmet.csp({
  defaultSrc: ["'self'"],
  scriptSrc: ['*.google-analytics.com'],
  styleSrc: ["'unsafe-inline'"],
  imgSrc: ['*.google-analytics.com'],
  connectSrc: ["'none'"],
  fontSrc: [],
  objectSrc: [],
  mediaSrc: [],
  frameSrc: []
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(req,res){
	res.redirect('index.html');
});

app.post('/auth/validEmail', function(req,res){

	var email = sanitizer.sanitize(req.body.email);
	sanitizer.escape(email);
	res.send(email);
});

app.listen(port, function(){
	console.log("App is running on "+ port);
});
var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	config = require('./config'),
	mongoose = require('mongoose'),
	app = express();

var http = require('http').Server(app),
	io = require('socket.io')(http);

mongoose.connect(config.database,function(err){
	if (err)
		console.log ("Error Occured " + err);
	else
		console.log("Connected to database");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app,express,io);
app.use('/api',api);

app.get('*',function(req,res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});

http.listen(config.port,function(err){
	if (err){
		console.log(err);
	}else{
		console.log('Listening at port 3000');
	}
});
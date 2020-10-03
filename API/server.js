const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongose = require('mongose');

	const app = express();
	let port = process.env.PORT || 4000;

	const server = app.listen(port, function(){
		console.log('Listening on port '+ port);
	});
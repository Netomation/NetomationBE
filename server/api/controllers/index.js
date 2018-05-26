var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../../../server')));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../../server/index.html'), function(err) {
	  if (err) {
		res.status(500).send(err)
	  }
	})
})

module.exports ={
    app
}
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../../../server')));

module.exports ={
    app
}
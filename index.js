var request = require('request');
var express = require('express');

var app =  express();

app.get('/',function (req,res) {
    res.send('Test Successfull');
});

app.listen(8000);
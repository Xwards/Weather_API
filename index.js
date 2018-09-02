const request = require('request');
const express = require('express');

var app =  express();

app.get('/',function (req,res) {
    // res.send('Test Successfull');
    request('http://api.openweathermap.org/data/2.5/weather?id=1273874&units=metric&appid=2e0ccb64d6edabd98dd5cf754ab2f55f', function (error,response,body) {
        if(error){
           return  console.log(error);
        }

        // res.send(body.coord);
        return console.log(body);

    })
});

app.listen(8000);
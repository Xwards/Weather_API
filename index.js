const request = require('request');
const express = require('express');
const mongoose = require('mongoose');

var app =  express();

app.get('/',function (req,res) {
    request('http://api.openweathermap.org/data/2.5/weather?id=1273874&units=metric&appid=2e0ccb64d6edabd98dd5cf754ab2f55f', function (error,response,body) {
        if(error){
           return  console.log(error);
        }

        var data = body;
        obj = JSON.parse(data);

        return console.log(obj.main.temp);

    })
});

app.listen(8000);
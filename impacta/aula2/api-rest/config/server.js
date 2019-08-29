const port = 3000;
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(allowCors);

app.get('/', function(res, res){
    res.send("Hello World")
});

app.listen(port, function() {
    console.log("iniciado servidor que e o nodemon na porta 3000")
});

module.exports = app;
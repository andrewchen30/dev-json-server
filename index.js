
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var router = require('./router');

app.use(bodyParser());
 
app.post('/members', router.members.create);
app.get('/members/:id', router.members.show);
 
app.listen(3000);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

const defaultFakeMember = {
  name: 'fake-member-name',
  phone: '0930123123',
  age: 30
};
 
app.get('/members/:id', function (req, res) {

  const fakeMember = {
    id: req.params.id,
    ...defaultFakeMember,
    ...req.query
  };

  res.send(fakeMember);
});

app.post('/members', function(req, res) {

  const id = Date.now();

  res.send({
    ...defaultFakeMember,
    ...req.body,
    id
  });
});

 
app.listen(3000);
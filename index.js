
var express = require('express');
var app = express();
 
app.get('/member/:id', function (req, res) {

  const fakeMember = {
    id: req.params.id,
    name: 'fake-member-name',
    age: 30
  };

  res.send(fakeMember);
});
 
app.listen(3000);
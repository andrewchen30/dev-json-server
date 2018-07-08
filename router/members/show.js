
const defaultFakeMember = {
  name: 'fake-member-name',
  phone: '0930123123',
  age: 30
};

module.exports = function(req, res) {

  const fakeMember = {
    id: req.params.id,
    ...defaultFakeMember,
    ...req.query
  };

  res.send(fakeMember);
}


const defaultFakeMember = {
  name: 'fake-member-name',
  phone: '0930123123',
  age: 30
};

module.exports = function(req, res) {

  const id = Date.now();

  res.status(201).send({
    ...defaultFakeMember,
    ...req.body,
    id
  });
}
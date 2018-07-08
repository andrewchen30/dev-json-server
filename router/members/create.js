
const validator = require('../comm/joi');
const joi = validator.joi;

const createSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string(),
  age: joi.number()
});

const defaultFakeMember = {
  name: 'fake-member-name',
  phone: '0930123123',
  age: 30
};

module.exports = function(req, res) {

  const joiResult = joi.validate(req.body, createSchema);

  if (joiResult.error) {
    return res.status(400).send({
      code: validator.errors.joiValidateFail,
      message: joiResult.error.message
    });
  }

  const id = Date.now();

  res.status(201).send({
    ...defaultFakeMember,
    ...joiResult.value,
    id
  });
}
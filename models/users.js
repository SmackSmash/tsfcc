const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  }
});

const User = mongoose.model('user', userSchema);

const validateUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .min(6)
});

module.exports = { User, validateUser };

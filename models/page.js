const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const pageSchema = new mongoose.Schema({
  pageName: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  blocks: {
    type: Array,
    required: true
  }
});

const Page = mongoose.model('page', pageSchema);

const validatePage = Joi.object({
  pageName: Joi.string().required(),
  time: Joi.number().required(),
  version: Joi.string().required(),
  blocks: Joi.array().required()
});

module.exports = {
  Page,
  validatePage
};

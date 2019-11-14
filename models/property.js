const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capacityMin: {
    type: Number,
    required: true
  },
  capacityMax: {
    type: Number,
    required: true
  },
  changeover: {
    type: String,
    required: true,
    default: 'Saturday'
  },
  availability: {
    type: [Number],
    required: true,
    default: new Array(17).fill(null)
  }
});

const Property = mongoose.model('property', propertySchema);

const validateProperty = Joi.object({
  name: Joi.string()
    .required()
    .min(5),
  capacityMin: Joi.number()
    .integer()
    .required()
    .min(1),
  capacityMax: Joi.number()
    .integer()
    .required()
    .min(1),
  availability: Joi.array().length(17)
});

module.exports = { Property, validateProperty };

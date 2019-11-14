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
    .min(1)
});

module.exports = { Property, validateProperty };

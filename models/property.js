const mongoose = require('mongoose');

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

module.exports = Property;

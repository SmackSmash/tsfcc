const router = require('express').Router();
const { Property, validateProperty } = require('../models/property');
const moment = require('moment');
const handleServerError = require('../utils/handleServerError');

const calculateDate = (startDate, dayOfWeek, weekNumber) => {
  const myMonth = moment(startDate).startOf('month');
  const firstDayOfWeek = myMonth.clone().weekday(dayOfWeek);
  if (firstDayOfWeek.month() != myMonth.month()) weekNumber++;
  return firstDayOfWeek.add(weekNumber - 1, 'weeks');
};

const seasonYear = moment().subtract(5, 'months');
const secondSaturdayOfDecember = calculateDate(`${seasonYear.format('Y')}-12`, 6, 2);
const secondSundayOfDecember = calculateDate(`${seasonYear.format('Y')}-12`, 6, 2).add(1, 'day');

// @route   GET /api/properties
// @desc    Fetch properties list
// @access  Public
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().select(['name', 'capacityMin', 'capacityMax']);
    res.send(properties);
  } catch (error) {
    handleServerError(res, error);
  }
});

// @route   GET /api/properties/:id
// @desc    Fetch iundividual property
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send({
        errors: ['Property not found']
      });
    }
    res.send(property);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).send({
        errors: ['Property not found']
      });
    }
    handleServerError(res, error);
  }
});

// @route   POST /api/properties
// @desc    Add property
// @access  Private
router.post('/', async (req, res) => {
  const result = validateProperty.validate(req.body, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(({ message }) => message)
    });
  }
  const { name, capacityMin, capacityMax, changeover, availability } = req.body;
  try {
    let property = await Property.findOne({ name });
    if (property) {
      return res.status(409).send({
        errors: [
          `Property with name '${name}' already exists. Perhaps you would like to update the property?`
        ]
      });
    }
    property = new Property({
      name,
      capacityMin,
      capacityMax,
      changeover,
      availability
    });
    await property.save();
    res.send(property);
  } catch (error) {
    handleServerError(res, error);
  }
});

module.exports = router;

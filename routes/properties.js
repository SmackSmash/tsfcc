const router = require('express').Router();
const { Property, validateProperty } = require('../models/property');

// @route   POST /api/properties
// @desc    Fetch properties list
// @access  Public
router.get('/', (req, res) => {
  res.send('Properties route works!');
});

// @route   POST /api/properties
// @desc    Add property
// @access  Private
router.post('/', (req, res) => {
  const result = validateProperty.validate(req.body, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(({ message }) => message)
    });
  }
  const { name, capacityMin, capacityMax } = req.body;
  try {
    res.send(req.body);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;

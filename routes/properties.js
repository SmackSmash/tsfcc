const router = require('express').Router();

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
  res.send(req.body);
});

module.exports = router;

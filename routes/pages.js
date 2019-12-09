const router = require('express').Router();
const auth = require('../middleware/auth');

// @route   POST /api/pages
// @desc    Update a page
// @access  Private
router.post('/', auth, (req, res) => {
  res.send(req.body);
});

module.exports = router;

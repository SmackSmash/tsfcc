const router = require('express').Router();

router.post('/signup', (req, res) => {
  res.send('Users route works!');
});

module.exports = router;

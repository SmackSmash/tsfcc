const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Users route works!');
});

module.exports = router;

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Properties route works!');
});

module.exports = router;

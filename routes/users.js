const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, validateUser } = require('../models/users');
const { JWT_SECRET } = require('../config/keys');

// @route   POST /api/users/signup
// @desc    Sign up admin user
// @access  Public (temporary)
router.post('/signup', async (req, res) => {
  const result = validateUser.validate(req.body, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(({ message }) => message)
    });
  }
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(409).send({
        errors: [`User already exists with username ${username}`]
      });
    }
    const hashed = await bcrypt.hash(password, 10);
    user = new User({
      username,
      password: hashed
    });
    await user.save();
    const payload = {
      user: username
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5h' });
    res.send({ token });
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
});

// @route   POST /api/users/signin
// @desc    Sign in admin user
// @access  Public
router.post('/signin', async (req, res) => {
  const result = validateUser.validate(req.body, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(({ message }) => message)
    });
  }
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send({
        errors: ['Invalid credentials']
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send({
        errors: ['Invalid  credentials']
      });
    }
    const payload = {
      user: username
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5h' });
    res.send({ token });
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

module.exports = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token) {
    return res.status(401).send({
      errors: ['No token provided, authorization denied']
    });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).send({ errors: [error.message] });
  }
};

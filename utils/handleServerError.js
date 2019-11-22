module.exports = (res, error) => {
  console.error(error.message);
  res.sendStatus(500);
};

const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');

module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('Connected to DB');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const express = require('express');
const { PORT } = require('./config/keys');

const app = express();
require('./services/dbConnect')();

app.use('/properties', require('./routes/properties'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

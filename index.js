const express = require('express');
const { PORT } = require('./config/keys');

const app = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

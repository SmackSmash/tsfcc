const express = require('express');
const { PORT } = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const path = require('path');
const { PORT } = require('./config/keys');

const app = express();
require('./services/dbConnect')();

app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/properties', require('./routes/properties'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

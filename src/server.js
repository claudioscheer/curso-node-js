const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const registrarRoutes = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/json' }));

registrarRoutes(app);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

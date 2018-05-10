const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const registerRouters = require('./routers');
const connection = require('./services/connection-service');

const init = (connection) => {
  const cookieExpires = 1000 * 60 * 60 * 24 * 2; // 2 days
  const sessionStore = new MySQLStore({ expiration: cookieExpires }, connection);

  const app = express();
  app.use(session({
    name: 'my-session-name',
    secret: 'my-session-secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: cookieExpires,
    },
  }));
  app.use(morgan('dev'));
  app.use(bodyParser.json({ type: '*/json' }));

  registerRouters(app);

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Listening on port ${port}.`));
}

connection.getConnection()
  .then(connection => init(connection))
  .catch(error => console.error(error));

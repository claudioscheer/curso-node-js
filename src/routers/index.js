const userRouter = require('./user-router');

const registerRouters = (app) => {
  app.use('/api/user', userRouter());

  app.use((req, res) => {
    res.status(404).send('Router not found.');
  });
};

module.exports = registerRouters;
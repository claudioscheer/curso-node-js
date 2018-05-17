const usuarioRoute = require('./usuario-route');

const registrarRoutes = (app) => {
  app.use('/api/usuario', usuarioRoute());

  app.use((req, res) => {
    res.status(404).send('Route not found.');
  });
};

module.exports = registrarRoutes;

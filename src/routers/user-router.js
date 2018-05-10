const express = require('express');

const usuarioService = require('../services/user-service');

const userRouter = () => {
  const router = express.Router();

  router.get('/get-users', async (req, res) => {
    const users = await usuarioService.getUsers();

    // Example how to use session.
    req.session.user_id = 'foo-bar';
    res.json(users);
  });

  router.post('/save-user', async (req, res) => {
    await usuarioService.saveUser(req.body);
    res.json({});
  });

  return router;
};

module.exports = userRouter;

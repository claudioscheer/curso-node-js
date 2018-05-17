const express = require('express');

const usuarioService = require('../services/usuario-service');

const userRoute = () => {
  const router = express.Router();

  router.get('/buscar-usuarios', async (req, res) => {
    const users = await usuarioService.buscarUsuarios();
    res.json(users);
  });

  router.post('/salvar-usuario', async (req, res) => {
    await usuarioService.salvarUsuario(req.body);
    res.json({ message: 'Usuário salvo.' });
  });

  return router;
};

module.exports = userRoute;

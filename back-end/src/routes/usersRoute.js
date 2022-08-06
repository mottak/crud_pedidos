const { Router } = require('express');
const userController = require('../controllers/usersController');
const auth = require('../middlewares/userAuth');

const usersRoutes = Router();

// criar novo usuario
usersRoutes.post('/user', auth.newUserAuth, userController.create);

// // buscar usuario pelo id
// usersRoutes.get('/user/:id', userController);

// // buscar todos usuarios
// usersRoutes.get('/user', userController);

// //  atualizar usuario
// usersRoutes.put('/user/:id', userController);

// // deletar usuario
// usersRoutes.delete('/user/:id', userController);

// login
// usersRoutes.post('/login', userController);

module.exports = usersRoutes;

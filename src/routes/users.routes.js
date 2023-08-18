const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const userRoutes = Router()

const userController = new UsersController()

userRoutes.get('/', userController.show);
userRoutes.get('/update/:id', userController.showAsOne);
userRoutes.post('/', userController.create);
userRoutes.delete('/:id', userController.delete);
userRoutes.put('/:id', userController.update);

module.exports = userRoutes

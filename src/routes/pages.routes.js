const { Router } = require('express')

const pagesRoutes = Router()

const PagesController = require('../controllers/pagesController')

const pagesController = new PagesController;

pagesRoutes.get('/home', pagesController.home)

module.exports = pagesRoutes
const { Router } = require('express')

const routes = Router()

const userRoutes = require('./users.routes')
const pagesRoutes = require('./pages.routes')

routes.use('/', userRoutes, pagesRoutes)

module.exports = routes
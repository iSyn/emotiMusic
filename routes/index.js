const { Router } = require('express')

let indexRoute = Router()

indexRoute.get('/', (req, res) => {
  res.render('index')
})

module.exports = indexRoute

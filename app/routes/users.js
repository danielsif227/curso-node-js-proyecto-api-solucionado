const router = require('express').Router()
const usersController = require('../controllers/usersController')

router.post('/', (req, res) => {
  usersController.create(req, res)
})

module.exports = router
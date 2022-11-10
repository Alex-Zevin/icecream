const express = require('express')
const router = express.Router()
const controller = require('../contollers/auth')
// localhost: .../login
router.post('/login', controller.login)

// localhost:5000/api/auth/register
router.post('/register', controller.register)


module.exports = router
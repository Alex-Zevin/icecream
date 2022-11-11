const express = require('express')
const controller = require('../contollers/products')
const upload = require('../middleware/upload')
const passport = require('passport')
const router = express.Router()


router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)


module.exports = router
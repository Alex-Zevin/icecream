const express = require('express')
const controller = require('../contollers/products')
const upload = require('../middleware/upload')
const passport = require('passport')
const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)


module.exports = router
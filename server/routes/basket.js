const express = require('express')
const controller = require('../contollers/baskets')
const upload = require('../middleware/upload')
const passport = require('passport')
const router = express.Router()

router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)

module.exports = router
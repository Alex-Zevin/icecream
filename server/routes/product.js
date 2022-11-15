const express = require('express')
const controller = require('../contollers/products')
const upload = require('../middleware/upload')
const router = express.Router()


router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', upload.single('imageSrc'), controller.create)


module.exports = router
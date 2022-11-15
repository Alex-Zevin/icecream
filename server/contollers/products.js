const Product = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const categories = await Product.find()
    res.status(200).json(categories)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const category = await Product.findById(req.params.id)
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  const product = new Product({
    name: req.body.name,
    imageSrc: req.file ? req.file.path : '',
    price: req.body.price,
    sku: req.body.sku,
    header: req.body.header,
    text: req.body.text
  })
  try {
    await product.save()
    res.status(200).json(Product)
  } catch (e) {
    errorHandler(res, e)
  }
}

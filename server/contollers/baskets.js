const Basket = require('../models/Basket')
const errorHandler = require('../utils/errorHandler')


module.exports.getById = async function (req, res) {
  try {
    const category = await Basket.findById(req.params.id)
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.remove = async function (req, res) {
  try {
    await Basket.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Позиция была удалена.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.create = async function (req, res) {
  console.log(111)
  const basket = new Basket({
    products: req.body.products,
    userId: req.body.userId
  })
  try {
    await basket.save()
    res.status(200).json(Basket)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.update = async function (req, res) {
  try {
    const basket = await Basket.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
    res.status(200).json(basket)
  } catch (e) {
    errorHandler(res, e)
  }
}
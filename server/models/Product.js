
const mongoose = require('mongoose')
const   Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: '',
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('product', productSchema)
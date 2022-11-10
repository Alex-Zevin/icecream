
const mongoose = require('mongoose')
const   Schema = mongoose.Schema

const basketSchema = new Schema({
  products: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
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
  }],
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('basket', basketSchema)




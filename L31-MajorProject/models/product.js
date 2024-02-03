const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ratings: Number,
  description: String,
  reviews: [
    {
        username: String,
        comment: String
    }
  ]
});

module.exports = mongoose.model('Products',productSchema);
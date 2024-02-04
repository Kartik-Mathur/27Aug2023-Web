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
  ],
  user_id:{
    type: Schema.ObjectId,
    required: true,
    ref: 'Users'
  }
});

module.exports = mongoose.model('Products',productSchema);
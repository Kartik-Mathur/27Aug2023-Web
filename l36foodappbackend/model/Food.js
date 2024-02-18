const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl:{
    type:String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Foods',foodSchema);